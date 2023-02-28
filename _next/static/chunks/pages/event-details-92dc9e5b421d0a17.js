(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [342],
  {
    7775: function (e, s, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/event-details",
        function () {
          return n(4332);
        },
      ]);
    },
    4332: function (e, s, n) {
      "use strict";
      n.r(s),
        n.d(s, {
          default: function () {
            return N;
          },
        });
      var t = n(5893),
        a = n(7294),
        r = n(6826),
        i = n(1675),
        c = n(2035),
        l = n(1664);
      function o(e, s) {
        if (!(e instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, s) {
        for (var n = 0; n < s.length; n++) {
          var t = s[n];
          (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            "value" in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t);
        }
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, s) {
        return !s || ("object" !== m(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function f(e, s) {
        return (f =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var m = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function p(e) {
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
          var n,
            t = h(e);
          if (s) {
            var a = h(this).constructor;
            n = Reflect.construct(t, arguments, a);
          } else n = t.apply(this, arguments);
          return u(this, n);
        };
      }
      var j = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && f(e, s);
        })(i, e);
        var s,
          n,
          a,
          r = p(i);
        function i() {
          return o(this, i), r.apply(this, arguments);
        }
        return (
          (s = i),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, t.jsxs)("main", {
                  children: [
                    (0, t.jsxs)("section", {
                      className: "page__title-area pt-120",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "page__title-shape",
                          children: [
                            (0, t.jsx)("img", {
                              className: "page-title-shape-5 d-none d-sm-block",
                              src: "assets/img/page-title/page-title-shape-1.png",
                              alt: "img not found",
                            }),
                            (0, t.jsx)("img", {
                              className: "page-title-shape-6",
                              src: "assets/img/page-title/page-title-shape-2.png",
                              alt: "img not found",
                            }),
                            (0, t.jsx)("img", {
                              className: "page-title-shape-7",
                              src: "assets/img/page-title/page-title-shape-4.png",
                              alt: "img not found",
                            }),
                            (0, t.jsx)("img", {
                              className: "page-title-shape-8",
                              src: "assets/img/page-title/page-title-shape-5.png",
                              alt: "img not found",
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: "container",
                          children: (0, t.jsx)("div", {
                            className: "row",
                            children: (0, t.jsxs)("div", {
                              className: "col-xxl-9 col-xl-8",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "page__title-content mb-25 pr-40",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "page__title-breadcrumb",
                                      children: (0, t.jsx)("nav", {
                                        "aria-label": "breadcrumb",
                                        children: (0, t.jsxs)("ol", {
                                          className: "breadcrumb",
                                          children: [
                                            (0, t.jsx)("li", {
                                              className: "breadcrumb-item",
                                              children: (0, t.jsx)(l.default, {
                                                href: "/",
                                                children: (0, t.jsx)("a", {
                                                  children: "Home",
                                                }),
                                              }),
                                            }),
                                            (0, t.jsx)("li", {
                                              className: "breadcrumb-item",
                                              children: (0, t.jsx)(l.default, {
                                                href: "/event-details",
                                                children: (0, t.jsx)("a", {
                                                  children: "Event",
                                                }),
                                              }),
                                            }),
                                            (0, t.jsx)("li", {
                                              className:
                                                "breadcrumb-item active",
                                              "aria-current": "page",
                                              children:
                                                "Become a product Manager learn the skills & job.",
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "page__title-pre purple-bg",
                                      children: "Art & Design",
                                    }),
                                    (0, t.jsx)("h5", {
                                      className: "page__title-3",
                                      children:
                                        "Become a product manager learn the Skills & job.",
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "course__meta-2 d-sm-flex mb-30",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "course__teacher-3 d-flex align-items-center mr-70 mb-30",
                                      children: [
                                        (0, t.jsx)("div", {
                                          className:
                                            "course__teacher-thumb-3 mr-15",
                                          children: (0, t.jsx)("img", {
                                            src: "assets/img/course/teacher/teacher-1.jpg",
                                            alt: "img not found",
                                          }),
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "course__teacher-info-3",
                                          children: [
                                            (0, t.jsx)("h5", {
                                              children: "Teacher",
                                            }),
                                            (0, t.jsx)("p", {
                                              children: (0, t.jsx)(l.default, {
                                                href: "/instructor",
                                                children: (0, t.jsx)("a", {
                                                  children: "Elon Gated",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "course__update mr-80 mb-30",
                                      children: [
                                        (0, t.jsx)("h5", {
                                          children: "Last Update:",
                                        }),
                                        (0, t.jsx)("p", {
                                          children: "July 24, 2022",
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "course__update mb-30",
                                      children: [
                                        (0, t.jsx)("h5", {
                                          children: "Location:",
                                        }),
                                        (0, t.jsx)("p", {
                                          children: "New York, TX 82760, US:",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsx)("section", {
                      className: "event__area pb-110",
                      children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, t.jsx)("div", {
                              className: "col-xxl-8 col-xl-8 col-lg-8",
                              children: (0, t.jsxs)("div", {
                                className: "events__wrapper",
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "events__thumb mb-35 w-img",
                                    children: (0, t.jsx)("img", {
                                      src: "assets/img/events/event-1.jpg",
                                      alt: "img not found",
                                    }),
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "events__details mb-35",
                                    children: [
                                      (0, t.jsx)("h3", {
                                        children: "Description",
                                      }),
                                      (0, t.jsx)("p", {
                                        children:
                                          "He legged it up the kyver have it mush super me old mucker cheeky naff that are you taking the piss, blow off down the pub bite your arm off the wireless boot cor blimey guvnor happy days bender what a load of rubbish, say pardon me horse play spiffing Why car boot gosh bubble and squeak. Cheers Richard bugger show off show off pick your nose and blow off get stuffed mate chancer in my flat loo, bevvy amongst hunky-dory bender bubble and squeak me old mucker vagabond, barmy spend a penny chimney pot young delinquent bum bag the bee's knees chap, gosh nice one knees up the wireless Charles such a fibber. Mush barmy bleeding Jeffrey pardon me barney grub loo cup of tea bubble and squeak bugger all mate say, I bloke matie boy tickety-boo give us a bell up the duff bugger lurgy wind up I don't want no agro.",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "events__allow mb-40",
                                    children: [
                                      (0, t.jsx)("h3", {
                                        children:
                                          "This event will allow participants to:",
                                      }),
                                      (0, t.jsxs)("ul", {
                                        children: [
                                          (0, t.jsxs)("li", {
                                            children: [
                                              (0, t.jsx)("i", {
                                                className: "fas fa-check",
                                              }),
                                              " Business's managers, leaders",
                                            ],
                                          }),
                                          (0, t.jsxs)("li", {
                                            children: [
                                              (0, t.jsx)("i", {
                                                className: "fas fa-check",
                                              }),
                                              " Downloadable lectures, code and design assets for all projects",
                                            ],
                                          }),
                                          (0, t.jsxs)("li", {
                                            children: [
                                              (0, t.jsx)("i", {
                                                className: "fas fa-check",
                                              }),
                                              " Anyone who is finding a chance to get the promotion",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "events__tag",
                                    children: [
                                      (0, t.jsx)("span", {
                                        children: (0, t.jsx)("i", {
                                          className: "fas fa-tag",
                                        }),
                                      }),
                                      (0, t.jsx)(l.default, {
                                        href: "/course-details",
                                        children: (0, t.jsx)("a", {
                                          children: "Big data,",
                                        }),
                                      }),
                                      (0, t.jsx)(l.default, {
                                        href: "/course-details",
                                        children: (0, t.jsx)("a", {
                                          children: "Data analysis,",
                                        }),
                                      }),
                                      (0, t.jsx)(l.default, {
                                        href: "/course-details",
                                        children: (0, t.jsx)("a", {
                                          children: "Data modeling",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "col-xxl-4 col-xl-4 col-lg-4",
                              children: (0, t.jsxs)("div", {
                                className: "events__sidebar pl-70",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className:
                                      "events__sidebar-widget white-bg mb-20",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "events__sidebar-shape",
                                        children: [
                                          (0, t.jsx)("img", {
                                            className: "events-sidebar-img-2",
                                            src: "assets/img/events/event-shape-2.png",
                                            alt: "img not found",
                                          }),
                                          (0, t.jsx)("img", {
                                            className: "events-sidebar-img-3",
                                            src: "assets/img/events/event-shape-3.png",
                                            alt: "img not found",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "events__info",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className:
                                              "events__info-meta mb-25 d-flex align-items-center justify-content-between",
                                            children: [
                                              (0, t.jsxs)("div", {
                                                className: "events__info-price",
                                                children: [
                                                  (0, t.jsxs)("h5", {
                                                    children: [
                                                      "$76.",
                                                      (0, t.jsx)("span", {
                                                        children: "00",
                                                      }),
                                                      " ",
                                                    ],
                                                  }),
                                                  (0, t.jsx)("h5", {
                                                    className: "old-price",
                                                    children: "$142.00",
                                                  }),
                                                ],
                                              }),
                                              (0, t.jsx)("div", {
                                                className:
                                                  "events__info-discount",
                                                children: (0, t.jsx)("span", {
                                                  children: "68% OFF",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "events__info-content mb-35",
                                            children: (0, t.jsxs)("ul", {
                                              children: [
                                                (0, t.jsxs)("li", {
                                                  className:
                                                    "d-flex align-items-center",
                                                  children: [
                                                    (0, t.jsx)("div", {
                                                      className:
                                                        "events__info-icon",
                                                      children: (0, t.jsx)(
                                                        "i",
                                                        {
                                                          className:
                                                            "fas fa-calendar-alt",
                                                        }
                                                      ),
                                                    }),
                                                    (0, t.jsx)("div", {
                                                      className:
                                                        "events__info-item",
                                                      children: (0, t.jsxs)(
                                                        "h5",
                                                        {
                                                          children: [
                                                            (0, t.jsx)("span", {
                                                              children: "End: ",
                                                            }),
                                                            " July 26, 2022 12:30 am",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, t.jsxs)("li", {
                                                  className:
                                                    "d-flex align-items-center",
                                                  children: [
                                                    (0, t.jsx)("div", {
                                                      className:
                                                        "events__info-icon",
                                                      children: (0, t.jsx)(
                                                        "i",
                                                        {
                                                          className:
                                                            "fas fa-clock",
                                                        }
                                                      ),
                                                    }),
                                                    (0, t.jsx)("div", {
                                                      className:
                                                        "events__info-item",
                                                      children: (0, t.jsxs)(
                                                        "h5",
                                                        {
                                                          children: [
                                                            (0, t.jsx)("span", {
                                                              children: "Time:",
                                                            }),
                                                            "  10:45 AM-01:30 PM",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, t.jsxs)("li", {
                                                  className:
                                                    "d-flex align-items-center",
                                                  children: [
                                                    (0, t.jsx)("div", {
                                                      className:
                                                        "events__info-icon",
                                                      children: (0, t.jsx)(
                                                        "i",
                                                        {
                                                          className:
                                                            "fas fa-address-card",
                                                        }
                                                      ),
                                                    }),
                                                    (0, t.jsx)("div", {
                                                      className:
                                                        "events__info-item",
                                                      children: (0, t.jsxs)(
                                                        "h5",
                                                        {
                                                          children: [
                                                            (0, t.jsx)("span", {
                                                              children:
                                                                "Venue: ",
                                                            }),
                                                            " New York, TX 82760, US",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, t.jsx)("div", {
                                            className: "events__join-btn",
                                            children: (0, t.jsx)(l.default, {
                                              href: "/contact",
                                              children: (0, t.jsxs)("a", {
                                                className:
                                                  "e-btn e-btn-7 w-100",
                                                children: [
                                                  "Enroll ",
                                                  (0, t.jsx)("i", {
                                                    className:
                                                      "fas fa-arrow-right",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "events__sidebar-widget white-bg",
                                    children: (0, t.jsxs)("div", {
                                      className: "events__sponsor",
                                      children: [
                                        (0, t.jsx)("h3", {
                                          className: "events__sponsor-title",
                                          children: "Sponsors",
                                        }),
                                        (0, t.jsx)("div", {
                                          className:
                                            "events__sponsor-thumb mb-35",
                                          children: (0, t.jsx)("img", {
                                            src: "assets/img/events/sponsor-logo.png",
                                            alt: "img not found",
                                          }),
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "events__sponsor-info",
                                          children: [
                                            (0, t.jsx)("h3", {
                                              children: "Thomas R. Toe",
                                            }),
                                            (0, t.jsxs)("h4", {
                                              children: [
                                                "Email: ",
                                                (0, t.jsx)("span", {
                                                  children:
                                                    "support@educal.com",
                                                }),
                                              ],
                                            }),
                                            (0, t.jsxs)("div", {
                                              className:
                                                "events__social d-xl-flex align-items-center",
                                              children: [
                                                (0, t.jsx)("h4", {
                                                  children: "Share:",
                                                }),
                                                (0, t.jsxs)("ul", {
                                                  children: [
                                                    (0, t.jsx)("li", {
                                                      children: (0, t.jsx)(
                                                        "a",
                                                        {
                                                          href: "#",
                                                          className: "fb",
                                                          children: (0, t.jsx)(
                                                            "i",
                                                            {
                                                              className:
                                                                "fab fa-facebook-f",
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, t.jsx)("li", {
                                                      children: (0, t.jsx)(
                                                        "a",
                                                        {
                                                          href: "#",
                                                          className: "tw",
                                                          children: (0, t.jsx)(
                                                            "i",
                                                            {
                                                              className:
                                                                "fab fa-twitter",
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, t.jsx)("li", {
                                                      children: (0, t.jsx)(
                                                        "a",
                                                        {
                                                          href: "#",
                                                          className: "pin",
                                                          children: (0, t.jsx)(
                                                            "i",
                                                            {
                                                              className:
                                                                "fab fa-pinterest-p",
                                                            }
                                                          ),
                                                        }
                                                      ),
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
                          ],
                        }),
                      }),
                    }),
                    (0, t.jsx)(c.Z, {}),
                  ],
                });
              },
            },
          ]) && d(s.prototype, n),
          a && d(s, a),
          i
        );
      })(a.Component);
      function x(e, s) {
        for (var n = 0; n < s.length; n++) {
          var t = s[n];
          (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            "value" in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t);
        }
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e, s) {
        return !s || ("object" !== _(s) && "function" !== typeof s)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : s;
      }
      function g(e, s) {
        return (g =
          Object.setPrototypeOf ||
          function (e, s) {
            return (e.__proto__ = s), e;
          })(e, s);
      }
      var _ = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function y(e) {
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
          var n,
            t = b(e);
          if (s) {
            var a = b(this).constructor;
            n = Reflect.construct(t, arguments, a);
          } else n = t.apply(this, arguments);
          return v(this, n);
        };
      }
      var N = (function (e) {
        !(function (e, s) {
          if ("function" !== typeof s && null !== s)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(s && s.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            s && g(e, s);
        })(o, e);
        var s,
          n,
          c,
          l = y(o);
        function o(e) {
          return (
            (function (e, s) {
              if (!(e instanceof s))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
            l.call(this, e)
          );
        }
        return (
          (s = o),
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
                return (0, t.jsxs)(a.Fragment, {
                  children: [
                    (0, t.jsx)(i.Z, {}),
                    (0, t.jsx)(j, {}),
                    (0, t.jsx)(r.Z, {}),
                  ],
                });
              },
            },
          ]) && x(s.prototype, n),
          c && x(s, c),
          o
        );
      })(a.Component);
    },
  },
  function (e) {
    e.O(0, [675, 920, 403, 774, 888, 179], function () {
      return (s = 7775), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
