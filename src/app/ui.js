class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card mt-3 animate__animated animate__bounceInLeft profile-card" style="width: 18rem;">
                <div class="card-header text-center position-relative">
                    <div class="profile-image">
                        <img src="${user.avatar_url}" class="rounded-circle" alt="Profile picture">
                    </div>
                </div>
                <div class="card-body text-center">
                    <h3 class="card-title mb-3">${user.name}</h3>
                    <p class="company mb-3">
                    <i class="fa-solid fa-briefcase"></i>
                    ${user.company ?? 'No organization'}</p>
                    <div class="social-stats d-flex justify-content-center mb-4">
                        <div class="followers me-4">
                            <h4>${user.followers}</h4>
                            <p class="text-muted">Followers</p>
                        </div>
                        <div class="following">
                            <h4>${user.following}</h4>
                            <p class="text-muted">Following</p>
                        </div>
                    </div>
                    <a href="${user.html_url}" class="btn btn-primary btn-lg w-100 mb-3" target="_blank" aria-label="View Profile">View Profile</a>
                    <a href="${user.blog}" class="blog-link" target="_blank">
                    <i class="fa-solid fa-link"></i>
                    Visit My Blog
                    </a>
                </div>
            </div>
        `;
        this.clearMessage();
    }

    showMessage(message, cssClass) {
        this.clearMessage();
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);
        setTimeout(() => this.clearMessage(), 3000);
    }

    clearMessage() {
        const alertFound = document.querySelector('.alert');
        if (alertFound) {
            alertFound.remove();
        }
    }

    showRepositories(repositories) {
        let template = '';
        repositories.forEach(repo => {
            template += `
                <div class="card shadow-lg hover-shadow overflow-hidden rounded-4 my-3 animate__animated animate__bounceInRight" style="max-width: 40rem">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 class="card-title h5 text-dark fw-bold">${repo.name}</h2>
                            <span class="badge bg-warning text-dark text-uppercase">${repo.language ?? 'Unidentified'}</span>
                        </div>
                        <p class="card-text text-muted mb-4">${repo.description ?? 'No description'}</p>
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <div class="d-flex align-items-center me-3">
                                <i class="fas fa-star text-warning me-1"></i>
                                <span class="text-muted">${repo.stargazers_count}</span>
                            </div>
                            <div class="d-flex align-items-center me-3">
                                <i class="fas fa-code-fork text-muted me-1"></i>
                                <span class="text-muted">${repo.forks_count}</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-clock text-muted me-1"></i>
                                <span class="text-muted">${this.formatDate(repo.updated_at)}</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <a href="${repo.html_url}" target="_blank" class="btn btn-primary d-flex align-items-center">
                                <i class="fab fa-github me-2"></i>
                                View Repository
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('repositories').innerHTML = template;
    }

    reset() {
        this.profile.innerHTML = `
          <div class="container mt5">
            <h3 class="display-2 text-center">Learn Something New Everydary</h3>
          </div>
        `;
    }

    formatDate(apiDate) {
        const currentDate = new Date();
        const parsedDate = new Date(apiDate);

        const differenceInMs = currentDate - parsedDate;
        const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

        return `Updated ${differenceInDays} day${differenceInDays !== 1 ? 's' : ''} ago`;
    }

}

module.exports = UI;