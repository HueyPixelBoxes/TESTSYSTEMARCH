package com.okta.developer.bird_bff.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.okta.developer.habitat.entity.Habitat;
import com.okta.developer.habitat.external.dto.HabitatDescDto;
import com.okta.developer.habitat.external.service.HabitatInfo;

@RestController
@RequestMapping("/habitat")
class HabitatController {
    
    private final HabitatInfo habitatService;

    @Autowired
    HabitatController (HabitatInfo habitatInfo) {
        this.habitatService = habitatInfo;
    }
    
    @GetMapping("/{habitatCode}")
    ResponseEntity getHabitatInfo(@PathVariable String habitatCode) {
        Optional<Habitat> habitat = habitatService.getHabitatInfo(habitatCode);

        if (habitat.isPresent()) {
            return ResponseEntity.ok(habitat.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{habitatCode}/desc")
    ResponseEntity getHabitatDescriptionFromHabitatCode(@PathVariable String habitatCode) {
        Optional<HabitatDescDto> habitatDesc = habitatService.getHabitatDescription(habitatCode);

        if (habitatDesc.isPresent()) {
            return ResponseEntity.ok(habitatDesc.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping()
    ResponseEntity testEndpoint() {
        return ResponseEntity.ok("Hello Habitat");
    }

}
