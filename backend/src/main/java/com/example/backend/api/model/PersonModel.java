package com.example.backend.api.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "Persons")
public class PersonModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(length = 20, nullable = false)
    private String name;
    @Column(length=20, nullable = false)
    private String lastname;
    @Column(length = 13, nullable = false, unique = true)
    private String emso;
    @Column(nullable = false)
    private Date date_of_birth;
    @Column(length = 64, nullable = false)
    private String email;
    @Column(length = 16)
    private String phone_number;
    @Column(nullable = false, updatable = false)
    private LocalDateTime created_at;


    public PersonModel() {
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Date getDateOfBirth() {
        return date_of_birth;
    }

    public LocalDateTime getCreatedAt() {
        return created_at;
    }

    public String getEmail() {
        return email;
    }

    public String getEmso() {
        return emso;
    }

    public String getLastname() {
        return lastname;
    }

    public String getPhoneNumber() {
        return phone_number;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.created_at = createdAt;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.date_of_birth = dateOfBirth;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setEmso(String emso) {
        this.emso = emso;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phone_number = phoneNumber;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}

