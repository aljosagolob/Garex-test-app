package com.example.backend.service;

import com.example.backend.api.model.PersonModel;
import com.example.backend.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<PersonModel> getPersonList() {
        return personRepository.findAllUsers();
    }

    public String addPerson(PersonModel newPerson) {
        personRepository.addPerson(newPerson.getName(), newPerson.getLastname(), newPerson.getEmso(), newPerson.getDateOfBirth(), newPerson.getEmail(), newPerson.getPhoneNumber());
        return "Success";
    }

    public String deletePersonById(int id) {
        personRepository.deletePersonById(id);
        return "Success";
    }
}
