<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import './utils/api.ts';
</script>

<template>
	<Header />

	<main>
		<RouterView />
	</main>

	<Footer />
</template>

<style> /* Global CSS Reset from https://www.joshwcomeau.com/css/custom-css-reset/ */

/* 1. Use a more-intuitive box-sizing model */
*, *::before, *::after {
	box-sizing: border-box;
}

/* 2. Remove default margin */
*:not(dialog) {
	margin: 0;
}

/* 3. Enable keyword animations */
@media (prefers-reduced-motion: no-preference) {
	html {
		interpolate-size: allow-keywords;
	}
}

body {
	/* 4. Add accessible line-height */
	line-height: 1.5;
	/* 5. Improve text rendering */
	-webkit-font-smoothing: antialiased;
}

/* 6. Improve media defaults */
img, picture, video, canvas, svg {
	display: block;
	max-width: 100%;
}

/* 7. Inherit fonts for form controls */
input, button, textarea, select {
	font: inherit;
}

/* 8. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
	overflow-wrap: break-word;
}

/* 9. Improve line wrapping */
p {
	text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
	text-wrap: balance;
}

/*
	10. Create a root stacking context
*/
#root, #__next {
	isolation: isolate;
}

</style>


<style> /* Global CSS by me (AntoineLaLune) */

:root {
	--opacity: #2C2C2C;
	--opacity-hover: #3C3C3C;
	--light-gray: #e4e4e4;
	--lavender: rgb(229, 229, 250);
	--opacity: rgb(0, 0, 0, 0.5);
	--opacity-hover: rgba(255, 255, 255, 0.5);
	--tr-open: rgb(128, 0, 0, 0.5);
	--tr-open-hover: rgb(192, 0, 0, 0.5);
	--tr-closed: rgb(0, 144, 0, 0.5);;
	--tr-closed-hover: rgb(0, 192, 0, 0.5);;
}

html, body {
	/* Not to harsh white background */
	background-color: var(--lavender);
}

* {
	/* Default font */
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

	/* Borders */
	border-style: none;
	border-width: 0px;
	border-radius: 0px;
}

.body {
	margin: 1vi;
	padding: 2vi;
	background-color: var(--opacity);
	color: white;

	.login {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
}

button {
	color: white;
	padding: 8px;
	background-color: var(--opacity);
	cursor: pointer;
}
button:hover {
	color: black;
	background-color: var(--opacity-hover);
}
label {
	color: white;
}
input {
	color: white;
	padding: 8px;
	background-color: var(--opacity);
}
input:hover {
	background-color: var(--opacity-hover);
}
input:focus {
	outline-style: dashed;
	outline-color: white;
	outline-width: 2px;
}

textarea {
    display: flex;
    justify-content: start;

    width: 100% !important;
    background-color: var(--opacity);
    color: white;

    outline: 0px;
}
textarea:hover {
	background-color: var(--opacity-hover);
}
textarea:focus {
	outline-style: dashed;
	outline-color: white;
	outline-width: 2px;
}
</style>

<style>
/* #app {
/* 	display: grid;
/* 	grid-template-rows: 64px 1fr 64px;
/* 	row-gap: 20px;
/* 	min-height: 100vh;
/* 	
/* 	word-wrap: break-word; 
/*} */
</style>
