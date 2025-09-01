
        // Create twinkling stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const numStars = 100;

            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 1 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Tab functionality
        function showTab(tabName, event) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(tab => {
                tab.classList.remove('active');
            });


            // Remove active class from all buttons
            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(button => {
                button.classList.remove('active');
            });


            // Show selected tab content
            document.getElementById(tabName).classList.add('active');


            // Add active class to clicked button
            event.target.classList.add('active');
        }

        // Competition filter functionality
        function filterCompetitions() {
            const selectedAge = document.getElementById('age-select').value;
            const competitionCards = document.querySelectorAll('.competition-card');

            competitionCards.forEach(card => {
                if (selectedAge === 'all') {
                    card.style.display = 'block';
                } else if (card.classList.contains(selectedAge)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Initialize stars when page loads
        document.addEventListener('DOMContentLoaded', function () {
            createStars();
        });
        


