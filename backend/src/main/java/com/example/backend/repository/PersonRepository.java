package com.example.backend.repository;

import com.example.backend.api.model.PersonModel;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<PersonModel, Integer> {

    @Query(value = "SELECT * FROM Persons", nativeQuery = true)
    List<PersonModel> findAllUsers();

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO Persons (name, lastname, emso, date_of_birth, email, phone_number) VALUES (:name, :lastname, :emso, :dateOfBirth, :email, :phoneNumber)", nativeQuery = true)
    void addPerson(String name, String lastname, String emso, Date dateOfBirth, String email, String phoneNumber);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM Persons WHERE id=:id", nativeQuery = true)
    void deletePersonById(int id);
}
