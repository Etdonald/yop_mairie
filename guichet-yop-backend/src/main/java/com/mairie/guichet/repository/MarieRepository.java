package com.mairie.guichet.repository;

import com.mairie.guichet.domain.CelebrationMariage;
import com.mairie.guichet.domain.Marie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarieRepository extends JpaRepository<Marie, Long> {
}
