(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    3269: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return n(3208);
        },
      ]);
    },
    4339: function (e, t, n) {
      "use strict";
      var r = n(5893);
      n(7294), n(1664);
      t.Z = function (e) {
        var t = e.pageTitle,
          n = e.bannerImg;
        return (0, r.jsx)("section", {
          className:
            "page__title-area page__title-height page__title-overlay d-flex align-items-center",
          style: {
            backgroundImage: "url(".concat(
              "assets/img/img_fucec/".concat(n),
              ")"
            ),
          },
          children: (0, r.jsx)("div", {
            className: "container",
            children: (0, r.jsx)("div", {
              className: "row",
              children: (0, r.jsx)("div", {
                className: "col-xxl-12",
                children: (0, r.jsx)("div", {
                  className: "page__title-wrapper mt-110",
                  children: (0, r.jsx)("h3", {
                    className: "page__title",
                    children: t || "Courses",
                  }),
                }),
              }),
            }),
          }),
        });
      };
    },
    3208: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        });
      var r = n(5893),
        c = n(7294),
        o = n(4339);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return !t || ("object" !== f(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function d(e) {
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
            r = s(e);
          if (t) {
            var c = s(this).constructor;
            n = Reflect.construct(r, arguments, c);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      var h = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && u(e, t);
          })(s, e);
          var t,
            n,
            c,
            o = d(s);
          function s() {
            return a(this, s), o.apply(this, arguments);
          }
          return (
            (t = s),
            (n = [
              {
                key: "render",
                value: function () {
                  return (0, r.jsx)("section", {
                    className: "contact__area pt-115 pb-120",
                    children: (0, r.jsx)("div", {
                      className: "container",
                      children: (0, r.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, r.jsx)("div", {
                            className: "col-xxl-7 col-xl-7 col-lg-6",
                            children: (0, r.jsxs)("div", {
                              className: "contact__wrapper",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "section__title-wrapper mb-40",
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className: "section__title",
                                      children: "Cu\xe9ntanos tus inquietudes",
                                    }),
                                    (0, r.jsx)("p", {
                                      children:
                                        "Nuestros asesores atender\xe1n tu solicitud en el menos tiempo posible.",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "contact__form",
                                  children: (0, r.jsx)("form", {
                                    action: "assets/mail.php",
                                    children: (0, r.jsxs)("div", {
                                      className: "row",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "col-xxl-6 col-xl-6 col-md-6",
                                          children: (0, r.jsx)("div", {
                                            className: "contact__form-input",
                                            children: (0, r.jsx)("input", {
                                              type: "text",
                                              placeholder:
                                                "Correo electr\xf3nico",
                                              name: "name",
                                            }),
                                          }),
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "col-xxl-6 col-xl-6 col-md-6",
                                          children: (0, r.jsx)("div", {
                                            className: "contact__form-input",
                                            children: (0, r.jsx)("input", {
                                              type: "email",
                                              placeholder:
                                                "Tel\xe9fono/Celular",
                                              name: "email",
                                            }),
                                          }),
                                        }),
                                        (0, r.jsx)("div", {
                                          className: "col-xxl-12",
                                          children: (0, r.jsx)("div", {
                                            className: "contact__form-input",
                                            children: (0, r.jsx)("input", {
                                              type: "text",
                                              placeholder: "Nombre completo",
                                              name: "subject",
                                            }),
                                          }),
                                        }),
                                        (0, r.jsx)("div", {
                                          className: "col-xxl-12",
                                          children: (0, r.jsx)("div", {
                                            className: "contact__form-input",
                                            children: (0, r.jsx)("textarea", {
                                              placeholder: "Mensaje",
                                              name: "message",
                                            }),
                                          }),
                                        }),
                                        (0, r.jsx)("div", {
                                          className: "col-xxl-12",
                                          children: (0, r.jsxs)("div", {
                                            className:
                                              "contact__form-agree d-flex align-items-center mb-20",
                                            children: [
                                              (0, r.jsx)("input", {
                                                className: "e-check-input",
                                                type: "checkbox",
                                                id: "e-agree",
                                              }),
                                              (0, r.jsxs)("label", {
                                                className: "e-check-label",
                                                htmlFor: "e-agree",
                                                children: [
                                                  "Acepto los",
                                                  " ",
                                                  (0, r.jsx)("a", {
                                                    href: "#",
                                                    children:
                                                      "t\xe9rminos y condiciones de tratamiento de datos.",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, r.jsx)("div", {
                                          className: "col-xxl-12",
                                          children: (0, r.jsx)("div", {
                                            className: "contact__btn",
                                            children: (0, r.jsx)("button", {
                                              type: "submit",
                                              className: "e-btn",
                                              children: "Enviar mensaje",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1",
                            children: (0, r.jsxs)("div", {
                              className:
                                "contact__info white-bg p-relative z-index-1",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "contact__shape",
                                  children: [
                                    (0, r.jsx)("img", {
                                      className: "contact-shape-1",
                                      src: "assets/img/img_fucec/Elipse 29.png",
                                      alt: "img not found",
                                    }),
                                    (0, r.jsx)("img", {
                                      className: "contact-shape-2",
                                      src: "assets/img/img_fucec/Grupo 56.png",
                                      alt: "img not found",
                                    }),
                                    (0, r.jsx)("img", {
                                      className: "contact-shape-3",
                                      src: "assets/img/img_fucec/Grupo 79.png",
                                      alt: "img not found",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "contact__info-inner white-bg",
                                  children: [
                                    (0, r.jsxs)("ul", {
                                      children: [
                                        (0, r.jsx)("li", {
                                          children: (0, r.jsxs)("div", {
                                            className:
                                              "contact__info-item d-flex align-items-start mb-35",
                                            children: [
                                              (0, r.jsx)("div", {
                                                className:
                                                  "contact__info-icon mr-15",
                                                children: (0, r.jsx)("svg", {
                                                  id: "Grupo_83",
                                                  "data-name": "Grupo 83",
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  width: "16",
                                                  height: "20",
                                                  viewBox: "0 0 18.525 23.818",
                                                  children: (0, r.jsx)("path", {
                                                    id: "Trazado_71",
                                                    "data-name": "Trazado 71",
                                                    d: "M9.644-12.3l.107-.077c.067-.049.163-.121.285-.214.243-.187.588-.461,1-.814a28.716,28.716,0,0,0,3.027-3c2.188-2.531,4.462-6.144,4.462-10.274a9.34,9.34,0,0,0-2.712-6.584A9.237,9.237,0,0,0,9.263-36,9.237,9.237,0,0,0,2.712-33.27,9.34,9.34,0,0,0,0-26.686c0,4.13,2.273,7.743,4.462,10.274a28.716,28.716,0,0,0,3.027,3c.413.353.758.627,1,.814l.391.292A.663.663,0,0,0,9.644-12.3ZM9.6-12.37l.048.067Zm2.975-14.367a3.308,3.308,0,0,1-3.308,3.308,3.308,3.308,0,0,1-3.308-3.308,3.308,3.308,0,0,1,3.308-3.308A3.308,3.308,0,0,1,12.571-26.737Z",
                                                    transform:
                                                      "translate(0 36)",
                                                    fill: "#2745fb",
                                                    "fill-rule": "evenodd",
                                                  }),
                                                }),
                                              }),
                                              (0, r.jsxs)("div", {
                                                className: "contact__info-text",
                                                children: [
                                                  (0, r.jsx)("h4", {
                                                    children: "Nuestras sedes",
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    children: (0, r.jsx)("a", {
                                                      target: "_blank",
                                                      href: "https://goo.gl/maps/xczvC2Tj6ZRqoZ8a7",
                                                      children:
                                                        "Sede Principal",
                                                    }),
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    children: (0, r.jsx)("a", {
                                                      target: "_blank",
                                                      href: "https://goo.gl/maps/Gv29qaMrhgzZrpXu9",
                                                      children: "Sede Arjona",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, r.jsx)("li", {
                                          children: (0, r.jsxs)("div", {
                                            className:
                                              "contact__info-item d-flex align-items-start mb-35",
                                            children: [
                                              (0, r.jsx)("div", {
                                                className:
                                                  "contact__info-icon mr-15",
                                                children: (0, r.jsx)("svg", {
                                                  id: "Grupo_84",
                                                  "data-name": "Grupo 84",
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  width: "18",
                                                  height: "18",
                                                  viewBox: "0 0 24.605 23.818",
                                                  children: (0, r.jsx)("path", {
                                                    id: "Trazado_72",
                                                    "data-name": "Trazado 72",
                                                    d: "M2.46-10.305,12.3-4.154l9.842-6.151L12.3-16.457Zm22.144,0V2a2.472,2.472,0,0,1-2.46,2.46H2.46A2.472,2.472,0,0,1,0,2v-12.3a2.45,2.45,0,0,1,1.193-2.1L12.3-19.36l11.109,6.951A2.45,2.45,0,0,1,24.6-10.305Z",
                                                    transform:
                                                      "translate(0 19.36)",
                                                    fill: "#2745fb",
                                                  }),
                                                }),
                                              }),
                                              (0, r.jsxs)("div", {
                                                className: "contact__info-text",
                                                children: [
                                                  (0, r.jsx)("h4", {
                                                    children:
                                                      "Correo electr\xf3nico",
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    children: (0, r.jsx)("a", {
                                                      href: "mailto:gerencia@fucec.com.co",
                                                      target: "_blank",
                                                      children:
                                                        "gerencia@fucec.com.co",
                                                    }),
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    children: (0, r.jsx)("a", {
                                                      href: "mailto:coordinacionacademica@fucec.com.co",
                                                      target: "_blank",
                                                      children:
                                                        "coordinacionacademica@fucec.com.co",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, r.jsx)("li", {
                                          children: (0, r.jsxs)("div", {
                                            className:
                                              "contact__info-item d-flex align-items-start mb-35",
                                            children: [
                                              (0, r.jsx)("div", {
                                                className:
                                                  "contact__info-icon mr-15",
                                                children: (0, r.jsx)("svg", {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  width: "18",
                                                  height: "18",
                                                  viewBox: "0 0 24.851 24.851",
                                                  children: (0, r.jsx)("path", {
                                                    id: "Trazado_73",
                                                    "data-name": "Trazado 73",
                                                    d: "M24.54-2.716a1.244,1.244,0,0,0-.895-.808l-7.455-1.7a1.243,1.243,0,0,0-1.143.323c-.174.162-.186.174-.994,1.715A12.317,12.317,0,0,1,8-9.265c1.578-.8,1.59-.8,1.752-.982a1.243,1.243,0,0,0,.323-1.143l-1.7-7.368a1.244,1.244,0,0,0-.808-.895,4.709,4.709,0,0,0-.895-.224A4.9,4.9,0,0,0,5.716-20,5.743,5.743,0,0,0,0-14.284,19.251,19.251,0,0,0,19.135,4.851,5.743,5.743,0,0,0,24.851-.865a5.935,5.935,0,0,0-.075-.944A5.39,5.39,0,0,0,24.54-2.716ZM13.668-12.545A3.745,3.745,0,0,1,17.4-8.817a1.248,1.248,0,0,0,1.243,1.243A1.248,1.248,0,0,0,19.88-8.817a6.242,6.242,0,0,0-6.213-6.213,1.248,1.248,0,0,0-1.243,1.243A1.248,1.248,0,0,0,13.668-12.545Zm0-4.97a8.739,8.739,0,0,1,8.7,8.7,1.248,1.248,0,0,0,1.243,1.243,1.248,1.248,0,0,0,1.243-1.243A11.236,11.236,0,0,0,13.668-20a1.248,1.248,0,0,0-1.243,1.243A1.248,1.248,0,0,0,13.668-17.515Z",
                                                    transform:
                                                      "translate(0 20)",
                                                    fill: "#2745fb",
                                                  }),
                                                }),
                                              }),
                                              (0, r.jsxs)("div", {
                                                className: "contact__info-text",
                                                children: [
                                                  (0, r.jsx)("h4", {
                                                    children: "Tel\xe9fonos",
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    children: (0, r.jsx)("a", {
                                                      href: "tel:6056600085",
                                                      target: "_blank",
                                                      children: "605 660 0085",
                                                    }),
                                                  }),
                                                  (0, r.jsx)("p", {
                                                    children: (0, r.jsx)("a", {
                                                      href: "tel:(+57)3013712233",
                                                      target: "_blank",
                                                      children:
                                                        "(+57) 301 371 2233",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "contact__social pl-30",
                                      children: [
                                        (0, r.jsx)("h4", {
                                          children: "S\xedguenos",
                                        }),
                                        (0, r.jsxs)("ul", {
                                          children: [
                                            (0, r.jsx)("li", {
                                              children: (0, r.jsx)("a", {
                                                href: "#",
                                                children: (0, r.jsx)("img", {
                                                  src: "assets/img/img_fucec/Grupo 29.svg",
                                                  alt: "img not found",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsx)("li", {
                                              children: (0, r.jsx)("a", {
                                                href: "#",
                                                children: (0, r.jsx)("img", {
                                                  src: "assets/img/img_fucec/Grupo 106.svg",
                                                  alt: "img not found",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsx)("li", {
                                              children: (0, r.jsx)("a", {
                                                href: "#",
                                                children: (0, r.jsx)("img", {
                                                  src: "assets/img/img_fucec/Grupo 107.svg",
                                                  alt: "img not found",
                                                }),
                                              }),
                                            }),
                                          ],
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
                    }),
                  });
                },
              },
            ]) && i(t.prototype, n),
            c && i(t, c),
            s
          );
        })(c.Component),
        m = n(1664);
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function j(e) {
        return (j = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _(e, t) {
        return !t || ("object" !== g(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var g = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function b(e) {
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
            r = j(e);
          if (t) {
            var c = j(this).constructor;
            n = Reflect.construct(r, arguments, c);
          } else n = r.apply(this, arguments);
          return _(this, n);
        };
      }
      var y = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && v(e, t);
        })(a, e);
        var t,
          n,
          c,
          o = b(a);
        function a() {
          return p(this, a), o.apply(this, arguments);
        }
        return (
          (t = a),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("section", {
                  className:
                    "contact__area grey-bg-2 border-bottom-gray pt-120 pb-90 p-relative fix",
                  children: (0, r.jsx)("div", {
                    className: "container",
                    children: (0, r.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-6",
                          children: (0, r.jsxs)("div", {
                            className:
                              "contact__item text-center mb-30 transition-3 white-bg",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "contact__icon d-flex justify-content-center align-items-end",
                                children: (0, r.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "64",
                                  height: "64",
                                  viewBox: "0 0 64 64",
                                  children: (0, r.jsx)("path", {
                                    id: "Trazado_70",
                                    "data-name": "Trazado 70",
                                    d: "M59.429,22.571A4.571,4.571,0,0,1,64,27.143V40.857A9.143,9.143,0,0,1,54.857,50H9.143A9.143,9.143,0,0,1,0,40.857V27.143a4.571,4.571,0,1,1,9.143,0V40.857H54.857V27.143A4.571,4.571,0,0,1,59.429,22.571ZM32-14a4.571,4.571,0,0,1,4.571,4.571V11.535l5.91-5.91a4.571,4.571,0,1,1,6.465,6.465L32,29.036,15.053,12.09a4.571,4.571,0,0,1,6.465-6.465l5.91,5.91V-9.429A4.571,4.571,0,0,1,32-14Z",
                                    transform: "translate(0 14)",
                                    fill: "#2745fb",
                                    "fill-rule": "evenodd",
                                  }),
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className: "contact__content",
                                children: [
                                  (0, r.jsx)("h3", {
                                    className: "contact__title",
                                    children: "M\xe1s sobre nosotros",
                                  }),
                                  (0, r.jsx)("p", {
                                    children:
                                      "Descarga nuestro brochure y conoce m\xe1s de nuestra oferta acad\xe9mica.",
                                  }),
                                  (0, r.jsx)(m.default, {
                                    href: "#",
                                    children: (0, r.jsx)("a", {
                                      className: "e-btn e-btn-border",
                                      children: "Descargar Brochure",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "col-xxl-5 col-xl-5 col-lg-5 col-md-6",
                          children: (0, r.jsxs)("div", {
                            className:
                              "contact__item text-center mb-30 transition-3 white-bg",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "contact__icon d-flex justify-content-center align-items-end",
                                children: (0, r.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "64",
                                  height: "64",
                                  viewBox: "0 0 64 64",
                                  children: (0, r.jsx)("path", {
                                    id: "Trazado_69",
                                    "data-name": "Trazado 69",
                                    d: "M6.4-13.6H57.6V24.8H10.144L6.4,28.544V-13.6m0-6.4A6.391,6.391,0,0,0,.032-13.6L0,44,12.8,31.2H57.6A6.419,6.419,0,0,0,64,24.8V-13.6A6.419,6.419,0,0,0,57.6-20Zm6.4,32H38.4v6.4H12.8Zm0-9.6H51.2V8.8H12.8Zm0-9.6H51.2V-.8H12.8Z",
                                    transform: "translate(0 20)",
                                    fill: "#2745fb",
                                  }),
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className: "contact__content",
                                children: [
                                  (0, r.jsx)("h3", {
                                    className: "contact__title",
                                    children: "Asistencia personalizada",
                                  }),
                                  (0, r.jsx)("p", {
                                    children:
                                      "Usa esta secci\xf3n para dudas, comentarios o si deseas comunicarte con nuestros asesores.",
                                  }),
                                  (0, r.jsx)("a", {
                                    href: "mailto:coordinacionacademica@fucec.com.co",
                                    target: "_blank",
                                    className: "e-btn e-btn-border",
                                    children: "Enviar mensaje",
                                  }),
                                ],
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
          ]) && x(t.prototype, n),
          c && x(t, c),
          a
        );
      })(c.Component);
      function w(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function N(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function O(e) {
        return (O = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function P(e, t) {
        return !t || ("object" !== T(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function R(e, t) {
        return (R =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var T = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function k(e) {
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
            r = O(e);
          if (t) {
            var c = O(this).constructor;
            n = Reflect.construct(r, arguments, c);
          } else n = r.apply(this, arguments);
          return P(this, n);
        };
      }
      var A = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && R(e, t);
          })(i, e);
          var t,
            n,
            c,
            a = k(i);
          function i() {
            return w(this, i), a.apply(this, arguments);
          }
          return (
            (t = i),
            (n = [
              {
                key: "render",
                value: function () {
                  return (0, r.jsxs)("main", {
                    children: [
                      (0, r.jsx)(o.Z, {
                        pageTitle: "Cont\xe1ctanos",
                        bannerImg: "Rect\xe1ngulo%20115.png",
                      }),
                      (0, r.jsx)(h, {}),
                      (0, r.jsx)(y, {}),
                    ],
                  });
                },
              },
            ]) && N(t.prototype, n),
            c && N(t, c),
            i
          );
        })(c.Component),
        Z = n(8105),
        E = n(1126);
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function S(e) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function z(e, t) {
        return !t || ("object" !== H(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function B(e, t) {
        return (B =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var H = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function V(e) {
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
            r = S(e);
          if (t) {
            var c = S(this).constructor;
            n = Reflect.construct(r, arguments, c);
          } else n = r.apply(this, arguments);
          return z(this, n);
        };
      }
      var M = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && B(e, t);
        })(i, e);
        var t,
          n,
          o,
          a = V(i);
        function i(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            a.call(this, e)
          );
        }
        return (
          (t = i),
          (o = [
            {
              key: "getInitialProps",
              value: function (e) {
                e.store;
              },
            },
          ]),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)(c.Fragment, {
                  children: [
                    (0, r.jsx)(E.Z, { isHome: !1 }),
                    (0, r.jsx)(A, {}),
                    (0, r.jsx)(Z.Z, {}),
                  ],
                });
              },
            },
          ]) && C(t.prototype, n),
          o && C(t, o),
          i
        );
      })(c.Component);
    },
  },
  function (e) {
    e.O(0, [675, 958, 774, 888, 179], function () {
      return (t = 3269), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
