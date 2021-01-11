package com.sip.ams.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sip.ams.entities.Article;
import com.sip.ams.entities.Provider;
import com.sip.ams.repositories.ArticleRepository;
import com.sip.ams.repositories.ProviderRepository;
import com.sip.ams.exception.ResourceNotFoundException;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping({ "/articles" })

public class ArticleRestController {

	private final ArticleRepository articleRepository;
	private final ProviderRepository providerRepository;

	@Autowired
	public ArticleRestController(ArticleRepository articleRepository, ProviderRepository providerRepository) {
		this.articleRepository = articleRepository;
		this.providerRepository = providerRepository;
	}
	/*
	 * @Autowired private ArticleRepository articleRepository;
	 * 
	 * @Autowired private ProviderRepository providerRepository;
	 */

	@GetMapping("/list")
	public List<Article> getAllArticles() {
		return (List<Article>) articleRepository.findAll();
	}

	/*
	 * @PostMapping("/add/{providerId}") Article createArticle(@PathVariable (value
	 * = "providerId") Long providerId,
	 * 
	 * @Valid @RequestBody Article article) { return
	 * providerRepository.findById(providerId).map(provider -> {
	 * article.setProvider(provider); return articleRepository.save(article);
	 * }).orElseThrow(() -> new ResourceNotFoundException("ProviderId " + providerId
	 * + " not found")); }
	 */

	@PostMapping("/add")
	Article createArticle(@Valid @RequestBody Article article) {

		//Optional<Provider> p = providerRepository.findById(article.getProvider().getId());

		//if (p.isPresent()) {
			return articleRepository.save(article);
		/*} else {
			throw new ResourceNotFoundException("Provider : "+ article.getProvider().getId()+" introuvable");
		}*/

	}
	@GetMapping("/{articleId}") 
	public  Optional<Article> getArticle(@PathVariable Long articleId) {
		return articleRepository.findById(articleId);
	}

	@PutMapping("{articleId}")
	public Article updateArticle(
			@PathVariable(value = "articleId") Long articleId, @Valid @RequestBody Article articleRequest) {
		

		return articleRepository.findById(articleId).map(article -> {
			article.setPrice(articleRequest.getPrice());
			article.setLabel(articleRequest.getLabel());
			article.setPicture(articleRequest.getPicture());
			article.setProvider(articleRequest.getProvider());
			return articleRepository.save(article);
		}).orElseThrow(() -> new ResourceNotFoundException("ArticleId " + articleId + "not found"));
	}

	@DeleteMapping("{articleId}")
	public ResponseEntity<?> deleteArticle(@PathVariable(value = "articleId") Long articleId) {
		return articleRepository.findById(articleId).map(article -> {
			articleRepository.delete(article);
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new ResourceNotFoundException("Article not found with id " + articleId));
	}
}
