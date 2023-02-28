(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    8961: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return n(4048);
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
    2108: function (e, t, n) {
      "use strict";
      var r = n(5893),
        o = n(7294),
        s = n(7857),
        a = n(3082),
        c = n.n(a);
      t.Z = function () {
        var e = (0, o.useState)(!1),
          t = e[0],
          n = e[1],
          a = function (e) {
            e && n(!t);
          },
          i = [
            {
              countIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37"><g id="Grupo_25" data-name="Grupo 25" transform="translate(0 16)"><path id="Trazado_44" data-name="Trazado 44" d="M18.5,21S37,21,37,16.375c0-5.55-9.019-11.562-18.5-11.562S0,10.825,0,16.375C0,21,18.5,21,18.5,21Zm0-37a9.247,9.247,0,0,1,9.25,9.25A9.247,9.247,0,0,1,18.5,2.5,9.247,9.247,0,0,1,9.25-6.75,9.247,9.247,0,0,1,18.5-16Z" fill="#6e8d50"/></g></svg>',
              countNum: 2e3,
              countTitle: "Estudiantes inscritos",
            },
            {
              countIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="32.375" height="37" viewBox="0 0 32.375 37"><g id="Grupo_26" data-name="Grupo 26" transform="translate(0 512)"><path id="Trazado_10" data-name="Trazado 10" d="M32.375-485.984v-24.281A1.73,1.73,0,0,0,30.641-512H6.938A6.939,6.939,0,0,0,0-505.063v23.125A6.939,6.939,0,0,0,6.938-475h23.7a1.73,1.73,0,0,0,1.734-1.734v-1.156a1.748,1.748,0,0,0-.643-1.351,16.115,16.115,0,0,1,0-5.4A1.722,1.722,0,0,0,32.375-485.984ZM9.25-502.316a.435.435,0,0,1,.434-.433H25a.435.435,0,0,1,.434.433v1.445a.435.435,0,0,1-.434.434H9.684a.435.435,0,0,1-.434-.434Zm0,4.625a.435.435,0,0,1,.434-.434H25a.435.435,0,0,1,.434.434v1.445a.435.435,0,0,1-.434.433H9.684a.435.435,0,0,1-.434-.433Zm18.312,18.066H6.938a2.31,2.31,0,0,1-2.313-2.312,2.319,2.319,0,0,1,2.313-2.313H27.562A26.016,26.016,0,0,0,27.562-479.625Z" transform="translate(0 0)" fill="#6e8d50"/></g></svg>',
              countNum: 20,
              countTitle: "Programas de formaci\xf3n",
            },
            {
              countIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="27.189" viewBox="0 0 37 27.189"><g id="Grupo_27" data-name="Grupo 27" transform="translate(0 16.167)"><path id="Trazado_45" data-name="Trazado 45" d="M7.8-13.275a1.682,1.682,0,0,0,.472-1.168,1.69,1.69,0,0,0-1.682-1.682,1.682,1.682,0,0,0-1.168.472,18.5,18.5,0,0,0,0,26.162A1.682,1.682,0,0,0,7.8,8.131a15.142,15.142,0,0,1-4.433-10.7A15.142,15.142,0,0,1,7.8-13.275Zm23.784-2.378a1.683,1.683,0,0,0-1.21-.513,1.69,1.69,0,0,0-1.682,1.682,1.682,1.682,0,0,0,.513,1.21,15.142,15.142,0,0,1,4.433,10.7A15.142,15.142,0,0,1,29.2,8.131a1.682,1.682,0,1,0,2.378,2.378A18.5,18.5,0,0,0,31.581-15.653ZM12.553-8.519a1.682,1.682,0,0,0,.472-1.168,1.69,1.69,0,0,0-1.682-1.682,1.682,1.682,0,0,0-1.168.472A11.777,11.777,0,0,0,6.726-2.572a11.777,11.777,0,0,0,3.449,8.325,1.682,1.682,0,1,0,2.378-2.378,8.412,8.412,0,0,1-2.464-5.947A8.412,8.412,0,0,1,12.553-8.519ZM26.825-10.9a1.683,1.683,0,0,0-1.21-.513,1.69,1.69,0,0,0-1.682,1.682,1.682,1.682,0,0,0,.513,1.21,8.412,8.412,0,0,1,2.464,5.947,8.412,8.412,0,0,1-2.464,5.947,1.682,1.682,0,0,0,2.378,2.378,11.777,11.777,0,0,0,3.449-8.325A11.777,11.777,0,0,0,26.825-10.9ZM16.818-2.572A1.69,1.69,0,0,1,18.5-4.254a1.69,1.69,0,0,1,1.682,1.682A1.69,1.69,0,0,1,18.5-.89,1.69,1.69,0,0,1,16.818-2.572ZM18.5-7.617a5.07,5.07,0,0,0-5.045,5.045A5.069,5.069,0,0,0,18.5,2.473a5.069,5.069,0,0,0,5.045-5.045A5.07,5.07,0,0,0,18.5-7.617Z" transform="translate(0)" fill="#6e8d50" fill-rule="evenodd"/></g></svg>',
              countNum: 4e3,
              countTitle: "Estudiantes en l\xednea",
            },
            {
              countIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37"><g id="Grupo_28" data-name="Grupo 28" transform="translate(0 20)"><path id="Trazado_46" data-name="Trazado 46" d="M18.5-20A18.521,18.521,0,0,0,0-1.5,18.521,18.521,0,0,0,18.5,17,18.521,18.521,0,0,0,37-1.5,18.521,18.521,0,0,0,18.5-20ZM3.7-1.5a14.706,14.706,0,0,1,.8-4.753L11.1.35v3.7L16.65,9.6v3.572A14.816,14.816,0,0,1,3.7-1.5ZM30.211,7.515A7.727,7.727,0,0,0,25.9,5.9V4.05A3.7,3.7,0,0,0,22.2.35H14.8V-5.2a3.7,3.7,0,0,0,3.7-3.7v-1.85h1.85a3.7,3.7,0,0,0,3.7-3.7v-.76A14.815,14.815,0,0,1,33.3-1.5,14.7,14.7,0,0,1,30.211,7.515Z" fill="#6e8d50"/></g></svg>',
              countNum: 200,
              countTitle: "Estudiantes extranjeros",
            },
          ];
        return (0, r.jsx)("section", {
          className: "counter__area pt-145 pb-100",
          children: (0, r.jsxs)("div", {
            className: "container",
            children: [
              (0, r.jsx)("div", {
                className: "row",
                children: (0, r.jsx)("div", {
                  className: "col-xxl-6 offset-xl-3 col-xl-6 offset-xl-3",
                  children: (0, r.jsxs)("div", {
                    className: "section__title-wrapper text-center mb-60",
                    children: [
                      (0, r.jsx)("h2", {
                        className: "section__title",
                        children: "Estamos Orgullosos",
                      }),
                      (0, r.jsx)("p", {
                        children:
                          "Algunos de nuestros n\xfameros m\xe1s recientes",
                      }),
                    ],
                  }),
                }),
              }),
              i &&
                (0, r.jsx)("div", {
                  className: "row",
                  children: i.map(function (e, n) {
                    return (0,
                    r.jsx)("div", { className: "col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 col-md-3 offset-md-0 col-sm-5 offset-sm-2", children: (0, r.jsxs)("div", { className: "counter__item mb-30", children: [(0, r.jsx)("div", { className: "counter__icon user mb-15", children: (0, r.jsx)("div", { dangerouslySetInnerHTML: { __html: e.countIcon } }) }), (0, r.jsxs)("div", { className: "counter__content", children: [(0, r.jsxs)("h4", { children: [(0, r.jsx)("span", { className: "plus-icon", children: "+" }), (0, r.jsx)("span", { className: "counter", children: (0, r.jsx)(c(), { onChange: a, offset: { top: 10 }, delayedCall: !0, children: (0, r.jsx)(s.ZP, { end: t ? 0 : e.countNum }) }) })] }), (0, r.jsx)("p", { children: e.countTitle })] })] }) }, n);
                  }),
                }),
            ],
          }),
        });
      };
    },
    4484: function (e, t, n) {
      "use strict";
      var r = n(5893),
        o = n(7294),
        s = n(1664);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e) {
        return (i = Object.setPrototypeOf
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
            r = i(e);
          if (t) {
            var o = i(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      var p = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && u(e, t);
        })(l, e);
        var t,
          n,
          o,
          i = d(l);
        function l() {
          return a(this, l), i.apply(this, arguments);
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("main", {
                  children: (0, r.jsx)("section", {
                    className: "banner__area pb-110",
                    children: (0, r.jsx)("div", {
                      className: "container",
                      children: (0, r.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, r.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "banner__item p-relative mb-40",
                              style: { background: "#6E8D50" },
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "banner__content",
                                  children: [
                                    (0, r.jsx)("span", {
                                      children: "Nuestras sedes",
                                    }),
                                    (0, r.jsx)("h3", {
                                      className: "banner__title",
                                      children: "Sede Principal: Cartagena",
                                    }),
                                    (0, r.jsx)("p", {
                                      children:
                                        "Barrio Centro, Avenida Venezuela",
                                    }),
                                    (0, r.jsx)("p", {
                                      children:
                                        "Edificio City Bank, Oficina 5CE",
                                    }),
                                    (0, r.jsx)(s.default, {
                                      href: "https://goo.gl/maps/xczvC2Tj6ZRqoZ8a7",
                                      children: (0, r.jsx)("a", {
                                        className: "e-btn e-btn-2",
                                        target: "_blank",
                                        children: "Como llegar",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "banner__thumb d-none d-sm-block d-md-none d-lg-block",
                                  children: (0, r.jsx)("img", {
                                    src: "assets/img/img_fucec/Enmascarar grupo 2.png",
                                    alt: "not found",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "banner__item p-relative mb-40",
                              style: { background: "#2745FB" },
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "banner__content",
                                  children: [
                                    (0, r.jsx)("span", {
                                      children: "Nuestras sedes",
                                    }),
                                    (0, r.jsx)("h3", {
                                      className: "banner__title",
                                      children: "Sede Arjona",
                                    }),
                                    (0, r.jsx)("p", {
                                      children:
                                        "Calle Nueva, Cra. 45 #51-167 a 51-1",
                                    }),
                                    (0, r.jsx)(s.default, {
                                      href: "https://goo.gl/maps/Gv29qaMrhgzZrpXu9",
                                      children: (0, r.jsx)("a", {
                                        className: "e-btn e-btn-2 banner-btn",
                                        target: "_blank",
                                        children: "Como llegar",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "banner__thumb d-none d-sm-block d-md-none d-lg-block",
                                  children: (0, r.jsx)("img", {
                                    src: "assets/img/img_fucec/Enmascarar grupo 1.png",
                                    alt: "img not found",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                });
              },
            },
          ]) && c(t.prototype, n),
          o && c(t, o),
          l
        );
      })(o.Component);
      t.Z = p;
    },
    1236: function (e, t, n) {
      "use strict";
      var r = n(5893),
        o = n(7294),
        s = n(1664);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e) {
        return (i = Object.setPrototypeOf
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
            r = i(e);
          if (t) {
            var o = i(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      var p = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && u(e, t);
        })(l, e);
        var t,
          n,
          o,
          i = d(l);
        function l() {
          return a(this, l), i.apply(this, arguments);
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("section", {
                  className: "why__area pt-125",
                  id: "portafolio",
                  children: (0, r.jsx)("div", {
                    className: "container",
                    children: (0, r.jsxs)("div", {
                      className: "row align-items-center",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8",
                          children: (0, r.jsxs)("div", {
                            className: "why__content pr-50 mt-40",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "section__title-wrapper mb-30",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "section__sub-title",
                                    children: "Ll\xe9vanos contigo",
                                  }),
                                  (0, r.jsx)("h2", {
                                    className: "section__title",
                                    children: "Conoce nuestro portafolio",
                                  }),
                                  (0, r.jsxs)("p", {
                                    children: [
                                      "Hemos desarrollado satisfactoriamente convenios y contratos para procesos de formaci\xf3n con diferentes entidades p\xfablicas y privadas a nivel nacional y regional.",
                                      (0, r.jsx)("br", {}),
                                      "No te quedes por fuera, ",
                                      (0, r.jsx)("span", {
                                        children: "\xa1An\xedmate!",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "why__btn",
                                children: [
                                  (0, r.jsx)(s.default, {
                                    href: "#",
                                    children: (0, r.jsx)("a", {
                                      className: "e-btn e-btn-3 mr-30",
                                      children: "Descargar brochure",
                                    }),
                                  }),
                                  (0, r.jsx)(s.default, {
                                    href: "Fucec-Static/course.html",
                                    children: (0, r.jsxs)("a", {
                                      className: "link-btn",
                                      children: [
                                        "Ver cursos",
                                        (0, r.jsx)("i", {
                                          className: "fas fa-arrow-right",
                                        }),
                                        (0, r.jsx)("i", {
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
                        (0, r.jsx)("div", {
                          className:
                            "col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 offset-md-1 col-md-8",
                          children: (0, r.jsxs)("div", {
                            className: "why__thumb",
                            children: [
                              (0, r.jsx)("img", {
                                src: "assets/img/img_fucec/Grupo 52.png",
                                alt: "img not found",
                              }),
                              (0, r.jsx)("img", {
                                className: "why-green",
                                src: "assets/img/img_fucec/Grupo 92.png",
                                alt: "img not found",
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "hero__promotion d-flex white-bg layer",
                                "data-depth": "0.1",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "hero__promotion-icon inspiration mr-10",
                                    children: (0, r.jsx)("span", {
                                      children: (0, r.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16.889",
                                        height: "19",
                                        viewBox: "0 0 16.889 19",
                                        children: (0, r.jsx)("path", {
                                          id: "Trazado_54",
                                          "data-name": "Trazado 54",
                                          d: "M0-18H2.111V1H0Zm14.778,0H3.167V1H14.778a2.117,2.117,0,0,0,2.111-2.111V-15.889A2.117,2.117,0,0,0,14.778-18Zm-2.111,6.333H6.333v-1.056h6.333Zm0-2.111H6.333v-1.056h6.333Z",
                                          transform: "translate(0 18)",
                                          fill: "#fff",
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "hero__promotion-text",
                                    children: [
                                      (0, r.jsx)("h5", {
                                        children: "\xa1Lo logr\xe9!",
                                      }),
                                      (0, r.jsx)("p", {
                                        children: "Tec. Agroturismo",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "hero__mic",
                                children: (0, r.jsx)("span", {
                                  children: (0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "22.405",
                                    height: "32.59",
                                    viewBox: "0 0 22.405 32.59",
                                    children: (0, r.jsx)("path", {
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
          ]) && c(t.prototype, n),
          o && c(t, o),
          l
        );
      })(o.Component);
      t.Z = p;
    },
    4048: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        });
      var r = n(5893),
        o = n(7294),
        s = n(8105),
        a = n(1126),
        c = n(4339),
        i = n(5944),
        l = n(1664);
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return !t || ("object" !== h(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var h = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function x(e) {
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
            r = d(e);
          if (t) {
            var o = d(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      var j = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && m(e, t);
          })(a, e);
          var t,
            n,
            o,
            s = x(a);
          function a() {
            return u(this, a), s.apply(this, arguments);
          }
          return (
            (t = a),
            (n = [
              {
                key: "render",
                value: function () {
                  return (0, r.jsx)("section", {
                    className: "about__area pt-90 pb-150",
                    children: (0, r.jsx)("div", {
                      className: "container",
                      children: (0, r.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6",
                            children: (0, r.jsxs)("div", {
                              className: "about__thumb-wrapper",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "about__review",
                                  children: (0, r.jsxs)("h5", {
                                    children: [
                                      (0, r.jsxs)("span", {
                                        children: [
                                          "Resoluci\xf3n No. 4363 de 2021",
                                          (0, r.jsx)("br", {}),
                                        ],
                                      }),
                                      " ",
                                      "Departamento de Bol\xedvar",
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "about__thumb ml-100",
                                  children: (0, r.jsx)("img", {
                                    src: "assets/img/img_fucec/udc.png",
                                    alt: "img not found",
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "about__banner mt--210",
                                  children: (0, r.jsx)("img", {
                                    src: "assets/img/img_fucec/estudiante.png",
                                    alt: "img not found",
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "about__student ml-270 mt--80",
                                  children: [
                                    (0, r.jsx)(l.default, {
                                      href: "/course-details",
                                      children: (0, r.jsxs)("a", {
                                        children: [
                                          (0, r.jsx)("img", {
                                            src: "assets/img/img_fucec/Elipse 6.png",
                                            alt: "img not found",
                                          }),
                                          (0, r.jsx)("img", {
                                            src: "assets/img/img_fucec/Elipse 7.png",
                                            alt: "img not found",
                                          }),
                                          (0, r.jsx)("img", {
                                            src: "assets/img/img_fucec/Elipse 8.png",
                                            alt: "img not found",
                                          }),
                                          (0, r.jsx)("img", {
                                            src: "assets/img/img_fucec/Elipse 9.png",
                                            alt: "img not found",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)("p", {
                                      children:
                                        "\xdanase a m\xe1s de +4K estudiantes.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col-xxl-6 col-xl-6 col-lg-6",
                            children: (0, r.jsxs)("div", {
                              className: "about__content pl-30",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "section__title-wrapper mb-25",
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className: "section__title",
                                      children:
                                        "Fundaci\xf3n centro de estudios La Candelaria",
                                    }),
                                    (0, r.jsx)("p", {
                                      children:
                                        "Somos una instituci\xf3n educativa sin \xe1nimo de lucro, fundada en el a\xf1o 2011, modificada en su raz\xf3n social en el a\xf1o 2020, que busca llevar el conocimiento con calidad y accesibilidad en las diferentes \xe1reas del saber, centr\xe1ndonos en valores como:",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "about__list mb-20",
                                  children: (0, r.jsxs)("ul", {
                                    children: [
                                      (0, r.jsxs)("li", {
                                        children: [
                                          (0, r.jsx)("i", {
                                            className: "fas fa-check-circle",
                                          }),
                                          " ",
                                          (0, r.jsx)("span", {
                                            children: "Compromiso ",
                                          }),
                                          " con el conocimiento con objetividad.",
                                        ],
                                      }),
                                      (0, r.jsxs)("li", {
                                        children: [
                                          (0, r.jsx)("i", {
                                            className: "fas fa-check-circle",
                                          }),
                                          " ",
                                          (0, r.jsx)("span", {
                                            children: "Honestidad,",
                                          }),
                                          " respetando los derechos y trabajando por el bien com\xfan.",
                                        ],
                                      }),
                                      (0, r.jsxs)("li", {
                                        children: [
                                          (0, r.jsx)("i", {
                                            className: "fas fa-check-circle",
                                          }),
                                          " ",
                                          (0, r.jsx)("span", {
                                            children: "Respeto",
                                          }),
                                          " a todos nuestros estudiantes y docentes, exaltando sus virtudes.",
                                        ],
                                      }),
                                      (0, r.jsxs)("li", {
                                        children: [
                                          (0, r.jsx)("i", {
                                            className: "fas fa-check-circle",
                                          }),
                                          " ",
                                          (0, r.jsx)("span", {
                                            children: "Imparcialidad,",
                                          }),
                                          " buscando siempre la protecci\xf3n de los derechos de las personas.",
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)(l.default, {
                                  href: "#portafolio",
                                  children: (0, r.jsx)("a", {
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
            ]) && f(t.prototype, n),
            o && f(t, o),
            a
          );
        })(o.Component),
        b = n(1236),
        v = n(2108),
        g = n(4484),
        _ = n(5152);
      function y(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function w(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function N(e) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function O(e, t) {
        return !t || ("object" !== P(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Z(e, t) {
        return (Z =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var P = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function T(e) {
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
            r = N(e);
          if (t) {
            var o = N(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O(this, n);
        };
      }
      var E = (0, _.default)(
          function () {
            return n.e(173).then(n.bind(n, 6173));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6173];
              },
            },
            ssr: !1,
          }
        ),
        R = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Z(e, t);
          })(a, e);
          var t,
            n,
            o,
            s = T(a);
          function a() {
            return y(this, a), s.apply(this, arguments);
          }
          return (
            (t = a),
            (n = [
              {
                key: "render",
                value: function () {
                  return (0, r.jsxs)("main", {
                    children: [
                      (0, r.jsx)(c.Z, {
                        pageTitle: "M\xe1s Sobre Nosotros",
                        bannerImg: "bg_about_page.png",
                      }),
                      (0, r.jsx)("div", {
                        className: "mt-30",
                        children: (0, r.jsx)(j, {}),
                      }),
                      (0, r.jsx)(E, {}),
                      (0, r.jsx)(i.Z, {}),
                      (0, r.jsx)(b.Z, {}),
                      (0, r.jsx)(v.Z, {}),
                      (0, r.jsx)(g.Z, {}),
                    ],
                  });
                },
              },
            ]) && w(t.prototype, n),
            o && w(t, o),
            a
          );
        })(o.Component);
      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function A(e) {
        return (A = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function C(e, t) {
        return !t || ("object" !== B(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function S(e, t) {
        return (S =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var B = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function H(e) {
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
            r = A(e);
          if (t) {
            var o = A(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return C(this, n);
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
            t && S(e, t);
        })(l, e);
        var t,
          n,
          c,
          i = H(l);
        function l(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
            i.call(this, e)
          );
        }
        return (
          (t = l),
          (c = [
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
                return (0, r.jsxs)(o.Fragment, {
                  children: [
                    (0, r.jsx)(a.Z, { isHome: !1 }),
                    (0, r.jsx)(R, {}),
                    (0, r.jsx)(s.Z, {}),
                  ],
                });
              },
            },
          ]) && k(t.prototype, n),
          c && k(t, c),
          l
        );
      })(o.Component);
    },
  },
  function (e) {
    e.O(0, [774, 675, 430, 655, 958, 887, 888, 179], function () {
      return (t = 8961), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
