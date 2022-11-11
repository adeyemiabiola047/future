window.addEventListener("DOMContentLoaded", function () {
        document.getElementById("mobile-open").addEventListener("click", function () {
            document.getElementById("mode").classList.add("show");
          });

          document.getElementById("node").addEventListener("click", function () {
            document.getElementById("mode").classList.remove("show");
          });

});
