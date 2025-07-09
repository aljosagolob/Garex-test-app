package com.example.backend.repository;

import com.example.backend.api.model.PersonModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<PersonModel, Integer> {

    @Query(value = "SELECT * FROM Persons", nativeQuery = true)
    List<PersonModel> findAllUsers();
}
