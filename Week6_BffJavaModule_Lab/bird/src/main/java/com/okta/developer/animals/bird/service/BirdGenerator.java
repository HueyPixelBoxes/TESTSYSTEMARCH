package com.okta.developer.animals.bird.service;

import org.springframework.stereotype.Component;
import org.springframework.boot.CommandLineRunner;
import org.springframework.beans.factory.annotation.Autowired;
import com.okta.developer.animals.bird.entity.Bird;

@Component
public class BirdGenerator implements CommandLineRunner {
    
        @Autowired
        private BirdRepository birdRepository;

        @Override
        public void run(String... args) throws Exception {
            for (int i = 0; i < 5; i++) {
                Bird bird = new Bird("Bird Specie " + i, "Tropical");
                if (i == 4) {
                    bird.setHabitatCode("Desert");
                }
                birdRepository.save(bird);
            }
        }
    

}
