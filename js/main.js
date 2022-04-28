/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e = {
      755: () => {
        console.log("components");
      },
      598: () => {
        function e(e) {
          var t = !0,
            n = !1,
            r = null,
            o = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function i(e) {
            return !!(
              e &&
              e !== document &&
              "HTML" !== e.nodeName &&
              "BODY" !== e.nodeName &&
              "classList" in e &&
              "contains" in e.classList
            );
          }
          function a(e) {
            e.classList.contains("focus-visible") ||
              (e.classList.add("focus-visible"),
              e.setAttribute("data-focus-visible-added", ""));
          }
          function s(e) {
            t = !1;
          }
          function u() {
            document.addEventListener("mousemove", l),
              document.addEventListener("mousedown", l),
              document.addEventListener("mouseup", l),
              document.addEventListener("pointermove", l),
              document.addEventListener("pointerdown", l),
              document.addEventListener("pointerup", l),
              document.addEventListener("touchmove", l),
              document.addEventListener("touchstart", l),
              document.addEventListener("touchend", l);
          }
          function l(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
              ((t = !1),
              document.removeEventListener("mousemove", l),
              document.removeEventListener("mousedown", l),
              document.removeEventListener("mouseup", l),
              document.removeEventListener("pointermove", l),
              document.removeEventListener("pointerdown", l),
              document.removeEventListener("pointerup", l),
              document.removeEventListener("touchmove", l),
              document.removeEventListener("touchstart", l),
              document.removeEventListener("touchend", l));
          }
          document.addEventListener(
            "keydown",
            function (n) {
              n.metaKey ||
                n.altKey ||
                n.ctrlKey ||
                (i(e.activeElement) && a(e.activeElement), (t = !0));
            },
            !0
          ),
            document.addEventListener("mousedown", s, !0),
            document.addEventListener("pointerdown", s, !0),
            document.addEventListener("touchstart", s, !0),
            document.addEventListener(
              "visibilitychange",
              function (e) {
                "hidden" === document.visibilityState && (n && (t = !0), u());
              },
              !0
            ),
            u(),
            e.addEventListener(
              "focus",
              function (e) {
                var n, r, s;
                i(e.target) &&
                  (t ||
                    ((r = (n = e.target).type),
                    ("INPUT" === (s = n.tagName) && o[r] && !n.readOnly) ||
                      ("TEXTAREA" === s && !n.readOnly) ||
                      n.isContentEditable)) &&
                  a(e.target);
              },
              !0
            ),
            e.addEventListener(
              "blur",
              function (e) {
                var t;
                i(e.target) &&
                  (e.target.classList.contains("focus-visible") ||
                    e.target.hasAttribute("data-focus-visible-added")) &&
                  ((n = !0),
                  window.clearTimeout(r),
                  (r = window.setTimeout(function () {
                    n = !1;
                  }, 100)),
                  (t = e.target).hasAttribute("data-focus-visible-added") &&
                    (t.classList.remove("focus-visible"),
                    t.removeAttribute("data-focus-visible-added")));
              },
              !0
            ),
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
              ? e.host.setAttribute("data-js-focus-visible", "")
              : e.nodeType === Node.DOCUMENT_NODE &&
                (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute(
                  "data-js-focus-visible",
                  ""
                ));
        }
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t;
          window.applyFocusVisiblePolyfill = e;
          try {
            t = new CustomEvent("focus-visible-polyfill-ready");
          } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent(
              "focus-visible-polyfill-ready",
              !1,
              !1,
              {}
            );
          }
          window.dispatchEvent(t);
        }
        "undefined" != typeof document && e(document);
      },
      526: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, o) {
          "use strict";
          var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            u = i.flat
              ? function (e) {
                  return i.flat.call(e);
                }
              : function (e) {
                  return i.concat.apply([], e);
                },
            l = i.push,
            c = i.indexOf,
            f = {},
            d = f.toString,
            p = f.hasOwnProperty,
            h = p.toString,
            v = h.call(Object),
            g = {},
            m = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            x = r.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              o,
              i = (n = n || x).createElement("script");
            if (((i.text = e), t))
              for (r in b)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[d.call(e)] || "object"
              : typeof e;
          }
          var E = "3.6.0",
            C = function (e, t) {
              return new C.fn.init(e, t);
            };
          function S(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !m(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (C.fn = C.prototype =
            {
              jquery: E,
              constructor: C,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return C.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  C.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: i.sort,
              splice: i.splice,
            }),
            (C.extend = C.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  i,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof a &&
                    ((l = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || m(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (l &&
                          r &&
                          (C.isPlainObject(r) || (o = Array.isArray(r)))
                            ? ((n = a[t]),
                              (i =
                                o && !Array.isArray(n)
                                  ? []
                                  : o || C.isPlainObject(n)
                                  ? n
                                  : {}),
                              (o = !1),
                              (a[t] = C.extend(l, i, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            C.extend({
              expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== d.call(e) ||
                  ((t = a(e)) &&
                    ("function" !=
                      typeof (n = p.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== v))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (S(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (S(Object(e))
                      ? C.merge(n, "string" == typeof e ? [e] : e)
                      : l.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                  !t(e[o], o) !== a && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = 0,
                  a = [];
                if (S(e))
                  for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
                else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return u(a);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (C.fn[Symbol.iterator] = i[Symbol.iterator]),
            C.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var A = (function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              v,
              g,
              m,
              y,
              x,
              b = "sizzle" + 1 * new Date(),
              w = e.document,
              T = 0,
              E = 0,
              C = ue(),
              S = ue(),
              A = ue(),
              k = ue(),
              N = function (e, t) {
                return e === t && (f = !0), 0;
              },
              L = {}.hasOwnProperty,
              D = [],
              j = D.pop,
              q = D.push,
              H = D.push,
              O = D.slice,
              P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              M = "[\\x20\\t\\r\\n\\f]",
              I =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              _ =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                I +
                ")(?:" +
                M +
                "*([*^$|!~]?=)" +
                M +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                I +
                "))|)" +
                M +
                "*\\]",
              W =
                ":(" +
                I +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                _ +
                ")*)|.*)\\)|)",
              B = new RegExp(M + "+", "g"),
              F = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              $ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              z = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              U = new RegExp(M + "|>"),
              X = new RegExp(W),
              V = new RegExp("^" + I + "$"),
              Y = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + _),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              G = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              oe = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              ie = function () {
                d();
              },
              ae = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              H.apply((D = O.call(w.childNodes)), w.childNodes),
                D[w.childNodes.length].nodeType;
            } catch (e) {
              H = {
                apply: D.length
                  ? function (e, t) {
                      q.apply(e, O.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, o) {
              var i,
                s,
                l,
                c,
                f,
                h,
                m,
                y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!o && (d(t), (t = t || p), v)) {
                if (11 !== w && (f = Z.exec(e)))
                  if ((i = f[1])) {
                    if (9 === w) {
                      if (!(l = t.getElementById(i))) return r;
                      if (l.id === i) return r.push(l), r;
                    } else if (
                      y &&
                      (l = y.getElementById(i)) &&
                      x(t, l) &&
                      l.id === i
                    )
                      return r.push(l), r;
                  } else {
                    if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (i = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return H.apply(r, t.getElementsByClassName(i)), r;
                  }
                if (
                  n.qsa &&
                  !k[e + " "] &&
                  (!g || !g.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((m = e), (y = t), 1 === w && (U.test(e) || z.test(e)))) {
                    for (
                      ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(re, oe))
                          : t.setAttribute("id", (c = b))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                    m = h.join(",");
                  }
                  try {
                    return H.apply(r, y.querySelectorAll(m)), r;
                  } catch (t) {
                    k(e, !0);
                  } finally {
                    c === b && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace(F, "$1"), t, r, o);
            }
            function ue() {
              var e = [];
              return function t(n, o) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = o)
                );
              };
            }
            function le(e) {
              return (e[b] = !0), e;
            }
            function ce(e) {
              var t = p.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function fe(e, t) {
              for (var n = e.split("|"), o = n.length; o--; )
                r.attrHandle[n[o]] = t;
            }
            function de(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function pe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ve(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ge(e) {
              return le(function (t) {
                return (
                  (t = +t),
                  le(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                      n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                  })
                );
              });
            }
            function me(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (i = se.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !G.test(t || (n && n.nodeName) || "HTML");
              }),
            (d = se.setDocument =
              function (e) {
                var t,
                  o,
                  a = e ? e.ownerDocument || e : w;
                return a != p && 9 === a.nodeType && a.documentElement
                  ? ((h = (p = a).documentElement),
                    (v = !i(p)),
                    w != p &&
                      (o = p.defaultView) &&
                      o.top !== o &&
                      (o.addEventListener
                        ? o.addEventListener("unload", ie, !1)
                        : o.attachEvent && o.attachEvent("onunload", ie)),
                    (n.scope = ce(function (e) {
                      return (
                        h.appendChild(e).appendChild(p.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ce(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                      return (
                        e.appendChild(p.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      p.getElementsByClassName
                    )),
                    (n.getById = ce(function (e) {
                      return (
                        (h.appendChild(e).id = b),
                        !p.getElementsByName || !p.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n,
                              r,
                              o,
                              i = t.getElementById(e);
                            if (i) {
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                              for (
                                o = t.getElementsByName(e), r = 0;
                                (i = o[r++]);

                              )
                                if (
                                  (n = i.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [i];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = i[o++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return i;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                          return t.getElementsByClassName(e);
                      }),
                    (m = []),
                    (g = []),
                    (n.qsa = K.test(p.querySelectorAll)) &&
                      (ce(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"
                            ),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            g.push("~="),
                          (t = p.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            g.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          g.push("[\\r\\n\\f]");
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ce(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          m.push("!=", W);
                      }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (m = m.length && new RegExp(m.join("|"))),
                    (t = K.test(h.compareDocumentPosition)),
                    (x =
                      t || K.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (N = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == p || (e.ownerDocument == w && x(w, e))
                                ? -1
                                : t == p || (t.ownerDocument == w && x(w, t))
                                ? 1
                                : c
                                ? P(c, e) - P(c, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var n,
                            r = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!o || !i)
                            return e == p
                              ? -1
                              : t == p
                              ? 1
                              : o
                              ? -1
                              : i
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0;
                          if (o === i) return de(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? de(a[r], s[r])
                            : a[r] == w
                            ? -1
                            : s[r] == w
                            ? 1
                            : 0;
                        }),
                    p)
                  : p;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (d(e),
                n.matchesSelector &&
                  v &&
                  !k[t + " "] &&
                  (!m || !m.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var r = y.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  k(t, !0);
                }
              return se(t, p, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != p && d(e), x(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != p && d(e);
              var o = r.attrHandle[t.toLowerCase()],
                i =
                  o && L.call(r.attrHandle, t.toLowerCase())
                    ? o(e, t, !v)
                    : void 0;
              return void 0 !== i
                ? i
                : n.attributes || !v
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, oe);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                o = 0,
                i = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(N),
                f)
              ) {
                for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
                for (; o--; ) e.splice(r[o], 1);
              }
              return (c = null), e;
            }),
            (o = se.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  i = e.nodeType;
                if (i) {
                  if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                  } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += o(t);
                return n;
              }),
            (r = se.selectors =
              {
                cacheLength: 50,
                createPseudo: le,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            X.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = C[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + M + "|$)"
                      )) &&
                        C(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var o = se.attr(r, e);
                      return null == o
                        ? "!=" === t
                        : !t ||
                            ((o += ""),
                            "=" === t
                              ? o === n
                              : "!=" === t
                              ? o !== n
                              : "^=" === t
                              ? n && 0 === o.indexOf(n)
                              : "*=" === t
                              ? n && o.indexOf(n) > -1
                              : "$=" === t
                              ? n && o.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (o === n ||
                                  o.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === o
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var l,
                            c,
                            f,
                            d,
                            p,
                            h,
                            v = i !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            x = !1;
                          if (g) {
                            if (i) {
                              for (; v; ) {
                                for (d = t; (d = d[v]); )
                                  if (
                                    s
                                      ? d.nodeName.toLowerCase() === m
                                      : 1 === d.nodeType
                                  )
                                    return !1;
                                h = v = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? g.firstChild : g.lastChild]), a && y)
                            ) {
                              for (
                                x =
                                  (p =
                                    (l =
                                      (c =
                                        (f = (d = g)[b] || (d[b] = {}))[
                                          d.uniqueID
                                        ] || (f[d.uniqueID] = {}))[e] ||
                                      [])[0] === T && l[1]) && l[2],
                                  d = p && g.childNodes[p];
                                (d =
                                  (++p && d && d[v]) || (x = p = 0) || h.pop());

                              )
                                if (1 === d.nodeType && ++x && d === t) {
                                  c[e] = [T, p, x];
                                  break;
                                }
                            } else if (
                              (y &&
                                (x = p =
                                  (l =
                                    (c =
                                      (f = (d = t)[b] || (d[b] = {}))[
                                        d.uniqueID
                                      ] || (f[d.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (d =
                                  (++p && d && d[v]) ||
                                  (x = p = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? d.nodeName.toLowerCase() !== m
                                  : 1 !== d.nodeType) ||
                                  !++x ||
                                  (y &&
                                    ((c =
                                      (f = d[b] || (d[b] = {}))[d.uniqueID] ||
                                      (f[d.uniqueID] = {}))[e] = [T, x]),
                                  d !== t));

                              );
                            return (x -= o) === r || (x % r == 0 && x / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      o =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return o[b]
                      ? o(t)
                      : o.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? le(function (e, n) {
                              for (var r, i = o(e, t), a = i.length; a--; )
                                e[(r = P(e, i[a]))] = !(n[r] = i[a]);
                            })
                          : function (e) {
                              return o(e, 0, n);
                            })
                      : o;
                  },
                },
                pseudos: {
                  not: le(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace(F, "$1"));
                    return r[b]
                      ? le(function (e, t, n, o) {
                          for (
                            var i, a = r(e, null, o, []), s = e.length;
                            s--;

                          )
                            (i = a[s]) && (e[s] = !(t[s] = i));
                        })
                      : function (e, o, i) {
                          return (
                            (t[0] = e),
                            r(t, null, i, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: le(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: le(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || o(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: le(function (e) {
                    return (
                      V.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = v
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === p.activeElement &&
                      (!p.hasFocus || p.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ve(!1),
                  disabled: ve(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return J.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }),
            (r.pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = pe(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function ye() {}
            function xe(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function be(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = E++;
              return t.first
                ? function (t, n, o) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, o);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      d = [T, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            o && o === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((l = c[i]) && l[0] === T && l[1] === s)
                              return (d[2] = l[2]);
                            if (((c[i] = d), (d[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, r, o) {
              for (
                var i, a = [], s = 0, u = e.length, l = null != t;
                s < u;
                s++
              )
                (i = e[s]) &&
                  ((n && !n(i, r, o)) || (a.push(i), l && t.push(s)));
              return a;
            }
            function Ee(e, t, n, r, o, i) {
              return (
                r && !r[b] && (r = Ee(r)),
                o && !o[b] && (o = Ee(o, i)),
                le(function (i, a, s, u) {
                  var l,
                    c,
                    f,
                    d = [],
                    p = [],
                    h = a.length,
                    v =
                      i ||
                      (function (e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || (!i && t) ? v : Te(v, d, e, s, u),
                    m = n ? (o || (i ? e : h || r) ? [] : a) : g;
                  if ((n && n(g, m, s, u), r))
                    for (l = Te(m, p), r(l, [], s, u), c = l.length; c--; )
                      (f = l[c]) && (m[p[c]] = !(g[p[c]] = f));
                  if (i) {
                    if (o || e) {
                      if (o) {
                        for (l = [], c = m.length; c--; )
                          (f = m[c]) && l.push((g[c] = f));
                        o(null, (m = []), l, u);
                      }
                      for (c = m.length; c--; )
                        (f = m[c]) &&
                          (l = o ? P(i, f) : d[c]) > -1 &&
                          (i[l] = !(a[l] = f));
                    }
                  } else (m = Te(m === a ? m.splice(h, m.length) : m)), o ? o(null, a, m, u) : H.apply(a, m);
                })
              );
            }
            function Ce(e) {
              for (
                var t,
                  n,
                  o,
                  i = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  c = be(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  f = be(
                    function (e) {
                      return P(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  d = [
                    function (e, n, r) {
                      var o =
                        (!a && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                      return (t = null), o;
                    },
                  ];
                u < i;
                u++
              )
                if ((n = r.relative[e[u].type])) d = [be(we(d), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                    return Ee(
                      u > 1 && we(d),
                      u > 1 &&
                        xe(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(F, "$1"),
                      n,
                      u < o && Ce(e.slice(u, o)),
                      o < i && Ce((e = e.slice(o))),
                      o < i && xe(e)
                    );
                  }
                  d.push(n);
                }
              return we(d);
            }
            return (
              (ye.prototype = r.filters = r.pseudos),
              (r.setFilters = new ye()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    o,
                    i,
                    a,
                    s,
                    u,
                    l,
                    c = S[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (s = e, u = [], l = r.preFilter; s; ) {
                    for (a in ((n && !(o = $.exec(s))) ||
                      (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                    (n = !1),
                    (o = z.exec(s)) &&
                      ((n = o.shift()),
                      i.push({ value: n, type: o[0].replace(F, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(o = Y[a].exec(s)) ||
                        (l[a] && !(o = l[a](o))) ||
                        ((n = o.shift()),
                        i.push({ value: n, type: a, matches: o }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    o = [],
                    i = [],
                    s = A[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Ce(t[n]))[b] ? o.push(s) : i.push(s);
                    (s = A(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          o = e.length > 0,
                          i = function (i, a, s, u, c) {
                            var f,
                              h,
                              g,
                              m = 0,
                              y = "0",
                              x = i && [],
                              b = [],
                              w = l,
                              E = i || (o && r.find.TAG("*", c)),
                              C = (T += null == w ? 1 : Math.random() || 0.1),
                              S = E.length;
                            for (
                              c && (l = a == p || a || c);
                              y !== S && null != (f = E[y]);
                              y++
                            ) {
                              if (o && f) {
                                for (
                                  h = 0,
                                    a ||
                                      f.ownerDocument == p ||
                                      (d(f), (s = !v));
                                  (g = e[h++]);

                                )
                                  if (g(f, a || p, s)) {
                                    u.push(f);
                                    break;
                                  }
                                c && (T = C);
                              }
                              n && ((f = !g && f) && m--, i && x.push(f));
                            }
                            if (((m += y), n && y !== m)) {
                              for (h = 0; (g = t[h++]); ) g(x, b, a, s);
                              if (i) {
                                if (m > 0)
                                  for (; y--; )
                                    x[y] || b[y] || (b[y] = j.call(u));
                                b = Te(b);
                              }
                              H.apply(u, b),
                                c &&
                                  !i &&
                                  b.length > 0 &&
                                  m + t.length > 1 &&
                                  se.uniqueSort(u);
                            }
                            return c && ((T = C), (l = w)), x;
                          };
                        return n ? le(i) : i;
                      })(i, o)
                    )),
                      (s.selector = e);
                  }
                  return s;
                }),
              (u = se.select =
                function (e, t, n, o) {
                  var i,
                    u,
                    l,
                    c,
                    f,
                    d = "function" == typeof e && e,
                    p = !o && a((e = d.selector || e));
                  if (((n = n || []), 1 === p.length)) {
                    if (
                      (u = p[0] = p[0].slice(0)).length > 2 &&
                      "ID" === (l = u[0]).type &&
                      9 === t.nodeType &&
                      v &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      d && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      i = Y.needsContext.test(e) ? 0 : u.length;
                      i-- && ((l = u[i]), !r.relative[(c = l.type)]);

                    )
                      if (
                        (f = r.find[c]) &&
                        (o = f(
                          l.matches[0].replace(te, ne),
                          (ee.test(u[0].type) && me(t.parentNode)) || t
                        ))
                      ) {
                        if ((u.splice(i, 1), !(e = o.length && xe(u))))
                          return H.apply(n, o), n;
                        break;
                      }
                  }
                  return (
                    (d || s(e, p))(
                      o,
                      t,
                      !v,
                      n,
                      !t || (ee.test(e) && me(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(N).join("") === b),
              (n.detectDuplicates = !!f),
              d(),
              (n.sortDetached = ce(function (e) {
                return (
                  1 & e.compareDocumentPosition(p.createElement("fieldset"))
                );
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                fe("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                fe("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                fe(R, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(r);
          (C.find = A),
            (C.expr = A.selectors),
            (C.expr[":"] = C.expr.pseudos),
            (C.uniqueSort = C.unique = A.uniqueSort),
            (C.text = A.getText),
            (C.isXMLDoc = A.isXML),
            (C.contains = A.contains),
            (C.escapeSelector = A.escape);
          var k = function (e, t, n) {
              for (
                var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (o && C(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            N = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            L = C.expr.match.needsContext;
          function D(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var j =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function q(e, t, n) {
            return m(t)
              ? C.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? C.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? C.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : C.filter(t, e, n);
          }
          (C.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? C.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : C.find.matches(
                    e,
                    C.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            C.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    C(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (C.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  C.find(e, o[t], n);
                return r > 1 ? C.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(q(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(q(this, e || [], !0));
              },
              is: function (e) {
                return !!q(
                  this,
                  "string" == typeof e && L.test(e) ? C(e) : e || [],
                  !1
                ).length;
              },
            });
          var H,
            O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((C.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (((n = n || H), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : O.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof C ? t[0] : t),
                  C.merge(
                    this,
                    C.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : x,
                      !0
                    )
                  ),
                  j.test(r[1]) && C.isPlainObject(t))
                )
                  for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (o = x.getElementById(r[2])) &&
                  ((this[0] = o), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : m(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(C)
              : C.makeArray(e, this);
          }).prototype = C.fn),
            (H = C(x));
          var P = /^(?:parents|prev(?:Until|All))/,
            R = { children: !0, contents: !0, next: !0, prev: !0 };
          function M(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          C.fn.extend({
            has: function (e) {
              var t = C(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (C.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && C(e);
              if (!L.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && C.find.matchesSelector(n, e))
                    ) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(C(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            C.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return k(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return k(e, "parentNode", n);
                },
                next: function (e) {
                  return M(e, "nextSibling");
                },
                prev: function (e) {
                  return M(e, "previousSibling");
                },
                nextAll: function (e) {
                  return k(e, "nextSibling");
                },
                prevAll: function (e) {
                  return k(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return k(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return k(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return N((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return N(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (D(e, "template") && (e = e.content || e),
                      C.merge([], e.childNodes));
                },
              },
              function (e, t) {
                C.fn[e] = function (n, r) {
                  var o = C.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (o = C.filter(r, o)),
                    this.length > 1 &&
                      (R[e] || C.uniqueSort(o), P.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              }
            );
          var I = /[^\x20\t\r\n\f]+/g;
          function _(e) {
            return e;
          }
          function W(e) {
            throw e;
          }
          function B(e, t, n, r) {
            var o;
            try {
              e && m((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && m((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (C.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      C.each(e.match(I) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : C.extend({}, e);
            var t,
              n,
              r,
              o,
              i = [],
              a = [],
              s = -1,
              u = function () {
                for (o = o || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < i.length; )
                    !1 === i[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = i.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    i &&
                      (n && !t && ((s = i.length - 1), a.push(n)),
                      (function t(n) {
                        C.each(n, function (n, r) {
                          m(r)
                            ? (e.unique && l.has(r)) || i.push(r)
                            : r && r.length && "string" !== T(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    C.each(arguments, function (e, t) {
                      for (var n; (n = C.inArray(t, i, n)) > -1; )
                        i.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? C.inArray(e, i) > -1 : i.length > 0;
                },
                empty: function () {
                  return i && (i = []), this;
                },
                disable: function () {
                  return (o = a = []), (i = n = ""), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (o = a = []), n || t || (i = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, n) {
                  return (
                    o ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            C.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      C.Callbacks("memory"),
                      C.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  o = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return i.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return C.Deferred(function (n) {
                        C.each(t, function (t, r) {
                          var o = m(e[r[4]]) && e[r[4]];
                          i[r[1]](function () {
                            var e = o && o.apply(this, arguments);
                            e && m(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, o ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, o) {
                      var i = 0;
                      function a(e, t, n, o) {
                        return function () {
                          var s = this,
                            u = arguments,
                            l = function () {
                              var r, l;
                              if (!(e < i)) {
                                if ((r = n.apply(s, u)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (l =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  m(l)
                                    ? o
                                      ? l.call(r, a(i, t, _, o), a(i, t, W, o))
                                      : (i++,
                                        l.call(
                                          r,
                                          a(i, t, _, o),
                                          a(i, t, W, o),
                                          a(i, t, _, t.notifyWith)
                                        ))
                                    : (n !== _ && ((s = void 0), (u = [r])),
                                      (o || t.resolveWith)(s, u));
                              }
                            },
                            c = o
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (r) {
                                    C.Deferred.exceptionHook &&
                                      C.Deferred.exceptionHook(r, c.stackTrace),
                                      e + 1 >= i &&
                                        (n !== W && ((s = void 0), (u = [r])),
                                        t.rejectWith(s, u));
                                  }
                                };
                          e
                            ? c()
                            : (C.Deferred.getStackHook &&
                                (c.stackTrace = C.Deferred.getStackHook()),
                              r.setTimeout(c));
                        };
                      }
                      return C.Deferred(function (r) {
                        t[0][3].add(a(0, r, m(o) ? o : _, r.notifyWith)),
                          t[1][3].add(a(0, r, m(e) ? e : _)),
                          t[2][3].add(a(0, r, m(n) ? n : W));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? C.extend(e, o) : o;
                    },
                  },
                  i = {};
                return (
                  C.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (o[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (i[r[0]] = function () {
                        return (
                          i[r[0] + "With"](
                            this === i ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (i[r[0] + "With"] = a.fireWith);
                  }),
                  o.promise(i),
                  e && e.call(i, i),
                  i
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  o = s.call(arguments),
                  i = C.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || i.resolveWith(r, o);
                    };
                  };
                if (
                  t <= 1 &&
                  (B(e, i.done(a(n)).resolve, i.reject, !t),
                  "pending" === i.state() || m(o[n] && o[n].then))
                )
                  return i.then();
                for (; n--; ) B(o[n], a(n), i.reject);
                return i.promise();
              },
            });
          var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (C.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              F.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (C.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var $ = C.Deferred();
          function z() {
            x.removeEventListener("DOMContentLoaded", z),
              r.removeEventListener("load", z),
              C.ready();
          }
          (C.fn.ready = function (e) {
            return (
              $.then(e).catch(function (e) {
                C.readyException(e);
              }),
              this
            );
          }),
            C.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                  ((C.isReady = !0),
                  (!0 !== e && --C.readyWait > 0) || $.resolveWith(x, [C]));
              },
            }),
            (C.ready.then = $.then),
            "complete" === x.readyState ||
            ("loading" !== x.readyState && !x.documentElement.doScroll)
              ? r.setTimeout(C.ready)
              : (x.addEventListener("DOMContentLoaded", z),
                r.addEventListener("load", z));
          var U = function (e, t, n, r, o, i, a) {
              var s = 0,
                u = e.length,
                l = null == n;
              if ("object" === T(n))
                for (s in ((o = !0), n)) U(e, t, s, n[s], !0, i, a);
              else if (
                void 0 !== r &&
                ((o = !0),
                m(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(C(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
            },
            X = /^-ms-/,
            V = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function G(e) {
            return e.replace(X, "ms-").replace(V, Y);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = C.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  o = this.cache(e);
                if ("string" == typeof t) o[G(t)] = n;
                else for (r in t) o[G(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][G(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(G)
                      : (t = G(t)) in r
                      ? [t]
                      : t.match(I) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || C.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
              },
            });
          var K = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          C.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            C.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = Z.get(i)),
                    1 === i.nodeType && !K.get(i, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = G(r.slice(5))), ne(i, r, o[r]));
                    K.set(i, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : U(
                      this,
                      function (t) {
                        var n;
                        if (i && void 0 === t)
                          return void 0 !== (n = Z.get(i, e)) ||
                            void 0 !== (n = ne(i, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            C.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = K.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = K.access(e, t, C.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = C._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), r--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(
                      e,
                      function () {
                        C.dequeue(e, t);
                      },
                      i
                    )),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                      K.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            C.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? C.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            C.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  C.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  o = C.Deferred(),
                  i = this,
                  a = this.length,
                  s = function () {
                    --r || o.resolveWith(i, [i]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = K.get(i[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), o.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            ae = x.documentElement,
            se = function (e) {
              return C.contains(e.ownerDocument, e);
            },
            ue = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                C.contains(e.ownerDocument, e) ||
                e.getRootNode(ue) === e.ownerDocument
              );
            });
          var le = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === C.css(e, "display"))
            );
          };
          function ce(e, t, n, r) {
            var o,
              i,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return C.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (C.cssNumber[t] || ("px" !== l && +u)) &&
                oe.exec(C.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                C.style(e, t, c + l),
                  (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= i);
              (c *= 2), C.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = o))),
              o
            );
          }
          var fe = {};
          function de(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = fe[r];
            return (
              o ||
              ((t = n.body.appendChild(n.createElement(r))),
              (o = C.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === o && (o = "block"),
              (fe[r] = o),
              o)
            );
          }
          function pe(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
              (r = e[i]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((o[i] = K.get(r, "display") || null),
                      o[i] || (r.style.display = "")),
                    "" === r.style.display && le(r) && (o[i] = de(r)))
                  : "none" !== n && ((o[i] = "none"), K.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e;
          }
          C.fn.extend({
            show: function () {
              return pe(this, !0);
            },
            hide: function () {
              return pe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    le(this) ? C(this).show() : C(this).hide();
                  });
            },
          });
          var he,
            ve,
            ge = /^(?:checkbox|radio)$/i,
            me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = x.createDocumentFragment().appendChild(x.createElement("div"))),
            (ve = x.createElement("input")).setAttribute("type", "radio"),
            ve.setAttribute("checked", "checked"),
            ve.setAttribute("name", "t"),
            he.appendChild(ve),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (g.option = !!he.lastChild);
          var xe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function be(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && D(e, t)) ? C.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
          }
          (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
            (xe.th = xe.td),
            g.option ||
              (xe.optgroup = xe.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Ee(e, t, n, r, o) {
            for (
              var i,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                d = [],
                p = 0,
                h = e.length;
              p < h;
              p++
            )
              if ((i = e[p]) || 0 === i)
                if ("object" === T(i)) C.merge(d, i.nodeType ? [i] : i);
                else if (Te.test(i)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      s = (me.exec(i) || ["", ""])[1].toLowerCase(),
                      u = xe[s] || xe._default,
                      a.innerHTML = u[1] + C.htmlPrefilter(i) + u[2],
                      c = u[0];
                    c--;

                  )
                    a = a.lastChild;
                  C.merge(d, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else d.push(t.createTextNode(i));
            for (f.textContent = "", p = 0; (i = d[p++]); )
              if (r && C.inArray(i, r) > -1) o && o.push(i);
              else if (
                ((l = se(i)),
                (a = be(f.appendChild(i), "script")),
                l && we(a),
                n)
              )
                for (c = 0; (i = a[c++]); ) ye.test(i.type || "") && n.push(i);
            return f;
          }
          var Ce = /^([^.]*)(?:\.(.+)|)/;
          function Se() {
            return !0;
          }
          function Ae() {
            return !1;
          }
          function ke(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return x.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ne(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Ne(e, s, n, r, t[s], i);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = Ae;
            else if (!o) return e;
            return (
              1 === i &&
                ((a = o),
                (o = function (e) {
                  return C().off(e), a.apply(this, arguments);
                }),
                (o.guid = a.guid || (a.guid = C.guid++))),
              e.each(function () {
                C.event.add(this, t, o, r, n);
              })
            );
          }
          function Le(e, t, n) {
            n
              ? (K.set(e, t, !1),
                C.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      o,
                      i = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (i.length)
                        (C.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((i = s.call(arguments)),
                        K.set(this, t, i),
                        (r = n(this, t)),
                        this[t](),
                        i !== (o = K.get(this, t)) || r
                          ? K.set(this, t, !1)
                          : (o = {}),
                        i !== o)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          o && o.value
                        );
                    } else
                      i.length &&
                        (K.set(this, t, {
                          value: C.event.trigger(
                            C.extend(i[0], C.Event.prototype),
                            i.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && C.event.add(e, t, Se);
          }
          (C.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                v,
                g = K.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (i = n).handler), (o = i.selector)),
                    o && C.find.matchesSelector(ae, o),
                    n.guid || (n.guid = C.guid++),
                    (u = g.events) || (u = g.events = Object.create(null)),
                    (a = g.handle) ||
                      (a = g.handle =
                        function (t) {
                          return void 0 !== C && C.event.triggered !== t.type
                            ? C.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || "").match(I) || [""]).length;
                  l--;

                )
                  (p = v = (s = Ce.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p &&
                      ((f = C.event.special[p] || {}),
                      (p = (o ? f.delegateType : f.bindType) || p),
                      (f = C.event.special[p] || {}),
                      (c = C.extend(
                        {
                          type: p,
                          origType: v,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && C.expr.match.needsContext.test(o),
                          namespace: h.join("."),
                        },
                        i
                      )),
                      (d = u[p]) ||
                        (((d = u[p] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(p, a))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                      (C.event.global[p] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                v,
                g = K.hasData(e) && K.get(e);
              if (g && (u = g.events)) {
                for (l = (t = (t || "").match(I) || [""]).length; l--; )
                  if (
                    ((p = v = (s = Ce.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p)
                  ) {
                    for (
                      f = C.event.special[p] || {},
                        d =
                          u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = i = d.length;
                      i--;

                    )
                      (c = d[i]),
                        (!o && v !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (d.splice(i, 1),
                          c.selector && d.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    a &&
                      !d.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                        C.removeEvent(e, p, g.handle),
                      delete u[p]);
                  } else for (p in u) C.event.remove(e, p + t[l], n, r, !0);
                C.isEmptyObject(u) && K.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s = new Array(arguments.length),
                u = C.event.fix(e),
                l =
                  (K.get(this, "events") || Object.create(null))[u.type] || [],
                c = C.event.special[u.type] || {};
              for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  a = C.event.handlers.call(this, u, l), t = 0;
                  (o = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = o.elem, n = 0;
                    (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== i.namespace &&
                      !u.rnamespace.test(i.namespace)) ||
                      ((u.handleObj = i),
                      (u.data = i.data),
                      void 0 !==
                        (r = (
                          (C.event.special[i.origType] || {}).handle ||
                          i.handler
                        ).apply(o.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ("click" !== e.type || !0 !== l.disabled)
                  ) {
                    for (i = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(o = (r = t[n]).selector + " ")] &&
                        (a[o] = r.needsContext
                          ? C(o, this).index(l) > -1
                          : C.find(o, this, null, [l]).length),
                        a[o] && i.push(r);
                    i.length && s.push({ elem: l, handlers: i });
                  }
              return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[C.expando] ? e : new C.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      Le(t, "click", Se),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      Le(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      K.get(t, "click")) ||
                    D(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (C.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (C.Event = function (e, t) {
              if (!(this instanceof C.Event)) return new C.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Se
                      : Ae),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
            }),
            (C.Event.prototype = {
              constructor: C.Event,
              isDefaultPrevented: Ae,
              isPropagationStopped: Ae,
              isImmediatePropagationStopped: Ae,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Se),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Se),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Se),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            C.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              C.event.addProp
            ),
            C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              C.event.special[e] = {
                setup: function () {
                  return Le(this, e, ke), !1;
                },
                trigger: function () {
                  return Le(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            C.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                C.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = this,
                      o = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (o && (o === r || C.contains(r, o))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            C.fn.extend({
              on: function (e, t, n, r) {
                return Ne(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Ne(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    C(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ae),
                  this.each(function () {
                    C.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var De = /<script|<style|<link/i,
            je = /checked\s*(?:[^=]|=\s*.checked.)/i,
            qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function He(e, t) {
            return (
              (D(e, "table") &&
                D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                C(e).children("tbody")[0]) ||
              e
            );
          }
          function Oe(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Pe(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Re(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (s = K.get(e).events))
                for (o in (K.remove(t, "handle events"), s))
                  for (n = 0, r = s[o].length; n < r; n++)
                    C.event.add(t, o, s[o][n]);
              Z.hasData(e) &&
                ((i = Z.access(e)), (a = C.extend({}, i)), Z.set(t, a));
            }
          }
          function Me(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Ie(e, t, n, r) {
            t = u(t);
            var o,
              i,
              a,
              s,
              l,
              c,
              f = 0,
              d = e.length,
              p = d - 1,
              h = t[0],
              v = m(h);
            if (
              v ||
              (d > 1 && "string" == typeof h && !g.checkClone && je.test(h))
            )
              return e.each(function (o) {
                var i = e.eq(o);
                v && (t[0] = h.call(this, o, i.html())), Ie(i, t, n, r);
              });
            if (
              d &&
              ((i = (o = Ee(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === o.childNodes.length && (o = i),
              i || r)
            ) {
              for (s = (a = C.map(be(o, "script"), Oe)).length; f < d; f++)
                (l = o),
                  f !== p &&
                    ((l = C.clone(l, !0, !0)),
                    s && C.merge(a, be(l, "script"))),
                  n.call(e[f], l, f);
              if (s)
                for (
                  c = a[a.length - 1].ownerDocument, C.map(a, Pe), f = 0;
                  f < s;
                  f++
                )
                  (l = a[f]),
                    ye.test(l.type || "") &&
                      !K.access(l, "globalEval") &&
                      C.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? C._evalUrl &&
                          !l.noModule &&
                          C._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute("nonce") },
                            c
                          )
                        : w(l.textContent.replace(qe, ""), l, c));
            }
            return e;
          }
          function _e(e, t, n) {
            for (
              var r, o = t ? C.filter(t, e) : e, i = 0;
              null != (r = o[i]);
              i++
            )
              n || 1 !== r.nodeType || C.cleanData(be(r)),
                r.parentNode &&
                  (n && se(r) && we(be(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          C.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                a,
                s = e.cloneNode(!0),
                u = se(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  C.isXMLDoc(e)
                )
              )
                for (a = be(s), r = 0, o = (i = be(e)).length; r < o; r++)
                  Me(i[r], a[r]);
              if (t)
                if (n)
                  for (
                    i = i || be(e), a = a || be(s), r = 0, o = i.length;
                    r < o;
                    r++
                  )
                    Re(i[r], a[r]);
                else Re(e, s);
              return (
                (a = be(s, "script")).length > 0 &&
                  we(a, !u && be(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, o = C.event.special, i = 0;
                void 0 !== (n = e[i]);
                i++
              )
                if (Q(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (r in t.events)
                        o[r]
                          ? C.event.remove(n, r)
                          : C.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            C.fn.extend({
              detach: function (e) {
                return _e(this, e, !0);
              },
              remove: function (e) {
                return _e(this, e);
              },
              text: function (e) {
                return U(
                  this,
                  function (e) {
                    return void 0 === e
                      ? C.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Ie(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    He(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Ie(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = He(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ie(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ie(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (C.cleanData(be(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return C.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return U(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !De.test(e) &&
                      !xe[(me.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = C.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (C.cleanData(be(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Ie(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 &&
                      (C.cleanData(be(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            C.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                C.fn[e] = function (e) {
                  for (
                    var n, r = [], o = C(e), i = o.length - 1, a = 0;
                    a <= i;
                    a++
                  )
                    (n = a === i ? this : this.clone(!0)),
                      C(o[a])[t](n),
                      l.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            Be = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Fe = function (e, t, n) {
              var r,
                o,
                i = {};
              for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
              return r;
            },
            $e = new RegExp(ie.join("|"), "i");
          function ze(e, t, n) {
            var r,
              o,
              i,
              a,
              s = e.style;
            return (
              (n = n || Be(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = C.style(e, t)),
                !g.pixelBoxStyles() &&
                  We.test(a) &&
                  $e.test(t) &&
                  ((r = s.width),
                  (o = s.minWidth),
                  (i = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = o),
                  (s.maxWidth = i))),
              void 0 !== a ? a + "" : a
            );
          }
          function Ue(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(l).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (i = 12 === t(c.offsetWidth / 3)),
                  ae.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              o,
              i,
              a,
              s,
              u,
              l = x.createElement("div"),
              c = x.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === c.style.backgroundClip),
              C.extend(g, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), i;
                },
                reliableTrDimensions: function () {
                  var e, t, n, o;
                  return (
                    null == s &&
                      ((e = x.createElement("table")),
                      (t = x.createElement("tr")),
                      (n = x.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (o = r.getComputedStyle(t)),
                      (s =
                        parseInt(o.height, 10) +
                          parseInt(o.borderTopWidth, 10) +
                          parseInt(o.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Xe = ["Webkit", "Moz", "ms"],
            Ve = x.createElement("div").style,
            Ye = {};
          function Ge(e) {
            return (
              C.cssProps[e] ||
              Ye[e] ||
              (e in Ve
                ? e
                : (Ye[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Xe.length;
                        n--;

                      )
                        if ((e = Xe[n] + t) in Ve) return e;
                    })(e) || e))
            );
          }
          var Qe = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            Ke = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var r = oe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function tt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += C.css(e, n + ie[a], !0, o)),
                r
                  ? ("content" === n &&
                      (u -= C.css(e, "padding" + ie[a], !0, o)),
                    "margin" !== n &&
                      (u -= C.css(e, "border" + ie[a] + "Width", !0, o)))
                  : ((u += C.css(e, "padding" + ie[a], !0, o)),
                    "padding" !== n
                      ? (u += C.css(e, "border" + ie[a] + "Width", !0, o))
                      : (s += C.css(e, "border" + ie[a] + "Width", !0, o)));
            return (
              !r &&
                i >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        i -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function nt(e, t, n) {
            var r = Be(e),
              o =
                (!g.boxSizingReliable() || n) &&
                "border-box" === C.css(e, "boxSizing", !1, r),
              i = o,
              a = ze(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (We.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!g.boxSizingReliable() && o) ||
                (!g.reliableTrDimensions() && D(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === C.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((o = "border-box" === C.css(e, "boxSizing", !1, r)),
                (i = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                tt(e, t, n || (o ? "border" : "content"), i, r, a) +
                "px"
            );
          }
          function rt(e, t, n, r, o) {
            return new rt.prototype.init(e, t, n, r, o);
          }
          C.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = ze(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  a,
                  s = G(t),
                  u = Je.test(t),
                  l = e.style;
                if (
                  (u || (t = Ge(s)),
                  (a = C.cssHooks[t] || C.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                    ? o
                    : l[t];
                "string" == (i = typeof n) &&
                  (o = oe.exec(n)) &&
                  o[1] &&
                  ((n = ce(e, t, o)), (i = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== i ||
                      u ||
                      (n += (o && o[3]) || (C.cssNumber[s] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (l[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var o,
                i,
                a,
                s = G(t);
              return (
                Je.test(t) || (t = Ge(s)),
                (a = C.cssHooks[t] || C.cssHooks[s]) &&
                  "get" in a &&
                  (o = a.get(e, !0, n)),
                void 0 === o && (o = ze(e, t, r)),
                "normal" === o && t in Ze && (o = Ze[t]),
                "" === n || n
                  ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                  : o
              );
            },
          }),
            C.each(["height", "width"], function (e, t) {
              C.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Qe.test(C.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, r)
                      : Fe(e, Ke, function () {
                          return nt(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var o,
                    i = Be(e),
                    a = !g.scrollboxSize() && "absolute" === i.position,
                    s =
                      (a || r) && "border-box" === C.css(e, "boxSizing", !1, i),
                    u = r ? tt(e, t, r, s, i) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(i[t]) -
                          tt(e, t, "border", !1, i) -
                          0.5
                      )),
                    u &&
                      (o = oe.exec(n)) &&
                      "px" !== (o[3] || "px") &&
                      ((e.style[t] = n), (n = C.css(e, t))),
                    et(0, n, u)
                  );
                },
              };
            }),
            (C.cssHooks.marginLeft = Ue(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(ze(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Fe(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            C.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (C.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        o = {},
                        i = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                    return o;
                  },
                }),
                  "margin" !== e && (C.cssHooks[e + t].set = et);
              }
            ),
            C.fn.extend({
              css: function (e, t) {
                return U(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Be(e), o = t.length; a < o; a++)
                        i[t[a]] = C.css(e, t[a], !1, r);
                      return i;
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (C.Tween = rt),
            (rt.prototype = {
              constructor: rt,
              init: function (e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || C.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (C.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = rt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : rt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = rt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        C.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (rt.prototype.init.prototype = rt.prototype),
            (rt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  C.fx.step[e.prop]
                    ? C.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!C.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : C.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (C.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (C.fx = rt.prototype.init),
            (C.fx.step = {});
          var ot,
            it,
            at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
          function ut() {
            it &&
              (!1 === x.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ut)
                : r.setTimeout(ut, C.fx.interval),
              C.fx.tick());
          }
          function lt() {
            return (
              r.setTimeout(function () {
                ot = void 0;
              }),
              (ot = Date.now())
            );
          }
          function ct(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              o["margin" + (n = ie[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function ft(e, t, n) {
            for (
              var r,
                o = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
                i = 0,
                a = o.length;
              i < a;
              i++
            )
              if ((r = o[i].call(n, t, e))) return r;
          }
          function dt(e, t, n) {
            var r,
              o,
              i = 0,
              a = dt.prefilters.length,
              s = C.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (o) return !1;
                for (
                  var t = ot || lt(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    i = 0,
                    a = l.tweens.length;
                  i < a;
                  i++
                )
                  l.tweens[i].run(r);
                return (
                  s.notifyWith(e, [l, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [l, 1, 0]),
                      s.resolveWith(e, [l]),
                      !1)
                );
              },
              l = s.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(
                  !0,
                  { specialEasing: {}, easing: C.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = C.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                      : s.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              (function (e, t) {
                var n, r, o, i, a;
                for (n in e)
                  if (
                    ((o = t[(r = G(n))]),
                    (i = e[n]),
                    Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                    n !== r && ((e[r] = i), delete e[n]),
                    (a = C.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((i = a.expand(i)), delete e[r], i))
                      (n in e) || ((e[n] = i[n]), (t[n] = o));
                  else t[r] = o;
              })(c, l.opts.specialEasing);
              i < a;
              i++
            )
              if ((r = dt.prefilters[i].call(l, e, c, l.opts)))
                return (
                  m(r.stop) &&
                    (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              C.map(c, ft, l),
              m(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              C.fx.timer(
                C.extend(u, { elem: e, anim: l, queue: l.opts.queue })
              ),
              l
            );
          }
          (C.Animation = C.extend(dt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, oe.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              m(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
              for (var n, r = 0, o = e.length; r < o; r++)
                (n = e[r]),
                  (dt.tweeners[n] = dt.tweeners[n] || []),
                  dt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = "width" in t || "height" in t,
                  d = this,
                  p = {},
                  h = e.style,
                  v = e.nodeType && le(e),
                  g = K.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = C._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[r]), at.test(o))) {
                    if (
                      (delete t[r],
                      (i = i || "toggle" === o),
                      o === (v ? "hide" : "show"))
                    ) {
                      if ("show" !== o || !g || void 0 === g[r]) continue;
                      v = !0;
                    }
                    p[r] = (g && g[r]) || C.style(e, r);
                  }
                if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = g && g.display) && (l = K.get(e, "display")),
                    "none" === (c = C.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (pe([e], !0),
                          (l = e.style.display || l),
                          (c = C.css(e, "display")),
                          pe([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === C.css(e, "float") &&
                      (u ||
                        (d.done(function () {
                          h.display = l;
                        }),
                        null == l &&
                          ((c = h.display), (l = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    d.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  p))
                    u ||
                      (g
                        ? "hidden" in g && (v = g.hidden)
                        : (g = K.access(e, "fxshow", { display: l })),
                      i && (g.hidden = !v),
                      v && pe([e], !0),
                      d.done(function () {
                        for (r in (v || pe([e]), K.remove(e, "fxshow"), p))
                          C.style(e, r, p[r]);
                      })),
                      (u = ft(v ? g[r] : 0, r, d)),
                      r in g ||
                        ((g[r] = u.start),
                        v && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
            },
          })),
            (C.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? C.extend({}, e)
                  : {
                      complete: n || (!n && t) || (m(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !m(t) && t),
                    };
              return (
                C.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in C.fx.speeds
                      ? (r.duration = C.fx.speeds[r.duration])
                      : (r.duration = C.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  m(r.old) && r.old.call(this),
                    r.queue && C.dequeue(this, r.queue);
                }),
                r
              );
            }),
            C.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(le)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var o = C.isEmptyObject(e),
                  i = C.speed(t, n, r),
                  a = function () {
                    var t = dt(this, C.extend({}, e), i);
                    (o || K.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      o = null != e && e + "queueHooks",
                      i = C.timers,
                      a = K.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                      for (o in a) a[o] && a[o].stop && st.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                      i[o].elem !== this ||
                        (null != e && i[o].queue !== e) ||
                        (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                    (!t && n) || C.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      r = n[e + "queue"],
                      o = n[e + "queueHooks"],
                      i = C.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        C.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length;
                      t--;

                    )
                      i[t].elem === this &&
                        i[t].queue === e &&
                        (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            C.each(["toggle", "show", "hide"], function (e, t) {
              var n = C.fn[t];
              C.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ct(t, !0), e, r, o);
              };
            }),
            C.each(
              {
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                C.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (C.timers = []),
            (C.fx.tick = function () {
              var e,
                t = 0,
                n = C.timers;
              for (ot = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || C.fx.stop(), (ot = void 0);
            }),
            (C.fx.timer = function (e) {
              C.timers.push(e), C.fx.start();
            }),
            (C.fx.interval = 13),
            (C.fx.start = function () {
              it || ((it = !0), ut());
            }),
            (C.fx.stop = function () {
              it = null;
            }),
            (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (C.fn.delay = function (e, t) {
              return (
                (e = (C.fx && C.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var o = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = x.createElement("input"),
                t = x
                  .createElement("select")
                  .appendChild(x.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = x.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var pt,
            ht = C.expr.attrHandle;
          C.fn.extend({
            attr: function (e, t) {
              return U(this, C.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                C.removeAttr(this, e);
              });
            },
          }),
            C.extend({
              attr: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return void 0 === e.getAttribute
                    ? C.prop(e, t, n)
                    : ((1 === i && C.isXMLDoc(e)) ||
                        (o =
                          C.attrHooks[t.toLowerCase()] ||
                          (C.expr.match.bool.test(t) ? pt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void C.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : o && "get" in o && null !== (r = o.get(e, t))
                        ? r
                        : null == (r = C.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && D(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match(I);
                if (o && 1 === e.nodeType)
                  for (; (n = o[r++]); ) e.removeAttribute(n);
              },
            }),
            (pt = {
              set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || C.find.attr;
              ht[t] = function (e, t, r) {
                var o,
                  i,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((i = ht[a]),
                    (ht[a] = o),
                    (o = null != n(e, t, r) ? a : null),
                    (ht[a] = i)),
                  o
                );
              };
            });
          var vt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;
          function mt(e) {
            return (e.match(I) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function xt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(I)) || [];
          }
          C.fn.extend({
            prop: function (e, t) {
              return U(this, C.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[C.propFix[e] || e];
              });
            },
          }),
            C.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && C.isXMLDoc(e)) ||
                      ((t = C.propFix[t] || t), (o = C.propHooks[t])),
                    void 0 !== n
                      ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : vt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (C.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            C.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                C.propFix[this.toLowerCase()] = this;
              }
            ),
            C.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (m(e))
                  return this.each(function (t) {
                    C(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = xt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = yt(n)), (r = 1 === n.nodeType && " " + mt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      o !== (s = mt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (m(e))
                  return this.each(function (t) {
                    C(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = xt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = yt(n)), (r = 1 === n.nodeType && " " + mt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        for (; r.indexOf(" " + i + " ") > -1; )
                          r = r.replace(" " + i + " ", " ");
                      o !== (s = mt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : m(e)
                  ? this.each(function (n) {
                      C(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, o, i, a;
                      if (r)
                        for (o = 0, i = C(this), a = xt(e); (t = a[o++]); )
                          i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && K.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : K.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + mt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var bt = /\r/g;
          C.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              return arguments.length
                ? ((r = m(e)),
                  this.each(function (n) {
                    var o;
                    1 === this.nodeType &&
                      (null == (o = r ? e.call(this, n, C(this).val()) : e)
                        ? (o = "")
                        : "number" == typeof o
                        ? (o += "")
                        : Array.isArray(o) &&
                          (o = C.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        C.valHooks[this.type] ||
                        C.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  }))
                : o
                ? (t =
                    C.valHooks[o.type] ||
                    C.valHooks[o.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(o, "value"))
                  ? n
                  : "string" == typeof (n = o.value)
                  ? n.replace(bt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            C.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : mt(C.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      i = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                      if (
                        ((n = o[r]).selected || r === i) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                      ) {
                        if (((t = C(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, o = e.options, i = C.makeArray(t), a = o.length;
                      a--;

                    )
                      ((r = o[a]).selected =
                        C.inArray(C.valHooks.option.get(r), i) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), i;
                  },
                },
              },
            }),
            C.each(["radio", "checkbox"], function () {
              (C.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = C.inArray(C(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in r);
          var wt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          C.extend(C.event, {
            trigger: function (e, t, n, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                h = [n || x],
                v = p.call(e, "type") ? e.type : e,
                g = p.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = d = s = n = n || x),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !wt.test(v + C.event.triggered) &&
                  (v.indexOf(".") > -1 &&
                    ((g = v.split(".")), (v = g.shift()), g.sort()),
                  (l = v.indexOf(":") < 0 && "on" + v),
                  ((e = e[C.expando]
                    ? e
                    : new C.Event(v, "object" == typeof e && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : C.makeArray(t, [e])),
                  (f = C.event.special[v] || {}),
                  o || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!o && !f.noBubble && !y(n)) {
                  for (
                    u = f.delegateType || v,
                      wt.test(u + v) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || x) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                  (d = a),
                    (e.type = i > 1 ? u : f.bindType || v),
                    (c =
                      (K.get(a, "events") || Object.create(null))[e.type] &&
                      K.get(a, "handle")) && c.apply(a, t),
                    (c = l && a[l]) &&
                      c.apply &&
                      Q(a) &&
                      ((e.result = c.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = v),
                  o ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (l &&
                      m(n[v]) &&
                      !y(n) &&
                      ((s = n[l]) && (n[l] = null),
                      (C.event.triggered = v),
                      e.isPropagationStopped() && d.addEventListener(v, Tt),
                      n[v](),
                      e.isPropagationStopped() && d.removeEventListener(v, Tt),
                      (C.event.triggered = void 0),
                      s && (n[l] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
              C.event.trigger(r, null, t);
            },
          }),
            C.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  C.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  C.event.simulate(t, e.target, C.event.fix(e));
                };
                C.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = K.access(r, t);
                    o || r.addEventListener(e, n, !0),
                      K.access(r, t, (o || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = K.access(r, t) - 1;
                    o
                      ? K.access(r, t, o)
                      : (r.removeEventListener(e, n, !0), K.remove(r, t));
                  },
                };
              });
          var Et = r.location,
            Ct = { guid: Date.now() },
            St = /\?/;
          C.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                C.error(
                  "Invalid XML: " +
                    (n
                      ? C.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var At = /\[\]$/,
            kt = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;
          function Dt(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              C.each(t, function (t, o) {
                n || At.test(e)
                  ? r(e, o)
                  : Dt(
                      e +
                        "[" +
                        ("object" == typeof o && null != o ? t : "") +
                        "]",
                      o,
                      n,
                      r
                    );
              });
            else if (n || "object" !== T(t)) r(e, t);
            else for (o in t) Dt(e + "[" + o + "]", t[o], n, r);
          }
          (C.param = function (e, t) {
            var n,
              r = [],
              o = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
              C.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) Dt(n, e[n], t, o);
            return r.join("&");
          }),
            C.fn.extend({
              serialize: function () {
                return C.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = C.prop(this, "elements");
                  return e ? C.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !C(this).is(":disabled") &&
                      Lt.test(this.nodeName) &&
                      !Nt.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = C(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? C.map(n, function (e) {
                          return { name: t.name, value: e.replace(kt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(kt, "\r\n") };
                  })
                  .get();
              },
            });
          var jt = /%20/g,
            qt = /#.*$/,
            Ht = /([?&])_=[^&]*/,
            Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Pt = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            Mt = {},
            It = {},
            _t = "*/".concat("*"),
            Wt = x.createElement("a");
          function Bt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match(I) || [];
              if (m(n))
                for (; (r = i[o++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Ft(e, t, n, r) {
            var o = {},
              i = e === It;
            function a(s) {
              var u;
              return (
                (o[s] = !0),
                C.each(e[s] || [], function (e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || i || o[l]
                    ? i
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!o["*"] && a("*"));
          }
          function $t(e, t) {
            var n,
              r,
              o = C.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r), e;
          }
          (Wt.href = Et.href),
            C.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Et.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": _t,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": C.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? $t($t(e, C.ajaxSettings), t) : $t(C.ajaxSettings, e);
              },
              ajaxPrefilter: Bt(Mt),
              ajaxTransport: Bt(It),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f,
                  d,
                  p = C.ajaxSetup({}, t),
                  h = p.context || p,
                  v = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                  g = C.Deferred(),
                  m = C.Callbacks("once memory"),
                  y = p.statusCode || {},
                  b = {},
                  w = {},
                  T = "canceled",
                  E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!a)
                          for (a = {}; (t = Ot.exec(i)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? i : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == l &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == l && (p.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) E.always(e[E.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), S(0, t), this;
                    },
                  };
                if (
                  (g.promise(E),
                  (p.url = ((e || p.url || Et.href) + "").replace(
                    Rt,
                    Et.protocol + "//"
                  )),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [
                    "",
                  ]),
                  null == p.crossDomain)
                ) {
                  u = x.createElement("a");
                  try {
                    (u.href = p.url),
                      (u.href = u.href),
                      (p.crossDomain =
                        Wt.protocol + "//" + Wt.host !=
                        u.protocol + "//" + u.host);
                  } catch (e) {
                    p.crossDomain = !0;
                  }
                }
                if (
                  (p.data &&
                    p.processData &&
                    "string" != typeof p.data &&
                    (p.data = C.param(p.data, p.traditional)),
                  Ft(Mt, p, t, E),
                  l)
                )
                  return E;
                for (f in ((c = C.event && p.global) &&
                  0 == C.active++ &&
                  C.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Pt.test(p.type)),
                (o = p.url.replace(qt, "")),
                p.hasContent
                  ? p.data &&
                    p.processData &&
                    0 ===
                      (p.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (p.data = p.data.replace(jt, "+"))
                  : ((d = p.url.slice(o.length)),
                    p.data &&
                      (p.processData || "string" == typeof p.data) &&
                      ((o += (St.test(o) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache &&
                      ((o = o.replace(Ht, "$1")),
                      (d = (St.test(o) ? "&" : "?") + "_=" + Ct.guid++ + d)),
                    (p.url = o + d)),
                p.ifModified &&
                  (C.lastModified[o] &&
                    E.setRequestHeader("If-Modified-Since", C.lastModified[o]),
                  C.etag[o] && E.setRequestHeader("If-None-Match", C.etag[o])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                  t.contentType) &&
                  E.setRequestHeader("Content-Type", p.contentType),
                E.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                        ("*" !== p.dataTypes[0] ? ", " + _t + "; q=0.01" : "")
                    : p.accepts["*"]
                ),
                p.headers))
                  E.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, E, p) || l))
                  return E.abort();
                if (
                  ((T = "abort"),
                  m.add(p.complete),
                  E.done(p.success),
                  E.fail(p.error),
                  (n = Ft(It, p, t, E)))
                ) {
                  if (
                    ((E.readyState = 1), c && v.trigger("ajaxSend", [E, p]), l)
                  )
                    return E;
                  p.async &&
                    p.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      E.abort("timeout");
                    }, p.timeout));
                  try {
                    (l = !1), n.send(b, S);
                  } catch (e) {
                    if (l) throw e;
                    S(-1, e);
                  }
                } else S(-1, "No Transport");
                function S(e, t, a, u) {
                  var f,
                    d,
                    x,
                    b,
                    w,
                    T = t;
                  l ||
                    ((l = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (i = u || ""),
                    (E.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (
                          var r, o, i, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (o in s)
                            if (s[o] && s[o].test(r)) {
                              u.unshift(o);
                              break;
                            }
                        if (u[0] in n) i = u[0];
                        else {
                          for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                              i = o;
                              break;
                            }
                            a || (a = o);
                          }
                          i = i || a;
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i];
                      })(p, E, a)),
                    !f &&
                      C.inArray("script", p.dataTypes) > -1 &&
                      C.inArray("json", p.dataTypes) < 0 &&
                      (p.converters["text script"] = function () {}),
                    (b = (function (e, t, n, r) {
                      var o,
                        i,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (i = c.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = i),
                          (i = c.shift()))
                        )
                          if ("*" === i) i = u;
                          else if ("*" !== u && u !== i) {
                            if (!(a = l[u + " " + i] || l["* " + i]))
                              for (o in l)
                                if (
                                  (s = o.split(" "))[1] === i &&
                                  (a = l[u + " " + s[0]] || l["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[o])
                                    : !0 !== l[o] &&
                                      ((i = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + u + " to " + i,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(p, b, E, f)),
                    f
                      ? (p.ifModified &&
                          ((w = E.getResponseHeader("Last-Modified")) &&
                            (C.lastModified[o] = w),
                          (w = E.getResponseHeader("etag")) && (C.etag[o] = w)),
                        204 === e || "HEAD" === p.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = b.state), (d = b.data), (f = !(x = b.error))))
                      : ((x = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (E.status = e),
                    (E.statusText = (t || T) + ""),
                    f
                      ? g.resolveWith(h, [d, T, E])
                      : g.rejectWith(h, [E, T, x]),
                    E.statusCode(y),
                    (y = void 0),
                    c &&
                      v.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        E,
                        p,
                        f ? d : x,
                      ]),
                    m.fireWith(h, [E, T]),
                    c &&
                      (v.trigger("ajaxComplete", [E, p]),
                      --C.active || C.event.trigger("ajaxStop")));
                }
                return E;
              },
              getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
              },
            }),
            C.each(["get", "post"], function (e, t) {
              C[t] = function (e, n, r, o) {
                return (
                  m(n) && ((o = o || r), (r = n), (n = void 0)),
                  C.ajax(
                    C.extend(
                      { url: e, type: t, dataType: o, data: n, success: r },
                      C.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            C.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (C._evalUrl = function (e, t, n) {
              return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  C.globalEval(e, t, n);
                },
              });
            }),
            C.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (m(e) && (e = e.call(this[0])),
                    (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return m(e)
                  ? this.each(function (t) {
                      C(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = C(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = m(e);
                return this.each(function (n) {
                  C(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      C(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (C.expr.pseudos.hidden = function (e) {
              return !C.expr.pseudos.visible(e);
            }),
            (C.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (C.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var zt = { 0: 200, 1223: 204 },
            Ut = C.ajaxSettings.xhr();
          (g.cors = !!Ut && "withCredentials" in Ut),
            (g.ajax = Ut = !!Ut),
            C.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (Ut && !e.crossDomain))
                return {
                  send: function (o, i) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      s.setRequestHeader(a, o[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? i(0, "error")
                              : i(s.status, s.statusText)
                            : i(
                                zt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            C.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            C.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return C.globalEval(e), e;
                },
              },
            }),
            C.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            C.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, o) {
                    (t = C("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && o("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      x.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Xt,
            Vt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
          C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Vt.pop() || C.expando + "_" + Ct.guid++;
              return (this[e] = !0), e;
            },
          }),
            C.ajaxPrefilter("json jsonp", function (e, t, n) {
              var o,
                i,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Yt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Yt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback =
                    m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Yt, "$1" + o))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return a || C.error(o + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = r[o]),
                  (r[o] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === i ? C(r).removeProp(o) : (r[o] = i),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(o)),
                      a && m(i) && i(a[0]),
                      (a = i = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((Xt = x.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Xt.childNodes.length)),
            (C.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((r = (t =
                          x.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = x.location.href),
                        t.head.appendChild(r))
                      : (t = x)),
                  (i = !n && []),
                  (o = j.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = Ee([e], t, i)),
                      i && i.length && C(i).remove(),
                      C.merge([], o.childNodes)));
              var r, o, i;
            }),
            (C.fn.load = function (e, t, n) {
              var r,
                o,
                i,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                a.length > 0 &&
                  C.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (i = arguments),
                        a.html(
                          r ? C("<div>").append(C.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, i || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (C.expr.pseudos.animated = function (e) {
              return C.grep(C.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (C.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l = C.css(e, "position"),
                  c = C(e),
                  f = {};
                "static" === l && (e.style.position = "relative"),
                  (s = c.offset()),
                  (i = C.css(e, "top")),
                  (u = C.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (i + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (o = r.left))
                    : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                  m(t) && (t = t.call(e, n, C.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + o),
                  "using" in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            C.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        C.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 };
                  if ("fixed" === C.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === C.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((o = C(e).offset()).top += C.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (o.left += C.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - C.css(r, "marginTop", !0),
                    left: t.left - o.left - C.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === C.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            C.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function (r) {
                  return U(
                    this,
                    function (e, r, o) {
                      var i;
                      if (
                        (y(e)
                          ? (i = e)
                          : 9 === e.nodeType && (i = e.defaultView),
                        void 0 === o)
                      )
                        return i ? i[t] : e[r];
                      i
                        ? i.scrollTo(
                            n ? i.pageXOffset : o,
                            n ? o : i.pageYOffset
                          )
                        : (e[r] = o);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            C.each(["top", "left"], function (e, t) {
              C.cssHooks[t] = Ue(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = ze(e, t)), We.test(n) ? C(e).position()[t] + "px" : n
                  );
              });
            }),
            C.each({ Height: "height", Width: "width" }, function (e, t) {
              C.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  C.fn[r] = function (o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                      s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return U(
                      this,
                      function (t, n, o) {
                        var i;
                        return y(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((i = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              i["scroll" + e],
                              t.body["offset" + e],
                              i["offset" + e],
                              i["client" + e]
                            ))
                          : void 0 === o
                          ? C.css(t, n, s)
                          : C.style(t, n, o, s);
                      },
                      t,
                      a ? o : void 0,
                      a
                    );
                  };
                }
              );
            }),
            C.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                C.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            C.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            C.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                C.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (C.proxy = function (e, t) {
            var n, r, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
              return (
                (r = s.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || C.guid++),
                o
              );
          }),
            (C.holdReady = function (e) {
              e ? C.readyWait++ : C.ready(!0);
            }),
            (C.isArray = Array.isArray),
            (C.parseJSON = JSON.parse),
            (C.nodeName = D),
            (C.isFunction = m),
            (C.isWindow = y),
            (C.camelCase = G),
            (C.type = T),
            (C.now = Date.now),
            (C.isNumeric = function (e) {
              var t = C.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (C.trim = function (e) {
              return null == e ? "" : (e + "").replace(Gt, "");
            }),
            void 0 ===
              (n = function () {
                return C;
              }.apply(t, [])) || (e.exports = n);
          var Qt = r.jQuery,
            Jt = r.$;
          return (
            (C.noConflict = function (e) {
              return (
                r.$ === C && (r.$ = Jt),
                e && r.jQuery === C && (r.jQuery = Qt),
                C
              );
            }),
            void 0 === o && (r.jQuery = r.$ = C),
            C
          );
        });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      n(598);
      const e = {
        windowEl: window,
        documentEl: document,
        htmlEl: document.documentElement,
        bodyEl: document.body,
      };
      var t,
        r,
        o,
        i,
        a,
        s,
        u = function () {
          var t,
            n =
              null === (t = document) || void 0 === t
                ? void 0
                : t.querySelectorAll(".fixed-block"),
            r = (document.body, parseInt(e.bodyEl.dataset.position, 10));
          n.forEach(function (e) {
            e.style.paddingRight = "0px";
          }),
            (e.bodyEl.style.paddingRight = "0px"),
            (e.bodyEl.style.top = "auto"),
            e.bodyEl.classList.remove("dis-scroll"),
            window.scroll({ top: r, left: 0 }),
            e.bodyEl.removeAttribute("data-position"),
            (e.htmlEl.style.scrollBehavior = "smooth");
        };
      (i =
        null === (t = document) || void 0 === t
          ? void 0
          : t.querySelector("[data-burger]")),
        (a =
          null === (r = document) || void 0 === r
            ? void 0
            : r.querySelector("[data-menu]")),
        (s =
          null === (o = document) || void 0 === o
            ? void 0
            : o.querySelectorAll("[data-menu-item]")),
        null == i ||
          i.addEventListener("click", function (t) {
            null == i || i.classList.toggle("header__burger--active"),
              null == a || a.classList.toggle("menu--active"),
              null != a && a.classList.contains("menu--active")
                ? (null == i || i.setAttribute("aria-expanded", "true"),
                  null == i || i.setAttribute("aria-label", "Закрыть меню"),
                  (function () {
                    var t,
                      n =
                        null === (t = document) || void 0 === t
                          ? void 0
                          : t.querySelectorAll(".fixed-block"),
                      r = window.scrollY,
                      o = "".concat(
                        window.innerWidth - e.bodyEl.offsetWidth,
                        "px"
                      );
                    (e.htmlEl.style.scrollBehavior = "none"),
                      n.forEach(function (e) {
                        e.style.paddingRight = o;
                      }),
                      e.bodyEl.classList.add("dis-scroll"),
                      (e.bodyEl.dataset.position = r),
                      (e.bodyEl.style.top = "-".concat(r, "px"));
                  })())
                : (null == i || i.setAttribute("aria-expanded", "false"),
                  null == i || i.setAttribute("aria-label", "Открыть меню"),
                  u());
          }),
        null == s ||
          s.forEach(function (e) {
            e.addEventListener("click", function () {
              null == i || i.setAttribute("aria-expanded", "false"),
                null == i || i.setAttribute("aria-label", "Открыть меню"),
                i.classList.remove("header__burger--active"),
                a.classList.remove("menu--active"),
                u();
            });
          }),
        n(755);
      var l = n(526),
        c = n.n(l);
      function f(e) {
        c()(e).each(function (e) {
          c()(this).on("click", function (t) {
            t.preventDefault(),
              c()(".program-info").eq(e).toggleClass("program-info_active"),
              c()(".program-list").eq(e).toggleClass("program-list_active");
          });
        });
      }
      f(".program-info__button"),
        f(".program-list__button"),
        c()("#form").on("submit", function (e) {
          var t, n, r;
          e.preventDefault();
          var o = "https://api.telegram.org/bot".concat("", "/sendMessage"),
            i = document.querySelector(".success"),
            a = document.querySelector(".failure"),
            s =
              null === (t = document) || void 0 === t
                ? void 0
                : t.querySelector("#input-name"),
            u =
              null === (n = document) || void 0 === n
                ? void 0
                : n.querySelector("#input-phone"),
            l =
              null === (r = document) || void 0 === r
                ? void 0
                : r.querySelector("#input-tg-name"),
            f = "\n  <b>ФИ: "
              .concat(s.value, "</b>\n  <b>Номер телефона: ")
              .concat(u.value, "</b>\n  <b>Номер телефона: @")
              .concat(l.value, "</b>"),
            d = c().ajax(o, {
              type: "POST",
              data: { chat_id: "", parse_mode: "html", text: f },
            });
          d.done(function () {
            setTimeout(function () {
              i.classList.remove("success_active");
            }, 3e3),
              i.classList.add("success_active"),
              (s.value = ""),
              (u.value = ""),
              (l.value = "");
          }),
            d.fail(function (e) {
              setTimeout(function () {
                a.classList.remove("failure_active");
              }, 3e3),
                a.classList.add("failure_active"),
                console.log(e.message),
                (s.value = ""),
                (u.value = ""),
                (l.value = "");
            });
        });
    })();
})();
