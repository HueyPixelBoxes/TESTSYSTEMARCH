package com.okta.developer.habitat.service;

import com.okta.developer.habitat.entity.Habitat;
import com.okta.developer.habitat.external.dto.HabitatDescDto;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HabitatRepository extends JpaRepository<Habitat, String> {
    List<Habitat> findAll();

    Optional<Habitat> findById(String habitatId); 

    Optional<HabitatDescDto> findByIdIgnoreCase(String habitatId);

    Habitat save(Habitat habitat);
    
}
