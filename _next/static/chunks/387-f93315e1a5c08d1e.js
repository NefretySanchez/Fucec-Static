"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [387],
  {
    4339: function (e, s, a) {
      var c = a(5893);
      a(7294), a(1664);
      s.Z = function (e) {
        var s = e.pageTitle,
          a = e.bannerImg;
        return (0, c.jsx)("section", {
          className:
            "page__title-area page__title-height page__title-overlay d-flex align-items-center",
          style: {
            backgroundImage: "url(".concat(
              "assets/img/img_fucec/".concat(a),
              ")"
            ),
          },
          children: (0, c.jsx)("div", {
            className: "container",
            children: (0, c.jsx)("div", {
              className: "row",
              children: (0, c.jsx)("div", {
                className: "col-xxl-12",
                children: (0, c.jsx)("div", {
                  className: "page__title-wrapper mt-110",
                  children: (0, c.jsx)("h3", {
                    className: "page__title",
                    children: s || "Courses",
                  }),
                }),
              }),
            }),
          }),
        });
      };
    },
    290: function (e, s, a) {
      var c = a(5893),
        i = a(7294);
      function l(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, s) {
        for (var a = 0; a < s.length; a++) {
          var c = s[a];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function n(e) {
        return (n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function t(e, s) {
        return !s || ("object" !== d(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function o(e, s) {
        return (o =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var d = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function m(e) {
        var s = (function () {
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
          var a,
            c = n(e);
          if (s) {
            var i = n(this).constructor;
            a = Reflect.construct(c, arguments, i);
          } else a = c.apply(this, arguments);
          return t(this, a);
        };
      }
      var x = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && o(e, s);
        })(t, e);
        var s,
          a,
          i,
          n = m(t);
        function t() {
          return l(this, t), n.apply(this, arguments);
        }
        return (
          (s = t),
          (a = [
            {
              key: "render",
              value: function () {
                return (0, c.jsx)("div", {
                  
                });
              },
            },
          ]) && r(s.prototype, a),
          i && r(s, i),
          t
        );
      })(i.Component);
      s.Z = x;
    },
    7308: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return o;
        },
      });
      var c = a(5893),
        i = (a(7294), a(5152)),
        l = a(9723),
        r = (a(2305), a(290)),
        n = a(1664),
        t = (0, i.default)(
          Promise.resolve()
            .then(a.bind(a, 9723))
            .then(function (e) {
              return e.Tabs;
            }),
          {
            loadableGenerated: {
              webpack: function () {
                return [9723];
              },
            },
            ssr: !1,
          }
        );
      function o() {
        return (0, c.jsx)("section", {
          className: "course__area pt-120 pb-120",
          children: (0, c.jsx)(t, {
            children: (0, c.jsxs)("div", {
              className: "container",
              children: [
                (0, c.jsx)("div", {
                  className: "course__tab-inner grey-bg-2 mb-50",
                  children: (0, c.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                      (0, c.jsx)("div", {
                        className:
                          "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                        children: (0, c.jsxs)("div", {
                          className:
                            "course__tab-wrapper d-flex align-items-center",
                          children: [

                            (0, c.jsx)("div", {
                              className: "course__view",
                              children: (0, c.jsx)("h4", {
                                children: "Viendo 1 - 1 de 9",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, c.jsx)("div", {
                        className:
                          "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                        children: (0, c.jsx)("div", {
                          className:
                            "course__sort d-flex justify-content-sm-end",
                          children: (0, c.jsx)("div", {
                            className: "course__sort-inner",
                            children: (0, c.jsx)("select", {
                              children: (0, c.jsx)("option", {
                                children: "Todos",
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, c.jsx)("div", {
                  className: "row",
                  children: (0, c.jsx)("div", {
                    className: "col-xxl-12",
                    children: (0, c.jsx)("div", {
                      className: "course__tab-conent",
                      children: (0, c.jsx)(l.TabPanel, {
                        children: (0, c.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, c.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, c.jsxs)("div", {
                                className: "course__item white-bg mb-30 fix",
                                children: [
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__thumb w-img p-relative fix",
                                    children: [
                                      (0, c.jsx)("img", {
                                        src: "assets/img/img_fucec/cursos.png",
                                        alt: "img not found",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "course__content",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__meta d-flex align-items-center justify-content-between",
                                        children: (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "40 horas",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("h3", {
                                        className: "course__title",
                                        children:
                                          "Manejo de protocolos de Bioseguridad para personal de servicios generales.",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__more d-flex justify-content-between align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className: "course__status",
                                        children: (0, c.jsx)("span", {
                                          children: "Virtual",
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "course__btn",
                                        children: (0, c.jsx)(n.default, {
                                          href: "Fucec-Static/assets/brochures/1.-CURSO%20MANEJO%20DE%20PROTOCOLOS%20DE%20BIOSEGURIDAD%20PARA%20PERSONAL%20DE%20SERVICIOS%20GENERALES.pdf",
                                          children: (0, c.jsxs)("a", {
                                            target: "_blank",
                                            className: "link-btn",
                                            children: [
                                              "Descargar brochure",
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, c.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, c.jsxs)("div", {
                                className: "course__item white-bg mb-30 fix",
                                children: [
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__thumb w-img p-relative fix",
                                    children: [
                                      (0, c.jsx)("img", {
                                        src: "assets/img/img_fucec/diplomado.png",
                                        alt: "img not found",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "course__content",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__meta d-flex align-items-center justify-content-between",
                                        children: (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "40 horas",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("h3", {
                                        className: "course__title",
                                        children: "Bioseguridad para mitigar y controlar la crisis frente al covid-19",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__more d-flex justify-content-between align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__status d-flex align-items-center",
                                        children: (0, c.jsx)("span", {
                                          children: "Virtual",
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "course__btn",
                                        children: (0, c.jsx)(n.default, {
                                          href: "Fucec-Static/assets/brochures/2.-CURSO%20BIOSEGURIDAD%20PARA%20MITIGAR%20Y%20CONTROLAR%20LA%20CRISIS%20FRENTE%20AL%20COVID-19.pdf",
                                          children: (0, c.jsxs)("a", {
                                            target: "_blank",
                                            className: "link-btn",
                                            children: [
                                              "Descargar brochure",
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, c.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, c.jsxs)("div", {
                                className: "course__item white-bg mb-30 fix",
                                children: [
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__thumb w-img p-relative fix",
                                    children: [
                                      (0, c.jsx)("img", {
                                        src: "assets/img/img_fucec/tecnica-agro.png",
                                        alt: "img not found",
                                      })
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "course__content",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__meta d-flex align-items-center justify-content-between",
                                        children: (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "32 horas",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("h3", {
                                        className: "course__title",
                                        children:
                                          "Protocolos de bioseguridad - Procesos de limpieza y desinfección",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__more d-flex justify-content-between align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__status d-flex align-items-center",
                                        children: (0, c.jsx)("span", {
                                          children: "Virtual",
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "course__btn",
                                        children: (0, c.jsx)(n.default, {
                                          href: "Fucec-Static/assets/brochures/3.-Curso%20Protocolos%20de%20Bioseguridad.pdf",
                                          children: (0, c.jsxs)("a", {
                                            target: "_blank",
                                            className: "link-btn",
                                            children: [
                                              "Descargar brochure",
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, c.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, c.jsxs)("div", {
                                className: "course__item white-bg mb-30 fix",
                                children: [
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__thumb w-img p-relative fix",
                                    children: [
                                      (0, c.jsx)("img", {
                                        src: "assets/img/img_fucec/informatica.png",
                                        alt: "img not found",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "course__content",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__meta d-flex align-items-center justify-content-between",
                                        children: (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "40 horas",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("h3", {
                                        className: "course__title",
                                        children:
                                          "Líder efectivo",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__more d-flex justify-content-between align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__status d-flex align-items-center",
                                        children: (0, c.jsx)("span", {
                                          children: "Virtual",
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "course__btn",
                                        children: (0, c.jsx)(n.default, {
                                          href: "Fucec-Static/assets/brochures/lider%20efectivo.pdf",
                                          children: (0, c.jsxs)("a", {
                                            target: "_blank",
                                            className: "link-btn",
                                            children: [
                                              "Descargar brochure",
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, c.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, c.jsxs)("div", {
                                className: "course__item white-bg mb-30 fix",
                                children: [
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__thumb w-img p-relative fix",
                                    children: [
                                      (0, c.jsx)("img", {
                                        src: "assets/img/img_fucec/tecnica-energia.png",
                                        alt: "img not found",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "course__content",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__meta d-flex align-items-center justify-content-between",
                                        children: (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "40 horas",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("h3", {
                                        className: "course__title",
                                        children:
                                          "Trabajo en equipo",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__more d-flex justify-content-between align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__status d-flex align-items-center",
                                        children: (0, c.jsx)("span", {
                                          children: "Virtual",
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "course__btn",
                                        children: (0, c.jsx)(n.default, {
                                          href: "Fucec-Static/assets/brochures/trabajo%20en%20equipo.pdf",
                                          children: (0, c.jsxs)("a", {
                                            target: "_blank",
                                            className: "link-btn",
                                            children: [
                                              "Descargar brochure",
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, c.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, c.jsxs)("div", {
                                className: "course__item white-bg mb-30 fix",
                                children: [
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__thumb w-img p-relative fix",
                                    children: [
                                      (0, c.jsx)("img", {
                                        src: "assets/img/img_fucec/innovacion.png",
                                        alt: "img not found",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "course__content",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__meta d-flex align-items-center justify-content-between",
                                        children: (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "40 horas",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("h3", {
                                        className: "course__title",
                                        children:
                                          "Comunicación asertiva",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__more d-flex justify-content-between align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__status d-flex align-items-center",
                                        children: (0, c.jsx)("span", {
                                          children: "Virtual",
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "course__btn",
                                        children: (0, c.jsx)(n.default, {
                                          href: "Fucec-Static/assets/brochures/comunicacion%20asertiva.pdf",
                                          children: (0, c.jsxs)("a", {
                                            target: "_blank",
                                            className: "link-btn",
                                            children: [
                                              "Descargar brochure",
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, c.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, c.jsxs)("div", {
                                className: "course__item white-bg mb-30 fix",
                                children: [
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__thumb w-img p-relative fix",
                                    children: [
                                      (0, c.jsx)("img", {
                                        src: "assets/img/img_fucec/informatica.png",
                                        alt: "img not found",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "course__content",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__meta d-flex align-items-center justify-content-between",
                                        children: (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "40 horas",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("h3", {
                                        className: "course__title",
                                        children:
                                          "Cultura del servicio",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__more d-flex justify-content-between align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__status d-flex align-items-center",
                                        children: (0, c.jsx)("span", {
                                          children: "Virtual",
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "course__btn",
                                        children: (0, c.jsx)(n.default, {
                                          href: "Fucec-Static/assets/brochures/cultura%20del%20servicio.pdf",
                                          children: (0, c.jsxs)("a", {
                                            target: "_blank",
                                            className: "link-btn",
                                            children: [
                                              "Descargar brochure",
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, c.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, c.jsxs)("div", {
                                className: "course__item white-bg mb-30 fix",
                                children: [
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__thumb w-img p-relative fix",
                                    children: [
                                      (0, c.jsx)("img", {
                                        src: "assets/img/img_fucec/tecnica-energia.png",
                                        alt: "img not found",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "course__content",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__meta d-flex align-items-center justify-content-between",
                                        children: (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "40 horas",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("h3", {
                                        className: "course__title",
                                        children:
                                          "Venta de mostrador",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__more d-flex justify-content-between align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__status d-flex align-items-center",
                                        children: (0, c.jsx)("span", {
                                          children: "Virtual",
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "course__btn",
                                        children: (0, c.jsx)(n.default, {
                                          href: "Fucec-Static/assets/brochures/venta%20de%20mostrador.pdf",
                                          children: (0, c.jsxs)("a", {
                                            target: "_blank",
                                            className: "link-btn",
                                            children: [
                                              "Descargar brochure",
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, c.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4 col-md-6",
                              children: (0, c.jsxs)("div", {
                                className: "course__item white-bg mb-30 fix",
                                children: [
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__thumb w-img p-relative fix",
                                    children: [
                                      (0, c.jsx)("img", {
                                        src: "assets/img/img_fucec/innovacion.png",
                                        alt: "img not found",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "course__content",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__meta d-flex align-items-center justify-content-between",
                                        children: (0, c.jsx)("div", {
                                          className: "course__lesson",
                                          children: (0, c.jsxs)("span", {
                                            children: [
                                              (0, c.jsx)("i", {
                                                className: "fas fa-book",
                                              }),
                                              "40 horas",
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, c.jsx)("h3", {
                                        className: "course__title",
                                        children:
                                          "Progresivo asesores empresarial",
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)("div", {
                                    className:
                                      "course__more d-flex justify-content-between align-items-center",
                                    children: [
                                      (0, c.jsx)("div", {
                                        className:
                                          "course__status d-flex align-items-center",
                                        children: (0, c.jsx)("span", {
                                          children: "Virtual",
                                        }),
                                      }),
                                      (0, c.jsx)("div", {
                                        className: "course__btn",
                                        children: (0, c.jsx)(n.default, {
                                          href: "Fucec-Static/assets/brochures/asesores%20empresariales.pdf",
                                          children: (0, c.jsxs)("a", {
                                            target: "_blank",
                                            className: "link-btn",
                                            children: [
                                              "Descargar brochure",
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                              (0, c.jsx)("i", {
                                                className: "fas fa-arrow-right",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                (0, c.jsx)(r.Z, {}),
              ],
            }),
          }),
        });
      }
    },
    6517: function (e, s, a) {
      var c = a(5893),
        i = a(7294);
      a(1664);
      function l(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, s) {
        for (var a = 0; a < s.length; a++) {
          var c = s[a];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(e, c.key, c);
        }
      }
      function n(e) {
        return (n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function t(e, s) {
        return !s || ("object" !== d(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function o(e, s) {
        return (o =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var d = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function m(e) {
        var s = (function () {
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
          var a,
            c = n(e);
          if (s) {
            var i = n(this).constructor;
            a = Reflect.construct(c, arguments, i);
          } else a = c.apply(this, arguments);
          return t(this, a);
        };
      }
      var x = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && o(e, s);
        })(t, e);
        var s,
          a,
          i,
          n = m(t);
        function t() {
          return l(this, t), n.apply(this, arguments);
        }
        return (
          (s = t),
          (a = [
            {
              key: "render",
              value: function () {
                return (0, c.jsx)("section", {
                  className: "cta__area mb--100",
                  children: (0, c.jsx)("div", {
                    className: "container",
                    children: (0, c.jsx)("div", {
                      className: "cta__inner cta__inner-2 blue-bg-2 fix",
                      children: (0, c.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                          (0, c.jsx)("div", {
                            className: "col-xxl-5 col-xl-5 col-lg-5 col-md-6",
                            children: (0, c.jsx)("div", {
                              className: "cta__content",
                              children: (0, c.jsx)("h3", {
                                className: "cta__title",
                                children: "Cont\xe1ctanos directamente.",
                              }),
                            }),
                          }),
                          (0, c.jsx)("div", {
                            className: "col-xxl-7 col-xl-7 col-lg-7 col-md-6",
                            children: (0, c.jsxs)("div", {
                              className:
                                "cta__apps d-lg-flex justify-content-end p-relative z-index-1",
                              children: [
                                (0, c.jsx)("a", {
                                  target: "_blank",
                                  href: "mailto:gerencia@fucec.com.co",
                                  className: "mr-10",
                                  children: "Correo electr\xf3nico",
                                }),
                                (0, c.jsx)("a", {
                                  target: "_blank",
                                  href: "https://api.whatsapp.com/send?phone=+57316896058&text=Hola%20Maria%20Fernanda,%20me%20gustaria%20recibir%20mas%20informaci%C3%B3n%20acerca%20de%20los%20cursos,%20diplomados%20y%20formaci%C3%B3n%20continua.%20Quedo%20atent@%20a%20tu%20respuesta",
                                  className: "btn-whatsapp",
                                  children: "Whatsapp",
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
          ]) && r(s.prototype, a),
          i && r(s, i),
          t
        );
      })(i.Component);
      s.Z = x;
    },
  },
]);
