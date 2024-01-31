


var currentPokemonId = '';

    function changeImage(pokemonId) {
        var pokemon = document.getElementById(pokemonId);
        var pokemonReveal = pokemon.nextElementSibling;

        // Hide the current photo reveal
        if (currentPokemonId) {
            var currentPokemon = document.getElementById(currentPokemonId);
            var currentPokemonReveal = currentPokemon.nextElementSibling;
            currentPokemon.style.opacity = 0;
            currentPokemonReveal.style.opacity = 0;
        }

        // Show the selected photo reveal
        pokemon.style.opacity = 1;
        pokemonReveal.style.opacity = 1;
        currentPokemonId = pokemonId;

        // Reset the slider value
        document.getElementById('revealSlider').value = 0;
    }

        function revealPokemon(value) {
            var pokemonReveals = document.getElementsByClassName('pokemon-reveal');

            for (var i = 0; i < pokemonReveals.length; i++) {
                var pokemonReveal = pokemonReveals[i];
                pokemonReveal.style.opacity = 0;
            }

            if (currentPokemonId) {
                var currentPokemonReveal = document.getElementById(currentPokemonId).nextElementSibling;
                currentPokemonReveal.style.opacity = value == 1 ? 1 : 0; // Set opacity to 1 if value is 1, otherwise set it to 0
            }

            // Reveal Pokemon when slider is at maximum value
            if (value == 1) {
                changeImage(currentPokemonId);

            }
        }


        function resetPokemon() {
            var pokemonImages = document.getElementsByClassName('pokemon');
            var pokemonReveals = document.getElementsByClassName('pokemon-reveal');

            for (var i = 0; i < pokemonImages.length; i++) {
                var pokemon = pokemonImages[i];
                var pokemonReveal = pokemonReveals[i];

                pokemon.style.opacity = 0;
                pokemonReveal.style.opacity = 0;
            }

            currentPokemonId = '';
        }