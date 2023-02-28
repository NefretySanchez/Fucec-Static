"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [775],
  {
    4339: function (e, s, c) {
      var a = c(5893);
      c(7294), c(1664);
      s.Z = function (e) {
        var s = e.pageTitle,
          c = e.bannerImg;
        return (0, a.jsx)("section", {
          className:
            "page__title-area page__title-height page__title-overlay d-flex align-items-center",
          style: {
            backgroundImage: "url(".concat(
              "assets/img/img_fucec/".concat(c),
              ")"
            ),
          },
          children: (0, a.jsx)("div", {
            className: "container",
            children: (0, a.jsx)("div", {
              className: "row",
              children: (0, a.jsx)("div", {
                className: "col-xxl-12",
                children: (0, a.jsx)("div", {
                  className: "page__title-wrapper mt-110",
                  children: (0, a.jsx)("h3", {
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
    8462: function (e, s, c) {
      c.d(s, {
        Z: function () {
          return h;
        },
      });
      var a = c(5893),
        l = c(7294),
        i = c(1664),
        r = c(1163),
        n = c(6414),
        d = c(9008),
        t = function (e) {
          var s = e.setShopOpen,
            c = e.shopOpen,
            n = (0, r.useRouter)(),
            d = (0, l.useState)(""),
            t = (d[0], d[1]);
          (0, l.useEffect)(
            function () {
              t(n.pathname);
            },
            [n]
          );
          var h = (0, l.useState)(0),
            x = h[0],
            o = h[1],
            j = (0, l.useState)(0),
            m = j[0],
            u = j[1],
            f = (0, l.useState)(0),
            p = f[0],
            N = f[1];
          return (0, a.jsx)("div", {
            className: c ? "sidebar__areas open" : "sidebar__areas",
            children: (0, a.jsx)("div", {
              className: "cartmini__area",
              children: (0, a.jsxs)("div", {
                className: "cartmini__wrapper",
                children: [
                  (0, a.jsx)("div", {
                    className: "cartmini__title",
                    children: (0, a.jsx)("h4", { children: "Shopping cart" }),
                  }),
                  (0, a.jsx)("div", {
                    className: "cartmini__close",
                    children: (0, a.jsx)("button", {
                      type: "button",
                      className: "cartmini__close-btn",
                      onClick: function () {
                        return s(!1);
                      },
                      children: (0, a.jsx)("i", { className: "fas fa-times" }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "cartmini__widget",
                    children: [
                      (0, a.jsx)("div", {
                        className: "cartmini__inner",
                        children: (0, a.jsxs)("ul", {
                          children: [
                            (0, a.jsxs)("li", {
                              children: [
                                (0, a.jsx)("div", {
                                  className: "cartmini__thumb",
                                  children: (0, a.jsx)("a", {
                                    href: "#",
                                    children: (0, a.jsx)("img", {
                                      src: "assets/img/course/sm/cart-1.jpg",
                                      alt: "img not found",
                                    }),
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "cartmini__content",
                                  children: [
                                    (0, a.jsx)("h5", {
                                      children: (0, a.jsx)("a", {
                                        href: "#",
                                        children:
                                          "Strategy law and organization Foundation ",
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "product-quantity mt-10 mb-10",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "cart-minus",
                                          onClick: function () {
                                            o(function (e) {
                                              return e - 1;
                                            });
                                          },
                                          children: "-",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "cart-input",
                                          children: x,
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "cart-plus",
                                          onClick: function () {
                                            o(function (e) {
                                              return e + 1;
                                            });
                                          },
                                          children: "+",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "product__sm-price-wrapper",
                                      children: (0, a.jsx)("span", {
                                        className: "product__sm-price",
                                        children: "$46.00",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("a", {
                                  href: "#",
                                  className: "cartmini__del",
                                  children: (0, a.jsx)("i", {
                                    className: "fas fa-times",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("li", {
                              children: [
                                (0, a.jsx)("div", {
                                  className: "cartmini__thumb",
                                  children: (0, a.jsx)("a", {
                                    href: "#",
                                    children: (0, a.jsx)("img", {
                                      src: "assets/img/course/sm/cart-2.jpg",
                                      alt: "img not found",
                                    }),
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "cartmini__content",
                                  children: [
                                    (0, a.jsx)("h5", {
                                      children: (0, a.jsx)("a", {
                                        href: "#",
                                        children:
                                          "Fundamentals of music theory Learn new",
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "product-quantity mt-10 mb-10",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "cart-minus",
                                          onClick: function () {
                                            N(function (e) {
                                              return e - 1;
                                            });
                                          },
                                          children: "-",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "cart-input",
                                          children: p,
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "cart-plus",
                                          onClick: function () {
                                            N(function (e) {
                                              return e + 1;
                                            });
                                          },
                                          children: "+",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "product__sm-price-wrapper",
                                      children: (0, a.jsx)("span", {
                                        className: "product__sm-price",
                                        children: "$32.00",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("a", {
                                  href: "#",
                                  className: "cartmini__del",
                                  children: (0, a.jsx)("i", {
                                    className: "fas fa-times",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("li", {
                              children: [
                                (0, a.jsx)("div", {
                                  className: "cartmini__thumb",
                                  children: (0, a.jsx)("a", {
                                    href: "#",
                                    children: (0, a.jsx)("img", {
                                      src: "assets/img/course/sm/cart-3.jpg",
                                      alt: "img not found",
                                    }),
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "cartmini__content",
                                  children: [
                                    (0, a.jsx)("h5", {
                                      children: (0, a.jsx)("a", {
                                        href: "#",
                                        children:
                                          "Strategy law and organization Foundation ",
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "product-quantity mt-10 mb-10",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "cart-minus",
                                          onClick: function () {
                                            u(function (e) {
                                              return e - 1;
                                            });
                                          },
                                          children: "-",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "cart-input",
                                          children: m,
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "cart-plus",
                                          onClick: function () {
                                            u(function (e) {
                                              return e + 1;
                                            });
                                          },
                                          children: "+",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "product__sm-price-wrapper",
                                      children: (0, a.jsx)("span", {
                                        className: "product__sm-price",
                                        children: "$62.00",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("a", {
                                  href: "#",
                                  className: "cartmini__del",
                                  children: (0, a.jsx)("i", {
                                    className: "fas fa-times",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "cartmini__checkout",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "cartmini__checkout-title mb-30",
                            children: [
                              (0, a.jsx)("h4", { children: "Subtotal:" }),
                              (0, a.jsx)("span", { children: "$113.00" }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "cartmini__checkout-btn",
                            children: [
                              (0, a.jsx)(i.default, {
                                href: "/cart",
                                children: (0, a.jsxs)("a", {
                                  className: "e-btn e-btn-border mb-10 w-100",
                                  children: [
                                    (0, a.jsx)("span", {}),
                                    " view cart",
                                  ],
                                }),
                              }),
                              (0, a.jsx)(i.default, {
                                href: "/checkout",
                                children: (0, a.jsxs)("a", {
                                  className: "e-btn w-100",
                                  children: [
                                    (0, a.jsx)("span", {}),
                                    " checkout",
                                  ],
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
          });
        },
        h =
          (c(5675),
          function () {
            var e = (0, l.useState)(!1),
              s = e[0],
              c = e[1],
              h = (0, l.useState)(!1),
              x = h[0],
              o = h[1],
              j = (0, r.useRouter)(),
              m = (0, l.useState)(""),
              u = (m[0], m[1]);
            (0, l.useEffect)(
              function () {
                u(j.pathname);
              },
              [j]
            ),
              (0, l.useEffect)(function () {
                return (
                  window.addEventListener("scroll", f),
                  function () {
                    window.removeEventListener("scroll", f);
                  }
                );
              });
            var f = function (e) {
              var s = document.querySelector(".header__area");
              window.scrollY >= 1
                ? s.classList.add("sticky")
                : s.classList.remove("sticky");
            };
            return (0, a.jsxs)(l.Fragment, {
              children: [
                (0, a.jsxs)(d.default, {
                  children: [
                    (0, a.jsx)("title", {
                      children:
                        "Educal \u2013 Online Course and Education React, Nextjs Template",
                    }),
                    (0, a.jsx)("link", {
                      href: "https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap",
                      rel: "stylesheet",
                    }),
                  ],
                }),
                (0, a.jsxs)("header", {
                  children: [
                    (0, a.jsx)("div", {
                      id: "header-sticky",
                      className:
                        "header__area header__transparent header__padding header__white",
                      children: (0, a.jsx)("div", {
                        className: "container-fluid",
                        children: (0, a.jsxs)("div", {
                          className: "row align-items-center",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6",
                              children: (0, a.jsxs)("div", {
                                className: "header__left d-flex",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "logo",
                                    children: (0, a.jsx)(i.default, {
                                      href: "/",
                                      children: (0, a.jsxs)("a", {
                                        children: [
                                          (0, a.jsx)("img", {
                                            className: "logo-white",
                                            src: "assets/img/logo/logo-2.png",
                                            alt: "logo",
                                          }),
                                          (0, a.jsx)("img", {
                                            className: "logo-black",
                                            src: "assets/img/logo/logo.png",
                                            alt: "logo",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "header__category d-none d-lg-block",
                                    children: (0, a.jsx)("nav", {
                                      children: (0, a.jsx)("ul", {
                                        children: (0, a.jsxs)("li", {
                                          children: [
                                            (0, a.jsx)(i.default, {
                                              href: "/course-grid",
                                              children: (0, a.jsxs)("a", {
                                                className:
                                                  "cat-menu d-flex align-items-center",
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "cat-dot-icon d-inline-block",
                                                    children: (0, a.jsx)(
                                                      "svg",
                                                      {
                                                        viewBox:
                                                          "0 0 276.2 276.2",
                                                        children: (0, a.jsx)(
                                                          "g",
                                                          {
                                                            children: (0,
                                                            a.jsxs)("g", {
                                                              children: [
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    className:
                                                                      "cat-dot",
                                                                    d: "M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    className:
                                                                      "cat-dot",
                                                                    d: "M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5 z",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    className:
                                                                      "cat-dot",
                                                                    d: "M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    className:
                                                                      "cat-dot",
                                                                    d: "M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    className:
                                                                      "cat-dot",
                                                                    d: "M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3 C104.5,156.1,119,170.5,136.8,170.5z",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    className:
                                                                      "cat-dot",
                                                                    d: "M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3 C210.7,156.1,225.2,170.5,243,170.5z",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    className:
                                                                      "cat-dot",
                                                                    d: "M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z ",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    className:
                                                                      "cat-dot",
                                                                    d: "M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3 S155.4,209.1,137.6,209.1z",
                                                                  }
                                                                ),
                                                                (0, a.jsx)(
                                                                  "path",
                                                                  {
                                                                    className:
                                                                      "cat-dot",
                                                                    d: "M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3 S261.6,209.1,243.8,209.1z",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    children: "Category",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, a.jsxs)("ul", {
                                              className: "cat-submenu",
                                              children: [
                                                (0, a.jsx)("li", {
                                                  children: (0, a.jsx)(
                                                    i.default,
                                                    {
                                                      href: "/course-grid",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "English Learning",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("li", {
                                                  children: (0, a.jsx)(
                                                    i.default,
                                                    {
                                                      href: "/course-grid",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Web Development",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("li", {
                                                  children: (0, a.jsx)(
                                                    i.default,
                                                    {
                                                      href: "/course-grid",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Logo Design",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("li", {
                                                  children: (0, a.jsx)(
                                                    i.default,
                                                    {
                                                      href: "/course-grid",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Motion Graphics",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("li", {
                                                  children: (0, a.jsx)(
                                                    i.default,
                                                    {
                                                      href: "/course-grid",
                                                      children: (0, a.jsx)(
                                                        "a",
                                                        {
                                                          children:
                                                            "Video Edition",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "header__right d-flex justify-content-end align-items-center",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "main-menu main-menu-3 d-none d-xl-block",
                                    children: (0, a.jsx)("nav", {
                                      id: "mobile-menu",
                                      children: (0, a.jsxs)("ul", {
                                        children: [
                                          (0, a.jsxs)("li", {
                                            className: "has-dropdown",
                                            children: [
                                              (0, a.jsx)(i.default, {
                                                href: "/",
                                                children: (0, a.jsx)("a", {
                                                  children: "Home",
                                                }),
                                              }),
                                              (0, a.jsxs)("ul", {
                                                className: "submenu",
                                                children: [
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Home Style 1",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/home-2",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Home Style 2",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/home-3",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Home Style 3",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("li", {
                                            className: "has-dropdown",
                                            children: [
                                              (0, a.jsx)(i.default, {
                                                href: "/course-grid",
                                                children: (0, a.jsx)("a", {
                                                  children: "Courses",
                                                }),
                                              }),
                                              (0, a.jsxs)("ul", {
                                                className: "submenu",
                                                children: [
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/course-grid",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children: "Courses",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/course-list",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Courses List",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/course-sidebar",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Courses Sidebar",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/course-details",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Courses Details",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("li", {
                                            className: "has-dropdown",
                                            children: [
                                              (0, a.jsx)(i.default, {
                                                href: "/blog",
                                                children: (0, a.jsx)("a", {
                                                  children: "Blog",
                                                }),
                                              }),
                                              (0, a.jsxs)("ul", {
                                                className: "submenu",
                                                children: [
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/blog",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          { children: "Blog" }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/blog-details",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Blog Details",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("li", {
                                            className: "has-dropdown",
                                            children: [
                                              (0, a.jsx)(i.default, {
                                                href: "/course-grid",
                                                children: (0, a.jsx)("a", {
                                                  children: "Pages",
                                                }),
                                              }),
                                              (0, a.jsxs)("ul", {
                                                className: "submenu",
                                                children: [
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/about",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          { children: "About" }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/instructor",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Instructor",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/instructor-details",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Instructor Details",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/event-details",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Event Details",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/cart",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children: "My Cart",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/wishlist",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "My Wishlist",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/checkout",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children:
                                                              "Checkout",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/sign-in",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children: "Sign In",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/sign-up",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          {
                                                            children: "Sign Up",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(
                                                      i.default,
                                                      {
                                                        href: "/error",
                                                        children: (0, a.jsx)(
                                                          "a",
                                                          { children: "Error" }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("li", {
                                            children: (0, a.jsx)(i.default, {
                                              href: "/contact",
                                              children: (0, a.jsx)("a", {
                                                children: "Contact",
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "header__search p-relative ml-50 d-none d-md-block",
                                    children: [
                                      (0, a.jsxs)("form", {
                                        action: "#",
                                        children: [
                                          (0, a.jsx)("input", {
                                            type: "text",
                                            placeholder: "Search...",
                                          }),
                                          (0, a.jsx)("button", {
                                            type: "submit",
                                            children: (0, a.jsx)("i", {
                                              className: "fas fa-search",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "header__cart",
                                        children: (0, a.jsxs)("span", {
                                          className: "cart-toggle-btn",
                                          onClick: function () {
                                            o(!x);
                                          },
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "header__cart-icon",
                                              children: (0, a.jsxs)("svg", {
                                                viewBox: "0 0 24 24",
                                                children: [
                                                  (0, a.jsx)("circle", {
                                                    className: "st0",
                                                    cx: "9",
                                                    cy: "21",
                                                    r: "1",
                                                  }),
                                                  (0, a.jsx)("circle", {
                                                    className: "st0",
                                                    cx: "20",
                                                    cy: "21",
                                                    r: "1",
                                                  }),
                                                  (0, a.jsx)("path", {
                                                    className: "st0",
                                                    d: "M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "cart-item",
                                              children: "2",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "header__cart header__cart--responsive header__cart--responsive__white",
                                    children: (0, a.jsxs)("span", {
                                      className: "cart-toggle-btn",
                                      onClick: function () {
                                        o(!x);
                                      },
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "header__cart-icon",
                                          children: (0, a.jsxs)("svg", {
                                            viewBox: "0 0 24 24",
                                            children: [
                                              (0, a.jsx)("circle", {
                                                className: "st0",
                                                cx: "9",
                                                cy: "21",
                                                r: "1",
                                              }),
                                              (0, a.jsx)("circle", {
                                                className: "st0",
                                                cx: "20",
                                                cy: "21",
                                                r: "1",
                                              }),
                                              (0, a.jsx)("path", {
                                                className: "st0",
                                                d: "M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "cart-item",
                                          children: "2",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "header__btn ml-20 d-none d-sm-block",
                                    children: (0, a.jsx)(i.default, {
                                      href: "/contact",
                                      children: (0, a.jsx)("a", {
                                        className: "e-btn",
                                        children: "Try for free",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "sidebar__menu d-xl-none",
                                    children: (0, a.jsxs)("div", {
                                      className: "sidebar-toggle-btn ml-30",
                                      id: "sidebar-toggle",
                                      onClick: function () {
                                        c(!s);
                                      },
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "line",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "line",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "line",
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
                    (0, a.jsx)(n.Z, { menuOpen: s, setMenuOpen: c }),
                    (0, a.jsx)("div", {
                      onClick: function () {
                        return c(!1);
                      },
                      className: s ? "body-overlay show" : "body-overlay",
                    }),
                    (0, a.jsx)(t, { shopOpen: x, setShopOpen: o }),
                    (0, a.jsx)("div", {
                      onClick: function () {
                        return o(!1);
                      },
                      className: x ? "body-overlay show" : "body-overlay",
                    }),
                  ],
                }),
              ],
            });
          });
    },
  },
]);
