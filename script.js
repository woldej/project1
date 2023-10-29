// Fetch motorbike data from db.json
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        const motorbikeList = document.querySelector('.motorbike-list');
        const commentsDiv = document.getElementById('comments');
        const detailsDiv = document.getElementById('details');

        // Display motorbike cards
        data.motorbikes.forEach(motorbike => {
            const motorbikeCard = document.createElement('div');
            motorbikeCard.className = 'motorbike';
            motorbikeCard.innerHTML = `
                <h3>${motorbike.name}</h3>
                <img src="images/${motorbike.image}" alt="${motorbike.name}">
                <p>Model: ${motorbike.model}</p>
                <button id="like">Like</button>
                <button id="dislike">Dislike</button>
                <button id="show-details">Details</button>
            `;
            motorbikeList.appendChild(motorbikeCard);

            // Like/Dislike buttons
            motorbikeCard.querySelector('#like').addEventListener('click', () => {
                // Implement like functionality here
                const likeCount = motorbikeCard.querySelector('#like-count');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
});
            });

            motorbikeCard.querySelector('#dislike').addEventListener('click', () => {
                // Implement dislike functionality here
                const dislikeCount = motorbikeCard.querySelector('#dislike-count');
                dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
            });

            // Show motorbike details
            motorbikeCard.querySelector('#show-details').addEventListener('click', () => {
                detailsDiv.innerHTML = `<p>Name: ${motorbike.name}</p>
                                        <p>Model: ${motorbike.model}</p>
                                        <p>Description: ${motorbike.description}</p>`;
            });
        });

        // Comment submission
        const commentForm = document.getElementById('comment-form');
        commentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const commentInput = document.getElementById('comment-input');
            const commentText = commentInput.value.trim();
            if (commentText !== '') {
                const comment = document.createElement('p');
                comment.textContent = commentText;
                commentsDiv.appendChild(comment);
                commentInput.value = '';
            }
        });
    
    
