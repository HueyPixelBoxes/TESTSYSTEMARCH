package com.okta.developer.animals.bird.service;

import com.okta.developer.animals.bird.entity.Bird;
import com.okta.developer.animals.bird.external.dto.BirdIdSpecie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

interface BirdRepository extends JpaRepository<Bird, Long> {
    @Query("SELECT id, specie FROM Bird b")
    List<BirdIdSpecie> getAllBirds();

    Optional<Bird> findById(Long id);

    // @Query("SELECT new com.okta.developer.animals.bird.internal.BirdFullDTO(b.id, b.specie, b.size) FROM Bird b")
    // List<Bird> findAllBird();

}
