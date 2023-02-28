(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [859],
  {
    4184: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var a = typeof n;
              if ("string" === a || "number" === a) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var i = o.apply(null, n);
                  i && e.push(i);
                }
              } else if ("object" === a) {
                if (
                  n.toString !== Object.prototype.toString &&
                  !n.toString.toString().includes("[native code]")
                ) {
                  e.push(n.toString());
                  continue;
                }
                for (var l in n) r.call(n, l) && n[l] && e.push(l);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    5664: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function (e) {
        return (
          (function (e) {
            return !!e && "object" === typeof e;
          })(e) &&
          !(function (e) {
            var t = Object.prototype.toString.call(e);
            return (
              "[object RegExp]" === t ||
              "[object Date]" === t ||
              (function (e) {
                return e.$$typeof === o;
              })(e)
            );
          })(e)
        );
      };
      var o =
        "function" === typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function a(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? l(((n = e), Array.isArray(n) ? [] : {}), e, t)
          : e;
        var n;
      }
      function i(e, t, n) {
        return e.concat(t).map(function (e) {
          return a(e, n);
        });
      }
      function l(e, t, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || i),
          (n.isMergeableObject = n.isMergeableObject || r);
        var o = Array.isArray(t);
        return o === Array.isArray(e)
          ? o
            ? n.arrayMerge(e, t, n)
            : (function (e, t, n) {
                var r = {};
                return (
                  n.isMergeableObject(e) &&
                    Object.keys(e).forEach(function (t) {
                      r[t] = a(e[t], n);
                    }),
                  Object.keys(t).forEach(function (o) {
                    n.isMergeableObject(t[o]) && e[o]
                      ? (r[o] = l(e[o], t[o], n))
                      : (r[o] = a(t[o], n));
                  }),
                  r
                );
              })(e, t, n)
          : a(t, n);
      }
      l.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return l(e, n, t);
        }, {});
      };
      var u = l;
      t.default = u;
    },
    4483: function (e, t, n) {
      "use strict";
      var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      var o = n(7294),
        a = n(3172),
        i = ["active", "paused", "tag", "focusTrapOptions", "_createFocusTrap"],
        l = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" !== typeof t && "function" !== typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (n.setNode = function (e) {
                n.node = e;
              }),
              "undefined" !== typeof document &&
                (n.previouslyFocusedElement = document.activeElement),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            r(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props.focusTrapOptions,
                    t = { returnFocusOnDeactivate: !1 };
                  for (var n in e)
                    e.hasOwnProperty(n) &&
                      "returnFocusOnDeactivate" !== n &&
                      (t[n] = e[n]);
                  (this.focusTrap = this.props._createFocusTrap(this.node, t)),
                    this.props.active && this.focusTrap.activate(),
                    this.props.paused && this.focusTrap.pause();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  if (e.active && !this.props.active) {
                    var t = {
                      returnFocus:
                        this.props.focusTrapOptions.returnFocusOnDeactivate ||
                        !1,
                    };
                    this.focusTrap.deactivate(t);
                  } else
                    !e.active && this.props.active && this.focusTrap.activate();
                  e.paused && !this.props.paused
                    ? this.focusTrap.unpause()
                    : !e.paused && this.props.paused && this.focusTrap.pause();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.focusTrap.deactivate(),
                    !1 !==
                      this.props.focusTrapOptions.returnFocusOnDeactivate &&
                      this.previouslyFocusedElement &&
                      this.previouslyFocusedElement.focus &&
                      this.previouslyFocusedElement.focus();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = { ref: this.setNode };
                  for (var t in this.props)
                    this.props.hasOwnProperty(t) &&
                      -1 === i.indexOf(t) &&
                      (e[t] = this.props[t]);
                  return o.createElement(
                    this.props.tag,
                    e,
                    this.props.children
                  );
                },
              },
            ]),
            t
          );
        })(o.Component);
      (l.defaultProps = {
        active: !0,
        tag: "div",
        paused: !1,
        focusTrapOptions: {},
        _createFocusTrap: a,
      }),
        (e.exports = l);
    },
    3172: function (e, t, n) {
      var r = n(4760),
        o = n(7529),
        a = null;
      function i(e) {
        return setTimeout(e, 0);
      }
      e.exports = function (e, t) {
        var n = document,
          l = "string" === typeof e ? n.querySelector(e) : e,
          u = o({ returnFocusOnDeactivate: !0, escapeDeactivates: !0 }, t),
          s = {
            firstTabbableNode: null,
            lastTabbableNode: null,
            nodeFocusedBeforeActivation: null,
            mostRecentlyFocusedNode: null,
            active: !1,
            paused: !1,
          },
          c = {
            activate: function (e) {
              if (s.active) return;
              P(),
                (s.active = !0),
                (s.paused = !1),
                (s.nodeFocusedBeforeActivation = n.activeElement);
              var t = e && e.onActivate ? e.onActivate : u.onActivate;
              t && t();
              return f(), c;
            },
            deactivate: p,
            pause: function () {
              if (s.paused || !s.active) return;
              (s.paused = !0), d();
            },
            unpause: function () {
              if (!s.paused || !s.active) return;
              (s.paused = !1), f();
            },
          };
        return c;
        function p(e) {
          if (s.active) {
            d(), (s.active = !1), (s.paused = !1);
            var t =
              e && void 0 !== e.onDeactivate ? e.onDeactivate : u.onDeactivate;
            return (
              t && t(),
              (e && void 0 !== e.returnFocus
                ? e.returnFocus
                : u.returnFocusOnDeactivate) &&
                i(function () {
                  E(s.nodeFocusedBeforeActivation);
                }),
              c
            );
          }
        }
        function f() {
          if (s.active)
            return (
              a && a.pause(),
              (a = c),
              P(),
              i(function () {
                E(h());
              }),
              n.addEventListener("focusin", m, !0),
              n.addEventListener("mousedown", v, !0),
              n.addEventListener("touchstart", v, !0),
              n.addEventListener("click", g, !0),
              n.addEventListener("keydown", b, !0),
              c
            );
        }
        function d() {
          if (s.active && a === c)
            return (
              n.removeEventListener("focusin", m, !0),
              n.removeEventListener("mousedown", v, !0),
              n.removeEventListener("touchstart", v, !0),
              n.removeEventListener("click", g, !0),
              n.removeEventListener("keydown", b, !0),
              (a = null),
              c
            );
        }
        function y(e) {
          var t = u[e],
            r = t;
          if (!t) return null;
          if ("string" === typeof t && !(r = n.querySelector(t)))
            throw new Error("`" + e + "` refers to no known node");
          if ("function" === typeof t && !(r = t()))
            throw new Error("`" + e + "` did not return a node");
          return r;
        }
        function h() {
          var e;
          if (
            !(e =
              null !== y("initialFocus")
                ? y("initialFocus")
                : l.contains(n.activeElement)
                ? n.activeElement
                : s.firstTabbableNode || y("fallbackFocus"))
          )
            throw new Error(
              "You can't have a focus-trap without at least one focusable element"
            );
          return e;
        }
        function v(e) {
          l.contains(e.target) ||
            (u.clickOutsideDeactivates
              ? p({ returnFocus: !r.isFocusable(e.target) })
              : e.preventDefault());
        }
        function m(e) {
          l.contains(e.target) ||
            e.target instanceof Document ||
            (e.stopImmediatePropagation(), E(s.mostRecentlyFocusedNode || h()));
        }
        function b(e) {
          if (
            !1 !== u.escapeDeactivates &&
            (function (e) {
              return "Escape" === e.key || "Esc" === e.key || 27 === e.keyCode;
            })(e)
          )
            return e.preventDefault(), void p();
          (function (e) {
            return "Tab" === e.key || 9 === e.keyCode;
          })(e) &&
            (function (e) {
              if ((P(), e.shiftKey && e.target === s.firstTabbableNode))
                return e.preventDefault(), void E(s.lastTabbableNode);
              if (!e.shiftKey && e.target === s.lastTabbableNode)
                e.preventDefault(), E(s.firstTabbableNode);
            })(e);
        }
        function g(e) {
          u.clickOutsideDeactivates ||
            l.contains(e.target) ||
            (e.preventDefault(), e.stopImmediatePropagation());
        }
        function P() {
          var e = r(l);
          (s.firstTabbableNode = e[0] || h()),
            (s.lastTabbableNode = e[e.length - 1] || h());
        }
        function E(e) {
          e !== n.activeElement &&
            (e && e.focus
              ? (e.focus(),
                (s.mostRecentlyFocusedNode = e),
                (function (e) {
                  return (
                    e.tagName &&
                    "input" === e.tagName.toLowerCase() &&
                    "function" === typeof e.select
                  );
                })(e) && e.select())
              : E(h()));
        }
      };
    },
    9090: function (e) {
      function t(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(new Error("Failed to load " + this.src), e);
          });
      }
      function n(e, t) {
        e.onreadystatechange = function () {
          ("complete" != this.readyState && "loaded" != this.readyState) ||
            ((this.onreadystatechange = null), t(null, e));
        };
      }
      e.exports = function (e, r, o) {
        var a = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("script");
        "function" === typeof r && ((o = r), (r = {})),
          (r = r || {}),
          (o = o || function () {}),
          (i.type = r.type || "text/javascript"),
          (i.charset = r.charset || "utf8"),
          (i.async = !("async" in r) || !!r.async),
          (i.src = e),
          r.attrs &&
            (function (e, t) {
              for (var n in t) e.setAttribute(n, t[n]);
            })(i, r.attrs),
          r.text && (i.text = "" + r.text),
          ("onload" in i ? t : n)(i, o),
          i.onload || t(i, o),
          a.appendChild(i);
      };
    },
    743: function (e) {
      !(function (t) {
        var n,
          r,
          o = !1;
        function a(e) {
          if ("undefined" !== typeof document && !o) {
            var t = document.documentElement;
            (r = window.pageYOffset),
              document.documentElement.scrollHeight > window.innerHeight
                ? (t.style.width =
                    "calc(100% - " +
                    (function () {
                      if ("undefined" !== typeof n) return n;
                      var e = document.documentElement,
                        t = document.createElement("div");
                      return (
                        t.setAttribute(
                          "style",
                          "width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"
                        ),
                        e.appendChild(t),
                        (n = t.offsetWidth - t.clientWidth),
                        e.removeChild(t),
                        n
                      );
                    })() +
                    "px)")
                : (t.style.width = "100%"),
              (t.style.position = "fixed"),
              (t.style.top = -r + "px"),
              (t.style.overflow = "hidden"),
              (o = !0);
          }
        }
        function i() {
          if ("undefined" !== typeof document && o) {
            var e = document.documentElement;
            (e.style.width = ""),
              (e.style.position = ""),
              (e.style.top = ""),
              (e.style.overflow = ""),
              window.scroll(0, r),
              (o = !1);
          }
        }
        var l = {
          on: a,
          off: i,
          toggle: function () {
            o ? i() : a();
          },
        };
        "undefined" !== typeof e.exports ? (e.exports = l) : (t.noScroll = l);
      })(this);
    },
    2703: function (e, t, n) {
      "use strict";
      var r = n(414);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, a, i) {
            if (i !== r) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    5697: function (e, t, n) {
      e.exports = n(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    6871: function (e, t, n) {
      "use strict";
      function r() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function o(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null !== n && void 0 !== n ? n : null;
          }.bind(this)
        );
      }
      function a(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      function i(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent)
          throw new Error("Can only polyfill class components");
        if (
          "function" !== typeof e.getDerivedStateFromProps &&
          "function" !== typeof t.getSnapshotBeforeUpdate
        )
          return e;
        var n = null,
          i = null,
          l = null;
        if (
          ("function" === typeof t.componentWillMount
            ? (n = "componentWillMount")
            : "function" === typeof t.UNSAFE_componentWillMount &&
              (n = "UNSAFE_componentWillMount"),
          "function" === typeof t.componentWillReceiveProps
            ? (i = "componentWillReceiveProps")
            : "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              (i = "UNSAFE_componentWillReceiveProps"),
          "function" === typeof t.componentWillUpdate
            ? (l = "componentWillUpdate")
            : "function" === typeof t.UNSAFE_componentWillUpdate &&
              (l = "UNSAFE_componentWillUpdate"),
          null !== n || null !== i || null !== l)
        ) {
          var u = e.displayName || e.name,
            s =
              "function" === typeof e.getDerivedStateFromProps
                ? "getDerivedStateFromProps()"
                : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
              u +
              " uses " +
              s +
              " but also contains the following legacy lifecycles:" +
              (null !== n ? "\n  " + n : "") +
              (null !== i ? "\n  " + i : "") +
              (null !== l ? "\n  " + l : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
          );
        }
        if (
          ("function" === typeof e.getDerivedStateFromProps &&
            ((t.componentWillMount = r), (t.componentWillReceiveProps = o)),
          "function" === typeof t.getSnapshotBeforeUpdate)
        ) {
          if ("function" !== typeof t.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
            );
          t.componentWillUpdate = a;
          var c = t.componentDidUpdate;
          t.componentDidUpdate = function (e, t, n) {
            var r = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : n;
            c.call(this, e, t, r);
          };
        }
        return e;
      }
      n.r(t),
        n.d(t, {
          polyfill: function () {
            return i;
          },
        }),
        (r.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0),
        (a.__suppressDeprecationWarning = !0);
    },
    8088: function (e, t, n) {
      "use strict";
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(7294),
        a = l(n(5697)),
        i = l(n(3935));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var c = "function" === typeof i.default.createPortal,
        p = "undefined" !== typeof window,
        f = (function (e) {
          function t() {
            return (
              u(this, t),
              s(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            r(t, [
              {
                key: "componentWillMount",
                value: function () {
                  p &&
                    (this.props.container
                      ? (this.container = this.props.container)
                      : ((this.container = document.createElement("div")),
                        document.body.appendChild(this.container)),
                    this.renderLayer());
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.renderLayer();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  c || i.default.unmountComponentAtNode(this.container),
                    this.props.container ||
                      document.body.removeChild(this.container);
                },
              },
              {
                key: "renderLayer",
                value: function () {
                  c ||
                    i.default.unstable_renderSubtreeIntoContainer(
                      this,
                      this.props.children,
                      this.container
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  return c
                    ? i.default.createPortal(
                        this.props.children,
                        this.container
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(o.Component);
      (f.propTypes = { children: a.default.node, container: a.default.object }),
        (t.Z = f);
    },
    722: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = n(7294),
        l = (r = i) && r.__esModule ? r : { default: r },
        u = n(5741),
        s = n(3807);
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var f = (function (e) {
        function t() {
          var e, n, r;
          c(this, t);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (n = r =
              p(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
            (r.mounted = !1),
            (r.isReady = !1),
            (r.isPlaying = !1),
            (r.isLoading = !0),
            (r.loadOnReady = null),
            (r.startOnPlay = !0),
            (r.seekOnPlay = null),
            (r.onDurationCalled = !1),
            (r.getInternalPlayer = function (e) {
              return r.player ? r.player[e] : null;
            }),
            (r.progress = function () {
              if (r.props.url && r.player && r.isReady) {
                var e = r.getCurrentTime() || 0,
                  t = r.getSecondsLoaded(),
                  n = r.getDuration();
                if (n) {
                  var o = { playedSeconds: e, played: e / n };
                  null !== t && ((o.loadedSeconds = t), (o.loaded = t / n)),
                    (o.played === r.prevPlayed && o.loaded === r.prevLoaded) ||
                      r.props.onProgress(o),
                    (r.prevPlayed = o.played),
                    (r.prevLoaded = o.loaded);
                }
              }
              r.progressTimeout = setTimeout(
                r.progress,
                r.props.progressFrequency || r.props.progressInterval
              );
            }),
            (r.onReady = function () {
              if (r.mounted) {
                (r.isReady = !0), (r.isLoading = !1);
                var e = r.props,
                  t = e.onReady,
                  n = e.playing,
                  o = e.volume,
                  a = e.muted;
                t(),
                  a || null === o || r.player.setVolume(o),
                  r.loadOnReady
                    ? (r.player.load(r.loadOnReady, !0), (r.loadOnReady = null))
                    : n && r.player.play(),
                  r.onDurationCheck();
              }
            }),
            (r.onPlay = function () {
              (r.isPlaying = !0), (r.isLoading = !1);
              var e = r.props,
                t = e.onStart,
                n = e.onPlay,
                o = e.playbackRate;
              r.startOnPlay &&
                (r.player.setPlaybackRate && r.player.setPlaybackRate(o),
                t(),
                (r.startOnPlay = !1)),
                n(),
                r.seekOnPlay && (r.seekTo(r.seekOnPlay), (r.seekOnPlay = null)),
                r.onDurationCheck();
            }),
            (r.onPause = function (e) {
              (r.isPlaying = !1), r.isLoading || r.props.onPause(e);
            }),
            (r.onEnded = function () {
              var e = r.props,
                t = e.activePlayer,
                n = e.loop,
                o = e.onEnded;
              t.loopOnEnded && n && r.seekTo(0), n || ((r.isPlaying = !1), o());
            }),
            (r.onDurationCheck = function () {
              clearTimeout(r.durationCheckTimeout);
              var e = r.getDuration();
              e
                ? r.onDurationCalled ||
                  (r.props.onDuration(e), (r.onDurationCalled = !0))
                : (r.durationCheckTimeout = setTimeout(r.onDurationCheck, 100));
            }),
            (r.onLoaded = function () {
              r.isLoading = !1;
            }),
            (r.ref = function (e) {
              e && (r.player = e);
            }),
            p(r, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          a(t, [
            {
              key: "componentDidMount",
              value: function () {
                (this.mounted = !0),
                  this.player.load(this.props.url),
                  this.progress();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.progressTimeout),
                  clearTimeout(this.durationCheckTimeout),
                  this.isReady && this.player.stop(),
                  this.player.disablePIP && this.player.disablePIP(),
                  (this.mounted = !1);
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function (e) {
                var t = this,
                  n = this.props,
                  r = n.url,
                  o = n.playing,
                  a = n.volume,
                  i = n.muted,
                  l = n.playbackRate,
                  u = n.pip;
                if (!(0, s.isEqual)(r, e.url)) {
                  if (this.isLoading)
                    return (
                      console.warn(
                        "ReactPlayer: the attempt to load " +
                          e.url +
                          " is being deferred until the player has loaded"
                      ),
                      void (this.loadOnReady = e.url)
                    );
                  (this.isLoading = !0),
                    (this.startOnPlay = !0),
                    (this.onDurationCalled = !1),
                    this.player.load(e.url, this.isReady);
                }
                o || !e.playing || this.isPlaying || this.player.play(),
                  o && !e.playing && this.isPlaying && this.player.pause(),
                  !u && e.pip && this.player.enablePIP
                    ? this.player.enablePIP()
                    : u &&
                      !e.pip &&
                      this.player.disablePIP &&
                      this.player.disablePIP(),
                  a !== e.volume &&
                    null !== e.volume &&
                    this.player.setVolume(e.volume),
                  i !== e.muted &&
                    (e.muted
                      ? this.player.mute()
                      : (this.player.unmute(),
                        null !== e.volume &&
                          setTimeout(function () {
                            return t.player.setVolume(e.volume);
                          }))),
                  l !== e.playbackRate &&
                    this.player.setPlaybackRate &&
                    this.player.setPlaybackRate(e.playbackRate);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.isReady ? this.player.getDuration() : null;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.isReady ? this.player.getCurrentTime() : null;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.isReady ? this.player.getSecondsLoaded() : null;
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                var t = this;
                if (!this.isReady && 0 !== e)
                  return (
                    (this.seekOnPlay = e),
                    void setTimeout(function () {
                      t.seekOnPlay = null;
                    }, 5e3)
                  );
                if (e > 0 && e < 1) {
                  var n = this.player.getDuration();
                  return n
                    ? void this.player.seekTo(n * e)
                    : void console.warn(
                        "ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available"
                      );
                }
                this.player.seekTo(e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.activePlayer;
                return e
                  ? l.default.createElement(
                      e,
                      o({}, this.props, {
                        ref: this.ref,
                        onReady: this.onReady,
                        onPlay: this.onPlay,
                        onPause: this.onPause,
                        onEnded: this.onEnded,
                        onLoaded: this.onLoaded,
                      })
                    )
                  : null;
              },
            },
          ]),
          t
        );
      })(i.Component);
      (f.displayName = "Player"),
        (f.propTypes = u.propTypes),
        (f.defaultProps = u.defaultProps),
        (t.default = f);
    },
    390: function (e, t, n) {
      "use strict";
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(356);
      var i = n(2648);
      var l = n(868);
      var u = n(1972);
      var s = n(993);
      var c = n(8018);
      var p = n(9482);
      var f = n(6807);
      var d = n(143);
      var y = n(4926);
      var h = n(7294),
        v = w(h),
        m = n(5741),
        b = n(3807),
        g = w(n(6497)),
        P = w(n(722)),
        E = w(n(4560));
      function w(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function k(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      function O(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function _(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var S = Object.keys(m.propTypes),
        C = [],
        T = (function (e) {
          function t() {
            var e, n, r;
            O(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r =
                _(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
              (r.config = (0, b.getConfig)(r.props, m.defaultProps, !0)),
              (r.getDuration = function () {
                return r.player ? r.player.getDuration() : null;
              }),
              (r.getCurrentTime = function () {
                return r.player ? r.player.getCurrentTime() : null;
              }),
              (r.getSecondsLoaded = function () {
                return r.player ? r.player.getSecondsLoaded() : null;
              }),
              (r.getInternalPlayer = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "player";
                return r.player ? r.player.getInternalPlayer(e) : null;
              }),
              (r.seekTo = function (e) {
                if (!r.player) return null;
                r.player.seekTo(e);
              }),
              (r.onReady = function () {
                r.props.onReady(r);
              }),
              (r.wrapperRef = function (e) {
                r.wrapper = e;
              }),
              (r.activePlayerRef = function (e) {
                r.player = e;
              }),
              _(r, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.progressFrequency) {
                    console.warn(
                      "ReactPlayer: %cprogressFrequency%c is deprecated, please use %cprogressInterval%c instead",
                      "font-weight: bold",
                      "",
                      "font-weight: bold",
                      ""
                    );
                  }
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  return !(0, b.isEqual)(this.props, e);
                },
              },
              {
                key: "componentWillUpdate",
                value: function (e) {
                  this.config = (0, b.getConfig)(e, m.defaultProps);
                },
              },
              {
                key: "getActivePlayer",
                value: function (e) {
                  for (
                    var t = [].concat(k(C), k(g.default)), n = 0;
                    n < t.length;
                    n++
                  ) {
                    var r = t[n];
                    if (r.canPlay(e)) return r;
                  }
                  return y.FilePlayer;
                },
              },
              {
                key: "renderActivePlayer",
                value: function (e) {
                  if (!e) return null;
                  var t = this.getActivePlayer(e);
                  return v.default.createElement(
                    P.default,
                    r({}, this.props, {
                      key: t.displayName,
                      ref: this.activePlayerRef,
                      config: this.config,
                      activePlayer: t,
                      onReady: this.onReady,
                    })
                  );
                },
              },
              {
                key: "sortPlayers",
                value: function (e, t) {
                  return e && t ? (e.key < t.key ? -1 : 1) : 0;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.url,
                    n = e.style,
                    o = e.width,
                    a = e.height,
                    i = e.wrapper,
                    l = (0, b.omit)(this.props, S, m.DEPRECATED_CONFIG_PROPS),
                    u = this.renderActivePlayer(t),
                    s = (0, E.default)(t, this.config),
                    c = [u].concat(k(s)).sort(this.sortPlayers);
                  return v.default.createElement(
                    i,
                    r(
                      {
                        ref: this.wrapperRef,
                        style: r({}, n, { width: o, height: a }),
                      },
                      l
                    ),
                    c
                  );
                },
              },
            ]),
            t
          );
        })(h.Component);
      (T.addCustomPlayer = function (e) {
        C.push(e);
      }),
        (T.removeCustomPlayers = function () {
          C = [];
        }),
        (T.displayName = "ReactPlayer"),
        (T.propTypes = m.propTypes),
        (T.defaultProps = m.defaultProps),
        (T.canPlay = function (e) {
          for (
            var t = [].concat(k(C), k(g.default)), n = 0;
            n < t.length;
            n++
          ) {
            if (t[n].canPlay(e)) return !0;
          }
          return !1;
        }),
        (T.canEnablePIP = function (e) {
          for (
            var t = [].concat(k(C), k(g.default)), n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n];
            if (r.canEnablePIP && r.canEnablePIP(e)) return !0;
          }
          return !1;
        }),
        (t.ZP = T);
    },
    6807: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DailyMotion = void 0);
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                r = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(r = (i = l.next()).done) &&
                  (n.push(i.value), !t || n.length !== t);
                  r = !0
                );
              } catch (u) {
                (o = !0), (a = u);
              } finally {
                try {
                  !r && l.return && l.return();
                } finally {
                  if (o) throw a;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        },
        a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = n(7294),
        l = c(i),
        u = n(3807),
        s = c(n(1523));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var d =
          /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/,
        y = (t.DailyMotion = (function (e) {
          function t() {
            var e, n, r;
            p(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r =
                f(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
              (r.callPlayer = u.callPlayer),
              (r.onDurationChange = function () {
                var e = r.getDuration();
                r.props.onDuration(e);
              }),
              (r.mute = function () {
                r.callPlayer("setMuted", !0);
              }),
              (r.unmute = function () {
                r.callPlayer("setMuted", !1);
              }),
              (r.ref = function (e) {
                r.container = e;
              }),
              f(r, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            a(t, [
              {
                key: "load",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    a = n.controls,
                    i = n.config,
                    l = n.onError,
                    s = n.playing,
                    c = e.match(d),
                    p = o(c, 2)[1];
                  this.player
                    ? this.player.load(p, {
                        start: (0, u.parseStartTime)(e),
                        autoplay: s,
                      })
                    : (0, u.getSDK)(
                        "https://api.dmcdn.net/all.js",
                        "DM",
                        "dmAsyncInit",
                        function (e) {
                          return e.player;
                        }
                      ).then(function (n) {
                        if (t.container) {
                          var o = n.player;
                          t.player = new o(t.container, {
                            width: "100%",
                            height: "100%",
                            video: p,
                            params: r(
                              {
                                controls: a,
                                autoplay: t.props.playing,
                                mute: t.props.muted,
                                start: (0, u.parseStartTime)(e),
                                origin: window.location.origin,
                              },
                              i.dailymotion.params
                            ),
                            events: {
                              apiready: t.props.onReady,
                              seeked: function () {
                                return t.props.onSeek(t.player.currentTime);
                              },
                              video_end: t.props.onEnded,
                              durationchange: t.onDurationChange,
                              pause: t.props.onPause,
                              playing: t.props.onPlay,
                              waiting: t.props.onBuffer,
                              error: function (e) {
                                return l(e);
                              },
                            },
                          });
                        }
                      }, l);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.player.duration || null;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.player.currentTime;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return this.player.bufferedTime;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = r(
                    { width: "100%", height: "100%", backgroundColor: "black" },
                    this.props.style
                  );
                  return l.default.createElement(
                    "div",
                    { style: e },
                    l.default.createElement("div", { ref: this.ref })
                  );
                },
              },
            ]),
            t
          );
        })(i.Component));
      (y.displayName = "DailyMotion"),
        (y.canPlay = function (e) {
          return d.test(e);
        }),
        (y.loopOnEnded = !0),
        (t.default = (0, s.default)(y));
    },
    1972: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Facebook = void 0);
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(7294),
        a = u(o),
        i = n(3807),
        l = u(n(1523));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var p = "//connect.facebook.net/en_US/sdk.js",
        f = "fbAsyncInit",
        d = /facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/,
        y = "facebook-player-",
        h = (t.Facebook = (function (e) {
          function t() {
            var e, n, r;
            s(this, t);
            for (var o = arguments.length, a = Array(o), l = 0; l < o; l++)
              a[l] = arguments[l];
            return (
              (n = r =
                c(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
              (r.callPlayer = i.callPlayer),
              (r.playerID = y + (0, i.randomString)()),
              (r.mute = function () {
                r.callPlayer("mute");
              }),
              (r.unmute = function () {
                r.callPlayer("unmute");
              }),
              c(r, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            r(t, [
              {
                key: "load",
                value: function (e, t) {
                  var n = this;
                  t
                    ? (0, i.getSDK)(p, "FB", f).then(function (e) {
                        return e.XFBML.parse();
                      })
                    : (0, i.getSDK)(p, "FB", f).then(function (e) {
                        e.init({
                          appId: n.props.config.facebook.appId,
                          xfbml: !0,
                          version: "v2.5",
                        }),
                          e.Event.subscribe("xfbml.render", function (e) {
                            n.props.onLoaded();
                          }),
                          e.Event.subscribe("xfbml.ready", function (e) {
                            "video" === e.type &&
                              e.id === n.playerID &&
                              ((n.player = e.instance),
                              n.player.subscribe(
                                "startedPlaying",
                                n.props.onPlay
                              ),
                              n.player.subscribe("paused", n.props.onPause),
                              n.player.subscribe(
                                "finishedPlaying",
                                n.props.onEnded
                              ),
                              n.player.subscribe(
                                "startedBuffering",
                                n.props.onBuffer
                              ),
                              n.player.subscribe("error", n.props.onError),
                              n.props.muted || n.callPlayer("unmute"),
                              n.props.onReady(),
                              (document
                                .getElementById(n.playerID)
                                .querySelector("iframe").style.visibility =
                                "visible"));
                          });
                      });
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentPosition");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  return a.default.createElement("div", {
                    style: {
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                    },
                    id: this.playerID,
                    className: "fb-video",
                    "data-href": this.props.url,
                    "data-autoplay": this.props.playing ? "true" : "false",
                    "data-allowfullscreen": "true",
                    "data-controls": this.props.controls ? "true" : "false",
                  });
                },
              },
            ]),
            t
          );
        })(o.Component));
      (h.displayName = "Facebook"),
        (h.canPlay = function (e) {
          return d.test(e);
        }),
        (h.loopOnEnded = !0),
        (t.default = (0, l.default)(h));
    },
    4926: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FilePlayer = void 0);
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(7294),
        i = s(a),
        l = n(3807),
        u = s(n(1523));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var f =
          "undefined" !== typeof navigator &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !window.MSStream,
        d =
          /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
        y = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i,
        h = /\.(m3u8)($|\?)/i,
        v = /\.(mpd)($|\?)/i,
        m = /www\.dropbox\.com\/.+/;
      function b(e) {
        if (e instanceof Array) {
          var t = !0,
            n = !1,
            r = void 0;
          try {
            for (
              var o, a = e[Symbol.iterator]();
              !(t = (o = a.next()).done);
              t = !0
            ) {
              var i = o.value;
              if ("string" === typeof i && b(i)) return !0;
              if (b(i.src)) return !0;
            }
          } catch (u) {
            (n = !0), (r = u);
          } finally {
            try {
              !t && a.return && a.return();
            } finally {
              if (n) throw r;
            }
          }
          return !1;
        }
        return (
          !!(0, l.isMediaStream)(e) ||
          d.test(e) ||
          y.test(e) ||
          h.test(e) ||
          v.test(e)
        );
      }
      var g = (t.FilePlayer = (function (e) {
        function t() {
          var e, n, o;
          c(this, t);
          for (var a = arguments.length, l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u];
          return (
            (n = o =
              p(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(l)
                )
              )),
            (o.onDisablePIP = function (e) {
              var t = o.props,
                n = t.onDisablePIP,
                r = t.playing;
              n(e), r && o.play();
            }),
            (o.onSeek = function (e) {
              o.props.onSeek(e.target.currentTime);
            }),
            (o.mute = function () {
              o.player.muted = !0;
            }),
            (o.unmute = function () {
              o.player.muted = !1;
            }),
            (o.renderSourceElement = function (e, t) {
              return "string" === typeof e
                ? i.default.createElement("source", { key: t, src: e })
                : i.default.createElement("source", r({ key: t }, e));
            }),
            (o.renderTrack = function (e, t) {
              return i.default.createElement("track", r({ key: t }, e));
            }),
            (o.ref = function (e) {
              o.player = e;
            }),
            p(o, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: "componentDidMount",
              value: function () {
                this.addListeners(), f && this.player.load();
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function (e) {
                this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
                  this.removeListeners();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
                  this.addListeners();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListeners();
              },
            },
            {
              key: "addListeners",
              value: function () {
                var e = this.props,
                  t = e.onReady,
                  n = e.onPlay,
                  r = e.onPause,
                  o = e.onEnded,
                  a = e.onError,
                  i = e.playsinline,
                  l = e.onEnablePIP;
                this.player.addEventListener("canplay", t),
                  this.player.addEventListener("play", n),
                  this.player.addEventListener("pause", r),
                  this.player.addEventListener("seeked", this.onSeek),
                  this.player.addEventListener("ended", o),
                  this.player.addEventListener("error", a),
                  this.player.addEventListener("enterpictureinpicture", l),
                  this.player.addEventListener(
                    "leavepictureinpicture",
                    this.onDisablePIP
                  ),
                  i &&
                    (this.player.setAttribute("playsinline", ""),
                    this.player.setAttribute("webkit-playsinline", ""));
              },
            },
            {
              key: "removeListeners",
              value: function () {
                var e = this.props,
                  t = e.onReady,
                  n = e.onPlay,
                  r = e.onPause,
                  o = e.onEnded,
                  a = e.onError,
                  i = e.onEnablePIP;
                this.player.removeEventListener("canplay", t),
                  this.player.removeEventListener("play", n),
                  this.player.removeEventListener("pause", r),
                  this.player.removeEventListener("seeked", this.onSeek),
                  this.player.removeEventListener("ended", o),
                  this.player.removeEventListener("error", a),
                  this.player.removeEventListener("enterpictureinpicture", i),
                  this.player.removeEventListener(
                    "leavepictureinpicture",
                    this.onDisablePIP
                  );
              },
            },
            {
              key: "shouldUseAudio",
              value: function (e) {
                return (
                  !e.config.file.forceVideo &&
                  !e.config.file.attributes.poster &&
                  (d.test(e.url) || e.config.file.forceAudio)
                );
              },
            },
            {
              key: "shouldUseHLS",
              value: function (e) {
                return (h.test(e) && !f) || this.props.config.file.forceHLS;
              },
            },
            {
              key: "shouldUseDASH",
              value: function (e) {
                return v.test(e) || this.props.config.file.forceDASH;
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this,
                  n = this.props.config.file,
                  r = n.hlsVersion,
                  o = n.dashVersion;
                if (
                  (this.shouldUseHLS(e) &&
                    (0, l.getSDK)(
                      "https://cdnjs.cloudflare.com/ajax/libs/hls.js/VERSION/hls.min.js".replace(
                        "VERSION",
                        r
                      ),
                      "Hls"
                    ).then(function (n) {
                      (t.hls = new n(t.props.config.file.hlsOptions)),
                        t.hls.on(n.Events.ERROR, function (e, r) {
                          t.props.onError(e, r, t.hls, n);
                        }),
                        t.hls.loadSource(e),
                        t.hls.attachMedia(t.player);
                    }),
                  this.shouldUseDASH(e) &&
                    (0, l.getSDK)(
                      "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace(
                        "VERSION",
                        o
                      ),
                      "dashjs"
                    ).then(function (n) {
                      (t.dash = n.MediaPlayer().create()),
                        t.dash.initialize(t.player, e, t.props.playing),
                        t.dash.getDebug().setLogToBrowserConsole(!1);
                    }),
                  e instanceof Array)
                )
                  this.player.load();
                else if ((0, l.isMediaStream)(e))
                  try {
                    this.player.srcObject = e;
                  } catch (a) {
                    this.player.src = window.URL.createObjectURL(e);
                  }
              },
            },
            {
              key: "play",
              value: function () {
                var e = this.player.play();
                e && e.catch(this.props.onError);
              },
            },
            {
              key: "pause",
              value: function () {
                this.player.pause();
              },
            },
            {
              key: "stop",
              value: function () {
                this.player.removeAttribute("src"),
                  this.hls && this.hls.destroy(),
                  this.dash && this.dash.reset();
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.player.currentTime = e;
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.player.volume = e;
              },
            },
            {
              key: "enablePIP",
              value: function () {
                this.player.requestPictureInPicture &&
                  document.pictureInPictureElement !== this.player &&
                  this.player.requestPictureInPicture();
              },
            },
            {
              key: "disablePIP",
              value: function () {
                document.exitPictureInPicture &&
                  document.pictureInPictureElement === this.player &&
                  document.exitPictureInPicture();
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.player.playbackRate = e;
              },
            },
            {
              key: "getDuration",
              value: function () {
                if (!this.player) return null;
                var e = this.player,
                  t = e.duration,
                  n = e.seekable;
                return t === 1 / 0 && n.length > 0 ? n.end(n.length - 1) : t;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.player ? this.player.currentTime : null;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                if (!this.player) return null;
                var e = this.player.buffered;
                if (0 === e.length) return 0;
                var t = e.end(e.length - 1),
                  n = this.getDuration();
                return t > n ? n : t;
              },
            },
            {
              key: "getSource",
              value: function (e) {
                var t = this.shouldUseHLS(e),
                  n = this.shouldUseDASH(e);
                if (!(e instanceof Array || (0, l.isMediaStream)(e) || t || n))
                  return m.test(e)
                    ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com")
                    : e;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.url,
                  n = e.playing,
                  o = e.loop,
                  a = e.controls,
                  l = e.muted,
                  u = e.config,
                  s = e.width,
                  c = e.height,
                  p = this.shouldUseAudio(this.props) ? "audio" : "video",
                  f = {
                    width: "auto" === s ? s : "100%",
                    height: "auto" === c ? c : "100%",
                  };
                return i.default.createElement(
                  p,
                  r(
                    {
                      ref: this.ref,
                      src: this.getSource(t),
                      style: f,
                      preload: "auto",
                      autoPlay: n || void 0,
                      controls: a,
                      muted: l,
                      loop: o,
                    },
                    u.file.attributes
                  ),
                  t instanceof Array && t.map(this.renderSourceElement),
                  u.file.tracks.map(this.renderTrack)
                );
              },
            },
          ]),
          t
        );
      })(a.Component));
      (g.displayName = "FilePlayer"),
        (g.canPlay = b),
        (g.canEnablePIP = function (e) {
          return b(e) && !!document.pictureInPictureEnabled && !d.test(e);
        }),
        (t.default = (0, u.default)(g));
    },
    143: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Mixcloud = void 0);
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(7294),
        i = s(a),
        l = n(3807),
        u = s(n(1523));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var f = /mixcloud\.com\/([^/]+\/[^/]+)/,
        d = (t.Mixcloud = (function (e) {
          function t() {
            var e, n, r;
            c(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r =
                p(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
              (r.callPlayer = l.callPlayer),
              (r.duration = null),
              (r.currentTime = null),
              (r.secondsLoaded = null),
              (r.mute = function () {}),
              (r.unmute = function () {}),
              (r.ref = function (e) {
                r.iframe = e;
              }),
              p(r, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "load",
                value: function (e) {
                  var t = this;
                  (0, l.getSDK)(
                    "//widget.mixcloud.com/media/js/widgetApi.js",
                    "Mixcloud"
                  ).then(function (e) {
                    (t.player = e.PlayerWidget(t.iframe)),
                      t.player.ready.then(function () {
                        t.player.events.play.on(t.props.onPlay),
                          t.player.events.pause.on(t.props.onPause),
                          t.player.events.ended.on(t.props.onEnded),
                          t.player.events.error.on(t.props.error),
                          t.player.events.progress.on(function (e, n) {
                            (t.currentTime = e), (t.duration = n);
                          }),
                          t.props.onReady();
                      });
                  }, this.props.onError);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              { key: "setVolume", value: function (e) {} },
              {
                key: "getDuration",
                value: function () {
                  return this.duration;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.currentTime;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.url,
                    n = e.config,
                    o = t.match(f)[1],
                    a = (0, l.queryString)(
                      r({}, n.mixcloud.options, { feed: "/" + o + "/" })
                    );
                  return i.default.createElement("iframe", {
                    key: o,
                    ref: this.ref,
                    style: { width: "100%", height: "100%" },
                    src: "https://www.mixcloud.com/widget/iframe/?" + a,
                    frameBorder: "0",
                  });
                },
              },
            ]),
            t
          );
        })(a.Component));
      (d.displayName = "Mixcloud"),
        (d.canPlay = function (e) {
          return f.test(e);
        }),
        (t.default = (0, u.default)(d));
    },
    2648: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SoundCloud = void 0);
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(7294),
        i = s(a),
        l = n(3807),
        u = s(n(1523));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var f = /(soundcloud\.com|snd\.sc)\/.+$/,
        d = (t.SoundCloud = (function (e) {
          function t() {
            var e, n, r;
            c(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r =
                p(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
              (r.callPlayer = l.callPlayer),
              (r.duration = null),
              (r.currentTime = null),
              (r.fractionLoaded = null),
              (r.mute = function () {
                r.setVolume(0);
              }),
              (r.unmute = function () {
                null !== r.props.volume && r.setVolume(r.props.volume);
              }),
              (r.ref = function (e) {
                r.iframe = e;
              }),
              p(r, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "load",
                value: function (e, t) {
                  var n = this;
                  (0, l.getSDK)(
                    "https://w.soundcloud.com/player/api.js",
                    "SC"
                  ).then(function (o) {
                    if (n.iframe) {
                      var a = o.Widget.Events,
                        i = a.PLAY,
                        l = a.PLAY_PROGRESS,
                        u = a.PAUSE,
                        s = a.FINISH,
                        c = a.ERROR;
                      t ||
                        ((n.player = o.Widget(n.iframe)),
                        n.player.bind(i, n.props.onPlay),
                        n.player.bind(u, n.props.onPause),
                        n.player.bind(l, function (e) {
                          (n.currentTime = e.currentPosition / 1e3),
                            (n.fractionLoaded = e.loadedProgress);
                        }),
                        n.player.bind(s, function () {
                          return n.props.onEnded();
                        }),
                        n.player.bind(c, function (e) {
                          return n.props.onError(e);
                        })),
                        n.player.load(
                          e,
                          r({}, n.props.config.soundcloud.options, {
                            callback: function () {
                              n.player.getDuration(function (e) {
                                (n.duration = e / 1e3), n.props.onReady();
                              });
                            },
                          })
                        );
                    }
                  });
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seekTo", 1e3 * e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", 100 * e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.duration;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.currentTime;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return this.fractionLoaded * this.duration;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = r(
                    { width: "100%", height: "100%" },
                    this.props.style
                  );
                  return i.default.createElement("iframe", {
                    ref: this.ref,
                    src:
                      "https://w.soundcloud.com/player/?url=" +
                      encodeURIComponent(this.props.url),
                    style: e,
                    frameBorder: 0,
                  });
                },
              },
            ]),
            t
          );
        })(a.Component));
      (d.displayName = "SoundCloud"),
        (d.canPlay = function (e) {
          return f.test(e);
        }),
        (d.loopOnEnded = !0),
        (t.default = (0, u.default)(d));
    },
    993: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Streamable = void 0);
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(7294),
        a = u(o),
        i = n(3807),
        l = u(n(1523));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var p = /streamable\.com\/([a-z0-9]+)$/,
        f = (t.Streamable = (function (e) {
          function t() {
            var e, n, r;
            s(this, t);
            for (var o = arguments.length, a = Array(o), l = 0; l < o; l++)
              a[l] = arguments[l];
            return (
              (n = r =
                c(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
              (r.callPlayer = i.callPlayer),
              (r.duration = null),
              (r.currentTime = null),
              (r.secondsLoaded = null),
              (r.mute = function () {
                r.callPlayer("mute");
              }),
              (r.unmute = function () {
                r.callPlayer("unmute");
              }),
              (r.ref = function (e) {
                r.iframe = e;
              }),
              c(r, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            r(t, [
              {
                key: "load",
                value: function (e) {
                  var t = this;
                  (0, i.getSDK)(
                    "//cdn.embed.ly/player-0.1.0.min.js",
                    "playerjs"
                  ).then(function (e) {
                    t.iframe &&
                      ((t.player = new e.Player(t.iframe)),
                      t.player.setLoop(t.props.loop),
                      t.player.on("ready", t.props.onReady),
                      t.player.on("play", t.props.onPlay),
                      t.player.on("pause", t.props.onPause),
                      t.player.on("seeked", t.props.onSeek),
                      t.player.on("ended", t.props.onEnded),
                      t.player.on("error", t.props.onError),
                      t.player.on("timeupdate", function (e) {
                        var n = e.duration,
                          r = e.seconds;
                        (t.duration = n), (t.currentTime = r);
                      }),
                      t.player.on("buffered", function (e) {
                        var n = e.percent;
                        t.duration && (t.secondsLoaded = t.duration * n);
                      }),
                      t.props.muted && t.player.mute());
                  }, this.props.onError);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("setCurrentTime", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", 100 * e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.duration;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.currentTime;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return this.secondsLoaded;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.url.match(p)[1];
                  return a.default.createElement("iframe", {
                    ref: this.ref,
                    src: "https://streamable.com/o/" + e,
                    frameBorder: "0",
                    scrolling: "no",
                    style: { width: "100%", height: "100%" },
                    allowFullScreen: !0,
                  });
                },
              },
            ]),
            t
          );
        })(o.Component));
      (f.displayName = "Streamable"),
        (f.canPlay = function (e) {
          return p.test(e);
        }),
        (t.default = (0, l.default)(f));
    },
    9482: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Twitch = void 0);
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(7294),
        i = s(a),
        l = n(3807),
        u = s(n(1523));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var f = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
        d = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,
        y = "twitch-player-",
        h = (t.Twitch = (function (e) {
          function t() {
            var e, n, r;
            c(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r =
                p(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
              (r.callPlayer = l.callPlayer),
              (r.playerID = y + (0, l.randomString)()),
              (r.mute = function () {
                r.callPlayer("setMuted", !0);
              }),
              (r.unmute = function () {
                r.callPlayer("setMuted", !1);
              }),
              p(r, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "load",
                value: function (e, t) {
                  var n = this,
                    o = this.props,
                    a = o.playsinline,
                    i = o.onError,
                    u = o.config,
                    s = d.test(e),
                    c = s ? e.match(d)[1] : e.match(f)[1];
                  t
                    ? s
                      ? this.player.setChannel(c)
                      : this.player.setVideo("v" + c)
                    : (0, l.getSDK)(
                        "https://player.twitch.tv/js/embed/v1.js",
                        "Twitch"
                      ).then(function (e) {
                        n.player = new e.Player(
                          n.playerID,
                          r(
                            {
                              video: s ? "" : c,
                              channel: s ? c : "",
                              height: "100%",
                              width: "100%",
                              playsinline: a,
                              autoplay: n.props.playing,
                              muted: n.props.muted,
                            },
                            u.twitch.options
                          )
                        );
                        var t = e.Player,
                          o = t.READY,
                          i = t.PLAYING,
                          l = t.PAUSE,
                          p = t.ENDED;
                        n.player.addEventListener(o, n.props.onReady),
                          n.player.addEventListener(i, n.props.onPlay),
                          n.player.addEventListener(l, n.props.onPause),
                          n.player.addEventListener(p, n.props.onEnded);
                      }, i);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentTime");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  return i.default.createElement("div", {
                    style: { width: "100%", height: "100%" },
                    id: this.playerID,
                  });
                },
              },
            ]),
            t
          );
        })(a.Component));
      (h.displayName = "Twitch"),
        (h.canPlay = function (e) {
          return f.test(e) || d.test(e);
        }),
        (h.loopOnEnded = !0),
        (t.default = (0, u.default)(h));
    },
    868: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Vimeo = void 0);
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(7294),
        i = s(a),
        l = n(3807),
        u = s(n(1523));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var f = /vimeo\.com\/.+/,
        d = /vimeo\.com\/external\/.+\.mp4/,
        y = (t.Vimeo = (function (e) {
          function t() {
            var e, n, r;
            c(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r =
                p(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
              (r.callPlayer = l.callPlayer),
              (r.duration = null),
              (r.currentTime = null),
              (r.secondsLoaded = null),
              (r.mute = function () {
                r.setVolume(0);
              }),
              (r.unmute = function () {
                null !== r.props.volume && r.setVolume(r.props.volume);
              }),
              (r.ref = function (e) {
                r.container = e;
              }),
              p(r, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "load",
                value: function (e) {
                  var t = this;
                  (this.duration = null),
                    (0, l.getSDK)(
                      "https://player.vimeo.com/api/player.js",
                      "Vimeo"
                    ).then(function (n) {
                      t.container &&
                        ((t.player = new n.Player(
                          t.container,
                          r({}, t.props.config.vimeo.playerOptions, {
                            url: e,
                            autoplay: t.props.playing,
                            muted: t.props.muted,
                            loop: t.props.loop,
                          })
                        )),
                        t.player
                          .ready()
                          .then(function () {
                            var e = t.container.querySelector("iframe");
                            (e.style.width = "100%"), (e.style.height = "100%");
                          })
                          .catch(t.props.onError),
                        t.player.on("loaded", function () {
                          t.props.onReady(), t.refreshDuration();
                        }),
                        t.player.on("play", function () {
                          t.props.onPlay(), t.refreshDuration();
                        }),
                        t.player.on("pause", t.props.onPause),
                        t.player.on("seeked", function (e) {
                          return t.props.onSeek(e.seconds);
                        }),
                        t.player.on("ended", t.props.onEnded),
                        t.player.on("error", t.props.onError),
                        t.player.on("timeupdate", function (e) {
                          var n = e.seconds;
                          t.currentTime = n;
                        }),
                        t.player.on("progress", function (e) {
                          var n = e.seconds;
                          t.secondsLoaded = n;
                        }));
                    }, this.props.onError);
                },
              },
              {
                key: "refreshDuration",
                value: function () {
                  var e = this;
                  this.player.getDuration().then(function (t) {
                    e.duration = t;
                  });
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.callPlayer("unload");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("setCurrentTime", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.duration;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.currentTime;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return this.secondsLoaded;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = r(
                    {
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      backgroundColor: "black",
                    },
                    this.props.style
                  );
                  return i.default.createElement("div", {
                    key: this.props.url,
                    ref: this.ref,
                    style: e,
                  });
                },
              },
            ]),
            t
          );
        })(a.Component));
      (y.displayName = "Vimeo"),
        (y.canPlay = function (e) {
          return !d.test(e) && f.test(e);
        }),
        (t.default = (0, u.default)(y));
    },
    8018: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Wistia = void 0);
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(7294),
        i = s(a),
        l = n(3807),
        u = s(n(1523));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var f = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/,
        d = (t.Wistia = (function (e) {
          function t() {
            var e, n, r;
            c(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r =
                p(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
              (r.callPlayer = l.callPlayer),
              (r.mute = function () {
                r.callPlayer("mute");
              }),
              (r.unmute = function () {
                r.callPlayer("unmute");
              }),
              p(r, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "getID",
                value: function (e) {
                  return e && e.match(f)[1];
                },
              },
              {
                key: "load",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    o = n.playing,
                    a = n.muted,
                    i = n.controls,
                    u = n.onReady,
                    s = n.onPlay,
                    c = n.onPause,
                    p = n.onSeek,
                    f = n.onEnded,
                    d = n.config;
                  (0, l.getSDK)(
                    "//fast.wistia.com/assets/external/E-v1.js",
                    "Wistia"
                  ).then(function () {
                    (window._wq = window._wq || []),
                      window._wq.push({
                        id: t.getID(e),
                        options: r(
                          {
                            autoPlay: o,
                            silentAutoPlay: "allow",
                            muted: a,
                            controlsVisibleOnLoad: i,
                          },
                          d.wistia.options
                        ),
                        onReady: function (e) {
                          (t.player = e),
                            t.player.bind("play", s),
                            t.player.bind("pause", c),
                            t.player.bind("seek", p),
                            t.player.bind("end", f),
                            u();
                        },
                      });
                  });
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.callPlayer("remove");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("time", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("volume", e);
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  this.callPlayer("playbackRate", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("duration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("time");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.getID(this.props.url),
                    t = "wistia_embed wistia_async_" + e;
                  return i.default.createElement("div", {
                    key: e,
                    className: t,
                    style: { width: "100%", height: "100%" },
                  });
                },
              },
            ]),
            t
          );
        })(a.Component));
      (d.displayName = "Wistia"),
        (d.canPlay = function (e) {
          return f.test(e);
        }),
        (d.loopOnEnded = !0),
        (t.default = (0, u.default)(d));
    },
    356: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YouTube = void 0);
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        a = n(7294),
        i = s(a),
        l = n(3807),
        u = s(n(1523));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var f = "YT",
        d =
          /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/,
        y = (t.YouTube = (function (e) {
          function t() {
            var e, n, r;
            c(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r =
                p(
                  this,
                  (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
              (r.callPlayer = l.callPlayer),
              (r.onStateChange = function (e) {
                var t = e.data,
                  n = r.props,
                  o = n.onPlay,
                  a = n.onPause,
                  i = n.onBuffer,
                  l = n.onEnded,
                  u = n.onReady,
                  s = window.YT.PlayerState,
                  c = s.PLAYING,
                  p = s.PAUSED,
                  f = s.BUFFERING,
                  d = s.ENDED,
                  y = s.CUED;
                t === c && o(),
                  t === p && a(),
                  t === f && i(),
                  t === d && l(),
                  t === y && u();
              }),
              (r.mute = function () {
                r.callPlayer("mute");
              }),
              (r.unmute = function () {
                r.callPlayer("unMute");
              }),
              (r.ref = function (e) {
                r.container = e;
              }),
              p(r, n)
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            o(t, [
              {
                key: "load",
                value: function (e, t) {
                  var n = this,
                    o = this.props,
                    a = o.playing,
                    i = o.muted,
                    u = o.playsinline,
                    s = o.controls,
                    c = o.config,
                    p = o.onError,
                    y = c.youtube.playerVars,
                    h = e && e.match(d)[1];
                  t
                    ? this.player.cueVideoById({
                        videoId: h,
                        startSeconds: (0, l.parseStartTime)(e) || y.start,
                        endSeconds: (0, l.parseEndTime)(e) || y.end,
                      })
                    : (0, l.getSDK)(
                        "https://www.youtube.com/iframe_api",
                        f,
                        "onYouTubeIframeAPIReady",
                        function (e) {
                          return e.loaded;
                        }
                      ).then(function (t) {
                        n.container &&
                          (n.player = new t.Player(n.container, {
                            width: "100%",
                            height: "100%",
                            videoId: h,
                            playerVars: r(
                              {
                                autoplay: a ? 1 : 0,
                                mute: i ? 1 : 0,
                                controls: s ? 1 : 0,
                                start: (0, l.parseStartTime)(e),
                                end: (0, l.parseEndTime)(e),
                                origin: window.location.origin,
                                playsinline: u,
                              },
                              y
                            ),
                            events: {
                              onReady: n.props.onReady,
                              onStateChange: n.onStateChange,
                              onError: function (e) {
                                return p(e.data);
                              },
                            },
                          }));
                      }, p);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("playVideo");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pauseVideo");
                },
              },
              {
                key: "stop",
                value: function () {
                  document.body.contains(this.callPlayer("getIframe")) &&
                    this.callPlayer("stopVideo");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seekTo", e),
                    this.props.playing || this.pause();
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", 100 * e);
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  this.callPlayer("setPlaybackRate", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentTime");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return (
                    this.callPlayer("getVideoLoadedFraction") *
                    this.getDuration()
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = r(
                    { width: "100%", height: "100%" },
                    this.props.style
                  );
                  return i.default.createElement(
                    "div",
                    { style: e },
                    i.default.createElement("div", { ref: this.ref })
                  );
                },
              },
            ]),
            t
          );
        })(a.Component));
      (y.displayName = "YouTube"),
        (y.canPlay = function (e) {
          return d.test(e);
        }),
        (y.loopOnEnded = !0),
        (t.default = (0, u.default)(y));
    },
    6497: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(356),
        o = n(2648),
        a = n(868),
        i = n(1972),
        l = n(993),
        u = n(8018),
        s = n(9482),
        c = n(6807),
        p = n(143),
        f = n(4926);
      t.default = [
        r.YouTube,
        o.SoundCloud,
        a.Vimeo,
        i.Facebook,
        l.Streamable,
        u.Wistia,
        s.Twitch,
        c.DailyMotion,
        p.Mixcloud,
        f.FilePlayer,
      ];
    },
    4560: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = [],
            a = !0,
            i = !1,
            l = void 0;
          try {
            for (
              var u, s = c[Symbol.iterator]();
              !(a = (u = s.next()).done);
              a = !0
            ) {
              var p = u.value;
              !p.Player.canPlay(e) &&
                t[p.configKey].preload &&
                n.push(
                  r.default.createElement(o.default, {
                    key: p.Player.displayName,
                    activePlayer: p.Player,
                    url: p.url,
                    playing: !0,
                    muted: !0,
                    style: { display: "none" },
                  })
                );
            }
          } catch (f) {
            (i = !0), (l = f);
          } finally {
            try {
              !a && s.return && s.return();
            } finally {
              if (i) throw l;
            }
          }
          return n;
        });
      var r = s(n(7294)),
        o = s(n(722)),
        a = n(356),
        i = n(2648),
        l = n(868),
        u = n(6807);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = [
        {
          Player: a.YouTube,
          configKey: "youtube",
          url: "https://www.youtube.com/watch?v=GlCmAC4MHek",
        },
        {
          Player: i.SoundCloud,
          configKey: "soundcloud",
          url: "https://soundcloud.com/seucheu/john-cage-433-8-bit-version",
        },
        {
          Player: l.Vimeo,
          configKey: "vimeo",
          url: "https://vimeo.com/300970506",
        },
        {
          Player: u.DailyMotion,
          configKey: "dailymotion",
          url: "http://www.dailymotion.com/video/xqdpyk",
        },
      ];
    },
    5741: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DEPRECATED_CONFIG_PROPS = t.defaultProps = t.propTypes = void 0);
      var r,
        o = n(5697),
        a = (r = o) && r.__esModule ? r : { default: r };
      var i = a.default.string,
        l = a.default.bool,
        u = a.default.number,
        s = a.default.array,
        c = a.default.oneOfType,
        p = a.default.shape,
        f = a.default.object,
        d = a.default.func;
      (t.propTypes = {
        url: c([i, s, f]),
        playing: l,
        loop: l,
        controls: l,
        volume: u,
        muted: l,
        playbackRate: u,
        width: c([i, u]),
        height: c([i, u]),
        style: f,
        progressInterval: u,
        playsinline: l,
        pip: l,
        wrapper: c([i, d]),
        config: p({
          soundcloud: p({ options: f }),
          youtube: p({ playerVars: f, preload: l }),
          facebook: p({ appId: i }),
          dailymotion: p({ params: f, preload: l }),
          vimeo: p({ playerOptions: f, preload: l }),
          file: p({
            attributes: f,
            tracks: s,
            forceVideo: l,
            forceAudio: l,
            forceHLS: l,
            forceDASH: l,
            hlsOptions: f,
            hlsVersion: i,
            dashVersion: i,
          }),
          wistia: p({ options: f }),
          mixcloud: p({ options: f }),
          twitch: p({ options: f }),
        }),
        onReady: d,
        onStart: d,
        onPlay: d,
        onPause: d,
        onBuffer: d,
        onEnded: d,
        onError: d,
        onDuration: d,
        onSeek: d,
        onProgress: d,
        onEnablePIP: d,
        onDisablePIP: d,
      }),
        (t.defaultProps = {
          playing: !1,
          loop: !1,
          controls: !1,
          volume: null,
          muted: !1,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: !1,
          pip: !1,
          wrapper: "div",
          config: {
            soundcloud: {
              options: {
                visual: !0,
                buying: !1,
                liking: !1,
                download: !1,
                sharing: !1,
                show_comments: !1,
                show_playcount: !1,
              },
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1,
              },
              preload: !1,
            },
            facebook: { appId: "1309697205772819" },
            dailymotion: {
              params: { api: 1, "endscreen-enable": !1 },
              preload: !1,
            },
            vimeo: {
              playerOptions: {
                autopause: !1,
                byline: !1,
                portrait: !1,
                title: !1,
              },
              preload: !1,
            },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: !1,
              forceAudio: !1,
              forceHLS: !1,
              forceDASH: !1,
              hlsOptions: {},
              hlsVersion: "0.10.1",
              dashVersion: "2.9.2",
            },
            wistia: { options: {} },
            mixcloud: { options: { hide_cover: 1 } },
            twitch: { options: {} },
          },
          onReady: function () {},
          onStart: function () {},
          onPlay: function () {},
          onPause: function () {},
          onBuffer: function () {},
          onEnded: function () {},
          onError: function () {},
          onDuration: function () {},
          onSeek: function () {},
          onProgress: function () {},
          onEnablePIP: function () {},
          onDisablePIP: function () {},
        }),
        (t.DEPRECATED_CONFIG_PROPS = [
          "soundcloudConfig",
          "youtubeConfig",
          "facebookConfig",
          "dailymotionConfig",
          "vimeoConfig",
          "fileConfig",
          "wistiaConfig",
        ]);
    },
    1523: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      t.default = function (e) {
        var t, n;
        return (
          (n = t =
            (function (t) {
              function n() {
                var e, t, r;
                p(this, n);
                for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
                  a[i] = arguments[i];
                return (
                  (t = r =
                    f(
                      this,
                      (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                        e,
                        [this].concat(a)
                      )
                    )),
                  (r.config = (0, u.getConfig)(r.props, l.defaultProps, !0)),
                  (r.getDuration = function () {
                    return r.player ? r.player.getDuration() : null;
                  }),
                  (r.getCurrentTime = function () {
                    return r.player ? r.player.getCurrentTime() : null;
                  }),
                  (r.getSecondsLoaded = function () {
                    return r.player ? r.player.getSecondsLoaded() : null;
                  }),
                  (r.getInternalPlayer = function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "player";
                    return r.player ? r.player.getInternalPlayer(e) : null;
                  }),
                  (r.seekTo = function (e) {
                    if (!r.player) return null;
                    r.player.seekTo(e);
                  }),
                  (r.ref = function (e) {
                    r.player = e;
                  }),
                  f(r, t)
                );
              }
              return (
                (function (e, t) {
                  if ("function" !== typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(n, t),
                o(n, [
                  {
                    key: "shouldComponentUpdate",
                    value: function (e) {
                      return !(0, u.isEqual)(this.props, e);
                    },
                  },
                  {
                    key: "componentWillUpdate",
                    value: function (e) {
                      this.config = (0, u.getConfig)(e, l.defaultProps);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = this.config.file,
                        n = t.forceVideo,
                        o = t.forceAudio,
                        a = t.forceHLS,
                        c = t.forceDASH,
                        p = n || o || a || c;
                      if (!e.canPlay(this.props.url) && !p) return null;
                      var f = this.props,
                        y = f.style,
                        h = f.width,
                        v = f.height,
                        m = f.wrapper,
                        b = (0, u.omit)(
                          this.props,
                          d,
                          l.DEPRECATED_CONFIG_PROPS
                        );
                      return i.default.createElement(
                        m,
                        r({ style: r({}, y, { width: h, height: v }) }, b),
                        i.default.createElement(
                          s.default,
                          r({}, this.props, {
                            ref: this.ref,
                            activePlayer: e,
                            config: this.config,
                          })
                        )
                      );
                    },
                  },
                ]),
                n
              );
            })(a.Component)),
          (t.displayName = e.displayName + "Player"),
          (t.propTypes = l.propTypes),
          (t.defaultProps = l.defaultProps),
          (t.canPlay = e.canPlay),
          n
        );
      };
      var a = n(7294),
        i = c(a),
        l = n(5741),
        u = n(3807),
        s = c(n(722));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var d = Object.keys(l.propTypes);
    },
    3807: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o = function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                r = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(r = (i = l.next()).done) &&
                  (n.push(i.value), !t || n.length !== t);
                  r = !0
                );
              } catch (u) {
                (o = !0), (a = u);
              } finally {
                try {
                  !r && l.return && l.return();
                } finally {
                  if (o) throw a;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      (t.parseStartTime = function (e) {
        return y(e, c);
      }),
        (t.parseEndTime = function (e) {
          return y(e, p);
        }),
        (t.randomString = function () {
          return Math.random().toString(36).substr(2, 5);
        }),
        (t.queryString = function (e) {
          return Object.keys(e)
            .map(function (t) {
              return t + "=" + e[t];
            })
            .join("&");
        }),
        (t.getSDK = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {
                    return !0;
                  },
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : a.default;
          if (window[t] && r(window[t])) return Promise.resolve(window[t]);
          return new Promise(function (r, a) {
            if (h[e]) h[e].push(r);
            else {
              h[e] = [r];
              var i = function (t) {
                h[e].forEach(function (e) {
                  return e(t);
                });
              };
              if (n) {
                var l = window[n];
                window[n] = function () {
                  l && l(), i(window[t]);
                };
              }
              o(e, function (e) {
                e && a(e), n || i(window[t]);
              });
            }
          });
        }),
        (t.getConfig = function (e, t, n) {
          var r = (0, i.default)(t.config, e.config),
            o = !0,
            a = !1,
            u = void 0;
          try {
            for (
              var c, p = l.DEPRECATED_CONFIG_PROPS[Symbol.iterator]();
              !(o = (c = p.next()).done);
              o = !0
            ) {
              var f = c.value;
              if (e[f]) {
                var d = f.replace(/Config$/, "");
                if (((r = (0, i.default)(r, s({}, d, e[f]))), n)) {
                  var y =
                    "ReactPlayer: %c" +
                    f +
                    " %cis deprecated, please use the config prop instead \u2013 https://github.com/CookPete/react-player#config-prop";
                  console.warn(y, "font-weight: bold", "");
                }
              }
            }
          } catch (h) {
            (a = !0), (u = h);
          } finally {
            try {
              !o && p.return && p.return();
            } finally {
              if (a) throw u;
            }
          }
          return r;
        }),
        (t.omit = function (e) {
          for (
            var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          var a = (t = []).concat.apply(t, r),
            i = {},
            l = Object.keys(e),
            u = !0,
            s = !1,
            c = void 0;
          try {
            for (
              var p, f = l[Symbol.iterator]();
              !(u = (p = f.next()).done);
              u = !0
            ) {
              var d = p.value;
              -1 === a.indexOf(d) && (i[d] = e[d]);
            }
          } catch (y) {
            (s = !0), (c = y);
          } finally {
            try {
              !u && f.return && f.return();
            } finally {
              if (s) throw c;
            }
          }
          return i;
        }),
        (t.callPlayer = function (e) {
          var t;
          if (!this.player || !this.player[e]) {
            var n =
              "ReactPlayer: " +
              this.constructor.displayName +
              " player could not call %c" +
              e +
              "%c \u2013 ";
            return (
              this.player
                ? this.player[e] || (n += "The method was not available")
                : (n += "The player was not available"),
              console.warn(n, "font-weight: bold", ""),
              null
            );
          }
          for (
            var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1;
            a < r;
            a++
          )
            o[a - 1] = arguments[a];
          return (t = this.player)[e].apply(t, o);
        }),
        (t.isObject = v),
        (t.isEqual = function e(t, n) {
          if ("function" === typeof t && "function" === typeof n) return !0;
          if (t instanceof Array && n instanceof Array) {
            if (t.length !== n.length) return !1;
            for (var r = 0; r !== t.length; r++) if (!e(t[r], n[r])) return !1;
            return !0;
          }
          if (v(t) && v(n)) {
            if (Object.keys(t).length !== Object.keys(n).length) return !1;
            var o = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var l, u = Object.keys(t)[Symbol.iterator]();
                !(o = (l = u.next()).done);
                o = !0
              ) {
                var s = l.value;
                if (!e(t[s], n[s])) return !1;
              }
            } catch (c) {
              (a = !0), (i = c);
            } finally {
              try {
                !o && u.return && u.return();
              } finally {
                if (a) throw i;
              }
            }
            return !0;
          }
          return t === n;
        }),
        (t.isMediaStream = function (e) {
          return (
            "undefined" !== typeof window &&
            "undefined" !== typeof window.MediaStream &&
            e instanceof window.MediaStream
          );
        });
      var a = u(n(9090)),
        i = u(n(5664)),
        l = n(5741);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var c = /[?&#](?:start|t)=([0-9hms]+)/,
        p = /[?&#]end=([0-9hms]+)/,
        f = /(\d+)(h|m|s)/g,
        d = /^\d+$/;
      function y(e, t) {
        var n = e.match(t);
        if (n) {
          var r = n[1];
          if (r.match(f))
            return (function (e) {
              var t = 0,
                n = f.exec(e);
              for (; null !== n; ) {
                var r = o(n, 3),
                  a = r[1],
                  i = r[2];
                "h" === i && (t += 60 * parseInt(a, 10) * 60),
                  "m" === i && (t += 60 * parseInt(a, 10)),
                  "s" === i && (t += parseInt(a, 10)),
                  (n = f.exec(e));
              }
              return t;
            })(r);
          if (d.test(r)) return parseInt(r);
        }
      }
      var h = {};
      function v(e) {
        return (
          null !== e &&
          "object" === ("undefined" === typeof e ? "undefined" : r(e))
        );
      }
    },
    4777: function (e, t, n) {
      "use strict";
      var r = n(7294),
        o = n(4184),
        a = n.n(o),
        i = n(5697),
        l = n.n(i),
        u = n(6871),
        s = n(8088),
        c = n(129),
        p = n.n(c),
        f = n(743),
        d = n.n(f),
        y = n(4483),
        h = n.n(y);
      function v(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              b(e, t, n[t]);
            });
        }
        return e;
      }
      function P(e) {
        return (P = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function E(e, t) {
        return (E =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function w(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function k(e, t) {
        return !t || ("object" !== typeof t && "function" !== typeof t)
          ? w(e)
          : t;
      }
      var O = function (e) {
        var t = e.classes,
          n = e.classNames,
          o = e.styles,
          i = e.closeIconSize,
          l = e.closeIconSvgPath,
          u = e.onClickCloseIcon;
        return r.createElement(
          "button",
          {
            className: a()(t.closeButton, n.closeButton),
            style: o.closeButton,
            onClick: u,
          },
          r.createElement(
            "svg",
            {
              className: a()(t.closeIcon, n.closeIcon),
              style: o.closeIcon,
              xmlns: "http://www.w3.org/2000/svg",
              width: i,
              height: i,
              viewBox: "0 0 36 36",
            },
            l
          )
        );
      };
      O.propTypes = {
        classNames: l().object.isRequired,
        styles: l().object.isRequired,
        classes: l().object.isRequired,
        closeIconSize: l().number.isRequired,
        closeIconSvgPath: l().node.isRequired,
        onClickCloseIcon: l().func.isRequired,
      };
      var _ = [],
        S = function () {
          return _;
        },
        C = function (e) {
          -1 === _.indexOf(e) && _.push(e);
        },
        T = function (e) {
          var t = _.indexOf(e);
          -1 !== t && _.splice(t, 1);
        },
        j = function (e) {
          return !!_.length && _[_.length - 1] === e;
        };
      !(function (e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" !== typeof document) {
          var r = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
          (o.type = "text/css"),
            "top" === n && r.firstChild
              ? r.insertBefore(o, r.firstChild)
              : r.appendChild(o),
            o.styleSheet
              ? (o.styleSheet.cssText = e)
              : o.appendChild(document.createTextNode(e));
        }
      })(
        ".styles_overlay__CLSq- {\n  background: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: flex-start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1000;\n  padding: 1.2rem;\n}\n.styles_overlayCenter__YHoO7 {\n  align-items: center;\n}\n.styles_modal__gNwvD {\n  max-width: 800px;\n  position: relative;\n  padding: 1.2rem;\n  background: #ffffff;\n  background-clip: padding-box;\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);\n  margin: auto;\n}\n.styles_closeButton__20ID4 {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  border: none;\n  padding: 0;\n  background-color: transparent;\n  display: flex;\n}\n.styles_closeIcon__1QwbI {\n}\n.styles_transitionEnter__3j_-a {\n  opacity: 0.01;\n}\n.styles_transitionEnterActive___eQs7 {\n  opacity: 1;\n  transition: opacity 500ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.styles_transitionExit__1KmEf {\n  opacity: 1;\n}\n.styles_transitionExitActive__1nQXw {\n  opacity: 0.01;\n  transition: opacity 500ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n",
        { insertAt: "top" }
      );
      var x = (function (e) {
        function t() {
          var e, n;
          v(this, t);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            b(
              w(w((n = k(this, (e = P(t)).call.apply(e, [this].concat(o)))))),
              "shouldClose",
              null
            ),
            b(w(w(n)), "state", { showPortal: n.props.open }),
            b(w(w(n)), "handleOpen", function () {
              C(w(w(n))),
                n.props.blockScroll && t.blockScroll(),
                document.addEventListener("keydown", n.handleKeydown);
            }),
            b(w(w(n)), "handleClose", function () {
              T(w(w(n))),
                n.props.blockScroll && n.unblockScroll(),
                document.removeEventListener("keydown", n.handleKeydown);
            }),
            b(w(w(n)), "handleClickOverlay", function (e) {
              null === n.shouldClose && (n.shouldClose = !0),
                n.shouldClose
                  ? (n.props.onOverlayClick && n.props.onOverlayClick(e),
                    n.props.closeOnOverlayClick && n.props.onClose(e),
                    (n.shouldClose = null))
                  : (n.shouldClose = null);
            }),
            b(w(w(n)), "handleClickCloseIcon", function (e) {
              n.props.onClose(e);
            }),
            b(w(w(n)), "handleKeydown", function (e) {
              27 === e.keyCode &&
                j(w(w(n))) &&
                (n.props.onEscKeyDown && n.props.onEscKeyDown(e),
                n.props.closeOnEsc && n.props.onClose(e));
            }),
            b(w(w(n)), "handleModalEvent", function () {
              n.shouldClose = !1;
            }),
            b(w(w(n)), "handleEntered", function () {
              n.props.onEntered && n.props.onEntered();
            }),
            b(w(w(n)), "handleExited", function () {
              n.props.onExited && n.props.onExited(),
                n.setState({ showPortal: !1 }),
                n.props.blockScroll && n.unblockScroll();
            }),
            b(w(w(n)), "unblockScroll", function () {
              0 === S().length && d().off();
            }),
            n
          );
        }
        var n, o, i;
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && E(e, t);
          })(t, e),
          (n = t),
          (i = [
            {
              key: "blockScroll",
              value: function () {
                d().on();
              },
            },
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return !t.showPortal && e.open ? { showPortal: !0 } : null;
              },
            },
          ]),
          (o = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.open && this.handleOpen();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e, t) {
                t.showPortal && !this.state.showPortal
                  ? this.handleClose()
                  : !e.open && this.props.open && this.handleOpen();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.props.open && this.handleClose();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.open,
                  n = e.center,
                  o = e.classes,
                  i = e.classNames,
                  l = e.styles,
                  u = e.showCloseIcon,
                  c = e.closeIconSize,
                  f = e.closeIconSvgPath,
                  d = e.animationDuration,
                  y = e.container,
                  v = e.focusTrapped,
                  m = e.focusTrapOptions;
                return this.state.showPortal
                  ? r.createElement(
                      s.Z,
                      { container: y },
                      r.createElement(
                        p(),
                        {
                          in: t,
                          appear: !0,
                          classNames: {
                            appear: i.transitionEnter || o.transitionEnter,
                            appearActive:
                              i.transitionEnterActive ||
                              o.transitionEnterActive,
                            enter: i.transitionEnter || o.transitionEnter,
                            enterActive:
                              i.transitionEnterActive ||
                              o.transitionEnterActive,
                            exit: i.transitionExit || o.transitionExit,
                            exitActive:
                              i.transitionExitActive || o.transitionExitActive,
                          },
                          timeout: d,
                          onEntered: this.handleEntered,
                          onExited: this.handleExited,
                        },
                        r.createElement(
                          "div",
                          {
                            className: a()(
                              o.overlay,
                              n ? o.overlayCenter : null,
                              i.overlay
                            ),
                            onClick: this.handleClickOverlay,
                            style: l.overlay,
                          },
                          v
                            ? r.createElement(
                                "div",
                                {
                                  className: a()(o.modal, i.modal),
                                  style: l.modal,
                                  onMouseDown: this.handleModalEvent,
                                  onMouseUp: this.handleModalEvent,
                                  onClick: this.handleModalEvent,
                                },
                                r.createElement(
                                  h(),
                                  {
                                    focusTrapOptions: g(
                                      {},
                                      { clickOutsideDeactivates: !0 },
                                      m
                                    ),
                                  },
                                  this.props.children,
                                  u &&
                                    r.createElement(O, {
                                      classes: o,
                                      classNames: i,
                                      styles: l,
                                      closeIconSize: c,
                                      closeIconSvgPath: f,
                                      onClickCloseIcon:
                                        this.handleClickCloseIcon,
                                    })
                                )
                              )
                            : r.createElement(
                                "div",
                                {
                                  className: a()(o.modal, i.modal),
                                  style: l.modal,
                                  onMouseDown: this.handleModalEvent,
                                  onMouseUp: this.handleModalEvent,
                                  onClick: this.handleModalEvent,
                                },
                                this.props.children,
                                u &&
                                  r.createElement(O, {
                                    classes: o,
                                    classNames: i,
                                    styles: l,
                                    closeIconSize: c,
                                    closeIconSvgPath: f,
                                    onClickCloseIcon: this.handleClickCloseIcon,
                                  })
                              )
                        )
                      )
                    )
                  : null;
              },
            },
          ]) && m(n.prototype, o),
          i && m(n, i),
          t
        );
      })(r.Component);
      (x.propTypes = {
        closeOnEsc: l().bool,
        closeOnOverlayClick: l().bool,
        onEntered: l().func,
        onExited: l().func,
        onClose: l().func.isRequired,
        onEscKeyDown: l().func,
        onOverlayClick: l().func,
        open: l().bool.isRequired,
        classNames: l().object,
        styles: l().object,
        children: l().node,
        classes: l().object,
        center: l().bool,
        showCloseIcon: l().bool,
        closeIconSize: l().number,
        closeIconSvgPath: l().node,
        animationDuration: l().number,
        container: l().object,
        blockScroll: l().bool,
        focusTrapped: l().bool,
        focusTrapOptions: l().object,
      }),
        (x.defaultProps = {
          classes: {
            overlay: "styles_overlay__CLSq-",
            overlayCenter: "styles_overlayCenter__YHoO7",
            modal: "styles_modal__gNwvD",
            closeButton: "styles_closeButton__20ID4",
            closeIcon: "styles_closeIcon__1QwbI",
            transitionEnter: "styles_transitionEnter__3j_-a",
            transitionEnterActive: "styles_transitionEnterActive___eQs7",
            transitionExit: "styles_transitionExit__1KmEf",
            transitionExitActive: "styles_transitionExitActive__1nQXw",
          },
          closeOnEsc: !0,
          closeOnOverlayClick: !0,
          onEntered: null,
          onExited: null,
          onEscKeyDown: null,
          onOverlayClick: null,
          showCloseIcon: !0,
          closeIconSize: 28,
          closeIconSvgPath: r.createElement("path", {
            d: "M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z",
          }),
          classNames: {},
          styles: {},
          children: null,
          center: !1,
          animationDuration: 500,
          blockScroll: !0,
          focusTrapped: !1,
          focusTrapOptions: {},
        }),
        (0, u.polyfill)(x),
        (t.Z = x);
    },
    129: function (e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.default = void 0);
      !(function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var r =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, n)
                  : {};
              r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
            }
        t.default = e;
      })(n(5697));
      var r = l(n(3971)),
        o = l(n(5641)),
        a = l(n(7294)),
        i = l(n(644));
      n(4726);
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var s = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (0, r.default)(e, t);
            })
          );
        },
        c = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (0, o.default)(e, t);
            })
          );
        },
        p = (function (e) {
          var t, n;
          function r() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).onEnter =
                function (e, n) {
                  var r = t.getClassNames(n ? "appear" : "enter").className;
                  t.removeClasses(e, "exit"),
                    s(e, r),
                    t.props.onEnter && t.props.onEnter(e, n);
                }),
              (t.onEntering = function (e, n) {
                var r = t.getClassNames(n ? "appear" : "enter").activeClassName;
                t.reflowAndAddClass(e, r),
                  t.props.onEntering && t.props.onEntering(e, n);
              }),
              (t.onEntered = function (e, n) {
                var r = t.getClassNames("appear").doneClassName,
                  o = t.getClassNames("enter").doneClassName,
                  a = n ? r + " " + o : o;
                t.removeClasses(e, n ? "appear" : "enter"),
                  s(e, a),
                  t.props.onEntered && t.props.onEntered(e, n);
              }),
              (t.onExit = function (e) {
                var n = t.getClassNames("exit").className;
                t.removeClasses(e, "appear"),
                  t.removeClasses(e, "enter"),
                  s(e, n),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var n = t.getClassNames("exit").activeClassName;
                t.reflowAndAddClass(e, n),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var n = t.getClassNames("exit").doneClassName;
                t.removeClasses(e, "exit"),
                  s(e, n),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  r = "string" === typeof n,
                  o = r ? (r && n ? n + "-" : "") + e : n[e];
                return {
                  className: o,
                  activeClassName: r ? o + "-active" : n[e + "Active"],
                  doneClassName: r ? o + "-done" : n[e + "Done"],
                };
              }),
              t
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var o = r.prototype;
          return (
            (o.removeClasses = function (e, t) {
              var n = this.getClassNames(t),
                r = n.className,
                o = n.activeClassName,
                a = n.doneClassName;
              r && c(e, r), o && c(e, o), a && c(e, a);
            }),
            (o.reflowAndAddClass = function (e, t) {
              t && (e && e.scrollTop, s(e, t));
            }),
            (o.render = function () {
              var e = u({}, this.props);
              return (
                delete e.classNames,
                a.default.createElement(
                  i.default,
                  u({}, e, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited,
                  })
                )
              );
            }),
            r
          );
        })(a.default.Component);
      (p.defaultProps = { classNames: "" }), (p.propTypes = {});
      var f = p;
      (t.default = f), (e.exports = t.default);
    },
    644: function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.default =
          t.EXITING =
          t.ENTERED =
          t.ENTERING =
          t.EXITED =
          t.UNMOUNTED =
            void 0);
      var r = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, n)
                    : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
              }
          return (t.default = e), t;
        })(n(5697)),
        o = l(n(7294)),
        a = l(n(3935)),
        i = n(6871);
      n(4726);
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = "unmounted";
      t.UNMOUNTED = u;
      var s = "exited";
      t.EXITED = s;
      var c = "entering";
      t.ENTERING = c;
      var p = "entered";
      t.ENTERED = p;
      var f = "exiting";
      t.EXITING = f;
      var d = (function (e) {
        var t, n;
        function r(t, n) {
          var r;
          r = e.call(this, t, n) || this;
          var o,
            a = n.transitionGroup,
            i = a && !a.isMounting ? t.enter : t.appear;
          return (
            (r.appearStatus = null),
            t.in
              ? i
                ? ((o = s), (r.appearStatus = c))
                : (o = p)
              : (o = t.unmountOnExit || t.mountOnEnter ? u : s),
            (r.state = { status: o }),
            (r.nextCallback = null),
            r
          );
        }
        (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var i = r.prototype;
        return (
          (i.getChildContext = function () {
            return { transitionGroup: null };
          }),
          (r.getDerivedStateFromProps = function (e, t) {
            return e.in && t.status === u ? { status: s } : null;
          }),
          (i.componentDidMount = function () {
            this.updateStatus(!0, this.appearStatus);
          }),
          (i.componentDidUpdate = function (e) {
            var t = null;
            if (e !== this.props) {
              var n = this.state.status;
              this.props.in
                ? n !== c && n !== p && (t = c)
                : (n !== c && n !== p) || (t = f);
            }
            this.updateStatus(!1, t);
          }),
          (i.componentWillUnmount = function () {
            this.cancelNextCallback();
          }),
          (i.getTimeouts = function () {
            var e,
              t,
              n,
              r = this.props.timeout;
            return (
              (e = t = n = r),
              null != r &&
                "number" !== typeof r &&
                ((e = r.exit),
                (t = r.enter),
                (n = void 0 !== r.appear ? r.appear : t)),
              { exit: e, enter: t, appear: n }
            );
          }),
          (i.updateStatus = function (e, t) {
            if ((void 0 === e && (e = !1), null !== t)) {
              this.cancelNextCallback();
              var n = a.default.findDOMNode(this);
              t === c ? this.performEnter(n, e) : this.performExit(n);
            } else
              this.props.unmountOnExit &&
                this.state.status === s &&
                this.setState({ status: u });
          }),
          (i.performEnter = function (e, t) {
            var n = this,
              r = this.props.enter,
              o = this.context.transitionGroup
                ? this.context.transitionGroup.isMounting
                : t,
              a = this.getTimeouts(),
              i = o ? a.appear : a.enter;
            t || r
              ? (this.props.onEnter(e, o),
                this.safeSetState({ status: c }, function () {
                  n.props.onEntering(e, o),
                    n.onTransitionEnd(e, i, function () {
                      n.safeSetState({ status: p }, function () {
                        n.props.onEntered(e, o);
                      });
                    });
                }))
              : this.safeSetState({ status: p }, function () {
                  n.props.onEntered(e);
                });
          }),
          (i.performExit = function (e) {
            var t = this,
              n = this.props.exit,
              r = this.getTimeouts();
            n
              ? (this.props.onExit(e),
                this.safeSetState({ status: f }, function () {
                  t.props.onExiting(e),
                    t.onTransitionEnd(e, r.exit, function () {
                      t.safeSetState({ status: s }, function () {
                        t.props.onExited(e);
                      });
                    });
                }))
              : this.safeSetState({ status: s }, function () {
                  t.props.onExited(e);
                });
          }),
          (i.cancelNextCallback = function () {
            null !== this.nextCallback &&
              (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (i.safeSetState = function (e, t) {
            (t = this.setNextCallback(t)), this.setState(e, t);
          }),
          (i.setNextCallback = function (e) {
            var t = this,
              n = !0;
            return (
              (this.nextCallback = function (r) {
                n && ((n = !1), (t.nextCallback = null), e(r));
              }),
              (this.nextCallback.cancel = function () {
                n = !1;
              }),
              this.nextCallback
            );
          }),
          (i.onTransitionEnd = function (e, t, n) {
            this.setNextCallback(n);
            var r = null == t && !this.props.addEndListener;
            e && !r
              ? (this.props.addEndListener &&
                  this.props.addEndListener(e, this.nextCallback),
                null != t && setTimeout(this.nextCallback, t))
              : setTimeout(this.nextCallback, 0);
          }),
          (i.render = function () {
            var e = this.state.status;
            if (e === u) return null;
            var t = this.props,
              n = t.children,
              r = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(t, ["children"]);
            if (
              (delete r.in,
              delete r.mountOnEnter,
              delete r.unmountOnExit,
              delete r.appear,
              delete r.enter,
              delete r.exit,
              delete r.timeout,
              delete r.addEndListener,
              delete r.onEnter,
              delete r.onEntering,
              delete r.onEntered,
              delete r.onExit,
              delete r.onExiting,
              delete r.onExited,
              "function" === typeof n)
            )
              return n(e, r);
            var a = o.default.Children.only(n);
            return o.default.cloneElement(a, r);
          }),
          r
        );
      })(o.default.Component);
      function y() {}
      (d.contextTypes = { transitionGroup: r.object }),
        (d.childContextTypes = { transitionGroup: function () {} }),
        (d.propTypes = {}),
        (d.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: y,
          onEntering: y,
          onEntered: y,
          onExit: y,
          onExiting: y,
          onExited: y,
        }),
        (d.UNMOUNTED = 0),
        (d.EXITED = 1),
        (d.ENTERING = 2),
        (d.ENTERED = 3),
        (d.EXITING = 4);
      var h = (0, i.polyfill)(d);
      t.default = h;
    },
    3971: function (e, t, n) {
      "use strict";
      var r = n(4836);
      (t.__esModule = !0),
        (t.default = function (e, t) {
          e.classList
            ? e.classList.add(t)
            : (0, o.default)(e, t) ||
              ("string" === typeof e.className
                ? (e.className = e.className + " " + t)
                : e.setAttribute(
                    "class",
                    ((e.className && e.className.baseVal) || "") + " " + t
                  ));
        });
      var o = r(n(5962));
      e.exports = t.default;
    },
    5962: function (e, t) {
      "use strict";
      (t.__esModule = !0),
        (t.default = function (e, t) {
          return e.classList
            ? !!t && e.classList.contains(t)
            : -1 !==
                (" " + (e.className.baseVal || e.className) + " ").indexOf(
                  " " + t + " "
                );
        }),
        (e.exports = t.default);
    },
    5641: function (e) {
      "use strict";
      function t(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      e.exports = function (e, n) {
        e.classList
          ? e.classList.remove(n)
          : "string" === typeof e.className
          ? (e.className = t(e.className, n))
          : e.setAttribute(
              "class",
              t((e.className && e.className.baseVal) || "", n)
            );
      };
    },
    4726: function (e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.classNamesShape = t.timeoutsShape = void 0);
      var r;
      (r = n(5697)) && r.__esModule;
      t.timeoutsShape = null;
      t.classNamesShape = null;
    },
    4760: function (e) {
      var t = [
          "input",
          "select",
          "textarea",
          "a[href]",
          "button",
          "[tabindex]",
          "audio[controls]",
          "video[controls]",
          '[contenteditable]:not([contenteditable="false"])',
        ],
        n = t.join(","),
        r =
          "undefined" === typeof Element
            ? function () {}
            : Element.prototype.matches ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector;
      function o(e, t) {
        t = t || {};
        var o,
          i,
          l,
          c = [],
          f = [],
          d = new p(e.ownerDocument || e),
          y = e.querySelectorAll(n);
        for (
          t.includeContainer &&
            r.call(e, n) &&
            (y = Array.prototype.slice.apply(y)).unshift(e),
            o = 0;
          o < y.length;
          o++
        )
          a((i = y[o]), d) &&
            (0 === (l = u(i))
              ? c.push(i)
              : f.push({ documentOrder: o, tabIndex: l, node: i }));
        return f
          .sort(s)
          .map(function (e) {
            return e.node;
          })
          .concat(c);
      }
      function a(e, t) {
        return !(
          !i(e, t) ||
          (function (e) {
            return (
              (function (e) {
                return c(e) && "radio" === e.type;
              })(e) &&
              !(function (e) {
                if (!e.name) return !0;
                var t = (function (e) {
                  for (var t = 0; t < e.length; t++)
                    if (e[t].checked) return e[t];
                })(
                  e.ownerDocument.querySelectorAll(
                    'input[type="radio"][name="' + e.name + '"]'
                  )
                );
                return !t || t === e;
              })(e)
            );
          })(e) ||
          u(e) < 0
        );
      }
      function i(e, t) {
        return (
          (t = t || new p(e.ownerDocument || e)),
          !(
            e.disabled ||
            (function (e) {
              return c(e) && "hidden" === e.type;
            })(e) ||
            t.isUntouchable(e)
          )
        );
      }
      (o.isTabbable = function (e, t) {
        if (!e) throw new Error("No node provided");
        return !1 !== r.call(e, n) && a(e, t);
      }),
        (o.isFocusable = function (e, t) {
          if (!e) throw new Error("No node provided");
          return !1 !== r.call(e, l) && i(e, t);
        });
      var l = t.concat("iframe").join(",");
      function u(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return isNaN(t)
          ? (function (e) {
              return "true" === e.contentEditable;
            })(e)
            ? 0
            : e.tabIndex
          : t;
      }
      function s(e, t) {
        return e.tabIndex === t.tabIndex
          ? e.documentOrder - t.documentOrder
          : e.tabIndex - t.tabIndex;
      }
      function c(e) {
        return "INPUT" === e.tagName;
      }
      function p(e) {
        (this.doc = e), (this.cache = []);
      }
      (p.prototype.hasDisplayNone = function (e, t) {
        if (e.nodeType !== Node.ELEMENT_NODE) return !1;
        var n = (function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (t(e[n])) return e[n];
        })(this.cache, function (t) {
          return t === e;
        });
        if (n) return n[1];
        var r = !1;
        return (
          "none" === (t = t || this.doc.defaultView.getComputedStyle(e)).display
            ? (r = !0)
            : e.parentNode && (r = this.hasDisplayNone(e.parentNode)),
          this.cache.push([e, r]),
          r
        );
      }),
        (p.prototype.isUntouchable = function (e) {
          if (e === this.doc.documentElement) return !1;
          var t = this.doc.defaultView.getComputedStyle(e);
          return !!this.hasDisplayNone(e, t) || "hidden" === t.visibility;
        }),
        (e.exports = o);
    },
    7529: function (e) {
      e.exports = function () {
        for (var e = {}, n = 0; n < arguments.length; n++) {
          var r = arguments[n];
          for (var o in r) t.call(r, o) && (e[o] = r[o]);
        }
        return e;
      };
      var t = Object.prototype.hasOwnProperty;
    },
    4836: function (e) {
      (e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
]);
