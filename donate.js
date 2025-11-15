const bootText = document.getElementById("boot-text");
const donateContent = document.getElementById("donate-content");

const lines = [
  "[BOOT] Initializing secure TCP interface...",
  "[OK] Loading MG-AQEEL TCP Friend Panel...",
  "[INFO] Establishing encrypted peer-to-peer tunnel...",
  "[AUTH] Verifying Wotax credentials...",
  "[OK] Access Granted.",
  "[READY] TCP Friend Control Panel Online.",
  "[SYS] Loading kernel modules for TCP...",
  "[DEBUG] Memory allocation verified...",
  "[INFO] Network stack initialized...",
  "[SEC] Multi-layer authentication active...",
  "[OK] Firewall bypass complete...",
  "[DEBUG] Packet inspection routines active...",
  "[SYS] Synchronizing friend UID database...",
  "[INFO] TCP add/remove operations ready...",
  "[DEBUG] Listening for incoming TCP requests...",
  "[READY] Panel ready for friend management.",
  "[INFO] Background process for UID monitoring started...",
  "[SEC] AES-256 TCP encryption active.",
  "[DEBUG] Logging all friend activity...",
  "[SYS] Loading user interface components...",
  "[OK] Command processor ready.",
  "[INFO] Initializing friend verification module...",
  "[DEBUG] UID authentication routines active...",
  "[SEC] Network traffic secure.",
  "[READY] MG-AQEEL TCP Friend Terminal fully operational.",
  "[FINISHED] FINISHED ENTERING NOW !.",
];


let i = 0;
function typeBoot() {
  if (i < lines.length) {
    bootText.textContent += lines[i] + "\n";
    i++;
    setTimeout(typeBoot, 80);
  } else {
    setTimeout(() => {
      document.getElementById("boot").style.display = "none";
      document.getElementById("nav-tabs").style.display = "flex";
      donateContent.style.display = "block";
      // Reveal cards with animation
      document.querySelectorAll('.donate-card').forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 300);
      });
    }, 1000);
  }
}
typeBoot();
