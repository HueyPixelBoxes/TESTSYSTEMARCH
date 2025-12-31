package com.okta.developer.habitat.service;

import org.springframework.stereotype.Component;

import com.okta.developer.habitat.entity.Habitat;

import org.springframework.boot.CommandLineRunner;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


@Component
public class HabitatGenerator implements CommandLineRunner {
    
        @Autowired
        private HabitatRepository habitatRepository;

        @Override
        public void run(String... args) throws Exception {
            Habitat tropical = new Habitat("Tropical", "Hot, Humid, Windy");
            Habitat desert = new Habitat("Desert", "Hot, Dry, Sandy");

            ArrayList<Habitat> habitats = new ArrayList<Habitat>(
                List.of(
                    tropical,
                    desert
                )
            );
            
            habitatRepository.saveAll(habitats);
        }
    

}
