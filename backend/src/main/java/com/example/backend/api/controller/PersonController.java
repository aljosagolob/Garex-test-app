package com.example.backend.api.controller;

import com.example.backend.api.model.PersonModel;
import com.example.backend.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping()
    public List<PersonModel> getPersonList() {
        return personService.getPersonList();
    }

    @PostMapping("/addPerson")
    public ResponseEntity<Void> addPerson(@RequestBody PersonModel person) {
        String response = personService.addPerson(person);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/deletePerson/{id}")
    public ResponseEntity<Void> deletePerson(@PathVariable int id) {
        personService.deletePersonById(id);
        return ResponseEntity.noContent().build();
    }
}
