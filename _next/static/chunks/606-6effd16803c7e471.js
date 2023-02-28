"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [606],
  {
    266: function (e, t, n) {
      var s = n(5893),
        r = n(7294),
        i = n(1664);
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      function o(e) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return !t || ("object" !== u(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            s = o(e);
          if (t) {
            var r = o(this).constructor;
            n = Reflect.construct(s, arguments, r);
          } else n = s.apply(this, arguments);
          return l(this, n);
        };
      }
      var m = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && d(e, t);
        })(l, e);
        var t,
          n,
          r,
          o = f(l);
        function l() {
          return c(this, l), o.apply(this, arguments);
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, s.jsx)("section", {
                  className: "about__area pt-90 pb-150",
                  children: (0, s.jsx)("div", {
                    className: "container",
                    children: (0, s.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, s.jsx)("div", {
                          className: "col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6",
                          children: (0, s.jsxs)("div", {
                            className: "about__thumb-wrapper",
                            children: [
                              (0, s.jsx)("div", {
                                className: "about__review",
                                children: (0, s.jsxs)("h5", {
                                  children: [
                                    "M\xe1s de",
                                    (0, s.jsxs)("span", {
                                      children: [
                                        " ",
                                        "8 a\xf1os de ",
                                        (0, s.jsx)("br", {}),
                                        " experiencia",
                                      ],
                                    }),
                                    " ",
                                    "nos respaldan.",
                                  ],
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: "about__thumb ml-100",
                                children: (0, s.jsx)("img", {
                                  src: "assets/img/img_fucec/Rect\xe1ngulo 21.png",
                                  alt: "img not found",
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: "about__banner mt--210",
                                children: (0, s.jsx)("img", {
                                  src: "assets/img/img_fucec/Rect\xe1ngulo 22.png",
                                  alt: "img not found",
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: "about__student ml-270 mt--80",
                                children: [
                                  (0, s.jsx)("img", {
                                    src: "assets/img/img_fucec/Elipse 6.png",
                                    alt: "img not found",
                                  }),
                                  (0, s.jsx)("img", {
                                    src: "assets/img/img_fucec/Elipse 7.png",
                                    alt: "img not found",
                                  }),
                                  (0, s.jsx)("img", {
                                    src: "assets/img/img_fucec/Elipse 8.png",
                                    alt: "img not found",
                                  }),
                                  (0, s.jsx)("img", {
                                    src: "assets/img/img_fucec/Elipse 9.png",
                                    alt: "img not found",
                                  }),
                                  (0, s.jsx)("p", {
                                    children:
                                      "\xdanase a m\xe1s de +4K estudiantes.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "col-xxl-6 col-xl-6 col-lg-6",
                          children: (0, s.jsxs)("div", {
                            className: "about__content pl-70 pr-60 pt-25",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "section__title-wrapper mb-25",
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: "section__title",
                                    children: "Alcanza tu metas con FUCEC",
                                  }),
                                  (0, s.jsx)("p", {
                                    children:
                                      "Somos una instituci\xf3n educativa que procura llevar conocimiento y formaci\xf3n en las diferentes \xe1reas del saber, con calidad y en condiciones accesibles a todas las personas.",
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: "about__list mb-35",
                                children: (0, s.jsxs)("ul", {
                                  children: [
                                    (0, s.jsxs)("li", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, s.jsx)("i", {
                                          className: "fas fa-check-circle",
                                        }),
                                        " F\xe1cil de usar y a tu ritmo",
                                      ],
                                    }),
                                    (0, s.jsxs)("li", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, s.jsx)("i", {
                                          className: "fas fa-check-circle",
                                        }),
                                        " Accede a m\xe1s de 20 programas en l\xednea",
                                      ],
                                    }),
                                    (0, s.jsxs)("li", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, s.jsx)("i", {
                                          className: "fas fa-check-circle",
                                        }),
                                        " Aprende de una manera din\xe1mica",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)(i.default, {
                                href: "Fucec-Static/about.html",
                                children: (0, s.jsx)("a", {
                                  className: "e-btn e-btn-border",
                                  children: "Saber m\xe1s",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
            },
          ]) && a(t.prototype, n),
          r && a(t, r),
          l
        );
      })(r.Component);
      t.Z = m;
    },
    396: function (e, t, n) {
      var s = n(5893),
        r = n(7294),
        i = n(1664);
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      function o(e) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return !t || ("object" !== u(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            s = o(e);
          if (t) {
            var r = o(this).constructor;
            n = Reflect.construct(s, arguments, r);
          } else n = s.apply(this, arguments);
          return l(this, n);
        };
      }
      var m = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && d(e, t);
        })(l, e);
        var t,
          n,
          r,
          o = f(l);
        function l() {
          return c(this, l), o.apply(this, arguments);
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, s.jsx)("section", {
                  className: "blog__area pt-115 pb-130",
                  children: (0, s.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, s.jsx)("div", {
                        className: "row",
                        children: (0, s.jsx)("div", {
                          className: "col-xxl-10 offset-xxl-1",
                          children: (0, s.jsxs)("div", {
                            className:
                              "section__title-wrapper text-center mb-60",
                            children: [
                              (0, s.jsx)("h2", {
                                className: "section__title",
                                children:
                                  "Compartimos nuestro conocimiento de una manera fresca",
                              }),
                              (0, s.jsx)("p", {
                                children:
                                  "Un blog ideado para formar y fortalecer el conocimiento.",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, s.jsx)("div", {
                            className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                            children: (0, s.jsxs)("div", {
                              className:
                                "blog__item white-bg mb-30 transition-3 fix",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "blog__thumb w-img fix",
                                  children: (0, s.jsx)("img", {
                                    src: "assets/img/img_fucec/blog-item.png",
                                    alt: "img not found",
                                  }),
                                }),
                                (0, s.jsxs)("div", {
                                  className: "blog__content",
                                  children: [
                                    (0, s.jsx)("div", {
                                     
                                    }),
                                    (0, s.jsx)("h3", {
                                      className: "blog__title",
                                      children: (0, s.jsx)(i.default, {
                                        href: "Fucec-Static/neoesclavitud.html",
                                        children: (0, s.jsx)("a", {
                                          children: "Neoesclavitud",
                                        }),
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "blog__meta d-flex align-items-center justify-content-between",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "blog__author d-flex align-items-center",
                                          children: [
                                            (0, s.jsx)("div", {
                                              className:
                                                "blog__author-thumb mr-10",
                                              children: (0, s.jsx)("img", {
                                                src: "assets/img/img_fucec/Elipse 10.png",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, s.jsx)("div", {
                                              className: "blog__author-info",
                                              children: (0, s.jsx)("h5", {
                                                children: "Ariel Espinosa",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "blog__date d-flex align-items-center",
                                          children: (0, s.jsx)("span", {
                                            children: "Febrero 27, 2023",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                            children: (0, s.jsxs)("div", {
                              className:
                                "blog__item white-bg mb-30 transition-3 fix",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "blog__thumb w-img fix",
                                  children: (0, s.jsx)(i.default, {
                                    href: "/blog-details",
                                    children: (0, s.jsx)("a", {
                                      children: (0, s.jsx)("img", {
                                        src: "assets/img/img_fucec/blog-item-2.png",
                                        alt: "img not found",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, s.jsxs)("div", {
                                  className: "blog__content",
                                  children: [
                                    (0, s.jsx)("div", {
                                      
                                    }),
                                    (0, s.jsx)("h3", {
                                      className: "blog__title",
                                      children: (0, s.jsx)(i.default, {
                                        href: "Fucec-Static/una-enfermedad-actual.html",
                                        children: (0, s.jsx)("a", {
                                          children: "Una enfermedad actual…",
                                        }),
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "blog__meta d-flex align-items-center justify-content-between",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "blog__author d-flex align-items-center",
                                          children: [
                                            (0, s.jsx)("div", {
                                              className:
                                                "blog__author-thumb mr-10",
                                              children: (0, s.jsx)("img", {
                                                src: "assets/img/img_fucec/Elipse 10.png",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, s.jsx)("div", {
                                              className: "blog__author-info",
                                              children: (0, s.jsx)("h5", {
                                                children: "Ariel Bello",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "blog__date d-flex align-items-center",
                                          children: (0, s.jsx)("span", {
                                            children: "Febrero 27, 2023",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                            children: (0, s.jsxs)("div", {
                              className:
                                "blog__item white-bg mb-30 transition-3 fix",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "blog__thumb w-img fix",
                                  children: (0, s.jsx)("img", {
                                    src: "assets/img/img_fucec/Rect\xe1ngulo 25.png",
                                    alt: "img not found",
                                  }),
                                }),
                                (0, s.jsxs)("div", {
                                  className: "blog__content",
                                  children: [
                                    (0, s.jsx)("div", {
                                     
                                    }),
                                    (0, s.jsx)("h3", {
                                      className: "blog__title",
                                      children: (0, s.jsx)(i.default, {
                                        href: "Fucec-Static/teatro-y-derecho.html",
                                        children: (0, s.jsx)("a", {
                                          children: "Teatro y derecho",
                                        }),
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "blog__meta d-flex align-items-center justify-content-between",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "blog__author d-flex align-items-center",
                                          children: [
                                            (0, s.jsx)("div", {
                                              className:
                                                "blog__author-thumb mr-10",
                                              children: (0, s.jsx)("img", {
                                                src: "assets/img/img_fucec/Elipse 10.png",
                                                alt: "img not found",
                                              }),
                                            }),
                                            (0, s.jsx)("div", {
                                              className: "blog__author-info",
                                              children: (0, s.jsx)("h5", {
                                                children: "Alonso Cortina",
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "blog__date d-flex align-items-center",
                                          children: (0, s.jsx)("span", {
                                            children: "Febrero 27, 2023",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              },
            },
          ]) && a(t.prototype, n),
          r && a(t, r),
          l
        );
      })(r.Component);
      t.Z = m;
    },
    1236: function (e, t, n) {
      var s = n(5893),
        r = n(7294),
        i = n(1664);
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      function o(e) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return !t || ("object" !== u(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            s = o(e);
          if (t) {
            var r = o(this).constructor;
            n = Reflect.construct(s, arguments, r);
          } else n = s.apply(this, arguments);
          return l(this, n);
        };
      }
      var m = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && d(e, t);
        })(l, e);
        var t,
          n,
          r,
          o = f(l);
        function l() {
          return c(this, l), o.apply(this, arguments);
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, s.jsx)("section", {
                  className: "why__area pt-125",
                  id: "portafolio",
                  children: (0, s.jsx)("div", {
                    className: "container",
                    children: (0, s.jsxs)("div", {
                      className: "row align-items-center",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8",
                          children: (0, s.jsxs)("div", {
                            className: "why__content pr-50 mt-40",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "section__title-wrapper mb-30",
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "section__sub-title",
                                    children: "Ll\xe9vanos contigo",
                                  }),
                                  (0, s.jsx)("h2", {
                                    className: "section__title",
                                    children: "Conoce nuestro portafolio",
                                  }),
                                  (0, s.jsxs)("p", {
                                    children: [
                                      "Hemos desarrollado satisfactoriamente convenios y contratos para procesos de formaci\xf3n con diferentes entidades p\xfablicas y privadas a nivel nacional y regional.",
                                      (0, s.jsx)("br", {}),
                                      "No te quedes por fuera, ",
                                      (0, s.jsx)("span", {
                                        children: "\xa1An\xedmate!",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "why__btn",
                                children: [
                                  (0, s.jsx)(i.default, {
                                    href: "#",
                                    children: (0, s.jsx)("a", {
                                      className: "e-btn e-btn-3 mr-30",
                                      children: "Descargar brochure",
                                    }),
                                  }),
                                  (0, s.jsx)(i.default, {
                                    href: "/course",
                                    children: (0, s.jsxs)("a", {
                                      className: "link-btn",
                                      children: [
                                        "Ver cursos",
                                        (0, s.jsx)("i", {
                                          className: "fas fa-arrow-right",
                                        }),
                                        (0, s.jsx)("i", {
                                          className: "fas fa-arrow-right",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 offset-md-1 col-md-8",
                          children: (0, s.jsxs)("div", {
                            className: "why__thumb",
                            children: [
                              (0, s.jsx)("img", {
                                src: "assets/img/img_fucec/Grupo 52.png",
                                alt: "img not found",
                              }),
                              (0, s.jsx)("img", {
                                className: "why-green",
                                src: "assets/img/img_fucec/Grupo 92.png",
                                alt: "img not found",
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "hero__promotion d-flex white-bg layer",
                                "data-depth": "0.1",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "hero__promotion-icon inspiration mr-10",
                                    children: (0, s.jsx)("span", {
                                      children: (0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16.889",
                                        height: "19",
                                        viewBox: "0 0 16.889 19",
                                        children: (0, s.jsx)("path", {
                                          id: "Trazado_54",
                                          "data-name": "Trazado 54",
                                          d: "M0-18H2.111V1H0Zm14.778,0H3.167V1H14.778a2.117,2.117,0,0,0,2.111-2.111V-15.889A2.117,2.117,0,0,0,14.778-18Zm-2.111,6.333H6.333v-1.056h6.333Zm0-2.111H6.333v-1.056h6.333Z",
                                          transform: "translate(0 18)",
                                          fill: "#fff",
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "hero__promotion-text",
                                    children: [
                                      (0, s.jsx)("h5", {
                                        children: "\xa1Lo logr\xe9!",
                                      }),
                                      (0, s.jsx)("p", {
                                        children: "Tec. Agroturismo",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: "hero__mic",
                                children: (0, s.jsx)("span", {
                                  children: (0, s.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "22.405",
                                    height: "32.59",
                                    viewBox: "0 0 22.405 32.59",
                                    children: (0, s.jsx)("path", {
                                      id: "Trazado_53",
                                      "data-name": "Trazado 53",
                                      d: "M6.114-483.091a2.038,2.038,0,0,0,.341,1.126l1.088,1.635a2.038,2.038,0,0,0,1.7.909h3.928a2.038,2.038,0,0,0,1.7-.909l1.088-1.635a2.036,2.036,0,0,0,.341-1.126l0-2.441H6.111ZM0-500.808a11.14,11.14,0,0,0,2.773,7.369A18.291,18.291,0,0,1,6.1-487.618c0,.017,0,.033.007.05H16.3c0-.017,0-.032.007-.05a18.291,18.291,0,0,1,3.323-5.821,11.14,11.14,0,0,0,2.773-7.369,11.2,11.2,0,0,0-11.237-11.2A11.156,11.156,0,0,0,0-500.808ZM11.2-505.9a5.1,5.1,0,0,0-5.092,5.092,1.018,1.018,0,0,1-1.018,1.018,1.018,1.018,0,0,1-1.018-1.018,7.137,7.137,0,0,1,7.129-7.129,1.018,1.018,0,0,1,1.018,1.018A1.018,1.018,0,0,1,11.2-505.9Z",
                                      transform: "translate(0 512.011)",
                                      fill: "#0f1034",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
            },
          ]) && a(t.prototype, n),
          r && a(t, r),
          l
        );
      })(r.Component);
      t.Z = m;
    },
  },
]);
