package com.example.demo.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String purchaseDate;

    @ManyToOne
    @JoinColumn(name="id_client") //JoinColumn define la columna que usará la clave foránea que asocia Client y Bill
    private Client client;

    @ManyToMany
    @JoinTable(
        name = "bill_product",
        joinColumns = @JoinColumn(name="bill_id"),
        inverseJoinColumns = @JoinColumn (name="product_id")
    )
    private List<Product> products;
    }



