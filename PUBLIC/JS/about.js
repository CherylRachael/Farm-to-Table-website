document.addEventListener("DOMContentLoaded", function () {
    
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
  
        
        if (targetId.startsWith("#")) {
          e.preventDefault();
          document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  
    
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach(member => {
      member.addEventListener("click", function () {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
          <div class="modal-content">
            <span class="close-button">&times;</span>
            <img src="${this.querySelector("img").src}" alt="${this.querySelector("h3").innerText}" />
            <h3>${this.querySelector("h3").innerText}</h3>
            <p>${this.querySelector("p").innerText}</p>
          </div>
        `;
        document.body.appendChild(modal);
  
        const closeButton = modal.querySelector(".close-button");
        closeButton.addEventListener("click", function () {
          document.body.removeChild(modal);
        });
      });
    });
  
    
    const style = document.createElement("style");
    style.textContent = `
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .modal-content {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        position: relative;
      }
      .modal-content img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
      .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
  });
  