package com.s1ovak.phoneshop.backend.service.impl;

import com.s1ovak.phoneshop.backend.entity.Product;
import com.s1ovak.phoneshop.backend.repository.ProductRepository;
import com.s1ovak.phoneshop.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public Product getProductById(Integer id) {
        return productRepository.findProductById(id);
    }

    @Override
    public List<Product> findProducts(String query, String sort, String order) {
        List<Product> allProducts = new ArrayList<>(productRepository.findAllByPriceIsNotNullAndQuantityGreaterThan(0));
        List<Product> validProducts = findProducts(query, allProducts);
        validProducts = sortProducts(createComparatorForSort(sort, order), validProducts);
        return validProducts;
    }

    @Override
    public List<Product> findProducts(String query, List<Product> validProducts) {
        Objects.requireNonNull(validProducts, "Collection should not be null");
        if (query != null && !query.trim().isEmpty()) {
            String[] queries = query.toLowerCase().split(" ");

            Map<Product, Integer> map = new HashMap<>();
            validProducts.forEach(product -> {
                Integer number = 0;
                for (String q : queries) {
                    if (product.getDescription().toLowerCase().contains(q)) {
                        number++;
                    }
                }

                if (number > 0) {
                    map.put(product, number);
                }
            });

            return map.entrySet().stream()
                    .sorted(Map.Entry.<Product, Integer>comparingByValue().reversed())
                    .map(Map.Entry::getKey).collect(Collectors.toList());
        } else {
            return validProducts;
        }
    }

    private List<Product> sortProducts(
            Comparator<Product> productComparator, List<Product> products) {
        Objects.requireNonNull(products, "Collection should not be null");

        if (productComparator != null) {
            products = products
                    .stream()
                    .sorted(productComparator)
                    .collect(Collectors.toList());
        }
        return products;
    }

    private Comparator<Product> createComparatorForSort(String sort, String order) {
        Comparator<Product> productComparator = null;
        if (sort != null && !sort.trim().isEmpty() && order != null && !order.trim().isEmpty()) {
            if ("description".equalsIgnoreCase(sort)) {
                productComparator = "asc".equalsIgnoreCase(order)
                        ? Comparator.comparing(Product::getDescription)
                        : Comparator.comparing(Product::getDescription).reversed();
            } else if ("price".equalsIgnoreCase(sort)) {
                productComparator = "asc".equalsIgnoreCase(order)
                        ? Comparator.comparing(Product::getPrice)
                        : Comparator.comparing(Product::getPrice).reversed();
            }
        }
        return productComparator;
    }
}
