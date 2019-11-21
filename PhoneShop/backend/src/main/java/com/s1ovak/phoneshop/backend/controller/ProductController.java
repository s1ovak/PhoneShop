package com.s1ovak.phoneshop.backend.controller;

import com.s1ovak.phoneshop.backend.entity.Product;
import com.s1ovak.phoneshop.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts(
            @RequestParam(name = "query", required = false) String query,
            @RequestParam(name = "sort", required = false) String sort,
            @RequestParam(name = "order", required = false) String order) {
        return productService.findProducts(query, sort, order);
    }

    @GetMapping(value = "/{id}")
    public Product getProductById(@PathVariable(name = "id") Integer id) {
        return productService.getProductById(id);
    }

    @PostMapping(value = "/last-viewed")
    public List<Product> getLastViewed(@RequestBody List<Integer> ids) {
        return productService.getLastViewed(ids);
    }
}
