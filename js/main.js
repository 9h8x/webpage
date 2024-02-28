setTimeout(() => {
    var favicon_video_image_counter = 0;
    var favicon_video_icon_tag = document.querySelector("link[rel='icon']");
    var favicon_video_images = ["https://favicongenerator.s3.amazonaws.com/770eefe6fe62e.png", "https://favicongenerator.s3.amazonaws.com/089ad42099b6a.png", "https://favicongenerator.s3.amazonaws.com/e06df73ff3e66.png", "https://favicongenerator.s3.amazonaws.com/9f7956ef1c036.png", "https://favicongenerator.s3.amazonaws.com/c1b0d97d488e.png", "https://favicongenerator.s3.amazonaws.com/2e8a0ce087584.png", "https://favicongenerator.s3.amazonaws.com/d00a0a7e6150e.png", "https://favicongenerator.s3.amazonaws.com/de9cc640397f5.png", "https://favicongenerator.s3.amazonaws.com/7751d4f38e3f6.png", "https://favicongenerator.s3.amazonaws.com/d76d4efd40116.png", "https://favicongenerator.s3.amazonaws.com/71177da2576f.png", "https://favicongenerator.s3.amazonaws.com/166e2f60289e3.png", "https://favicongenerator.s3.amazonaws.com/0affc2db0d474.png", "https://favicongenerator.s3.amazonaws.com/bbe70b4eedd17.png", "https://favicongenerator.s3.amazonaws.com/fb88b695204f4.png", "https://favicongenerator.s3.amazonaws.com/129db0a5e45ae.png", "https://favicongenerator.s3.amazonaws.com/0dd8a1c99ba6e.png", "https://favicongenerator.s3.amazonaws.com/d5ebc7955db2b.png", "https://favicongenerator.s3.amazonaws.com/898ce4a37fdda.png", "https://favicongenerator.s3.amazonaws.com/b8852fc9c445d.png", "https://favicongenerator.s3.amazonaws.com/3d688a18c2b3b.png", "https://favicongenerator.s3.amazonaws.com/3e874776d540b.png", "https://favicongenerator.s3.amazonaws.com/36c2786a5b69f.png", "https://favicongenerator.s3.amazonaws.com/326c6c7452ae8.png", "https://favicongenerator.s3.amazonaws.com/8fe5691696fea.png", "https://favicongenerator.s3.amazonaws.com/564e3fd78ec8a.png", "https://favicongenerator.s3.amazonaws.com/860726bf58397.png", "https://favicongenerator.s3.amazonaws.com/c692b62db78e8.png", "https://favicongenerator.s3.amazonaws.com/9be1c7b6e8eeb.png", "https://favicongenerator.s3.amazonaws.com/2a9a16efd293d.png", "https://favicongenerator.s3.amazonaws.com/b9fb8e11000ff.png", "https://favicongenerator.s3.amazonaws.com/c08b76a7d54f8.png", "https://favicongenerator.s3.amazonaws.com/c293c577c6029.png", "https://favicongenerator.s3.amazonaws.com/f9abd7f766ca3.png", "https://favicongenerator.s3.amazonaws.com/a5f0d93d91ac3.png", "https://favicongenerator.s3.amazonaws.com/e9837b6bb0b74.png", "https://favicongenerator.s3.amazonaws.com/bd0f73e2f9ef6.png", "https://favicongenerator.s3.amazonaws.com/10b818886874d.png", "https://favicongenerator.s3.amazonaws.com/b40d1e337447.png", "https://favicongenerator.s3.amazonaws.com/40699dc9b992.png", "https://favicongenerator.s3.amazonaws.com/906dd6c8125e2.png", "https://favicongenerator.s3.amazonaws.com/d1aa36035c2a4.png", "https://favicongenerator.s3.amazonaws.com/ad2cbbd9d6f78.png", "https://favicongenerator.s3.amazonaws.com/3ba5268e472a7.png", "https://favicongenerator.s3.amazonaws.com/3e319b51709a9.png", "https://favicongenerator.s3.amazonaws.com/5964d2b9e0db4.png", "https://favicongenerator.s3.amazonaws.com/9f8955f1b85f4.png", "https://favicongenerator.s3.amazonaws.com/bf2dcaf3805dd.png", "https://favicongenerator.s3.amazonaws.com/615d6883f3cff.png", "https://favicongenerator.s3.amazonaws.com/7d653d462be02.png", "https://favicongenerator.s3.amazonaws.com/9490539806fac.png", "https://favicongenerator.s3.amazonaws.com/17116fe4268fd.png", "https://favicongenerator.s3.amazonaws.com/cf1c44993a724.png", "https://favicongenerator.s3.amazonaws.com/5f81230f18c88.png", "https://favicongenerator.s3.amazonaws.com/1ee4a51cf315a.png", "https://favicongenerator.s3.amazonaws.com/d9bdf531b0a72.png", "https://favicongenerator.s3.amazonaws.com/1b71b9b851141.png", "https://favicongenerator.s3.amazonaws.com/44d3390c3e29c.png", "https://favicongenerator.s3.amazonaws.com/8196cbbc68c99.png"];
    async function favicon_video_to_data_url(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.send();
    }

    var favicon_video_loaded_images = [];

    favicon_video_images.map((url, idx) => {
        favicon_video_to_data_url(url, function (dataUrl) {
            favicon_video_loaded_images[idx] = dataUrl;
        });
    });

    setInterval(function () {
        if (favicon_video_loaded_images[favicon_video_image_counter]) {
            favicon_video_icon_tag.href = favicon_video_loaded_images[
                favicon_video_image_counter
            ].replace("application/octet-stream", "image/png");
        }
        if (
            favicon_video_image_counter ==
            favicon_video_loaded_images.length - 1
        )
            favicon_video_image_counter = 0;
        else favicon_video_image_counter++;
    }, 100);
}, 2000);

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });