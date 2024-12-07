(()=>{var e={941:e=>{e.exports=class{constructor(e,t){if(!e||!t)return console.warn("Please use a client_id and a client_secret");this.client_id=e,this.client_secret=t,this.repos_count=7,this.repos_sort="created: asc"}async fetchUser(e){const t=await fetch(`https://api.github.com/users/${e}?client_id=${this.client_id}&client_secret=${this.client_secret}`),s=await fetch(`https://api.github.com/users/${e}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);return{userData:await t.json(),repositories:await s.json()}}}},656:e=>{e.exports=class{constructor(){this.profile=document.getElementById("profile")}showProfile(e){this.profile.innerHTML=`\n            <div class="card mt-3 animate__animated animate__bounceInLeft profile-card" style="width: 18rem;">\n                <div class="card-header text-center position-relative">\n                    <div class="profile-image">\n                        <img src="${e.avatar_url}" class="rounded-circle" alt="Profile picture">\n                    </div>\n                </div>\n                <div class="card-body text-center">\n                    <h3 class="card-title mb-3">${e.name}</h3>\n                    <p class="company mb-3">\n                    <i class="fa-solid fa-briefcase"></i>\n                    ${e.company??"No organization"}</p>\n                    <div class="social-stats d-flex justify-content-center mb-4">\n                        <div class="followers me-4">\n                            <h4>${e.followers}</h4>\n                            <p class="text-muted">Followers</p>\n                        </div>\n                        <div class="following">\n                            <h4>${e.following}</h4>\n                            <p class="text-muted">Following</p>\n                        </div>\n                    </div>\n                    <a href="${e.html_url}" class="btn btn-primary btn-lg w-100 mb-3" target="_blank" aria-label="View Profile">View Profile</a>\n                    <a href="${e.blog}" class="blog-link" target="_blank">\n                    <i class="fa-solid fa-link"></i>\n                    Visit My Blog\n                    </a>\n                </div>\n            </div>\n        `,this.clearMessage()}showMessage(e,t){this.clearMessage();const s=document.createElement("div");s.className=t,s.appendChild(document.createTextNode(e));const n=document.querySelector(".row"),a=document.querySelector("#profile");n.insertBefore(s,a),setTimeout((()=>this.clearMessage()),3e3)}clearMessage(){const e=document.querySelector(".alert");e&&e.remove()}showRepositories(e){let t="";e.forEach((e=>{t+=`\n                <div class="card shadow-lg hover-shadow overflow-hidden rounded-4 my-3 animate__animated animate__bounceInRight" style="max-width: 40rem">\n                    <div class="card-body">\n                        <div class="d-flex justify-content-between align-items-center">\n                            <h2 class="card-title h5 text-dark fw-bold">${e.name}</h2>\n                            <span class="badge bg-warning text-dark text-uppercase">${e.language??"Unidentified"}</span>\n                        </div>\n                        <p class="card-text text-muted mb-4">${e.description??"No description"}</p>\n                        <div class="d-flex justify-content-between align-items-center mb-4">\n                            <div class="d-flex align-items-center me-3">\n                                <i class="fas fa-star text-warning me-1"></i>\n                                <span class="text-muted">${e.stargazers_count}</span>\n                            </div>\n                            <div class="d-flex align-items-center me-3">\n                                <i class="fas fa-code-fork text-muted me-1"></i>\n                                <span class="text-muted">${e.forks_count}</span>\n                            </div>\n                            <div class="d-flex align-items-center">\n                                <i class="fas fa-clock text-muted me-1"></i>\n                                <span class="text-muted">${this.formatDate(e.updated_at)}</span>\n                            </div>\n                        </div>\n                        <div class="d-flex justify-content-between align-items-center">\n                            <a href="${e.html_url}" target="_blank" class="btn btn-primary d-flex align-items-center">\n                                <i class="fab fa-github me-2"></i>\n                                View Repository\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            `})),document.getElementById("repositories").innerHTML=t}reset(){this.profile.innerHTML='\n          <div class="container mt5">\n            <h3 class="display-2 text-center">Learn Something New Everydary</h3>\n          </div>\n        '}formatDate(e){const t=new Date-new Date(e),s=Math.floor(t/864e5);return`Updated ${s} day${1!==s?"s":""} ago`}}},583:e=>{"use strict";e.exports=JSON.parse('{"client_id":"Ov23liyX8gAdD6bvHFwk","client_secret":"67e445916b165d244d453e8cf89283435320d7ca"}')}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}(()=>{"use strict";const e=s(656),t=s(941),{client_id:n,client_secret:a}=s(583),i=new t(n,a),r=new e;document.getElementById("userForm").addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("textSearch").value;""!==t?i.fetchUser(t).then((e=>{"Not Found"===e.userData.message?r.showMessage("User not found","alert alert-danger mt-2 col-md-12"):(r.showProfile(e.userData),r.showRepositories(e.repositories))})):r.reset()}))})()})();