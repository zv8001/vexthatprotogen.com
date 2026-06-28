(function () {
  var lines = [
    "[    0.000000] Booting VEX-OS kernel 6.6.1-vex on x86_64",
    "[    0.000412] Command line: BOOT_IMAGE=/boot/vexkernel root=/dev/vex1 quiet",
    "[    0.001033] <span class=\"ok\">OK</span>  Initializing memory subsystem... 16384MB detected",
    "[    0.014221] <span class=\"ok\">OK</span>  CPU0: VEX-CORE @ 4.20GHz online",
    "[    0.022109] <span class=\"dim\">Mounting /dev/sda1 on /unknown-technologies</span>",
    "[    0.038876] <span class=\"ok\">OK</span>  Started Network Manager",
    "[    0.051234] <span class=\"warn\">WARN</span> reactor-core.service: containment field at 98%",
    "[    0.062001] <span class=\"ok\">OK</span>  Loaded module: luau_runtime.ko",
    "[    0.070344] <span class=\"ok\">OK</span>  Loaded module: protogen_drivers.ko",
    "[    0.081552] <span class=\"dim\">Starting affiliate sync daemon...</span>",
    "[    0.093871] <span class=\"ok\">OK</span>  Connected to discord.gg/zv8",
    "[    0.101220] <span class=\"fail\">FAIL</span> anti-trump.service: failed to disable (intentional)",
    "[    0.109887] <span class=\"ok\">OK</span>  Started vex.terminal.target",
    "[    0.121004] Welcome to VEX-OS",
    "[    0.121500] vex login: <span class=\"ok\">vex</span>",
    "[    0.122000] Password: ********",
    "[    0.130000] Last login: just now from 127.0.0.1",
  ];

  var logEl = document.getElementById("boot-log");
  var screen = document.getElementById("boot-screen");
  var body = document.body;

  if (!logEl || !screen) return;

  var i = 0;

  function printNext() {
    if (i >= lines.length) {
      setTimeout(finishBoot, 250);
      return;
    }
    var div = document.createElement("div");
    div.innerHTML = lines[i];
    logEl.appendChild(div);
    i++;
    setTimeout(printNext, 60 + Math.random() * 70);
  }

  function finishBoot() {
    screen.classList.add("fade-out");
    setTimeout(function () {
      screen.remove();
      body.classList.remove("booting");
    }, 400);
  }

  printNext();

  // Safety net: never let the boot screen hang around past ~2.5s
  setTimeout(finishBoot, 2500);
})();
