var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __moduleCache = /* @__PURE__ */ new WeakMap;
var __toCommonJS = (from) => {
  var entry = __moduleCache.get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function")
    __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    }));
  __moduleCache.set(from, entry);
  return entry;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node:stream
var exports_stream = {};
__export(exports_stream, {
  default: () => Uc
});
var al, tt, cl, dl, hl, pl, yl = (e, t) => () => (e && (t = e(e = 0)), t), E = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Qr = (e, t) => {
  for (var r in t)
    tt(e, r, { get: t[r], enumerable: true });
}, et = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of dl(t))
      !pl.call(e, i) && i !== r && tt(e, i, { get: () => t[i], enumerable: !(n = cl(t, i)) || n.enumerable });
  return e;
}, ue = (e, t, r) => (et(e, t, "default"), r && et(r, t, "default")), rt = (e, t, r) => (r = e != null ? al(hl(e)) : {}, et(t || !e || !e.__esModule ? tt(r, "default", { value: e, enumerable: true }) : r, e)), pe = (e) => et(tt({}, "__esModule", { value: true }), e), tn, rn, te, I, V, ut, C, He, ir, k, Gu, se, ae, ce, di, Se, Et, xt, At, Pi, Tt, Wi, Gi, Er, Ke, Cr, Mo, J, qr, $r, Ut, Jo, Kr, fl, Jr, Ze, Uc;
var init_stream = __esm(() => {
  al = Object.create;
  tt = Object.defineProperty;
  cl = Object.getOwnPropertyDescriptor;
  dl = Object.getOwnPropertyNames;
  hl = Object.getPrototypeOf;
  pl = Object.prototype.hasOwnProperty;
  tn = E((nt) => {
    nt.byteLength = bl;
    nt.toByteArray = _l;
    nt.fromByteArray = ml;
    var G = [], P = [], wl = typeof Uint8Array < "u" ? Uint8Array : Array, Wt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (ye = 0, Zr = Wt.length;ye < Zr; ++ye)
      G[ye] = Wt[ye], P[Wt.charCodeAt(ye)] = ye;
    var ye, Zr;
    P["-".charCodeAt(0)] = 62;
    P["_".charCodeAt(0)] = 63;
    function en(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      r === -1 && (r = t);
      var n = r === t ? 0 : 4 - r % 4;
      return [r, n];
    }
    function bl(e) {
      var t = en(e), r = t[0], n = t[1];
      return (r + n) * 3 / 4 - n;
    }
    function gl(e, t, r) {
      return (t + r) * 3 / 4 - r;
    }
    function _l(e) {
      var t, r = en(e), n = r[0], i = r[1], o = new wl(gl(e, n, i)), l = 0, u = i > 0 ? n - 4 : n, f;
      for (f = 0;f < u; f += 4)
        t = P[e.charCodeAt(f)] << 18 | P[e.charCodeAt(f + 1)] << 12 | P[e.charCodeAt(f + 2)] << 6 | P[e.charCodeAt(f + 3)], o[l++] = t >> 16 & 255, o[l++] = t >> 8 & 255, o[l++] = t & 255;
      return i === 2 && (t = P[e.charCodeAt(f)] << 2 | P[e.charCodeAt(f + 1)] >> 4, o[l++] = t & 255), i === 1 && (t = P[e.charCodeAt(f)] << 10 | P[e.charCodeAt(f + 1)] << 4 | P[e.charCodeAt(f + 2)] >> 2, o[l++] = t >> 8 & 255, o[l++] = t & 255), o;
    }
    function El(e) {
      return G[e >> 18 & 63] + G[e >> 12 & 63] + G[e >> 6 & 63] + G[e & 63];
    }
    function Sl(e, t, r) {
      for (var n, i = [], o = t;o < r; o += 3)
        n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(El(n));
      return i.join("");
    }
    function ml(e) {
      for (var t, r = e.length, n = r % 3, i = [], o = 16383, l = 0, u = r - n;l < u; l += o)
        i.push(Sl(e, l, l + o > u ? u : l + o));
      return n === 1 ? (t = e[r - 1], i.push(G[t >> 2] + G[t << 4 & 63] + "==")) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], i.push(G[t >> 10] + G[t >> 4 & 63] + G[t << 2 & 63] + "=")), i.join("");
    }
  });
  rn = E(($t) => {
    $t.read = function(e, t, r, n, i) {
      var o, l, u = i * 8 - n - 1, f = (1 << u) - 1, s = f >> 1, d = -7, c = r ? i - 1 : 0, y = r ? -1 : 1, h = e[t + c];
      for (c += y, o = h & (1 << -d) - 1, h >>= -d, d += u;d > 0; o = o * 256 + e[t + c], c += y, d -= 8)
        ;
      for (l = o & (1 << -d) - 1, o >>= -d, d += n;d > 0; l = l * 256 + e[t + c], c += y, d -= 8)
        ;
      if (o === 0)
        o = 1 - s;
      else {
        if (o === f)
          return l ? NaN : (h ? -1 : 1) * (1 / 0);
        l = l + Math.pow(2, n), o = o - s;
      }
      return (h ? -1 : 1) * l * Math.pow(2, o - n);
    };
    $t.write = function(e, t, r, n, i, o) {
      var l, u, f, s = o * 8 - i - 1, d = (1 << s) - 1, c = d >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = n ? 0 : o - 1, p = n ? 1 : -1, B = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, l = d) : (l = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -l)) < 1 && (l--, f *= 2), l + c >= 1 ? t += y / f : t += y * Math.pow(2, 1 - c), t * f >= 2 && (l++, f /= 2), l + c >= d ? (u = 0, l = d) : l + c >= 1 ? (u = (t * f - 1) * Math.pow(2, i), l = l + c) : (u = t * Math.pow(2, c - 1) * Math.pow(2, i), l = 0));i >= 8; e[r + h] = u & 255, h += p, u /= 256, i -= 8)
        ;
      for (l = l << i | u, s += i;s > 0; e[r + h] = l & 255, h += p, l /= 256, s -= 8)
        ;
      e[r + h - p] |= B * 128;
    };
  });
  te = E((Fe) => {
    var jt = tn(), Le = rn(), nn = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Fe.Buffer = a;
    Fe.SlowBuffer = Bl;
    Fe.INSPECT_MAX_BYTES = 50;
    var it = 2147483647;
    Fe.kMaxLength = it;
    a.TYPED_ARRAY_SUPPORT = xl();
    !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function xl() {
      try {
        let e = new Uint8Array(1), t = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(a.prototype, "parent", { enumerable: true, get: function() {
      if (!!a.isBuffer(this))
        return this.buffer;
    } });
    Object.defineProperty(a.prototype, "offset", { enumerable: true, get: function() {
      if (!!a.isBuffer(this))
        return this.byteOffset;
    } });
    function ee(e) {
      if (e > it)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
      let t = new Uint8Array(e);
      return Object.setPrototypeOf(t, a.prototype), t;
    }
    function a(e, t, r) {
      if (typeof e == "number") {
        if (typeof t == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return Yt(e);
      }
      return fn(e, t, r);
    }
    a.poolSize = 8192;
    function fn(e, t, r) {
      if (typeof e == "string")
        return Al(e, t);
      if (ArrayBuffer.isView(e))
        return Il(e);
      if (e == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      if (H(e, ArrayBuffer) || e && H(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (H(e, SharedArrayBuffer) || e && H(e.buffer, SharedArrayBuffer)))
        return Ht(e, t, r);
      if (typeof e == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let n = e.valueOf && e.valueOf();
      if (n != null && n !== e)
        return a.from(n, t, r);
      let i = Tl(e);
      if (i)
        return i;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
        return a.from(e[Symbol.toPrimitive]("string"), t, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    a.from = function(e, t, r) {
      return fn(e, t, r);
    };
    Object.setPrototypeOf(a.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(a, Uint8Array);
    function sn(e) {
      if (typeof e != "number")
        throw new TypeError('"size" argument must be of type number');
      if (e < 0)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function Rl(e, t, r) {
      return sn(e), e <= 0 ? ee(e) : t !== undefined ? typeof r == "string" ? ee(e).fill(t, r) : ee(e).fill(t) : ee(e);
    }
    a.alloc = function(e, t, r) {
      return Rl(e, t, r);
    };
    function Yt(e) {
      return sn(e), ee(e < 0 ? 0 : Kt(e) | 0);
    }
    a.allocUnsafe = function(e) {
      return Yt(e);
    };
    a.allocUnsafeSlow = function(e) {
      return Yt(e);
    };
    function Al(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !a.isEncoding(t))
        throw new TypeError("Unknown encoding: " + t);
      let r = an(e, t) | 0, n = ee(r), i = n.write(e, t);
      return i !== r && (n = n.slice(0, i)), n;
    }
    function Gt(e) {
      let t = e.length < 0 ? 0 : Kt(e.length) | 0, r = ee(t);
      for (let n = 0;n < t; n += 1)
        r[n] = e[n] & 255;
      return r;
    }
    function Il(e) {
      if (H(e, Uint8Array)) {
        let t = new Uint8Array(e);
        return Ht(t.buffer, t.byteOffset, t.byteLength);
      }
      return Gt(e);
    }
    function Ht(e, t, r) {
      if (t < 0 || e.byteLength < t)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (r || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let n;
      return t === undefined && r === undefined ? n = new Uint8Array(e) : r === undefined ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, a.prototype), n;
    }
    function Tl(e) {
      if (a.isBuffer(e)) {
        let t = Kt(e.length) | 0, r = ee(t);
        return r.length === 0 || e.copy(r, 0, 0, t), r;
      }
      if (e.length !== undefined)
        return typeof e.length != "number" || Xt(e.length) ? ee(0) : Gt(e);
      if (e.type === "Buffer" && Array.isArray(e.data))
        return Gt(e.data);
    }
    function Kt(e) {
      if (e >= it)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + it.toString(16) + " bytes");
      return e | 0;
    }
    function Bl(e) {
      return +e != e && (e = 0), a.alloc(+e);
    }
    a.isBuffer = function(t) {
      return t != null && t._isBuffer === true && t !== a.prototype;
    };
    a.compare = function(t, r) {
      if (H(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), H(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)), !a.isBuffer(t) || !a.isBuffer(r))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === r)
        return 0;
      let n = t.length, i = r.length;
      for (let o = 0, l = Math.min(n, i);o < l; ++o)
        if (t[o] !== r[o]) {
          n = t[o], i = r[o];
          break;
        }
      return n < i ? -1 : i < n ? 1 : 0;
    };
    a.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    a.concat = function(t, r) {
      if (!Array.isArray(t))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0)
        return a.alloc(0);
      let n;
      if (r === undefined)
        for (r = 0, n = 0;n < t.length; ++n)
          r += t[n].length;
      let i = a.allocUnsafe(r), o = 0;
      for (n = 0;n < t.length; ++n) {
        let l = t[n];
        if (H(l, Uint8Array))
          o + l.length > i.length ? (a.isBuffer(l) || (l = a.from(l)), l.copy(i, o)) : Uint8Array.prototype.set.call(i, l, o);
        else if (a.isBuffer(l))
          l.copy(i, o);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        o += l.length;
      }
      return i;
    };
    function an(e, t) {
      if (a.isBuffer(e))
        return e.length;
      if (ArrayBuffer.isView(e) || H(e, ArrayBuffer))
        return e.byteLength;
      if (typeof e != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
      let r = e.length, n = arguments.length > 2 && arguments[2] === true;
      if (!n && r === 0)
        return 0;
      let i = false;
      for (;; )
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return Vt(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return _n(e).length;
          default:
            if (i)
              return n ? -1 : Vt(e).length;
            t = ("" + t).toLowerCase(), i = true;
        }
    }
    a.byteLength = an;
    function Ll(e, t, r) {
      let n = false;
      if ((t === undefined || t < 0) && (t = 0), t > this.length || ((r === undefined || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
        return "";
      for (e || (e = "utf8");; )
        switch (e) {
          case "hex":
            return vl(this, t, r);
          case "utf8":
          case "utf-8":
            return dn(this, t, r);
          case "ascii":
            return kl(this, t, r);
          case "latin1":
          case "binary":
            return Ul(this, t, r);
          case "base64":
            return Dl(this, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ql(this, t, r);
          default:
            if (n)
              throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), n = true;
        }
    }
    a.prototype._isBuffer = true;
    function we(e, t, r) {
      let n = e[t];
      e[t] = e[r], e[r] = n;
    }
    a.prototype.swap16 = function() {
      let t = this.length;
      if (t % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let r = 0;r < t; r += 2)
        we(this, r, r + 1);
      return this;
    };
    a.prototype.swap32 = function() {
      let t = this.length;
      if (t % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let r = 0;r < t; r += 4)
        we(this, r, r + 3), we(this, r + 1, r + 2);
      return this;
    };
    a.prototype.swap64 = function() {
      let t = this.length;
      if (t % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let r = 0;r < t; r += 8)
        we(this, r, r + 7), we(this, r + 1, r + 6), we(this, r + 2, r + 5), we(this, r + 3, r + 4);
      return this;
    };
    a.prototype.toString = function() {
      let t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? dn(this, 0, t) : Ll.apply(this, arguments);
    };
    a.prototype.toLocaleString = a.prototype.toString;
    a.prototype.equals = function(t) {
      if (!a.isBuffer(t))
        throw new TypeError("Argument must be a Buffer");
      return this === t ? true : a.compare(this, t) === 0;
    };
    a.prototype.inspect = function() {
      let t = "", r = Fe.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">";
    };
    nn && (a.prototype[nn] = a.prototype.inspect);
    a.prototype.compare = function(t, r, n, i, o) {
      if (H(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
      if (r === undefined && (r = 0), n === undefined && (n = t ? t.length : 0), i === undefined && (i = 0), o === undefined && (o = this.length), r < 0 || n > t.length || i < 0 || o > this.length)
        throw new RangeError("out of range index");
      if (i >= o && r >= n)
        return 0;
      if (i >= o)
        return -1;
      if (r >= n)
        return 1;
      if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === t)
        return 0;
      let l = o - i, u = n - r, f = Math.min(l, u), s = this.slice(i, o), d = t.slice(r, n);
      for (let c = 0;c < f; ++c)
        if (s[c] !== d[c]) {
          l = s[c], u = d[c];
          break;
        }
      return l < u ? -1 : u < l ? 1 : 0;
    };
    function cn(e, t, r, n, i) {
      if (e.length === 0)
        return -1;
      if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, Xt(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
        if (i)
          return -1;
        r = e.length - 1;
      } else if (r < 0)
        if (i)
          r = 0;
        else
          return -1;
      if (typeof t == "string" && (t = a.from(t, n)), a.isBuffer(t))
        return t.length === 0 ? -1 : on(e, t, r, n, i);
      if (typeof t == "number")
        return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : on(e, [t], r, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }
    function on(e, t, r, n, i) {
      let o = 1, l = e.length, u = t.length;
      if (n !== undefined && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (e.length < 2 || t.length < 2)
          return -1;
        o = 2, l /= 2, u /= 2, r /= 2;
      }
      function f(d, c) {
        return o === 1 ? d[c] : d.readUInt16BE(c * o);
      }
      let s;
      if (i) {
        let d = -1;
        for (s = r;s < l; s++)
          if (f(e, s) === f(t, d === -1 ? 0 : s - d)) {
            if (d === -1 && (d = s), s - d + 1 === u)
              return d * o;
          } else
            d !== -1 && (s -= s - d), d = -1;
      } else
        for (r + u > l && (r = l - u), s = r;s >= 0; s--) {
          let d = true;
          for (let c = 0;c < u; c++)
            if (f(e, s + c) !== f(t, c)) {
              d = false;
              break;
            }
          if (d)
            return s;
        }
      return -1;
    }
    a.prototype.includes = function(t, r, n) {
      return this.indexOf(t, r, n) !== -1;
    };
    a.prototype.indexOf = function(t, r, n) {
      return cn(this, t, r, n, true);
    };
    a.prototype.lastIndexOf = function(t, r, n) {
      return cn(this, t, r, n, false);
    };
    function Nl(e, t, r, n) {
      r = Number(r) || 0;
      let i = e.length - r;
      n ? (n = Number(n), n > i && (n = i)) : n = i;
      let o = t.length;
      n > o / 2 && (n = o / 2);
      let l;
      for (l = 0;l < n; ++l) {
        let u = parseInt(t.substr(l * 2, 2), 16);
        if (Xt(u))
          return l;
        e[r + l] = u;
      }
      return l;
    }
    function Fl(e, t, r, n) {
      return ot(Vt(t, e.length - r), e, r, n);
    }
    function Ml(e, t, r, n) {
      return ot(Gl(t), e, r, n);
    }
    function Cl(e, t, r, n) {
      return ot(_n(t), e, r, n);
    }
    function Ol(e, t, r, n) {
      return ot(Hl(t, e.length - r), e, r, n);
    }
    a.prototype.write = function(t, r, n, i) {
      if (r === undefined)
        i = "utf8", n = this.length, r = 0;
      else if (n === undefined && typeof r == "string")
        i = r, n = this.length, r = 0;
      else if (isFinite(r))
        r = r >>> 0, isFinite(n) ? (n = n >>> 0, i === undefined && (i = "utf8")) : (i = n, n = undefined);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let o = this.length - r;
      if ((n === undefined || n > o) && (n = o), t.length > 0 && (n < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      let l = false;
      for (;; )
        switch (i) {
          case "hex":
            return Nl(this, t, r, n);
          case "utf8":
          case "utf-8":
            return Fl(this, t, r, n);
          case "ascii":
          case "latin1":
          case "binary":
            return Ml(this, t, r, n);
          case "base64":
            return Cl(this, t, r, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Ol(this, t, r, n);
          default:
            if (l)
              throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), l = true;
        }
    };
    a.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function Dl(e, t, r) {
      return t === 0 && r === e.length ? jt.fromByteArray(e) : jt.fromByteArray(e.slice(t, r));
    }
    function dn(e, t, r) {
      r = Math.min(e.length, r);
      let n = [], i = t;
      for (;i < r; ) {
        let o = e[i], l = null, u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (i + u <= r) {
          let f, s, d, c;
          switch (u) {
            case 1:
              o < 128 && (l = o);
              break;
            case 2:
              f = e[i + 1], (f & 192) === 128 && (c = (o & 31) << 6 | f & 63, c > 127 && (l = c));
              break;
            case 3:
              f = e[i + 1], s = e[i + 2], (f & 192) === 128 && (s & 192) === 128 && (c = (o & 15) << 12 | (f & 63) << 6 | s & 63, c > 2047 && (c < 55296 || c > 57343) && (l = c));
              break;
            case 4:
              f = e[i + 1], s = e[i + 2], d = e[i + 3], (f & 192) === 128 && (s & 192) === 128 && (d & 192) === 128 && (c = (o & 15) << 18 | (f & 63) << 12 | (s & 63) << 6 | d & 63, c > 65535 && c < 1114112 && (l = c));
          }
        }
        l === null ? (l = 65533, u = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | l & 1023), n.push(l), i += u;
      }
      return Pl(n);
    }
    var ln = 4096;
    function Pl(e) {
      let t = e.length;
      if (t <= ln)
        return String.fromCharCode.apply(String, e);
      let r = "", n = 0;
      for (;n < t; )
        r += String.fromCharCode.apply(String, e.slice(n, n += ln));
      return r;
    }
    function kl(e, t, r) {
      let n = "";
      r = Math.min(e.length, r);
      for (let i = t;i < r; ++i)
        n += String.fromCharCode(e[i] & 127);
      return n;
    }
    function Ul(e, t, r) {
      let n = "";
      r = Math.min(e.length, r);
      for (let i = t;i < r; ++i)
        n += String.fromCharCode(e[i]);
      return n;
    }
    function vl(e, t, r) {
      let n = e.length;
      (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
      let i = "";
      for (let o = t;o < r; ++o)
        i += Vl[e[o]];
      return i;
    }
    function ql(e, t, r) {
      let n = e.slice(t, r), i = "";
      for (let o = 0;o < n.length - 1; o += 2)
        i += String.fromCharCode(n[o] + n[o + 1] * 256);
      return i;
    }
    a.prototype.slice = function(t, r) {
      let n = this.length;
      t = ~~t, r = r === undefined ? n : ~~r, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < t && (r = t);
      let i = this.subarray(t, r);
      return Object.setPrototypeOf(i, a.prototype), i;
    };
    function F(e, t, r) {
      if (e % 1 !== 0 || e < 0)
        throw new RangeError("offset is not uint");
      if (e + t > r)
        throw new RangeError("Trying to access beyond buffer length");
    }
    a.prototype.readUintLE = a.prototype.readUIntLE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = this[t], o = 1, l = 0;
      for (;++l < r && (o *= 256); )
        i += this[t + l] * o;
      return i;
    };
    a.prototype.readUintBE = a.prototype.readUIntBE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = this[t + --r], o = 1;
      for (;r > 0 && (o *= 256); )
        i += this[t + --r] * o;
      return i;
    };
    a.prototype.readUint8 = a.prototype.readUInt8 = function(t, r) {
      return t = t >>> 0, r || F(t, 1, this.length), this[t];
    };
    a.prototype.readUint16LE = a.prototype.readUInt16LE = function(t, r) {
      return t = t >>> 0, r || F(t, 2, this.length), this[t] | this[t + 1] << 8;
    };
    a.prototype.readUint16BE = a.prototype.readUInt16BE = function(t, r) {
      return t = t >>> 0, r || F(t, 2, this.length), this[t] << 8 | this[t + 1];
    };
    a.prototype.readUint32LE = a.prototype.readUInt32LE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    a.prototype.readUint32BE = a.prototype.readUInt32BE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    a.prototype.readBigUInt64LE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
      return BigInt(i) + (BigInt(o) << BigInt(32));
    });
    a.prototype.readBigUInt64BE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = r * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
      return (BigInt(i) << BigInt(32)) + BigInt(o);
    });
    a.prototype.readIntLE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = this[t], o = 1, l = 0;
      for (;++l < r && (o *= 256); )
        i += this[t + l] * o;
      return o *= 128, i >= o && (i -= Math.pow(2, 8 * r)), i;
    };
    a.prototype.readIntBE = function(t, r, n) {
      t = t >>> 0, r = r >>> 0, n || F(t, r, this.length);
      let i = r, o = 1, l = this[t + --i];
      for (;i > 0 && (o *= 256); )
        l += this[t + --i] * o;
      return o *= 128, l >= o && (l -= Math.pow(2, 8 * r)), l;
    };
    a.prototype.readInt8 = function(t, r) {
      return t = t >>> 0, r || F(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    };
    a.prototype.readInt16LE = function(t, r) {
      t = t >>> 0, r || F(t, 2, this.length);
      let n = this[t] | this[t + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    a.prototype.readInt16BE = function(t, r) {
      t = t >>> 0, r || F(t, 2, this.length);
      let n = this[t + 1] | this[t] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    a.prototype.readInt32LE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    a.prototype.readInt32BE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    a.prototype.readBigInt64LE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
      return (BigInt(i) << BigInt(32)) + BigInt(r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
    });
    a.prototype.readBigInt64BE = fe(function(t) {
      t = t >>> 0, Ne(t, "offset");
      let r = this[t], n = this[t + 7];
      (r === undefined || n === undefined) && Ge(t, this.length - 8);
      let i = (r << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
      return (BigInt(i) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n);
    });
    a.prototype.readFloatLE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), Le.read(this, t, true, 23, 4);
    };
    a.prototype.readFloatBE = function(t, r) {
      return t = t >>> 0, r || F(t, 4, this.length), Le.read(this, t, false, 23, 4);
    };
    a.prototype.readDoubleLE = function(t, r) {
      return t = t >>> 0, r || F(t, 8, this.length), Le.read(this, t, true, 52, 8);
    };
    a.prototype.readDoubleBE = function(t, r) {
      return t = t >>> 0, r || F(t, 8, this.length), Le.read(this, t, false, 52, 8);
    };
    function O(e, t, r, n, i, o) {
      if (!a.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > i || t < o)
        throw new RangeError('"value" argument is out of bounds');
      if (r + n > e.length)
        throw new RangeError("Index out of range");
    }
    a.prototype.writeUintLE = a.prototype.writeUIntLE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, n = n >>> 0, !i) {
        let u = Math.pow(2, 8 * n) - 1;
        O(this, t, r, n, u, 0);
      }
      let o = 1, l = 0;
      for (this[r] = t & 255;++l < n && (o *= 256); )
        this[r + l] = t / o & 255;
      return r + n;
    };
    a.prototype.writeUintBE = a.prototype.writeUIntBE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, n = n >>> 0, !i) {
        let u = Math.pow(2, 8 * n) - 1;
        O(this, t, r, n, u, 0);
      }
      let o = n - 1, l = 1;
      for (this[r + o] = t & 255;--o >= 0 && (l *= 256); )
        this[r + o] = t / l & 255;
      return r + n;
    };
    a.prototype.writeUint8 = a.prototype.writeUInt8 = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 1, 255, 0), this[r] = t & 255, r + 1;
    };
    a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 65535, 0), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = t & 255, r + 4;
    };
    a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    function hn(e, t, r, n, i) {
      gn(t, n, i, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
      let l = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r++] = l, l = l >> 8, e[r++] = l, l = l >> 8, e[r++] = l, l = l >> 8, e[r++] = l, r;
    }
    function pn(e, t, r, n, i) {
      gn(t, n, i, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
      let l = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r + 3] = l, l = l >> 8, e[r + 2] = l, l = l >> 8, e[r + 1] = l, l = l >> 8, e[r] = l, r + 8;
    }
    a.prototype.writeBigUInt64LE = fe(function(t, r = 0) {
      return hn(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    a.prototype.writeBigUInt64BE = fe(function(t, r = 0) {
      return pn(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    a.prototype.writeIntLE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, !i) {
        let f = Math.pow(2, 8 * n - 1);
        O(this, t, r, n, f - 1, -f);
      }
      let o = 0, l = 1, u = 0;
      for (this[r] = t & 255;++o < n && (l *= 256); )
        t < 0 && u === 0 && this[r + o - 1] !== 0 && (u = 1), this[r + o] = (t / l >> 0) - u & 255;
      return r + n;
    };
    a.prototype.writeIntBE = function(t, r, n, i) {
      if (t = +t, r = r >>> 0, !i) {
        let f = Math.pow(2, 8 * n - 1);
        O(this, t, r, n, f - 1, -f);
      }
      let o = n - 1, l = 1, u = 0;
      for (this[r + o] = t & 255;--o >= 0 && (l *= 256); )
        t < 0 && u === 0 && this[r + o + 1] !== 0 && (u = 1), this[r + o] = (t / l >> 0) - u & 255;
      return r + n;
    };
    a.prototype.writeInt8 = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = t & 255, r + 1;
    };
    a.prototype.writeInt16LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 32767, -32768), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    a.prototype.writeInt16BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    a.prototype.writeInt32LE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 2147483647, -2147483648), this[r] = t & 255, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4;
    };
    a.prototype.writeInt32BE = function(t, r, n) {
      return t = +t, r = r >>> 0, n || O(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    a.prototype.writeBigInt64LE = fe(function(t, r = 0) {
      return hn(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    a.prototype.writeBigInt64BE = fe(function(t, r = 0) {
      return pn(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function yn(e, t, r, n, i, o) {
      if (r + n > e.length)
        throw new RangeError("Index out of range");
      if (r < 0)
        throw new RangeError("Index out of range");
    }
    function wn(e, t, r, n, i) {
      return t = +t, r = r >>> 0, i || yn(e, t, r, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), Le.write(e, t, r, n, 23, 4), r + 4;
    }
    a.prototype.writeFloatLE = function(t, r, n) {
      return wn(this, t, r, true, n);
    };
    a.prototype.writeFloatBE = function(t, r, n) {
      return wn(this, t, r, false, n);
    };
    function bn(e, t, r, n, i) {
      return t = +t, r = r >>> 0, i || yn(e, t, r, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), Le.write(e, t, r, n, 52, 8), r + 8;
    }
    a.prototype.writeDoubleLE = function(t, r, n) {
      return bn(this, t, r, true, n);
    };
    a.prototype.writeDoubleBE = function(t, r, n) {
      return bn(this, t, r, false, n);
    };
    a.prototype.copy = function(t, r, n, i) {
      if (!a.isBuffer(t))
        throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), !i && i !== 0 && (i = this.length), r >= t.length && (r = t.length), r || (r = 0), i > 0 && i < n && (i = n), i === n || t.length === 0 || this.length === 0)
        return 0;
      if (r < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("Index out of range");
      if (i < 0)
        throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), t.length - r < i - n && (i = t.length - r + n);
      let o = i - n;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, n, i) : Uint8Array.prototype.set.call(t, this.subarray(n, i), r), o;
    };
    a.prototype.fill = function(t, r, n, i) {
      if (typeof t == "string") {
        if (typeof r == "string" ? (i = r, r = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== undefined && typeof i != "string")
          throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !a.isEncoding(i))
          throw new TypeError("Unknown encoding: " + i);
        if (t.length === 1) {
          let l = t.charCodeAt(0);
          (i === "utf8" && l < 128 || i === "latin1") && (t = l);
        }
      } else
        typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (r < 0 || this.length < r || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= r)
        return this;
      r = r >>> 0, n = n === undefined ? this.length : n >>> 0, t || (t = 0);
      let o;
      if (typeof t == "number")
        for (o = r;o < n; ++o)
          this[o] = t;
      else {
        let l = a.isBuffer(t) ? t : a.from(t, i), u = l.length;
        if (u === 0)
          throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (o = 0;o < n - r; ++o)
          this[o + r] = l[o % u];
      }
      return this;
    };
    var Be = {};
    function zt(e, t, r) {
      Be[e] = class extends r {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
        }
        get code() {
          return e;
        }
        set code(i) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: i, writable: true });
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      };
    }
    zt("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    zt("ERR_INVALID_ARG_TYPE", function(e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    }, TypeError);
    zt("ERR_OUT_OF_RANGE", function(e, t, r) {
      let n = `The value of "${e}" is out of range.`, i = r;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = un(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = un(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
    }, RangeError);
    function un(e) {
      let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
      for (;r >= n + 4; r -= 3)
        t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function Wl(e, t, r) {
      Ne(t, "offset"), (e[t] === undefined || e[t + r] === undefined) && Ge(t, e.length - (r + 1));
    }
    function gn(e, t, r, n, i, o) {
      if (e > r || e < t) {
        let l = typeof t == "bigint" ? "n" : "", u;
        throw o > 3 ? t === 0 || t === BigInt(0) ? u = `>= 0${l} and < 2${l} ** ${(o + 1) * 8}${l}` : u = `>= -(2${l} ** ${(o + 1) * 8 - 1}${l}) and < 2 ** ${(o + 1) * 8 - 1}${l}` : u = `>= ${t}${l} and <= ${r}${l}`, new Be.ERR_OUT_OF_RANGE("value", u, e);
      }
      Wl(n, i, o);
    }
    function Ne(e, t) {
      if (typeof e != "number")
        throw new Be.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function Ge(e, t, r) {
      throw Math.floor(e) !== e ? (Ne(e, r), new Be.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new Be.ERR_BUFFER_OUT_OF_BOUNDS : new Be.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
    }
    var $l = /[^+/0-9A-Za-z-_]/g;
    function jl(e) {
      if (e = e.split("=")[0], e = e.trim().replace($l, ""), e.length < 2)
        return "";
      for (;e.length % 4 !== 0; )
        e = e + "=";
      return e;
    }
    function Vt(e, t) {
      t = t || 1 / 0;
      let r, n = e.length, i = null, o = [];
      for (let l = 0;l < n; ++l) {
        if (r = e.charCodeAt(l), r > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            } else if (l + 1 === n) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = r;
            continue;
          }
          if (r < 56320) {
            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
            continue;
          }
          r = (i - 55296 << 10 | r - 56320) + 65536;
        } else
          i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, r < 128) {
          if ((t -= 1) < 0)
            break;
          o.push(r);
        } else if (r < 2048) {
          if ((t -= 2) < 0)
            break;
          o.push(r >> 6 | 192, r & 63 | 128);
        } else if (r < 65536) {
          if ((t -= 3) < 0)
            break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
        } else if (r < 1114112) {
          if ((t -= 4) < 0)
            break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return o;
    }
    function Gl(e) {
      let t = [];
      for (let r = 0;r < e.length; ++r)
        t.push(e.charCodeAt(r) & 255);
      return t;
    }
    function Hl(e, t) {
      let r, n, i, o = [];
      for (let l = 0;l < e.length && !((t -= 2) < 0); ++l)
        r = e.charCodeAt(l), n = r >> 8, i = r % 256, o.push(i), o.push(n);
      return o;
    }
    function _n(e) {
      return jt.toByteArray(jl(e));
    }
    function ot(e, t, r, n) {
      let i;
      for (i = 0;i < n && !(i + r >= t.length || i >= e.length); ++i)
        t[i + r] = e[i];
      return i;
    }
    function H(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function Xt(e) {
      return e !== e;
    }
    var Vl = function() {
      let e = "0123456789abcdef", t = new Array(256);
      for (let r = 0;r < 16; ++r) {
        let n = r * 16;
        for (let i = 0;i < 16; ++i)
          t[n + i] = e[r] + e[i];
      }
      return t;
    }();
    function fe(e) {
      return typeof BigInt > "u" ? Yl : e;
    }
    function Yl() {
      throw new Error("BigInt not supported");
    }
  });
  I = E((Gc, En) => {
    En.exports = { ArrayIsArray(e) {
      return Array.isArray(e);
    }, ArrayPrototypeIncludes(e, t) {
      return e.includes(t);
    }, ArrayPrototypeIndexOf(e, t) {
      return e.indexOf(t);
    }, ArrayPrototypeJoin(e, t) {
      return e.join(t);
    }, ArrayPrototypeMap(e, t) {
      return e.map(t);
    }, ArrayPrototypePop(e, t) {
      return e.pop(t);
    }, ArrayPrototypePush(e, t) {
      return e.push(t);
    }, ArrayPrototypeSlice(e, t, r) {
      return e.slice(t, r);
    }, Error, FunctionPrototypeCall(e, t, ...r) {
      return e.call(t, ...r);
    }, FunctionPrototypeSymbolHasInstance(e, t) {
      return Function.prototype[Symbol.hasInstance].call(e, t);
    }, MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER, NumberParseInt: Number.parseInt, ObjectDefineProperties(e, t) {
      return Object.defineProperties(e, t);
    }, ObjectDefineProperty(e, t, r) {
      return Object.defineProperty(e, t, r);
    }, ObjectGetOwnPropertyDescriptor(e, t) {
      return Object.getOwnPropertyDescriptor(e, t);
    }, ObjectKeys(e) {
      return Object.keys(e);
    }, ObjectSetPrototypeOf(e, t) {
      return Object.setPrototypeOf(e, t);
    }, Promise, PromisePrototypeCatch(e, t) {
      return e.catch(t);
    }, PromisePrototypeThen(e, t, r) {
      return e.then(t, r);
    }, PromiseReject(e) {
      return Promise.reject(e);
    }, ReflectApply: Reflect.apply, RegExpPrototypeTest(e, t) {
      return e.test(t);
    }, SafeSet: Set, String, StringPrototypeSlice(e, t, r) {
      return e.slice(t, r);
    }, StringPrototypeToLowerCase(e) {
      return e.toLowerCase();
    }, StringPrototypeToUpperCase(e) {
      return e.toUpperCase();
    }, StringPrototypeTrim(e) {
      return e.trim();
    }, Symbol, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, TypedArrayPrototypeSet(e, t, r) {
      return e.set(t, r);
    }, Uint8Array };
  });
  V = E((Hc, Qt) => {
    var Kl = te(), zl = Object.getPrototypeOf(async function() {
    }).constructor, Sn = globalThis.Blob || Kl.Blob, Xl = typeof Sn < "u" ? function(t) {
      return t instanceof Sn;
    } : function(t) {
      return false;
    }, Jt = class extends Error {
      constructor(t) {
        if (!Array.isArray(t))
          throw new TypeError(`Expected input to be an Array, got ${typeof t}`);
        let r = "";
        for (let n = 0;n < t.length; n++)
          r += `    ${t[n].stack}
`;
        super(r), this.name = "AggregateError", this.errors = t;
      }
    };
    Qt.exports = { AggregateError: Jt, kEmptyObject: Object.freeze({}), once(e) {
      let t = false;
      return function(...r) {
        t || (t = true, e.apply(this, r));
      };
    }, createDeferredPromise: function() {
      let e, t;
      return { promise: new Promise((n, i) => {
        e = n, t = i;
      }), resolve: e, reject: t };
    }, promisify(e) {
      return new Promise((t, r) => {
        e((n, ...i) => n ? r(n) : t(...i));
      });
    }, debuglog() {
      return function() {
      };
    }, format(e, ...t) {
      return e.replace(/%([sdifj])/g, function(...[r, n]) {
        let i = t.shift();
        return n === "f" ? i.toFixed(6) : n === "j" ? JSON.stringify(i) : n === "s" && typeof i == "object" ? `${i.constructor !== Object ? i.constructor.name : ""} {}`.trim() : i.toString();
      });
    }, inspect(e) {
      switch (typeof e) {
        case "string":
          if (e.includes("'"))
            if (e.includes('"')) {
              if (!e.includes("`") && !e.includes("${"))
                return `\`${e}\``;
            } else
              return `"${e}"`;
          return `'${e}'`;
        case "number":
          return isNaN(e) ? "NaN" : Object.is(e, -0) ? String(e) : e;
        case "bigint":
          return `${String(e)}n`;
        case "boolean":
        case "undefined":
          return String(e);
        case "object":
          return "{}";
      }
    }, types: { isAsyncFunction(e) {
      return e instanceof zl;
    }, isArrayBufferView(e) {
      return ArrayBuffer.isView(e);
    } }, isBlob: Xl };
    Qt.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
  });
  ut = E((Vc, lt) => {
    var { AbortController: mn, AbortSignal: Jl } = typeof self < "u" ? self : typeof window < "u" ? window : undefined;
    lt.exports = mn;
    lt.exports.AbortSignal = Jl;
    lt.exports.default = mn;
  });
  C = E((Yc, An) => {
    var { format: Ql, inspect: ft, AggregateError: Zl } = V(), eu = globalThis.AggregateError || Zl, tu = Symbol("kIsNodeError"), ru = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], nu = /^([A-Z][a-z0-9]*)+$/, iu = "__node_internal_", st = {};
    function be(e, t) {
      if (!e)
        throw new st.ERR_INTERNAL_ASSERTION(t);
    }
    function xn(e) {
      let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
      for (;r >= n + 4; r -= 3)
        t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function ou(e, t, r) {
      if (typeof t == "function")
        return be(t.length <= r.length, `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${t.length}).`), t(...r);
      let n = (t.match(/%[dfijoOs]/g) || []).length;
      return be(n === r.length, `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${n}).`), r.length === 0 ? t : Ql(t, ...r);
    }
    function M(e, t, r) {
      r || (r = Error);

      class n extends r {
        constructor(...o) {
          super(ou(e, t, o));
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      }
      Object.defineProperties(n.prototype, { name: { value: r.name, writable: true, enumerable: false, configurable: true }, toString: { value() {
        return `${this.name} [${e}]: ${this.message}`;
      }, writable: true, enumerable: false, configurable: true } }), n.prototype.code = e, n.prototype[tu] = true, st[e] = n;
    }
    function Rn(e) {
      let t = iu + e.name;
      return Object.defineProperty(e, "name", { value: t }), e;
    }
    function lu(e, t) {
      if (e && t && e !== t) {
        if (Array.isArray(t.errors))
          return t.errors.push(e), t;
        let r = new eu([t, e], t.message);
        return r.code = t.code, r;
      }
      return e || t;
    }
    var Zt = class extends Error {
      constructor(t = "The operation was aborted", r = undefined) {
        if (r !== undefined && typeof r != "object")
          throw new st.ERR_INVALID_ARG_TYPE("options", "Object", r);
        super(t, r), this.code = "ABORT_ERR", this.name = "AbortError";
      }
    };
    M("ERR_ASSERTION", "%s", Error);
    M("ERR_INVALID_ARG_TYPE", (e, t, r) => {
      be(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t]);
      let n = "The ";
      e.endsWith(" argument") ? n += `${e} ` : n += `"${e}" ${e.includes(".") ? "property" : "argument"} `, n += "must be ";
      let i = [], o = [], l = [];
      for (let f of t)
        be(typeof f == "string", "All expected entries have to be of type string"), ru.includes(f) ? i.push(f.toLowerCase()) : nu.test(f) ? o.push(f) : (be(f !== "object", 'The value "object" should be written as "Object"'), l.push(f));
      if (o.length > 0) {
        let f = i.indexOf("object");
        f !== -1 && (i.splice(i, f, 1), o.push("Object"));
      }
      if (i.length > 0) {
        switch (i.length) {
          case 1:
            n += `of type ${i[0]}`;
            break;
          case 2:
            n += `one of type ${i[0]} or ${i[1]}`;
            break;
          default: {
            let f = i.pop();
            n += `one of type ${i.join(", ")}, or ${f}`;
          }
        }
        (o.length > 0 || l.length > 0) && (n += " or ");
      }
      if (o.length > 0) {
        switch (o.length) {
          case 1:
            n += `an instance of ${o[0]}`;
            break;
          case 2:
            n += `an instance of ${o[0]} or ${o[1]}`;
            break;
          default: {
            let f = o.pop();
            n += `an instance of ${o.join(", ")}, or ${f}`;
          }
        }
        l.length > 0 && (n += " or ");
      }
      switch (l.length) {
        case 0:
          break;
        case 1:
          l[0].toLowerCase() !== l[0] && (n += "an "), n += `${l[0]}`;
          break;
        case 2:
          n += `one of ${l[0]} or ${l[1]}`;
          break;
        default: {
          let f = l.pop();
          n += `one of ${l.join(", ")}, or ${f}`;
        }
      }
      if (r == null)
        n += `. Received ${r}`;
      else if (typeof r == "function" && r.name)
        n += `. Received function ${r.name}`;
      else if (typeof r == "object") {
        var u;
        (u = r.constructor) !== null && u !== undefined && u.name ? n += `. Received an instance of ${r.constructor.name}` : n += `. Received ${ft(r, { depth: -1 })}`;
      } else {
        let f = ft(r, { colors: false });
        f.length > 25 && (f = `${f.slice(0, 25)}...`), n += `. Received type ${typeof r} (${f})`;
      }
      return n;
    }, TypeError);
    M("ERR_INVALID_ARG_VALUE", (e, t, r = "is invalid") => {
      let n = ft(t);
      return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${r}. Received ${n}`;
    }, TypeError);
    M("ERR_INVALID_RETURN_VALUE", (e, t, r) => {
      var n;
      let i = r != null && (n = r.constructor) !== null && n !== undefined && n.name ? `instance of ${r.constructor.name}` : `type ${typeof r}`;
      return `Expected ${e} to be returned from the "${t}" function but got ${i}.`;
    }, TypeError);
    M("ERR_MISSING_ARGS", (...e) => {
      be(e.length > 0, "At least one arg needs to be specified");
      let t, r = e.length;
      switch (e = (Array.isArray(e) ? e : [e]).map((n) => `"${n}"`).join(" or "), r) {
        case 1:
          t += `The ${e[0]} argument`;
          break;
        case 2:
          t += `The ${e[0]} and ${e[1]} arguments`;
          break;
        default:
          {
            let n = e.pop();
            t += `The ${e.join(", ")}, and ${n} arguments`;
          }
          break;
      }
      return `${t} must be specified`;
    }, TypeError);
    M("ERR_OUT_OF_RANGE", (e, t, r) => {
      be(t, 'Missing "range" argument');
      let n;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = xn(String(r)) : typeof r == "bigint" ? (n = String(r), (r > 2n ** 32n || r < -(2n ** 32n)) && (n = xn(n)), n += "n") : n = ft(r), `The value of "${e}" is out of range. It must be ${t}. Received ${n}`;
    }, RangeError);
    M("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
    M("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
    M("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
    M("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
    M("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
    M("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    M("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
    M("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
    M("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
    M("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
    M("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
    An.exports = { AbortError: Zt, aggregateTwoErrors: Rn(lu), hideStackFrames: Rn, codes: st };
  });
  He = E((Kc, Cn) => {
    var { ArrayIsArray: Bn, ArrayPrototypeIncludes: Ln, ArrayPrototypeJoin: Nn, ArrayPrototypeMap: uu, NumberIsInteger: tr, NumberIsNaN: fu, NumberMAX_SAFE_INTEGER: su, NumberMIN_SAFE_INTEGER: au, NumberParseInt: cu, ObjectPrototypeHasOwnProperty: du, RegExpPrototypeExec: hu, String: pu, StringPrototypeToUpperCase: yu, StringPrototypeTrim: wu } = I(), { hideStackFrames: W, codes: { ERR_SOCKET_BAD_PORT: bu, ERR_INVALID_ARG_TYPE: D, ERR_INVALID_ARG_VALUE: at, ERR_OUT_OF_RANGE: ge, ERR_UNKNOWN_SIGNAL: In } } = C(), { normalizeEncoding: gu } = V(), { isAsyncFunction: _u, isArrayBufferView: Eu } = V().types, Tn = {};
    function Su(e) {
      return e === (e | 0);
    }
    function mu(e) {
      return e === e >>> 0;
    }
    var xu = /^[0-7]+$/, Ru = "must be a 32-bit unsigned integer or an octal string";
    function Au(e, t, r) {
      if (typeof e > "u" && (e = r), typeof e == "string") {
        if (hu(xu, e) === null)
          throw new at(t, e, Ru);
        e = cu(e, 8);
      }
      return Fn(e, t), e;
    }
    var Iu = W((e, t, r = au, n = su) => {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (!tr(e))
        throw new ge(t, "an integer", e);
      if (e < r || e > n)
        throw new ge(t, `>= ${r} && <= ${n}`, e);
    }), Tu = W((e, t, r = -2147483648, n = 2147483647) => {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (!tr(e))
        throw new ge(t, "an integer", e);
      if (e < r || e > n)
        throw new ge(t, `>= ${r} && <= ${n}`, e);
    }), Fn = W((e, t, r = false) => {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (!tr(e))
        throw new ge(t, "an integer", e);
      let n = r ? 1 : 0, i = 4294967295;
      if (e < n || e > i)
        throw new ge(t, `>= ${n} && <= ${i}`, e);
    });
    function Mn(e, t) {
      if (typeof e != "string")
        throw new D(t, "string", e);
    }
    function Bu(e, t, r = undefined, n) {
      if (typeof e != "number")
        throw new D(t, "number", e);
      if (r != null && e < r || n != null && e > n || (r != null || n != null) && fu(e))
        throw new ge(t, `${r != null ? `>= ${r}` : ""}${r != null && n != null ? " && " : ""}${n != null ? `<= ${n}` : ""}`, e);
    }
    var Lu = W((e, t, r) => {
      if (!Ln(r, e)) {
        let n = Nn(uu(r, (o) => typeof o == "string" ? `'${o}'` : pu(o)), ", "), i = "must be one of: " + n;
        throw new at(t, e, i);
      }
    });
    function Nu(e, t) {
      if (typeof e != "boolean")
        throw new D(t, "boolean", e);
    }
    function er(e, t, r) {
      return e == null || !du(e, t) ? r : e[t];
    }
    var Fu = W((e, t, r = null) => {
      let n = er(r, "allowArray", false), i = er(r, "allowFunction", false);
      if (!er(r, "nullable", false) && e === null || !n && Bn(e) || typeof e != "object" && (!i || typeof e != "function"))
        throw new D(t, "Object", e);
    }), Mu = W((e, t, r = 0) => {
      if (!Bn(e))
        throw new D(t, "Array", e);
      if (e.length < r) {
        let n = `must be longer than ${r}`;
        throw new at(t, e, n);
      }
    });
    function Cu(e, t = "signal") {
      if (Mn(e, t), Tn[e] === undefined)
        throw Tn[yu(e)] !== undefined ? new In(e + " (signals must use all capital letters)") : new In(e);
    }
    var Ou = W((e, t = "buffer") => {
      if (!Eu(e))
        throw new D(t, ["Buffer", "TypedArray", "DataView"], e);
    });
    function Du(e, t) {
      let r = gu(t), n = e.length;
      if (r === "hex" && n % 2 !== 0)
        throw new at("encoding", t, `is invalid for data of length ${n}`);
    }
    function Pu(e, t = "Port", r = true) {
      if (typeof e != "number" && typeof e != "string" || typeof e == "string" && wu(e).length === 0 || +e !== +e >>> 0 || e > 65535 || e === 0 && !r)
        throw new bu(t, e, r);
      return e | 0;
    }
    var ku = W((e, t) => {
      if (e !== undefined && (e === null || typeof e != "object" || !("aborted" in e)))
        throw new D(t, "AbortSignal", e);
    }), Uu = W((e, t) => {
      if (typeof e != "function")
        throw new D(t, "Function", e);
    }), vu = W((e, t) => {
      if (typeof e != "function" || _u(e))
        throw new D(t, "Function", e);
    }), qu = W((e, t) => {
      if (e !== undefined)
        throw new D(t, "undefined", e);
    });
    function Wu(e, t, r) {
      if (!Ln(r, e))
        throw new D(t, `('${Nn(r, "|")}')`, e);
    }
    Cn.exports = { isInt32: Su, isUint32: mu, parseFileMode: Au, validateArray: Mu, validateBoolean: Nu, validateBuffer: Ou, validateEncoding: Du, validateFunction: Uu, validateInt32: Tu, validateInteger: Iu, validateNumber: Bu, validateObject: Fu, validateOneOf: Lu, validatePlainFunction: vu, validatePort: Pu, validateSignalName: Cu, validateString: Mn, validateUint32: Fn, validateUndefined: qu, validateUnion: Wu, validateAbortSignal: ku };
  });
  ir = E((zc, kn) => {
    var x = kn.exports = {}, Y, K;
    function rr() {
      throw new Error("setTimeout has not been defined");
    }
    function nr() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        typeof setTimeout == "function" ? Y = setTimeout : Y = rr;
      } catch {
        Y = rr;
      }
      try {
        typeof clearTimeout == "function" ? K = clearTimeout : K = nr;
      } catch {
        K = nr;
      }
    })();
    function On(e) {
      if (Y === setTimeout)
        return setTimeout(e, 0);
      if ((Y === rr || !Y) && setTimeout)
        return Y = setTimeout, setTimeout(e, 0);
      try {
        return Y(e, 0);
      } catch {
        try {
          return Y.call(null, e, 0);
        } catch {
          return Y.call(this, e, 0);
        }
      }
    }
    function $u(e) {
      if (K === clearTimeout)
        return clearTimeout(e);
      if ((K === nr || !K) && clearTimeout)
        return K = clearTimeout, clearTimeout(e);
      try {
        return K(e);
      } catch {
        try {
          return K.call(null, e);
        } catch {
          return K.call(this, e);
        }
      }
    }
    var re = [], Me = false, _e, ct = -1;
    function ju() {
      !Me || !_e || (Me = false, _e.length ? re = _e.concat(re) : ct = -1, re.length && Dn());
    }
    function Dn() {
      if (!Me) {
        var e = On(ju);
        Me = true;
        for (var t = re.length;t; ) {
          for (_e = re, re = [];++ct < t; )
            _e && _e[ct].run();
          ct = -1, t = re.length;
        }
        _e = null, Me = false, $u(e);
      }
    }
    x.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1;r < arguments.length; r++)
          t[r - 1] = arguments[r];
      re.push(new Pn(e, t)), re.length === 1 && !Me && On(Dn);
    };
    function Pn(e, t) {
      this.fun = e, this.array = t;
    }
    Pn.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    x.title = "browser";
    x.browser = true;
    x.env = {};
    x.argv = [];
    x.version = "";
    x.versions = {};
    function ne() {
    }
    x.on = ne;
    x.addListener = ne;
    x.once = ne;
    x.off = ne;
    x.removeListener = ne;
    x.removeAllListeners = ne;
    x.emit = ne;
    x.prependListener = ne;
    x.prependOnceListener = ne;
    x.listeners = function(e) {
      return [];
    };
    x.binding = function(e) {
      throw new Error("process.binding is not supported");
    };
    x.cwd = function() {
      return "/";
    };
    x.chdir = function(e) {
      throw new Error("process.chdir is not supported");
    };
    x.umask = function() {
      return 0;
    };
  });
  k = {};
  Qr(k, { default: () => Gu });
  se = yl(() => {
    ue(k, rt(ir()));
    Gu = rt(ir());
  });
  ae = E((Jc, zn) => {
    var { Symbol: dt, SymbolAsyncIterator: Un, SymbolIterator: vn } = I(), qn = dt("kDestroyed"), Wn = dt("kIsErrored"), or = dt("kIsReadable"), $n = dt("kIsDisturbed");
    function ht(e, t = false) {
      var r;
      return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || typeof e.pause == "function" && typeof e.resume == "function") && (!e._writableState || ((r = e._readableState) === null || r === undefined ? undefined : r.readable) !== false) && (!e._writableState || e._readableState));
    }
    function pt(e) {
      var t;
      return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === undefined ? undefined : t.writable) !== false));
    }
    function Hu(e) {
      return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function");
    }
    function Ee(e) {
      return e && (e._readableState || e._writableState || typeof e.write == "function" && typeof e.on == "function" || typeof e.pipe == "function" && typeof e.on == "function");
    }
    function Vu(e, t) {
      return e == null ? false : t === true ? typeof e[Un] == "function" : t === false ? typeof e[vn] == "function" : typeof e[Un] == "function" || typeof e[vn] == "function";
    }
    function yt(e) {
      if (!Ee(e))
        return null;
      let { _writableState: t, _readableState: r } = e, n = t || r;
      return !!(e.destroyed || e[qn] || n != null && n.destroyed);
    }
    function jn(e) {
      if (!pt(e))
        return null;
      if (e.writableEnded === true)
        return true;
      let t = e._writableState;
      return t != null && t.errored ? false : typeof t?.ended != "boolean" ? null : t.ended;
    }
    function Yu(e, t) {
      if (!pt(e))
        return null;
      if (e.writableFinished === true)
        return true;
      let r = e._writableState;
      return r != null && r.errored ? false : typeof r?.finished != "boolean" ? null : !!(r.finished || t === false && r.ended === true && r.length === 0);
    }
    function Ku(e) {
      if (!ht(e))
        return null;
      if (e.readableEnded === true)
        return true;
      let t = e._readableState;
      return !t || t.errored ? false : typeof t?.ended != "boolean" ? null : t.ended;
    }
    function Gn(e, t) {
      if (!ht(e))
        return null;
      let r = e._readableState;
      return r != null && r.errored ? false : typeof r?.endEmitted != "boolean" ? null : !!(r.endEmitted || t === false && r.ended === true && r.length === 0);
    }
    function Hn(e) {
      return e && e[or] != null ? e[or] : typeof e?.readable != "boolean" ? null : yt(e) ? false : ht(e) && e.readable && !Gn(e);
    }
    function Vn(e) {
      return typeof e?.writable != "boolean" ? null : yt(e) ? false : pt(e) && e.writable && !jn(e);
    }
    function zu(e, t) {
      return Ee(e) ? yt(e) ? true : !(t?.readable !== false && Hn(e) || t?.writable !== false && Vn(e)) : null;
    }
    function Xu(e) {
      var t, r;
      return Ee(e) ? e.writableErrored ? e.writableErrored : (t = (r = e._writableState) === null || r === undefined ? undefined : r.errored) !== null && t !== undefined ? t : null : null;
    }
    function Ju(e) {
      var t, r;
      return Ee(e) ? e.readableErrored ? e.readableErrored : (t = (r = e._readableState) === null || r === undefined ? undefined : r.errored) !== null && t !== undefined ? t : null : null;
    }
    function Qu(e) {
      if (!Ee(e))
        return null;
      if (typeof e.closed == "boolean")
        return e.closed;
      let { _writableState: t, _readableState: r } = e;
      return typeof t?.closed == "boolean" || typeof r?.closed == "boolean" ? t?.closed || r?.closed : typeof e._closed == "boolean" && Yn(e) ? e._closed : null;
    }
    function Yn(e) {
      return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean";
    }
    function Kn(e) {
      return typeof e._sent100 == "boolean" && Yn(e);
    }
    function Zu(e) {
      var t;
      return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === undefined ? undefined : t.upgradeOrConnect) === undefined;
    }
    function ef(e) {
      if (!Ee(e))
        return null;
      let { _writableState: t, _readableState: r } = e, n = t || r;
      return !n && Kn(e) || !!(n && n.autoDestroy && n.emitClose && n.closed === false);
    }
    function tf(e) {
      var t;
      return !!(e && ((t = e[$n]) !== null && t !== undefined ? t : e.readableDidRead || e.readableAborted));
    }
    function rf(e) {
      var t, r, n, i, o, l, u, f, s, d;
      return !!(e && ((t = (r = (n = (i = (o = (l = e[Wn]) !== null && l !== undefined ? l : e.readableErrored) !== null && o !== undefined ? o : e.writableErrored) !== null && i !== undefined ? i : (u = e._readableState) === null || u === undefined ? undefined : u.errorEmitted) !== null && n !== undefined ? n : (f = e._writableState) === null || f === undefined ? undefined : f.errorEmitted) !== null && r !== undefined ? r : (s = e._readableState) === null || s === undefined ? undefined : s.errored) !== null && t !== undefined ? t : (d = e._writableState) === null || d === undefined ? undefined : d.errored));
    }
    zn.exports = { kDestroyed: qn, isDisturbed: tf, kIsDisturbed: $n, isErrored: rf, kIsErrored: Wn, isReadable: Hn, kIsReadable: or, isClosed: Qu, isDestroyed: yt, isDuplexNodeStream: Hu, isFinished: zu, isIterable: Vu, isReadableNodeStream: ht, isReadableEnded: Ku, isReadableFinished: Gn, isReadableErrored: Ju, isNodeStream: Ee, isWritable: Vn, isWritableNodeStream: pt, isWritableEnded: jn, isWritableFinished: Yu, isWritableErrored: Xu, isServerRequest: Zu, isServerResponse: Kn, willEmitClose: ef };
  });
  ce = E((Qc, ur) => {
    var Ce = (se(), pe(k)), { AbortError: nf, codes: of } = C(), { ERR_INVALID_ARG_TYPE: lf, ERR_STREAM_PREMATURE_CLOSE: Xn } = of, { kEmptyObject: Jn, once: Qn } = V(), { validateAbortSignal: uf, validateFunction: ff, validateObject: sf } = He(), { Promise: af } = I(), { isClosed: cf, isReadable: Zn, isReadableNodeStream: lr, isReadableFinished: ei, isReadableErrored: df, isWritable: ti, isWritableNodeStream: ri, isWritableFinished: ni, isWritableErrored: hf, isNodeStream: pf, willEmitClose: yf } = ae();
    function wf(e) {
      return e.setHeader && typeof e.abort == "function";
    }
    var bf = () => {
    };
    function ii(e, t, r) {
      var n, i;
      arguments.length === 2 ? (r = t, t = Jn) : t == null ? t = Jn : sf(t, "options"), ff(r, "callback"), uf(t.signal, "options.signal"), r = Qn(r);
      let o = (n = t.readable) !== null && n !== undefined ? n : lr(e), l = (i = t.writable) !== null && i !== undefined ? i : ri(e);
      if (!pf(e))
        throw new lf("stream", "Stream", e);
      let { _writableState: u, _readableState: f } = e, s = () => {
        e.writable || y();
      }, d = yf(e) && lr(e) === o && ri(e) === l, c = ni(e, false), y = () => {
        c = true, e.destroyed && (d = false), !(d && (!e.readable || o)) && (!o || h) && r.call(e);
      }, h = ei(e, false), p = () => {
        h = true, e.destroyed && (d = false), !(d && (!e.writable || l)) && (!l || c) && r.call(e);
      }, B = (N) => {
        r.call(e, N);
      }, v = cf(e), w = () => {
        v = true;
        let N = hf(e) || df(e);
        if (N && typeof N != "boolean")
          return r.call(e, N);
        if (o && !h && lr(e, true) && !ei(e, false))
          return r.call(e, new Xn);
        if (l && !c && !ni(e, false))
          return r.call(e, new Xn);
        r.call(e);
      }, b = () => {
        e.req.on("finish", y);
      };
      wf(e) ? (e.on("complete", y), d || e.on("abort", w), e.req ? b() : e.on("request", b)) : l && !u && (e.on("end", s), e.on("close", s)), !d && typeof e.aborted == "boolean" && e.on("aborted", w), e.on("end", p), e.on("finish", y), t.error !== false && e.on("error", B), e.on("close", w), v ? Ce.nextTick(w) : u != null && u.errorEmitted || f != null && f.errorEmitted ? d || Ce.nextTick(w) : (!o && (!d || Zn(e)) && (c || ti(e) === false) || !l && (!d || ti(e)) && (h || Zn(e) === false) || f && e.req && e.aborted) && Ce.nextTick(w);
      let L = () => {
        r = bf, e.removeListener("aborted", w), e.removeListener("complete", y), e.removeListener("abort", w), e.removeListener("request", b), e.req && e.req.removeListener("finish", y), e.removeListener("end", s), e.removeListener("close", s), e.removeListener("finish", y), e.removeListener("end", p), e.removeListener("error", B), e.removeListener("close", w);
      };
      if (t.signal && !v) {
        let N = () => {
          let Q = r;
          L(), Q.call(e, new nf(undefined, { cause: t.signal.reason }));
        };
        if (t.signal.aborted)
          Ce.nextTick(N);
        else {
          let Q = r;
          r = Qn((...Ie) => {
            t.signal.removeEventListener("abort", N), Q.apply(e, Ie);
          }), t.signal.addEventListener("abort", N);
        }
      }
      return L;
    }
    function gf(e, t) {
      return new af((r, n) => {
        ii(e, t, (i) => {
          i ? n(i) : r();
        });
      });
    }
    ur.exports = ii;
    ur.exports.finished = gf;
  });
  di = E((Zc, ar) => {
    var fi = globalThis.AbortController || ut().AbortController, { codes: { ERR_INVALID_ARG_TYPE: Ve, ERR_MISSING_ARGS: _f, ERR_OUT_OF_RANGE: Ef }, AbortError: z } = C(), { validateAbortSignal: Oe, validateInteger: Sf, validateObject: De } = He(), mf = I().Symbol("kWeak"), { finished: xf } = ce(), { ArrayPrototypePush: Rf, MathFloor: Af, Number: If, NumberIsNaN: Tf, Promise: oi, PromiseReject: li, PromisePrototypeThen: Bf, Symbol: si } = I(), wt = si("kEmpty"), ui = si("kEof");
    function bt(e, t) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      t != null && De(t, "options"), t?.signal != null && Oe(t.signal, "options.signal");
      let r = 1;
      return t?.concurrency != null && (r = Af(t.concurrency)), Sf(r, "concurrency", 1), async function* () {
        var i, o;
        let l = new fi, u = this, f = [], s = l.signal, d = { signal: s }, c = () => l.abort();
        t != null && (i = t.signal) !== null && i !== undefined && i.aborted && c(), t == null || (o = t.signal) === null || o === undefined || o.addEventListener("abort", c);
        let y, h, p = false;
        function B() {
          p = true;
        }
        async function v() {
          try {
            for await (let L of u) {
              var w;
              if (p)
                return;
              if (s.aborted)
                throw new z;
              try {
                L = e(L, d);
              } catch (N) {
                L = li(N);
              }
              L !== wt && (typeof ((w = L) === null || w === undefined ? undefined : w.catch) == "function" && L.catch(B), f.push(L), y && (y(), y = null), !p && f.length && f.length >= r && await new oi((N) => {
                h = N;
              }));
            }
            f.push(ui);
          } catch (L) {
            let N = li(L);
            Bf(N, undefined, B), f.push(N);
          } finally {
            var b;
            p = true, y && (y(), y = null), t == null || (b = t.signal) === null || b === undefined || b.removeEventListener("abort", c);
          }
        }
        v();
        try {
          for (;; ) {
            for (;f.length > 0; ) {
              let w = await f[0];
              if (w === ui)
                return;
              if (s.aborted)
                throw new z;
              w !== wt && (yield w), f.shift(), h && (h(), h = null);
            }
            await new oi((w) => {
              y = w;
            });
          }
        } finally {
          l.abort(), p = true, h && (h(), h = null);
        }
      }.call(this);
    }
    function Lf(e = undefined) {
      return e != null && De(e, "options"), e?.signal != null && Oe(e.signal, "options.signal"), async function* () {
        let r = 0;
        for await (let i of this) {
          var n;
          if (e != null && (n = e.signal) !== null && n !== undefined && n.aborted)
            throw new z({ cause: e.signal.reason });
          yield [r++, i];
        }
      }.call(this);
    }
    async function ai(e, t = undefined) {
      for await (let r of sr.call(this, e, t))
        return true;
      return false;
    }
    async function Nf(e, t = undefined) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      return !await ai.call(this, async (...r) => !await e(...r), t);
    }
    async function Ff(e, t) {
      for await (let r of sr.call(this, e, t))
        return r;
    }
    async function Mf(e, t) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      async function r(n, i) {
        return await e(n, i), wt;
      }
      for await (let n of bt.call(this, r, t))
        ;
    }
    function sr(e, t) {
      if (typeof e != "function")
        throw new Ve("fn", ["Function", "AsyncFunction"], e);
      async function r(n, i) {
        return await e(n, i) ? n : wt;
      }
      return bt.call(this, r, t);
    }
    var fr = class extends _f {
      constructor() {
        super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
      }
    };
    async function Cf(e, t, r) {
      var n;
      if (typeof e != "function")
        throw new Ve("reducer", ["Function", "AsyncFunction"], e);
      r != null && De(r, "options"), r?.signal != null && Oe(r.signal, "options.signal");
      let i = arguments.length > 1;
      if (r != null && (n = r.signal) !== null && n !== undefined && n.aborted) {
        let s = new z(undefined, { cause: r.signal.reason });
        throw this.once("error", () => {
        }), await xf(this.destroy(s)), s;
      }
      let o = new fi, l = o.signal;
      if (r != null && r.signal) {
        let s = { once: true, [mf]: this };
        r.signal.addEventListener("abort", () => o.abort(), s);
      }
      let u = false;
      try {
        for await (let s of this) {
          var f;
          if (u = true, r != null && (f = r.signal) !== null && f !== undefined && f.aborted)
            throw new z;
          i ? t = await e(t, s, { signal: l }) : (t = s, i = true);
        }
        if (!u && !i)
          throw new fr;
      } finally {
        o.abort();
      }
      return t;
    }
    async function Of(e) {
      e != null && De(e, "options"), e?.signal != null && Oe(e.signal, "options.signal");
      let t = [];
      for await (let n of this) {
        var r;
        if (e != null && (r = e.signal) !== null && r !== undefined && r.aborted)
          throw new z(undefined, { cause: e.signal.reason });
        Rf(t, n);
      }
      return t;
    }
    function Df(e, t) {
      let r = bt.call(this, e, t);
      return async function* () {
        for await (let i of r)
          yield* i;
      }.call(this);
    }
    function ci(e) {
      if (e = If(e), Tf(e))
        return 0;
      if (e < 0)
        throw new Ef("number", ">= 0", e);
      return e;
    }
    function Pf(e, t = undefined) {
      return t != null && De(t, "options"), t?.signal != null && Oe(t.signal, "options.signal"), e = ci(e), async function* () {
        var n;
        if (t != null && (n = t.signal) !== null && n !== undefined && n.aborted)
          throw new z;
        for await (let o of this) {
          var i;
          if (t != null && (i = t.signal) !== null && i !== undefined && i.aborted)
            throw new z;
          e-- <= 0 && (yield o);
        }
      }.call(this);
    }
    function kf(e, t = undefined) {
      return t != null && De(t, "options"), t?.signal != null && Oe(t.signal, "options.signal"), e = ci(e), async function* () {
        var n;
        if (t != null && (n = t.signal) !== null && n !== undefined && n.aborted)
          throw new z;
        for await (let o of this) {
          var i;
          if (t != null && (i = t.signal) !== null && i !== undefined && i.aborted)
            throw new z;
          if (e-- > 0)
            yield o;
          else
            return;
        }
      }.call(this);
    }
    ar.exports.streamReturningOperators = { asIndexedPairs: Lf, drop: Pf, filter: sr, flatMap: Df, map: bt, take: kf };
    ar.exports.promiseReturningOperators = { every: Nf, forEach: Mf, reduce: Cf, toArray: Of, some: ai, find: Ff };
  });
  Se = E((ed, Ei) => {
    var de = (se(), pe(k)), { aggregateTwoErrors: Uf, codes: { ERR_MULTIPLE_CALLBACK: vf }, AbortError: qf } = C(), { Symbol: yi } = I(), { kDestroyed: Wf, isDestroyed: $f, isFinished: jf, isServerRequest: Gf } = ae(), wi = yi("kDestroy"), cr = yi("kConstruct");
    function bi(e, t, r) {
      e && (e.stack, t && !t.errored && (t.errored = e), r && !r.errored && (r.errored = e));
    }
    function Hf(e, t) {
      let r = this._readableState, n = this._writableState, i = n || r;
      return n && n.destroyed || r && r.destroyed ? (typeof t == "function" && t(), this) : (bi(e, n, r), n && (n.destroyed = true), r && (r.destroyed = true), i.constructed ? hi(this, e, t) : this.once(wi, function(o) {
        hi(this, Uf(o, e), t);
      }), this);
    }
    function hi(e, t, r) {
      let n = false;
      function i(o) {
        if (n)
          return;
        n = true;
        let { _readableState: l, _writableState: u } = e;
        bi(o, u, l), u && (u.closed = true), l && (l.closed = true), typeof r == "function" && r(o), o ? de.nextTick(Vf, e, o) : de.nextTick(gi, e);
      }
      try {
        e._destroy(t || null, i);
      } catch (o) {
        i(o);
      }
    }
    function Vf(e, t) {
      dr(e, t), gi(e);
    }
    function gi(e) {
      let { _readableState: t, _writableState: r } = e;
      r && (r.closeEmitted = true), t && (t.closeEmitted = true), (r && r.emitClose || t && t.emitClose) && e.emit("close");
    }
    function dr(e, t) {
      let { _readableState: r, _writableState: n } = e;
      n && n.errorEmitted || r && r.errorEmitted || (n && (n.errorEmitted = true), r && (r.errorEmitted = true), e.emit("error", t));
    }
    function Yf() {
      let e = this._readableState, t = this._writableState;
      e && (e.constructed = true, e.closed = false, e.closeEmitted = false, e.destroyed = false, e.errored = null, e.errorEmitted = false, e.reading = false, e.ended = e.readable === false, e.endEmitted = e.readable === false), t && (t.constructed = true, t.destroyed = false, t.closed = false, t.closeEmitted = false, t.errored = null, t.errorEmitted = false, t.finalCalled = false, t.prefinished = false, t.ended = t.writable === false, t.ending = t.writable === false, t.finished = t.writable === false);
    }
    function hr(e, t, r) {
      let { _readableState: n, _writableState: i } = e;
      if (i && i.destroyed || n && n.destroyed)
        return this;
      n && n.autoDestroy || i && i.autoDestroy ? e.destroy(t) : t && (t.stack, i && !i.errored && (i.errored = t), n && !n.errored && (n.errored = t), r ? de.nextTick(dr, e, t) : dr(e, t));
    }
    function Kf(e, t) {
      if (typeof e._construct != "function")
        return;
      let { _readableState: r, _writableState: n } = e;
      r && (r.constructed = false), n && (n.constructed = false), e.once(cr, t), !(e.listenerCount(cr) > 1) && de.nextTick(zf, e);
    }
    function zf(e) {
      let t = false;
      function r(n) {
        if (t) {
          hr(e, n ?? new vf);
          return;
        }
        t = true;
        let { _readableState: i, _writableState: o } = e, l = o || i;
        i && (i.constructed = true), o && (o.constructed = true), l.destroyed ? e.emit(wi, n) : n ? hr(e, n, true) : de.nextTick(Xf, e);
      }
      try {
        e._construct(r);
      } catch (n) {
        r(n);
      }
    }
    function Xf(e) {
      e.emit(cr);
    }
    function pi(e) {
      return e && e.setHeader && typeof e.abort == "function";
    }
    function _i(e) {
      e.emit("close");
    }
    function Jf(e, t) {
      e.emit("error", t), de.nextTick(_i, e);
    }
    function Qf(e, t) {
      !e || $f(e) || (!t && !jf(e) && (t = new qf), Gf(e) ? (e.socket = null, e.destroy(t)) : pi(e) ? e.abort() : pi(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? de.nextTick(Jf, e, t) : de.nextTick(_i, e), e.destroyed || (e[Wf] = true));
    }
    Ei.exports = { construct: Kf, destroyer: Qf, destroy: Hf, undestroy: Yf, errorOrDestroy: hr };
  });
  Et = E((td, pr) => {
    var Pe = typeof Reflect == "object" ? Reflect : null, Si = Pe && typeof Pe.apply == "function" ? Pe.apply : function(t, r, n) {
      return Function.prototype.apply.call(t, r, n);
    }, gt;
    Pe && typeof Pe.ownKeys == "function" ? gt = Pe.ownKeys : Object.getOwnPropertySymbols ? gt = function(t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : gt = function(t) {
      return Object.getOwnPropertyNames(t);
    };
    function Zf(e) {
      console && console.warn && console.warn(e);
    }
    var xi = Number.isNaN || function(t) {
      return t !== t;
    };
    function S() {
      S.init.call(this);
    }
    pr.exports = S;
    pr.exports.once = ns;
    S.EventEmitter = S;
    S.prototype._events = undefined;
    S.prototype._eventsCount = 0;
    S.prototype._maxListeners = undefined;
    var mi = 10;
    function _t(e) {
      if (typeof e != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }
    Object.defineProperty(S, "defaultMaxListeners", { enumerable: true, get: function() {
      return mi;
    }, set: function(e) {
      if (typeof e != "number" || e < 0 || xi(e))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
      mi = e;
    } });
    S.init = function() {
      (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
    };
    S.prototype.setMaxListeners = function(t) {
      if (typeof t != "number" || t < 0 || xi(t))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
      return this._maxListeners = t, this;
    };
    function Ri(e) {
      return e._maxListeners === undefined ? S.defaultMaxListeners : e._maxListeners;
    }
    S.prototype.getMaxListeners = function() {
      return Ri(this);
    };
    S.prototype.emit = function(t) {
      for (var r = [], n = 1;n < arguments.length; n++)
        r.push(arguments[n]);
      var i = t === "error", o = this._events;
      if (o !== undefined)
        i = i && o.error === undefined;
      else if (!i)
        return false;
      if (i) {
        var l;
        if (r.length > 0 && (l = r[0]), l instanceof Error)
          throw l;
        var u = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
        throw u.context = l, u;
      }
      var f = o[t];
      if (f === undefined)
        return false;
      if (typeof f == "function")
        Si(f, this, r);
      else
        for (var s = f.length, d = Li(f, s), n = 0;n < s; ++n)
          Si(d[n], this, r);
      return true;
    };
    function Ai(e, t, r, n) {
      var i, o, l;
      if (_t(r), o = e._events, o === undefined ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== undefined && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), l = o[t]), l === undefined)
        l = o[t] = r, ++e._eventsCount;
      else if (typeof l == "function" ? l = o[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), i = Ri(e), i > 0 && l.length > i && !l.warned) {
        l.warned = true;
        var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, Zf(u);
      }
      return e;
    }
    S.prototype.addListener = function(t, r) {
      return Ai(this, t, r, false);
    };
    S.prototype.on = S.prototype.addListener;
    S.prototype.prependListener = function(t, r) {
      return Ai(this, t, r, true);
    };
    function es() {
      if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Ii(e, t, r) {
      var n = { fired: false, wrapFn: undefined, target: e, type: t, listener: r }, i = es.bind(n);
      return i.listener = r, n.wrapFn = i, i;
    }
    S.prototype.once = function(t, r) {
      return _t(r), this.on(t, Ii(this, t, r)), this;
    };
    S.prototype.prependOnceListener = function(t, r) {
      return _t(r), this.prependListener(t, Ii(this, t, r)), this;
    };
    S.prototype.removeListener = function(t, r) {
      var n, i, o, l, u;
      if (_t(r), i = this._events, i === undefined)
        return this;
      if (n = i[t], n === undefined)
        return this;
      if (n === r || n.listener === r)
        --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || r));
      else if (typeof n != "function") {
        for (o = -1, l = n.length - 1;l >= 0; l--)
          if (n[l] === r || n[l].listener === r) {
            u = n[l].listener, o = l;
            break;
          }
        if (o < 0)
          return this;
        o === 0 ? n.shift() : ts(n, o), n.length === 1 && (i[t] = n[0]), i.removeListener !== undefined && this.emit("removeListener", t, u || r);
      }
      return this;
    };
    S.prototype.off = S.prototype.removeListener;
    S.prototype.removeAllListeners = function(t) {
      var r, n, i;
      if (n = this._events, n === undefined)
        return this;
      if (n.removeListener === undefined)
        return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[t] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[t]), this;
      if (arguments.length === 0) {
        var o = Object.keys(n), l;
        for (i = 0;i < o.length; ++i)
          l = o[i], l !== "removeListener" && this.removeAllListeners(l);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if (r = n[t], typeof r == "function")
        this.removeListener(t, r);
      else if (r !== undefined)
        for (i = r.length - 1;i >= 0; i--)
          this.removeListener(t, r[i]);
      return this;
    };
    function Ti(e, t, r) {
      var n = e._events;
      if (n === undefined)
        return [];
      var i = n[t];
      return i === undefined ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? rs(i) : Li(i, i.length);
    }
    S.prototype.listeners = function(t) {
      return Ti(this, t, true);
    };
    S.prototype.rawListeners = function(t) {
      return Ti(this, t, false);
    };
    S.listenerCount = function(e, t) {
      return typeof e.listenerCount == "function" ? e.listenerCount(t) : Bi.call(e, t);
    };
    S.prototype.listenerCount = Bi;
    function Bi(e) {
      var t = this._events;
      if (t !== undefined) {
        var r = t[e];
        if (typeof r == "function")
          return 1;
        if (r !== undefined)
          return r.length;
      }
      return 0;
    }
    S.prototype.eventNames = function() {
      return this._eventsCount > 0 ? gt(this._events) : [];
    };
    function Li(e, t) {
      for (var r = new Array(t), n = 0;n < t; ++n)
        r[n] = e[n];
      return r;
    }
    function ts(e, t) {
      for (;t + 1 < e.length; t++)
        e[t] = e[t + 1];
      e.pop();
    }
    function rs(e) {
      for (var t = new Array(e.length), r = 0;r < t.length; ++r)
        t[r] = e[r].listener || e[r];
      return t;
    }
    function ns(e, t) {
      return new Promise(function(r, n) {
        function i(l) {
          e.removeListener(t, o), n(l);
        }
        function o() {
          typeof e.removeListener == "function" && e.removeListener("error", i), r([].slice.call(arguments));
        }
        Ni(e, t, o, { once: true }), t !== "error" && is(e, i, { once: true });
      });
    }
    function is(e, t, r) {
      typeof e.on == "function" && Ni(e, "error", t, r);
    }
    function Ni(e, t, r, n) {
      if (typeof e.on == "function")
        n.once ? e.once(t, r) : e.on(t, r);
      else if (typeof e.addEventListener == "function")
        e.addEventListener(t, function i(o) {
          n.once && e.removeEventListener(t, i), r(o);
        });
      else
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    }
  });
  xt = E((rd, Mi) => {
    var { ArrayIsArray: os, ObjectSetPrototypeOf: Fi } = I(), { EventEmitter: St } = Et();
    function mt(e) {
      St.call(this, e);
    }
    Fi(mt.prototype, St.prototype);
    Fi(mt, St);
    mt.prototype.pipe = function(e, t) {
      let r = this;
      function n(d) {
        e.writable && e.write(d) === false && r.pause && r.pause();
      }
      r.on("data", n);
      function i() {
        r.readable && r.resume && r.resume();
      }
      e.on("drain", i), !e._isStdio && (!t || t.end !== false) && (r.on("end", l), r.on("close", u));
      let o = false;
      function l() {
        o || (o = true, e.end());
      }
      function u() {
        o || (o = true, typeof e.destroy == "function" && e.destroy());
      }
      function f(d) {
        s(), St.listenerCount(this, "error") === 0 && this.emit("error", d);
      }
      yr(r, "error", f), yr(e, "error", f);
      function s() {
        r.removeListener("data", n), e.removeListener("drain", i), r.removeListener("end", l), r.removeListener("close", u), r.removeListener("error", f), e.removeListener("error", f), r.removeListener("end", s), r.removeListener("close", s), e.removeListener("close", s);
      }
      return r.on("end", s), r.on("close", s), e.on("close", s), e.emit("pipe", r), e;
    };
    function yr(e, t, r) {
      if (typeof e.prependListener == "function")
        return e.prependListener(t, r);
      !e._events || !e._events[t] ? e.on(t, r) : os(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]];
    }
    Mi.exports = { Stream: mt, prependListener: yr };
  });
  At = E((nd, Rt) => {
    var { AbortError: ls, codes: us } = C(), fs = ce(), { ERR_INVALID_ARG_TYPE: Ci } = us, ss = (e, t) => {
      if (typeof e != "object" || !("aborted" in e))
        throw new Ci(t, "AbortSignal", e);
    };
    function as(e) {
      return !!(e && typeof e.pipe == "function");
    }
    Rt.exports.addAbortSignal = function(t, r) {
      if (ss(t, "signal"), !as(r))
        throw new Ci("stream", "stream.Stream", r);
      return Rt.exports.addAbortSignalNoValidate(t, r);
    };
    Rt.exports.addAbortSignalNoValidate = function(e, t) {
      if (typeof e != "object" || !("aborted" in e))
        return t;
      let r = () => {
        t.destroy(new ls(undefined, { cause: e.reason }));
      };
      return e.aborted ? r() : (e.addEventListener("abort", r), fs(t, () => e.removeEventListener("abort", r))), t;
    };
  });
  Pi = E((od, Di) => {
    var { StringPrototypeSlice: Oi, SymbolIterator: cs, TypedArrayPrototypeSet: It, Uint8Array: ds } = I(), { Buffer: wr } = te(), { inspect: hs } = V();
    Di.exports = class {
      constructor() {
        this.head = null, this.tail = null, this.length = 0;
      }
      push(t) {
        let r = { data: t, next: null };
        this.length > 0 ? this.tail.next = r : this.head = r, this.tail = r, ++this.length;
      }
      unshift(t) {
        let r = { data: t, next: this.head };
        this.length === 0 && (this.tail = r), this.head = r, ++this.length;
      }
      shift() {
        if (this.length === 0)
          return;
        let t = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
      }
      clear() {
        this.head = this.tail = null, this.length = 0;
      }
      join(t) {
        if (this.length === 0)
          return "";
        let r = this.head, n = "" + r.data;
        for (;(r = r.next) !== null; )
          n += t + r.data;
        return n;
      }
      concat(t) {
        if (this.length === 0)
          return wr.alloc(0);
        let r = wr.allocUnsafe(t >>> 0), n = this.head, i = 0;
        for (;n; )
          It(r, n.data, i), i += n.data.length, n = n.next;
        return r;
      }
      consume(t, r) {
        let n = this.head.data;
        if (t < n.length) {
          let i = n.slice(0, t);
          return this.head.data = n.slice(t), i;
        }
        return t === n.length ? this.shift() : r ? this._getString(t) : this._getBuffer(t);
      }
      first() {
        return this.head.data;
      }
      *[cs]() {
        for (let t = this.head;t; t = t.next)
          yield t.data;
      }
      _getString(t) {
        let r = "", n = this.head, i = 0;
        do {
          let o = n.data;
          if (t > o.length)
            r += o, t -= o.length;
          else {
            t === o.length ? (r += o, ++i, n.next ? this.head = n.next : this.head = this.tail = null) : (r += Oi(o, 0, t), this.head = n, n.data = Oi(o, t));
            break;
          }
          ++i;
        } while ((n = n.next) !== null);
        return this.length -= i, r;
      }
      _getBuffer(t) {
        let r = wr.allocUnsafe(t), n = t, i = this.head, o = 0;
        do {
          let l = i.data;
          if (t > l.length)
            It(r, l, n - t), t -= l.length;
          else {
            t === l.length ? (It(r, l, n - t), ++o, i.next ? this.head = i.next : this.head = this.tail = null) : (It(r, new ds(l.buffer, l.byteOffset, t), n - t), this.head = i, i.data = l.slice(t));
            break;
          }
          ++o;
        } while ((i = i.next) !== null);
        return this.length -= o, r;
      }
      [Symbol.for("nodejs.util.inspect.custom")](t, r) {
        return hs(this, { ...r, depth: 0, customInspect: false });
      }
    };
  });
  Tt = E((ld, Ui) => {
    var { MathFloor: ps, NumberIsInteger: ys } = I(), { ERR_INVALID_ARG_VALUE: ws } = C().codes;
    function bs(e, t, r) {
      return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
    }
    function ki(e) {
      return e ? 16 : 16 * 1024;
    }
    function gs(e, t, r, n) {
      let i = bs(t, n, r);
      if (i != null) {
        if (!ys(i) || i < 0) {
          let o = n ? `options.${r}` : "options.highWaterMark";
          throw new ws(o, i);
        }
        return ps(i);
      }
      return ki(e.objectMode);
    }
    Ui.exports = { getHighWaterMark: gs, getDefaultHighWaterMark: ki };
  });
  Wi = E((br, qi) => {
    var Bt = te(), X = Bt.Buffer;
    function vi(e, t) {
      for (var r in e)
        t[r] = e[r];
    }
    X.from && X.alloc && X.allocUnsafe && X.allocUnsafeSlow ? qi.exports = Bt : (vi(Bt, br), br.Buffer = me);
    function me(e, t, r) {
      return X(e, t, r);
    }
    me.prototype = Object.create(X.prototype);
    vi(X, me);
    me.from = function(e, t, r) {
      if (typeof e == "number")
        throw new TypeError("Argument must not be a number");
      return X(e, t, r);
    };
    me.alloc = function(e, t, r) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      var n = X(e);
      return t !== undefined ? typeof r == "string" ? n.fill(t, r) : n.fill(t) : n.fill(0), n;
    };
    me.allocUnsafe = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return X(e);
    };
    me.allocUnsafeSlow = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return Bt.SlowBuffer(e);
    };
  });
  Gi = E((ji) => {
    var _r = Wi().Buffer, $i = _r.isEncoding || function(e) {
      switch (e = "" + e, e && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _s(e) {
      if (!e)
        return "utf8";
      for (var t;; )
        switch (e) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return e;
          default:
            if (t)
              return;
            e = ("" + e).toLowerCase(), t = true;
        }
    }
    function Es(e) {
      var t = _s(e);
      if (typeof t != "string" && (_r.isEncoding === $i || !$i(e)))
        throw new Error("Unknown encoding: " + e);
      return t || e;
    }
    ji.StringDecoder = Ye;
    function Ye(e) {
      this.encoding = Es(e);
      var t;
      switch (this.encoding) {
        case "utf16le":
          this.text = Is, this.end = Ts, t = 4;
          break;
        case "utf8":
          this.fillLast = xs, t = 4;
          break;
        case "base64":
          this.text = Bs, this.end = Ls, t = 3;
          break;
        default:
          this.write = Ns, this.end = Fs;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = _r.allocUnsafe(t);
    }
    Ye.prototype.write = function(e) {
      if (e.length === 0)
        return "";
      var t, r;
      if (this.lastNeed) {
        if (t = this.fillLast(e), t === undefined)
          return "";
        r = this.lastNeed, this.lastNeed = 0;
      } else
        r = 0;
      return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
    };
    Ye.prototype.end = As;
    Ye.prototype.text = Rs;
    Ye.prototype.fillLast = function(e) {
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
    };
    function gr(e) {
      return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
    }
    function Ss(e, t, r) {
      var n = t.length - 1;
      if (n < r)
        return 0;
      var i = gr(t[n]);
      return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || i === -2 ? 0 : (i = gr(t[n]), i >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || i === -2 ? 0 : (i = gr(t[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : e.lastNeed = i - 3), i) : 0));
    }
    function ms(e, t, r) {
      if ((t[0] & 192) !== 128)
        return e.lastNeed = 0, "\uFFFD";
      if (e.lastNeed > 1 && t.length > 1) {
        if ((t[1] & 192) !== 128)
          return e.lastNeed = 1, "\uFFFD";
        if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) !== 128)
          return e.lastNeed = 2, "\uFFFD";
      }
    }
    function xs(e) {
      var t = this.lastTotal - this.lastNeed, r = ms(this, e, t);
      if (r !== undefined)
        return r;
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length;
    }
    function Rs(e, t) {
      var r = Ss(this, e, t);
      if (!this.lastNeed)
        return e.toString("utf8", t);
      this.lastTotal = r;
      var n = e.length - (r - this.lastNeed);
      return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
    }
    function As(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + "\uFFFD" : t;
    }
    function Is(e, t) {
      if ((e.length - t) % 2 === 0) {
        var r = e.toString("utf16le", t);
        if (r) {
          var n = r.charCodeAt(r.length - 1);
          if (n >= 55296 && n <= 56319)
            return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
        }
        return r;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
    }
    function Ts(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }
      return t;
    }
    function Bs(e, t) {
      var r = (e.length - t) % 3;
      return r === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
    }
    function Ls(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
    }
    function Ns(e) {
      return e.toString(this.encoding);
    }
    function Fs(e) {
      return e && e.length ? this.write(e) : "";
    }
  });
  Er = E((fd, Ki) => {
    var Hi = (se(), pe(k)), { PromisePrototypeThen: Ms, SymbolAsyncIterator: Vi, SymbolIterator: Yi } = I(), { Buffer: Cs } = te(), { ERR_INVALID_ARG_TYPE: Os, ERR_STREAM_NULL_VALUES: Ds } = C().codes;
    function Ps(e, t, r) {
      let n;
      if (typeof t == "string" || t instanceof Cs)
        return new e({ objectMode: true, ...r, read() {
          this.push(t), this.push(null);
        } });
      let i;
      if (t && t[Vi])
        i = true, n = t[Vi]();
      else if (t && t[Yi])
        i = false, n = t[Yi]();
      else
        throw new Os("iterable", ["Iterable"], t);
      let o = new e({ objectMode: true, highWaterMark: 1, ...r }), l = false;
      o._read = function() {
        l || (l = true, f());
      }, o._destroy = function(s, d) {
        Ms(u(s), () => Hi.nextTick(d, s), (c) => Hi.nextTick(d, c || s));
      };
      async function u(s) {
        let d = s != null, c = typeof n.throw == "function";
        if (d && c) {
          let { value: y, done: h } = await n.throw(s);
          if (await y, h)
            return;
        }
        if (typeof n.return == "function") {
          let { value: y } = await n.return();
          await y;
        }
      }
      async function f() {
        for (;; ) {
          try {
            let { value: s, done: d } = i ? await n.next() : n.next();
            if (d)
              o.push(null);
            else {
              let c = s && typeof s.then == "function" ? await s : s;
              if (c === null)
                throw l = false, new Ds;
              if (o.push(c))
                continue;
              l = false;
            }
          } catch (s) {
            o.destroy(s);
          }
          break;
        }
      }
      return o;
    }
    Ki.exports = Ps;
  });
  Ke = E((sd, uo) => {
    var $ = (se(), pe(k)), { ArrayPrototypeIndexOf: ks, NumberIsInteger: Us, NumberIsNaN: vs, NumberParseInt: qs, ObjectDefineProperties: Ji, ObjectKeys: Ws, ObjectSetPrototypeOf: Qi, Promise: $s, SafeSet: js, SymbolAsyncIterator: Gs, Symbol: Hs } = I();
    uo.exports = g;
    g.ReadableState = Ir;
    var { EventEmitter: Vs } = Et(), { Stream: he, prependListener: Ys } = xt(), { Buffer: Sr } = te(), { addAbortSignal: Ks } = At(), zs = ce(), _ = V().debuglog("stream", (e) => {
      _ = e;
    }), Xs = Pi(), Ue = Se(), { getHighWaterMark: Js, getDefaultHighWaterMark: Qs } = Tt(), { aggregateTwoErrors: zi, codes: { ERR_INVALID_ARG_TYPE: Zs, ERR_METHOD_NOT_IMPLEMENTED: ea, ERR_OUT_OF_RANGE: ta, ERR_STREAM_PUSH_AFTER_EOF: ra, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: na } } = C(), { validateObject: ia } = He(), xe = Hs("kPaused"), { StringDecoder: Zi } = Gi(), oa = Er();
    Qi(g.prototype, he.prototype);
    Qi(g, he);
    var mr = () => {
    }, { errorOrDestroy: ke } = Ue;
    function Ir(e, t, r) {
      typeof r != "boolean" && (r = t instanceof J()), this.objectMode = !!(e && e.objectMode), r && (this.objectMode = this.objectMode || !!(e && e.readableObjectMode)), this.highWaterMark = e ? Js(this, e, "readableHighWaterMark", r) : Qs(false), this.buffer = new Xs, this.length = 0, this.pipes = [], this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.constructed = true, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this[xe] = null, this.errorEmitted = false, this.emitClose = !e || e.emitClose !== false, this.autoDestroy = !e || e.autoDestroy !== false, this.destroyed = false, this.errored = null, this.closed = false, this.closeEmitted = false, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = false, this.readingMore = false, this.dataEmitted = false, this.decoder = null, this.encoding = null, e && e.encoding && (this.decoder = new Zi(e.encoding), this.encoding = e.encoding);
    }
    function g(e) {
      if (!(this instanceof g))
        return new g(e);
      let t = this instanceof J();
      this._readableState = new Ir(e, this, t), e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.construct == "function" && (this._construct = e.construct), e.signal && !t && Ks(e.signal, this)), he.call(this, e), Ue.construct(this, () => {
        this._readableState.needReadable && Lt(this, this._readableState);
      });
    }
    g.prototype.destroy = Ue.destroy;
    g.prototype._undestroy = Ue.undestroy;
    g.prototype._destroy = function(e, t) {
      t(e);
    };
    g.prototype[Vs.captureRejectionSymbol] = function(e) {
      this.destroy(e);
    };
    g.prototype.push = function(e, t) {
      return eo(this, e, t, false);
    };
    g.prototype.unshift = function(e, t) {
      return eo(this, e, t, true);
    };
    function eo(e, t, r, n) {
      _("readableAddChunk", t);
      let i = e._readableState, o;
      if (i.objectMode || (typeof t == "string" ? (r = r || i.defaultEncoding, i.encoding !== r && (n && i.encoding ? t = Sr.from(t, r).toString(i.encoding) : (t = Sr.from(t, r), r = ""))) : t instanceof Sr ? r = "" : he._isUint8Array(t) ? (t = he._uint8ArrayToBuffer(t), r = "") : t != null && (o = new Zs("chunk", ["string", "Buffer", "Uint8Array"], t))), o)
        ke(e, o);
      else if (t === null)
        i.reading = false, fa(e, i);
      else if (i.objectMode || t && t.length > 0)
        if (n)
          if (i.endEmitted)
            ke(e, new na);
          else {
            if (i.destroyed || i.errored)
              return false;
            xr(e, i, t, true);
          }
        else if (i.ended)
          ke(e, new ra);
        else {
          if (i.destroyed || i.errored)
            return false;
          i.reading = false, i.decoder && !r ? (t = i.decoder.write(t), i.objectMode || t.length !== 0 ? xr(e, i, t, false) : Lt(e, i)) : xr(e, i, t, false);
        }
      else
        n || (i.reading = false, Lt(e, i));
      return !i.ended && (i.length < i.highWaterMark || i.length === 0);
    }
    function xr(e, t, r, n) {
      t.flowing && t.length === 0 && !t.sync && e.listenerCount("data") > 0 ? (t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null, t.dataEmitted = true, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && Nt(e)), Lt(e, t);
    }
    g.prototype.isPaused = function() {
      let e = this._readableState;
      return e[xe] === true || e.flowing === false;
    };
    g.prototype.setEncoding = function(e) {
      let t = new Zi(e);
      this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
      let r = this._readableState.buffer, n = "";
      for (let i of r)
        n += t.write(i);
      return r.clear(), n !== "" && r.push(n), this._readableState.length = n.length, this;
    };
    var la = 1073741824;
    function ua(e) {
      if (e > la)
        throw new ta("size", "<= 1GiB", e);
      return e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++, e;
    }
    function Xi(e, t) {
      return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : vs(e) ? t.flowing && t.length ? t.buffer.first().length : t.length : e <= t.length ? e : t.ended ? t.length : 0;
    }
    g.prototype.read = function(e) {
      _("read", e), e === undefined ? e = NaN : Us(e) || (e = qs(e, 10));
      let t = this._readableState, r = e;
      if (e > t.highWaterMark && (t.highWaterMark = ua(e)), e !== 0 && (t.emittedReadable = false), e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
        return _("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? Rr(this) : Nt(this), null;
      if (e = Xi(e, t), e === 0 && t.ended)
        return t.length === 0 && Rr(this), null;
      let n = t.needReadable;
      if (_("need readable", n), (t.length === 0 || t.length - e < t.highWaterMark) && (n = true, _("length less than watermark", n)), t.ended || t.reading || t.destroyed || t.errored || !t.constructed)
        n = false, _("reading, ended or constructing", n);
      else if (n) {
        _("do read"), t.reading = true, t.sync = true, t.length === 0 && (t.needReadable = true);
        try {
          this._read(t.highWaterMark);
        } catch (o) {
          ke(this, o);
        }
        t.sync = false, t.reading || (e = Xi(r, t));
      }
      let i;
      return e > 0 ? i = oo(e, t) : i = null, i === null ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null), t.length === 0 && (t.ended || (t.needReadable = true), r !== e && t.ended && Rr(this)), i !== null && !t.errorEmitted && !t.closeEmitted && (t.dataEmitted = true, this.emit("data", i)), i;
    };
    function fa(e, t) {
      if (_("onEofChunk"), !t.ended) {
        if (t.decoder) {
          let r = t.decoder.end();
          r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
        }
        t.ended = true, t.sync ? Nt(e) : (t.needReadable = false, t.emittedReadable = true, to(e));
      }
    }
    function Nt(e) {
      let t = e._readableState;
      _("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = false, t.emittedReadable || (_("emitReadable", t.flowing), t.emittedReadable = true, $.nextTick(to, e));
    }
    function to(e) {
      let t = e._readableState;
      _("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && !t.errored && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = false), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, no(e);
    }
    function Lt(e, t) {
      !t.readingMore && t.constructed && (t.readingMore = true, $.nextTick(sa, e, t));
    }
    function sa(e, t) {
      for (;!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0); ) {
        let r = t.length;
        if (_("maybeReadMore read 0"), e.read(0), r === t.length)
          break;
      }
      t.readingMore = false;
    }
    g.prototype._read = function(e) {
      throw new ea("_read()");
    };
    g.prototype.pipe = function(e, t) {
      let r = this, n = this._readableState;
      n.pipes.length === 1 && (n.multiAwaitDrain || (n.multiAwaitDrain = true, n.awaitDrainWriters = new js(n.awaitDrainWriters ? [n.awaitDrainWriters] : []))), n.pipes.push(e), _("pipe count=%d opts=%j", n.pipes.length, t);
      let o = (!t || t.end !== false) && e !== $.stdout && e !== $.stderr ? u : v;
      n.endEmitted ? $.nextTick(o) : r.once("end", o), e.on("unpipe", l);
      function l(w, b) {
        _("onunpipe"), w === r && b && b.hasUnpiped === false && (b.hasUnpiped = true, d());
      }
      function u() {
        _("onend"), e.end();
      }
      let f, s = false;
      function d() {
        _("cleanup"), e.removeListener("close", p), e.removeListener("finish", B), f && e.removeListener("drain", f), e.removeListener("error", h), e.removeListener("unpipe", l), r.removeListener("end", u), r.removeListener("end", v), r.removeListener("data", y), s = true, f && n.awaitDrainWriters && (!e._writableState || e._writableState.needDrain) && f();
      }
      function c() {
        s || (n.pipes.length === 1 && n.pipes[0] === e ? (_("false write response, pause", 0), n.awaitDrainWriters = e, n.multiAwaitDrain = false) : n.pipes.length > 1 && n.pipes.includes(e) && (_("false write response, pause", n.awaitDrainWriters.size), n.awaitDrainWriters.add(e)), r.pause()), f || (f = aa(r, e), e.on("drain", f));
      }
      r.on("data", y);
      function y(w) {
        _("ondata");
        let b = e.write(w);
        _("dest.write", b), b === false && c();
      }
      function h(w) {
        if (_("onerror", w), v(), e.removeListener("error", h), e.listenerCount("error") === 0) {
          let b = e._writableState || e._readableState;
          b && !b.errorEmitted ? ke(e, w) : e.emit("error", w);
        }
      }
      Ys(e, "error", h);
      function p() {
        e.removeListener("finish", B), v();
      }
      e.once("close", p);
      function B() {
        _("onfinish"), e.removeListener("close", p), v();
      }
      e.once("finish", B);
      function v() {
        _("unpipe"), r.unpipe(e);
      }
      return e.emit("pipe", r), e.writableNeedDrain === true ? n.flowing && c() : n.flowing || (_("pipe resume"), r.resume()), e;
    };
    function aa(e, t) {
      return function() {
        let n = e._readableState;
        n.awaitDrainWriters === t ? (_("pipeOnDrain", 1), n.awaitDrainWriters = null) : n.multiAwaitDrain && (_("pipeOnDrain", n.awaitDrainWriters.size), n.awaitDrainWriters.delete(t)), (!n.awaitDrainWriters || n.awaitDrainWriters.size === 0) && e.listenerCount("data") && e.resume();
      };
    }
    g.prototype.unpipe = function(e) {
      let t = this._readableState, r = { hasUnpiped: false };
      if (t.pipes.length === 0)
        return this;
      if (!e) {
        let i = t.pipes;
        t.pipes = [], this.pause();
        for (let o = 0;o < i.length; o++)
          i[o].emit("unpipe", this, { hasUnpiped: false });
        return this;
      }
      let n = ks(t.pipes, e);
      return n === -1 ? this : (t.pipes.splice(n, 1), t.pipes.length === 0 && this.pause(), e.emit("unpipe", this, r), this);
    };
    g.prototype.on = function(e, t) {
      let r = he.prototype.on.call(this, e, t), n = this._readableState;
      return e === "data" ? (n.readableListening = this.listenerCount("readable") > 0, n.flowing !== false && this.resume()) : e === "readable" && !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = true, n.flowing = false, n.emittedReadable = false, _("on readable", n.length, n.reading), n.length ? Nt(this) : n.reading || $.nextTick(ca, this)), r;
    };
    g.prototype.addListener = g.prototype.on;
    g.prototype.removeListener = function(e, t) {
      let r = he.prototype.removeListener.call(this, e, t);
      return e === "readable" && $.nextTick(ro, this), r;
    };
    g.prototype.off = g.prototype.removeListener;
    g.prototype.removeAllListeners = function(e) {
      let t = he.prototype.removeAllListeners.apply(this, arguments);
      return (e === "readable" || e === undefined) && $.nextTick(ro, this), t;
    };
    function ro(e) {
      let t = e._readableState;
      t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && t[xe] === false ? t.flowing = true : e.listenerCount("data") > 0 ? e.resume() : t.readableListening || (t.flowing = null);
    }
    function ca(e) {
      _("readable nexttick read 0"), e.read(0);
    }
    g.prototype.resume = function() {
      let e = this._readableState;
      return e.flowing || (_("resume"), e.flowing = !e.readableListening, da(this, e)), e[xe] = false, this;
    };
    function da(e, t) {
      t.resumeScheduled || (t.resumeScheduled = true, $.nextTick(ha, e, t));
    }
    function ha(e, t) {
      _("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = false, e.emit("resume"), no(e), t.flowing && !t.reading && e.read(0);
    }
    g.prototype.pause = function() {
      return _("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (_("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState[xe] = true, this;
    };
    function no(e) {
      let t = e._readableState;
      for (_("flow", t.flowing);t.flowing && e.read() !== null; )
        ;
    }
    g.prototype.wrap = function(e) {
      let t = false;
      e.on("data", (n) => {
        !this.push(n) && e.pause && (t = true, e.pause());
      }), e.on("end", () => {
        this.push(null);
      }), e.on("error", (n) => {
        ke(this, n);
      }), e.on("close", () => {
        this.destroy();
      }), e.on("destroy", () => {
        this.destroy();
      }), this._read = () => {
        t && e.resume && (t = false, e.resume());
      };
      let r = Ws(e);
      for (let n = 1;n < r.length; n++) {
        let i = r[n];
        this[i] === undefined && typeof e[i] == "function" && (this[i] = e[i].bind(e));
      }
      return this;
    };
    g.prototype[Gs] = function() {
      return io(this);
    };
    g.prototype.iterator = function(e) {
      return e !== undefined && ia(e, "options"), io(this, e);
    };
    function io(e, t) {
      typeof e.read != "function" && (e = g.wrap(e, { objectMode: true }));
      let r = pa(e, t);
      return r.stream = e, r;
    }
    async function* pa(e, t) {
      let r = mr;
      function n(l) {
        this === e ? (r(), r = mr) : r = l;
      }
      e.on("readable", n);
      let i, o = zs(e, { writable: false }, (l) => {
        i = l ? zi(i, l) : null, r(), r = mr;
      });
      try {
        for (;; ) {
          let l = e.destroyed ? null : e.read();
          if (l !== null)
            yield l;
          else {
            if (i)
              throw i;
            if (i === null)
              return;
            await new $s(n);
          }
        }
      } catch (l) {
        throw i = zi(i, l), i;
      } finally {
        (i || t?.destroyOnReturn !== false) && (i === undefined || e._readableState.autoDestroy) ? Ue.destroyer(e, null) : (e.off("readable", n), o());
      }
    }
    Ji(g.prototype, { readable: { __proto__: null, get() {
      let e = this._readableState;
      return !!e && e.readable !== false && !e.destroyed && !e.errorEmitted && !e.endEmitted;
    }, set(e) {
      this._readableState && (this._readableState.readable = !!e);
    } }, readableDidRead: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.dataEmitted;
    } }, readableAborted: { __proto__: null, enumerable: false, get: function() {
      return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
    } }, readableHighWaterMark: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.highWaterMark;
    } }, readableBuffer: { __proto__: null, enumerable: false, get: function() {
      return this._readableState && this._readableState.buffer;
    } }, readableFlowing: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.flowing;
    }, set: function(e) {
      this._readableState && (this._readableState.flowing = e);
    } }, readableLength: { __proto__: null, enumerable: false, get() {
      return this._readableState.length;
    } }, readableObjectMode: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.objectMode : false;
    } }, readableEncoding: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.encoding : null;
    } }, errored: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.errored : null;
    } }, closed: { __proto__: null, get() {
      return this._readableState ? this._readableState.closed : false;
    } }, destroyed: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.destroyed : false;
    }, set(e) {
      !this._readableState || (this._readableState.destroyed = e);
    } }, readableEnded: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.endEmitted : false;
    } } });
    Ji(Ir.prototype, { pipesCount: { __proto__: null, get() {
      return this.pipes.length;
    } }, paused: { __proto__: null, get() {
      return this[xe] !== false;
    }, set(e) {
      this[xe] = !!e;
    } } });
    g._fromList = oo;
    function oo(e, t) {
      if (t.length === 0)
        return null;
      let r;
      return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? r = t.buffer.join("") : t.buffer.length === 1 ? r = t.buffer.first() : r = t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r;
    }
    function Rr(e) {
      let t = e._readableState;
      _("endReadable", t.endEmitted), t.endEmitted || (t.ended = true, $.nextTick(ya, t, e));
    }
    function ya(e, t) {
      if (_("endReadableNT", e.endEmitted, e.length), !e.errored && !e.closeEmitted && !e.endEmitted && e.length === 0) {
        if (e.endEmitted = true, t.emit("end"), t.writable && t.allowHalfOpen === false)
          $.nextTick(wa, t);
        else if (e.autoDestroy) {
          let r = t._writableState;
          (!r || r.autoDestroy && (r.finished || r.writable === false)) && t.destroy();
        }
      }
    }
    function wa(e) {
      e.writable && !e.writableEnded && !e.destroyed && e.end();
    }
    g.from = function(e, t) {
      return oa(g, e, t);
    };
    var Ar;
    function lo() {
      return Ar === undefined && (Ar = {}), Ar;
    }
    g.fromWeb = function(e, t) {
      return lo().newStreamReadableFromReadableStream(e, t);
    };
    g.toWeb = function(e, t) {
      return lo().newReadableStreamFromStreamReadable(e, t);
    };
    g.wrap = function(e, t) {
      var r, n;
      return new g({ objectMode: (r = (n = e.readableObjectMode) !== null && n !== undefined ? n : e.objectMode) !== null && r !== undefined ? r : true, ...t, destroy(i, o) {
        Ue.destroyer(e, i), o(i);
      } }).wrap(e);
    };
  });
  Cr = E((ad, Eo) => {
    var Re = (se(), pe(k)), { ArrayPrototypeSlice: ao, Error: ba, FunctionPrototypeSymbolHasInstance: co, ObjectDefineProperty: ho, ObjectDefineProperties: ga, ObjectSetPrototypeOf: po, StringPrototypeToLowerCase: _a, Symbol: Ea, SymbolHasInstance: Sa } = I();
    Eo.exports = m;
    m.WritableState = Je;
    var { EventEmitter: ma } = Et(), ze = xt().Stream, { Buffer: Ft } = te(), Ot = Se(), { addAbortSignal: xa } = At(), { getHighWaterMark: Ra, getDefaultHighWaterMark: Aa } = Tt(), { ERR_INVALID_ARG_TYPE: Ia, ERR_METHOD_NOT_IMPLEMENTED: Ta, ERR_MULTIPLE_CALLBACK: yo, ERR_STREAM_CANNOT_PIPE: Ba, ERR_STREAM_DESTROYED: Xe, ERR_STREAM_ALREADY_FINISHED: La, ERR_STREAM_NULL_VALUES: Na, ERR_STREAM_WRITE_AFTER_END: Fa, ERR_UNKNOWN_ENCODING: wo } = C().codes, { errorOrDestroy: ve } = Ot;
    po(m.prototype, ze.prototype);
    po(m, ze);
    function Lr() {
    }
    var qe = Ea("kOnFinished");
    function Je(e, t, r) {
      typeof r != "boolean" && (r = t instanceof J()), this.objectMode = !!(e && e.objectMode), r && (this.objectMode = this.objectMode || !!(e && e.writableObjectMode)), this.highWaterMark = e ? Ra(this, e, "writableHighWaterMark", r) : Aa(false), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      let n = !!(e && e.decodeStrings === false);
      this.decodeStrings = !n, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = Ca.bind(undefined, t), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, Ct(this), this.pendingcb = 0, this.constructed = true, this.prefinished = false, this.errorEmitted = false, this.emitClose = !e || e.emitClose !== false, this.autoDestroy = !e || e.autoDestroy !== false, this.errored = null, this.closed = false, this.closeEmitted = false, this[qe] = [];
    }
    function Ct(e) {
      e.buffered = [], e.bufferedIndex = 0, e.allBuffers = true, e.allNoop = true;
    }
    Je.prototype.getBuffer = function() {
      return ao(this.buffered, this.bufferedIndex);
    };
    ho(Je.prototype, "bufferedRequestCount", { __proto__: null, get() {
      return this.buffered.length - this.bufferedIndex;
    } });
    function m(e) {
      let t = this instanceof J();
      if (!t && !co(m, this))
        return new m(e);
      this._writableState = new Je(e, this, t), e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev == "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this._final = e.final), typeof e.construct == "function" && (this._construct = e.construct), e.signal && xa(e.signal, this)), ze.call(this, e), Ot.construct(this, () => {
        let r = this._writableState;
        r.writing || Fr(this, r), Mr(this, r);
      });
    }
    ho(m, Sa, { __proto__: null, value: function(e) {
      return co(this, e) ? true : this !== m ? false : e && e._writableState instanceof Je;
    } });
    m.prototype.pipe = function() {
      ve(this, new Ba);
    };
    function bo(e, t, r, n) {
      let i = e._writableState;
      if (typeof r == "function")
        n = r, r = i.defaultEncoding;
      else {
        if (!r)
          r = i.defaultEncoding;
        else if (r !== "buffer" && !Ft.isEncoding(r))
          throw new wo(r);
        typeof n != "function" && (n = Lr);
      }
      if (t === null)
        throw new Na;
      if (!i.objectMode)
        if (typeof t == "string")
          i.decodeStrings !== false && (t = Ft.from(t, r), r = "buffer");
        else if (t instanceof Ft)
          r = "buffer";
        else if (ze._isUint8Array(t))
          t = ze._uint8ArrayToBuffer(t), r = "buffer";
        else
          throw new Ia("chunk", ["string", "Buffer", "Uint8Array"], t);
      let o;
      return i.ending ? o = new Fa : i.destroyed && (o = new Xe("write")), o ? (Re.nextTick(n, o), ve(e, o, true), o) : (i.pendingcb++, Ma(e, i, t, r, n));
    }
    m.prototype.write = function(e, t, r) {
      return bo(this, e, t, r) === true;
    };
    m.prototype.cork = function() {
      this._writableState.corked++;
    };
    m.prototype.uncork = function() {
      let e = this._writableState;
      e.corked && (e.corked--, e.writing || Fr(this, e));
    };
    m.prototype.setDefaultEncoding = function(t) {
      if (typeof t == "string" && (t = _a(t)), !Ft.isEncoding(t))
        throw new wo(t);
      return this._writableState.defaultEncoding = t, this;
    };
    function Ma(e, t, r, n, i) {
      let o = t.objectMode ? 1 : r.length;
      t.length += o;
      let l = t.length < t.highWaterMark;
      return l || (t.needDrain = true), t.writing || t.corked || t.errored || !t.constructed ? (t.buffered.push({ chunk: r, encoding: n, callback: i }), t.allBuffers && n !== "buffer" && (t.allBuffers = false), t.allNoop && i !== Lr && (t.allNoop = false)) : (t.writelen = o, t.writecb = i, t.writing = true, t.sync = true, e._write(r, n, t.onwrite), t.sync = false), l && !t.errored && !t.destroyed;
    }
    function fo(e, t, r, n, i, o, l) {
      t.writelen = n, t.writecb = l, t.writing = true, t.sync = true, t.destroyed ? t.onwrite(new Xe("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = false;
    }
    function so(e, t, r, n) {
      --t.pendingcb, n(r), Nr(t), ve(e, r);
    }
    function Ca(e, t) {
      let r = e._writableState, n = r.sync, i = r.writecb;
      if (typeof i != "function") {
        ve(e, new yo);
        return;
      }
      r.writing = false, r.writecb = null, r.length -= r.writelen, r.writelen = 0, t ? (t.stack, r.errored || (r.errored = t), e._readableState && !e._readableState.errored && (e._readableState.errored = t), n ? Re.nextTick(so, e, r, t, i) : so(e, r, t, i)) : (r.buffered.length > r.bufferedIndex && Fr(e, r), n ? r.afterWriteTickInfo !== null && r.afterWriteTickInfo.cb === i ? r.afterWriteTickInfo.count++ : (r.afterWriteTickInfo = { count: 1, cb: i, stream: e, state: r }, Re.nextTick(Oa, r.afterWriteTickInfo)) : go(e, r, 1, i));
    }
    function Oa({ stream: e, state: t, count: r, cb: n }) {
      return t.afterWriteTickInfo = null, go(e, t, r, n);
    }
    function go(e, t, r, n) {
      for (!t.ending && !e.destroyed && t.length === 0 && t.needDrain && (t.needDrain = false, e.emit("drain"));r-- > 0; )
        t.pendingcb--, n();
      t.destroyed && Nr(t), Mr(e, t);
    }
    function Nr(e) {
      if (e.writing)
        return;
      for (let i = e.bufferedIndex;i < e.buffered.length; ++i) {
        var t;
        let { chunk: o, callback: l } = e.buffered[i], u = e.objectMode ? 1 : o.length;
        e.length -= u, l((t = e.errored) !== null && t !== undefined ? t : new Xe("write"));
      }
      let r = e[qe].splice(0);
      for (let i = 0;i < r.length; i++) {
        var n;
        r[i]((n = e.errored) !== null && n !== undefined ? n : new Xe("end"));
      }
      Ct(e);
    }
    function Fr(e, t) {
      if (t.corked || t.bufferProcessing || t.destroyed || !t.constructed)
        return;
      let { buffered: r, bufferedIndex: n, objectMode: i } = t, o = r.length - n;
      if (!o)
        return;
      let l = n;
      if (t.bufferProcessing = true, o > 1 && e._writev) {
        t.pendingcb -= o - 1;
        let u = t.allNoop ? Lr : (s) => {
          for (let d = l;d < r.length; ++d)
            r[d].callback(s);
        }, f = t.allNoop && l === 0 ? r : ao(r, l);
        f.allBuffers = t.allBuffers, fo(e, t, true, t.length, f, "", u), Ct(t);
      } else {
        do {
          let { chunk: u, encoding: f, callback: s } = r[l];
          r[l++] = null;
          let d = i ? 1 : u.length;
          fo(e, t, false, d, u, f, s);
        } while (l < r.length && !t.writing);
        l === r.length ? Ct(t) : l > 256 ? (r.splice(0, l), t.bufferedIndex = 0) : t.bufferedIndex = l;
      }
      t.bufferProcessing = false;
    }
    m.prototype._write = function(e, t, r) {
      if (this._writev)
        this._writev([{ chunk: e, encoding: t }], r);
      else
        throw new Ta("_write()");
    };
    m.prototype._writev = null;
    m.prototype.end = function(e, t, r) {
      let n = this._writableState;
      typeof e == "function" ? (r = e, e = null, t = null) : typeof t == "function" && (r = t, t = null);
      let i;
      if (e != null) {
        let o = bo(this, e, t);
        o instanceof ba && (i = o);
      }
      return n.corked && (n.corked = 1, this.uncork()), i || (!n.errored && !n.ending ? (n.ending = true, Mr(this, n, true), n.ended = true) : n.finished ? i = new La("end") : n.destroyed && (i = new Xe("end"))), typeof r == "function" && (i || n.finished ? Re.nextTick(r, i) : n[qe].push(r)), this;
    };
    function Mt(e) {
      return e.ending && !e.destroyed && e.constructed && e.length === 0 && !e.errored && e.buffered.length === 0 && !e.finished && !e.writing && !e.errorEmitted && !e.closeEmitted;
    }
    function Da(e, t) {
      let r = false;
      function n(i) {
        if (r) {
          ve(e, i ?? yo());
          return;
        }
        if (r = true, t.pendingcb--, i) {
          let o = t[qe].splice(0);
          for (let l = 0;l < o.length; l++)
            o[l](i);
          ve(e, i, t.sync);
        } else
          Mt(t) && (t.prefinished = true, e.emit("prefinish"), t.pendingcb++, Re.nextTick(Br, e, t));
      }
      t.sync = true, t.pendingcb++;
      try {
        e._final(n);
      } catch (i) {
        n(i);
      }
      t.sync = false;
    }
    function Pa(e, t) {
      !t.prefinished && !t.finalCalled && (typeof e._final == "function" && !t.destroyed ? (t.finalCalled = true, Da(e, t)) : (t.prefinished = true, e.emit("prefinish")));
    }
    function Mr(e, t, r) {
      Mt(t) && (Pa(e, t), t.pendingcb === 0 && (r ? (t.pendingcb++, Re.nextTick((n, i) => {
        Mt(i) ? Br(n, i) : i.pendingcb--;
      }, e, t)) : Mt(t) && (t.pendingcb++, Br(e, t))));
    }
    function Br(e, t) {
      t.pendingcb--, t.finished = true;
      let r = t[qe].splice(0);
      for (let n = 0;n < r.length; n++)
        r[n]();
      if (e.emit("finish"), t.autoDestroy) {
        let n = e._readableState;
        (!n || n.autoDestroy && (n.endEmitted || n.readable === false)) && e.destroy();
      }
    }
    ga(m.prototype, { closed: { __proto__: null, get() {
      return this._writableState ? this._writableState.closed : false;
    } }, destroyed: { __proto__: null, get() {
      return this._writableState ? this._writableState.destroyed : false;
    }, set(e) {
      this._writableState && (this._writableState.destroyed = e);
    } }, writable: { __proto__: null, get() {
      let e = this._writableState;
      return !!e && e.writable !== false && !e.destroyed && !e.errored && !e.ending && !e.ended;
    }, set(e) {
      this._writableState && (this._writableState.writable = !!e);
    } }, writableFinished: { __proto__: null, get() {
      return this._writableState ? this._writableState.finished : false;
    } }, writableObjectMode: { __proto__: null, get() {
      return this._writableState ? this._writableState.objectMode : false;
    } }, writableBuffer: { __proto__: null, get() {
      return this._writableState && this._writableState.getBuffer();
    } }, writableEnded: { __proto__: null, get() {
      return this._writableState ? this._writableState.ending : false;
    } }, writableNeedDrain: { __proto__: null, get() {
      let e = this._writableState;
      return e ? !e.destroyed && !e.ending && e.needDrain : false;
    } }, writableHighWaterMark: { __proto__: null, get() {
      return this._writableState && this._writableState.highWaterMark;
    } }, writableCorked: { __proto__: null, get() {
      return this._writableState ? this._writableState.corked : 0;
    } }, writableLength: { __proto__: null, get() {
      return this._writableState && this._writableState.length;
    } }, errored: { __proto__: null, enumerable: false, get() {
      return this._writableState ? this._writableState.errored : null;
    } }, writableAborted: { __proto__: null, enumerable: false, get: function() {
      return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
    } } });
    var ka = Ot.destroy;
    m.prototype.destroy = function(e, t) {
      let r = this._writableState;
      return !r.destroyed && (r.bufferedIndex < r.buffered.length || r[qe].length) && Re.nextTick(Nr, r), ka.call(this, e, t), this;
    };
    m.prototype._undestroy = Ot.undestroy;
    m.prototype._destroy = function(e, t) {
      t(e);
    };
    m.prototype[ma.captureRejectionSymbol] = function(e) {
      this.destroy(e);
    };
    var Tr;
    function _o() {
      return Tr === undefined && (Tr = {}), Tr;
    }
    m.fromWeb = function(e, t) {
      return _o().newStreamWritableFromWritableStream(e, t);
    };
    m.toWeb = function(e) {
      return _o().newWritableStreamFromStreamWritable(e);
    };
  });
  Mo = E((cd, Fo) => {
    var Or = (se(), pe(k)), Ua = te(), { isReadable: va, isWritable: qa, isIterable: So, isNodeStream: Wa, isReadableNodeStream: mo, isWritableNodeStream: xo, isDuplexNodeStream: $a } = ae(), Ro = ce(), { AbortError: No, codes: { ERR_INVALID_ARG_TYPE: ja, ERR_INVALID_RETURN_VALUE: Ao } } = C(), { destroyer: We } = Se(), Ga = J(), Ha = Ke(), { createDeferredPromise: Io } = V(), To = Er(), Bo = globalThis.Blob || Ua.Blob, Va = typeof Bo < "u" ? function(t) {
      return t instanceof Bo;
    } : function(t) {
      return false;
    }, Ya = globalThis.AbortController || ut().AbortController, { FunctionPrototypeCall: Lo } = I(), Ae = class extends Ga {
      constructor(t) {
        super(t), t?.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), t?.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true);
      }
    };
    Fo.exports = function e(t, r) {
      if ($a(t))
        return t;
      if (mo(t))
        return Dt({ readable: t });
      if (xo(t))
        return Dt({ writable: t });
      if (Wa(t))
        return Dt({ writable: false, readable: false });
      if (typeof t == "function") {
        let { value: i, write: o, final: l, destroy: u } = Ka(t);
        if (So(i))
          return To(Ae, i, { objectMode: true, write: o, final: l, destroy: u });
        let f = i?.then;
        if (typeof f == "function") {
          let s, d = Lo(f, i, (c) => {
            if (c != null)
              throw new Ao("nully", "body", c);
          }, (c) => {
            We(s, c);
          });
          return s = new Ae({ objectMode: true, readable: false, write: o, final(c) {
            l(async () => {
              try {
                await d, Or.nextTick(c, null);
              } catch (y) {
                Or.nextTick(c, y);
              }
            });
          }, destroy: u });
        }
        throw new Ao("Iterable, AsyncIterable or AsyncFunction", r, i);
      }
      if (Va(t))
        return e(t.arrayBuffer());
      if (So(t))
        return To(Ae, t, { objectMode: true, writable: false });
      if (typeof t?.writable == "object" || typeof t?.readable == "object") {
        let i = t != null && t.readable ? mo(t?.readable) ? t?.readable : e(t.readable) : undefined, o = t != null && t.writable ? xo(t?.writable) ? t?.writable : e(t.writable) : undefined;
        return Dt({ readable: i, writable: o });
      }
      let n = t?.then;
      if (typeof n == "function") {
        let i;
        return Lo(n, t, (o) => {
          o != null && i.push(o), i.push(null);
        }, (o) => {
          We(i, o);
        }), i = new Ae({ objectMode: true, writable: false, read() {
        } });
      }
      throw new ja(r, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], t);
    };
    function Ka(e) {
      let { promise: t, resolve: r } = Io(), n = new Ya, i = n.signal;
      return { value: e(async function* () {
        for (;; ) {
          let l = t;
          t = null;
          let { chunk: u, done: f, cb: s } = await l;
          if (Or.nextTick(s), f)
            return;
          if (i.aborted)
            throw new No(undefined, { cause: i.reason });
          ({ promise: t, resolve: r } = Io()), yield u;
        }
      }(), { signal: i }), write(l, u, f) {
        let s = r;
        r = null, s({ chunk: l, done: false, cb: f });
      }, final(l) {
        let u = r;
        r = null, u({ done: true, cb: l });
      }, destroy(l, u) {
        n.abort(), u(l);
      } };
    }
    function Dt(e) {
      let t = e.readable && typeof e.readable.read != "function" ? Ha.wrap(e.readable) : e.readable, r = e.writable, n = !!va(t), i = !!qa(r), o, l, u, f, s;
      function d(c) {
        let y = f;
        f = null, y ? y(c) : c ? s.destroy(c) : !n && !i && s.destroy();
      }
      return s = new Ae({ readableObjectMode: !!(t != null && t.readableObjectMode), writableObjectMode: !!(r != null && r.writableObjectMode), readable: n, writable: i }), i && (Ro(r, (c) => {
        i = false, c && We(t, c), d(c);
      }), s._write = function(c, y, h) {
        r.write(c, y) ? h() : o = h;
      }, s._final = function(c) {
        r.end(), l = c;
      }, r.on("drain", function() {
        if (o) {
          let c = o;
          o = null, c();
        }
      }), r.on("finish", function() {
        if (l) {
          let c = l;
          l = null, c();
        }
      })), n && (Ro(t, (c) => {
        n = false, c && We(t, c), d(c);
      }), t.on("readable", function() {
        if (u) {
          let c = u;
          u = null, c();
        }
      }), t.on("end", function() {
        s.push(null);
      }), s._read = function() {
        for (;; ) {
          let c = t.read();
          if (c === null) {
            u = s._read;
            return;
          }
          if (!s.push(c))
            return;
        }
      }), s._destroy = function(c, y) {
        !c && f !== null && (c = new No), u = null, o = null, l = null, f === null ? y(c) : (f = y, We(r, c), We(t, c));
      }, s;
    }
  });
  J = E((dd, Do) => {
    var { ObjectDefineProperties: za, ObjectGetOwnPropertyDescriptor: ie, ObjectKeys: Xa, ObjectSetPrototypeOf: Co } = I();
    Do.exports = j;
    var kr = Ke(), U = Cr();
    Co(j.prototype, kr.prototype);
    Co(j, kr);
    {
      let e = Xa(U.prototype);
      for (let t = 0;t < e.length; t++) {
        let r = e[t];
        j.prototype[r] || (j.prototype[r] = U.prototype[r]);
      }
    }
    function j(e) {
      if (!(this instanceof j))
        return new j(e);
      kr.call(this, e), U.call(this, e), e ? (this.allowHalfOpen = e.allowHalfOpen !== false, e.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), e.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true)) : this.allowHalfOpen = true;
    }
    za(j.prototype, { writable: { __proto__: null, ...ie(U.prototype, "writable") }, writableHighWaterMark: { __proto__: null, ...ie(U.prototype, "writableHighWaterMark") }, writableObjectMode: { __proto__: null, ...ie(U.prototype, "writableObjectMode") }, writableBuffer: { __proto__: null, ...ie(U.prototype, "writableBuffer") }, writableLength: { __proto__: null, ...ie(U.prototype, "writableLength") }, writableFinished: { __proto__: null, ...ie(U.prototype, "writableFinished") }, writableCorked: { __proto__: null, ...ie(U.prototype, "writableCorked") }, writableEnded: { __proto__: null, ...ie(U.prototype, "writableEnded") }, writableNeedDrain: { __proto__: null, ...ie(U.prototype, "writableNeedDrain") }, destroyed: { __proto__: null, get() {
      return this._readableState === undefined || this._writableState === undefined ? false : this._readableState.destroyed && this._writableState.destroyed;
    }, set(e) {
      this._readableState && this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
    } } });
    var Dr;
    function Oo() {
      return Dr === undefined && (Dr = {}), Dr;
    }
    j.fromWeb = function(e, t) {
      return Oo().newStreamDuplexFromReadableWritablePair(e, t);
    };
    j.toWeb = function(e) {
      return Oo().newReadableWritablePairFromDuplex(e);
    };
    var Pr;
    j.from = function(e) {
      return Pr || (Pr = Mo()), Pr(e, "body");
    };
  });
  qr = E((hd, ko) => {
    var { ObjectSetPrototypeOf: Po, Symbol: Ja } = I();
    ko.exports = oe;
    var { ERR_METHOD_NOT_IMPLEMENTED: Qa } = C().codes, vr = J(), { getHighWaterMark: Za } = Tt();
    Po(oe.prototype, vr.prototype);
    Po(oe, vr);
    var Qe = Ja("kCallback");
    function oe(e) {
      if (!(this instanceof oe))
        return new oe(e);
      let t = e ? Za(this, e, "readableHighWaterMark", true) : null;
      t === 0 && (e = { ...e, highWaterMark: null, readableHighWaterMark: t, writableHighWaterMark: e.writableHighWaterMark || 0 }), vr.call(this, e), this._readableState.sync = false, this[Qe] = null, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", ec);
    }
    function Ur(e) {
      typeof this._flush == "function" && !this.destroyed ? this._flush((t, r) => {
        if (t) {
          e ? e(t) : this.destroy(t);
          return;
        }
        r != null && this.push(r), this.push(null), e && e();
      }) : (this.push(null), e && e());
    }
    function ec() {
      this._final !== Ur && Ur.call(this);
    }
    oe.prototype._final = Ur;
    oe.prototype._transform = function(e, t, r) {
      throw new Qa("_transform()");
    };
    oe.prototype._write = function(e, t, r) {
      let n = this._readableState, i = this._writableState, o = n.length;
      this._transform(e, t, (l, u) => {
        if (l) {
          r(l);
          return;
        }
        u != null && this.push(u), i.ended || o === n.length || n.length < n.highWaterMark ? r() : this[Qe] = r;
      });
    };
    oe.prototype._read = function() {
      if (this[Qe]) {
        let e = this[Qe];
        this[Qe] = null, e();
      }
    };
  });
  $r = E((pd, vo) => {
    var { ObjectSetPrototypeOf: Uo } = I();
    vo.exports = $e;
    var Wr = qr();
    Uo($e.prototype, Wr.prototype);
    Uo($e, Wr);
    function $e(e) {
      if (!(this instanceof $e))
        return new $e(e);
      Wr.call(this, e);
    }
    $e.prototype._transform = function(e, t, r) {
      r(null, e);
    };
  });
  Ut = E((yd, Vo) => {
    var Pt = (se(), pe(k)), { ArrayIsArray: tc, Promise: rc, SymbolAsyncIterator: nc } = I(), kt = ce(), { once: ic } = V(), oc = Se(), qo = J(), { aggregateTwoErrors: lc, codes: { ERR_INVALID_ARG_TYPE: Go, ERR_INVALID_RETURN_VALUE: jr, ERR_MISSING_ARGS: uc, ERR_STREAM_DESTROYED: fc, ERR_STREAM_PREMATURE_CLOSE: sc }, AbortError: ac } = C(), { validateFunction: cc, validateAbortSignal: dc } = He(), { isIterable: je, isReadable: Gr, isReadableNodeStream: Yr, isNodeStream: Wo } = ae(), hc = globalThis.AbortController || ut().AbortController, Hr, Vr;
    function $o(e, t, r) {
      let n = false;
      e.on("close", () => {
        n = true;
      });
      let i = kt(e, { readable: t, writable: r }, (o) => {
        n = !o;
      });
      return { destroy: (o) => {
        n || (n = true, oc.destroyer(e, o || new fc("pipe")));
      }, cleanup: i };
    }
    function pc(e) {
      return cc(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
    }
    function yc(e) {
      if (je(e))
        return e;
      if (Yr(e))
        return wc(e);
      throw new Go("val", ["Readable", "Iterable", "AsyncIterable"], e);
    }
    async function* wc(e) {
      Vr || (Vr = Ke()), yield* Vr.prototype[nc].call(e);
    }
    async function jo(e, t, r, { end: n }) {
      let i, o = null, l = (s) => {
        if (s && (i = s), o) {
          let d = o;
          o = null, d();
        }
      }, u = () => new rc((s, d) => {
        i ? d(i) : o = () => {
          i ? d(i) : s();
        };
      });
      t.on("drain", l);
      let f = kt(t, { readable: false }, l);
      try {
        t.writableNeedDrain && await u();
        for await (let s of e)
          t.write(s) || await u();
        n && t.end(), await u(), r();
      } catch (s) {
        r(i !== s ? lc(i, s) : s);
      } finally {
        f(), t.off("drain", l);
      }
    }
    function bc(...e) {
      return Ho(e, ic(pc(e)));
    }
    function Ho(e, t, r) {
      if (e.length === 1 && tc(e[0]) && (e = e[0]), e.length < 2)
        throw new uc("streams");
      let n = new hc, i = n.signal, o = r?.signal, l = [];
      dc(o, "options.signal");
      function u() {
        h(new ac);
      }
      o?.addEventListener("abort", u);
      let f, s, d = [], c = 0;
      function y(w) {
        h(w, --c === 0);
      }
      function h(w, b) {
        if (w && (!f || f.code === "ERR_STREAM_PREMATURE_CLOSE") && (f = w), !(!f && !b)) {
          for (;d.length; )
            d.shift()(f);
          o?.removeEventListener("abort", u), n.abort(), b && (f || l.forEach((L) => L()), Pt.nextTick(t, f, s));
        }
      }
      let p;
      for (let w = 0;w < e.length; w++) {
        let b = e[w], L = w < e.length - 1, N = w > 0, Q = L || r?.end !== false, Ie = w === e.length - 1;
        if (Wo(b)) {
          let q = function(Z) {
            Z && Z.name !== "AbortError" && Z.code !== "ERR_STREAM_PREMATURE_CLOSE" && y(Z);
          };
          var v = q;
          if (Q) {
            let { destroy: Z, cleanup: qt } = $o(b, L, N);
            d.push(Z), Gr(b) && Ie && l.push(qt);
          }
          b.on("error", q), Gr(b) && Ie && l.push(() => {
            b.removeListener("error", q);
          });
        }
        if (w === 0)
          if (typeof b == "function") {
            if (p = b({ signal: i }), !je(p))
              throw new jr("Iterable, AsyncIterable or Stream", "source", p);
          } else
            je(b) || Yr(b) ? p = b : p = qo.from(b);
        else if (typeof b == "function")
          if (p = yc(p), p = b(p, { signal: i }), L) {
            if (!je(p, true))
              throw new jr("AsyncIterable", `transform[${w - 1}]`, p);
          } else {
            var B;
            Hr || (Hr = $r());
            let q = new Hr({ objectMode: true }), Z = (B = p) === null || B === undefined ? undefined : B.then;
            if (typeof Z == "function")
              c++, Z.call(p, (Te) => {
                s = Te, Te != null && q.write(Te), Q && q.end(), Pt.nextTick(y);
              }, (Te) => {
                q.destroy(Te), Pt.nextTick(y, Te);
              });
            else if (je(p, true))
              c++, jo(p, q, y, { end: Q });
            else
              throw new jr("AsyncIterable or Promise", "destination", p);
            p = q;
            let { destroy: qt, cleanup: sl } = $o(p, false, true);
            d.push(qt), Ie && l.push(sl);
          }
        else if (Wo(b)) {
          if (Yr(p)) {
            c += 2;
            let q = gc(p, b, y, { end: Q });
            Gr(b) && Ie && l.push(q);
          } else if (je(p))
            c++, jo(p, b, y, { end: Q });
          else
            throw new Go("val", ["Readable", "Iterable", "AsyncIterable"], p);
          p = b;
        } else
          p = qo.from(b);
      }
      return (i != null && i.aborted || o != null && o.aborted) && Pt.nextTick(u), p;
    }
    function gc(e, t, r, { end: n }) {
      let i = false;
      return t.on("close", () => {
        i || r(new sc);
      }), e.pipe(t, { end: n }), n ? e.once("end", () => {
        i = true, t.end();
      }) : r(), kt(e, { readable: true, writable: false }, (o) => {
        let l = e._readableState;
        o && o.code === "ERR_STREAM_PREMATURE_CLOSE" && l && l.ended && !l.errored && !l.errorEmitted ? e.once("end", r).once("error", r) : r(o);
      }), kt(t, { readable: false, writable: true }, r);
    }
    Vo.exports = { pipelineImpl: Ho, pipeline: bc };
  });
  Jo = E((wd, Xo) => {
    var { pipeline: _c } = Ut(), vt = J(), { destroyer: Ec } = Se(), { isNodeStream: Sc, isReadable: Yo, isWritable: Ko } = ae(), { AbortError: mc, codes: { ERR_INVALID_ARG_VALUE: zo, ERR_MISSING_ARGS: xc } } = C();
    Xo.exports = function(...t) {
      if (t.length === 0)
        throw new xc("streams");
      if (t.length === 1)
        return vt.from(t[0]);
      let r = [...t];
      if (typeof t[0] == "function" && (t[0] = vt.from(t[0])), typeof t[t.length - 1] == "function") {
        let h = t.length - 1;
        t[h] = vt.from(t[h]);
      }
      for (let h = 0;h < t.length; ++h)
        if (!!Sc(t[h])) {
          if (h < t.length - 1 && !Yo(t[h]))
            throw new zo(`streams[${h}]`, r[h], "must be readable");
          if (h > 0 && !Ko(t[h]))
            throw new zo(`streams[${h}]`, r[h], "must be writable");
        }
      let n, i, o, l, u;
      function f(h) {
        let p = l;
        l = null, p ? p(h) : h ? u.destroy(h) : !y && !c && u.destroy();
      }
      let s = t[0], d = _c(t, f), c = !!Ko(s), y = !!Yo(d);
      return u = new vt({ writableObjectMode: !!(s != null && s.writableObjectMode), readableObjectMode: !!(d != null && d.writableObjectMode), writable: c, readable: y }), c && (u._write = function(h, p, B) {
        s.write(h, p) ? B() : n = B;
      }, u._final = function(h) {
        s.end(), i = h;
      }, s.on("drain", function() {
        if (n) {
          let h = n;
          n = null, h();
        }
      }), d.on("finish", function() {
        if (i) {
          let h = i;
          i = null, h();
        }
      })), y && (d.on("readable", function() {
        if (o) {
          let h = o;
          o = null, h();
        }
      }), d.on("end", function() {
        u.push(null);
      }), u._read = function() {
        for (;; ) {
          let h = d.read();
          if (h === null) {
            o = u._read;
            return;
          }
          if (!u.push(h))
            return;
        }
      }), u._destroy = function(h, p) {
        !h && l !== null && (h = new mc), o = null, n = null, i = null, l === null ? p(h) : (l = p, Ec(d, h));
      }, u;
    };
  });
  Kr = E((bd, Qo) => {
    var { ArrayPrototypePop: Rc, Promise: Ac } = I(), { isIterable: Ic, isNodeStream: Tc } = ae(), { pipelineImpl: Bc } = Ut(), { finished: Lc } = ce();
    function Nc(...e) {
      return new Ac((t, r) => {
        let n, i, o = e[e.length - 1];
        if (o && typeof o == "object" && !Tc(o) && !Ic(o)) {
          let l = Rc(e);
          n = l.signal, i = l.end;
        }
        Bc(e, (l, u) => {
          l ? r(l) : t(u);
        }, { signal: n, end: i });
      });
    }
    Qo.exports = { finished: Lc, pipeline: Nc };
  });
  fl = E((gd, ul) => {
    var { Buffer: Fc } = te(), { ObjectDefineProperty: le, ObjectKeys: tl, ReflectApply: rl } = I(), { promisify: { custom: nl } } = V(), { streamReturningOperators: Zo, promiseReturningOperators: el } = di(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: il } } = C(), Mc = Jo(), { pipeline: ol } = Ut(), { destroyer: Cc } = Se(), ll = ce(), zr = Kr(), Xr = ae(), R = ul.exports = xt().Stream;
    R.isDisturbed = Xr.isDisturbed;
    R.isErrored = Xr.isErrored;
    R.isReadable = Xr.isReadable;
    R.Readable = Ke();
    for (let e of tl(Zo)) {
      let r = function(...n) {
        if (new.target)
          throw il();
        return R.Readable.from(rl(t, this, n));
      };
      Dc = r;
      let t = Zo[e];
      le(r, "name", { __proto__: null, value: t.name }), le(r, "length", { __proto__: null, value: t.length }), le(R.Readable.prototype, e, { __proto__: null, value: r, enumerable: false, configurable: true, writable: true });
    }
    var Dc;
    for (let e of tl(el)) {
      let r = function(...i) {
        if (new.target)
          throw il();
        return rl(t, this, i);
      };
      Dc = r;
      let t = el[e];
      le(r, "name", { __proto__: null, value: t.name }), le(r, "length", { __proto__: null, value: t.length }), le(R.Readable.prototype, e, { __proto__: null, value: r, enumerable: false, configurable: true, writable: true });
    }
    var Dc;
    R.Writable = Cr();
    R.Duplex = J();
    R.Transform = qr();
    R.PassThrough = $r();
    R.pipeline = ol;
    var { addAbortSignal: Oc } = At();
    R.addAbortSignal = Oc;
    R.finished = ll;
    R.destroy = Cc;
    R.compose = Mc;
    le(R, "promises", { __proto__: null, configurable: true, enumerable: true, get() {
      return zr;
    } });
    le(ol, nl, { __proto__: null, enumerable: true, get() {
      return zr.pipeline;
    } });
    le(ll, nl, { __proto__: null, enumerable: true, get() {
      return zr.finished;
    } });
    R.Stream = R;
    R._isUint8Array = function(t) {
      return t instanceof Uint8Array;
    };
    R._uint8ArrayToBuffer = function(t) {
      return Fc.from(t.buffer, t.byteOffset, t.byteLength);
    };
  });
  Jr = E((_d, A) => {
    var T = fl(), Pc = Kr(), kc = T.Readable.destroy;
    A.exports = T.Readable;
    A.exports._uint8ArrayToBuffer = T._uint8ArrayToBuffer;
    A.exports._isUint8Array = T._isUint8Array;
    A.exports.isDisturbed = T.isDisturbed;
    A.exports.isErrored = T.isErrored;
    A.exports.isReadable = T.isReadable;
    A.exports.Readable = T.Readable;
    A.exports.Writable = T.Writable;
    A.exports.Duplex = T.Duplex;
    A.exports.Transform = T.Transform;
    A.exports.PassThrough = T.PassThrough;
    A.exports.addAbortSignal = T.addAbortSignal;
    A.exports.finished = T.finished;
    A.exports.destroy = T.destroy;
    A.exports.destroy = kc;
    A.exports.pipeline = T.pipeline;
    A.exports.compose = T.compose;
    Object.defineProperty(T, "promises", { configurable: true, enumerable: true, get() {
      return Pc;
    } });
    A.exports.Stream = T.Stream;
    A.exports.default = A.exports;
  });
  Ze = {};
  Qr(Ze, { default: () => Uc });
  ue(Ze, rt(Jr()));
  Uc = rt(Jr());
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
});

// ../../node_modules/jszip/lib/support.js
var require_support = __commonJS((exports) => {
  exports.base64 = true;
  exports.array = true;
  exports.string = true;
  exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
  exports.nodebuffer = typeof Buffer !== "undefined";
  exports.uint8array = typeof Uint8Array !== "undefined";
  if (typeof ArrayBuffer === "undefined") {
    exports.blob = false;
  } else {
    buffer = new ArrayBuffer(0);
    try {
      exports.blob = new Blob([buffer], {
        type: "application/zip"
      }).size === 0;
    } catch (e) {
      try {
        Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
        builder = new Builder;
        builder.append(buffer);
        exports.blob = builder.getBlob("application/zip").size === 0;
      } catch (e2) {
        exports.blob = false;
      }
    }
  }
  var buffer;
  var Builder;
  var builder;
  try {
    exports.nodestream = !!(init_stream(), __toCommonJS(exports_stream)).Readable;
  } catch (e) {
    exports.nodestream = false;
  }
});

// ../../node_modules/jszip/lib/base64.js
var require_base64 = __commonJS((exports) => {
  var utils = require_utils();
  var support = require_support();
  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  exports.encode = function(input) {
    var output = [];
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0, len = input.length, remainingBytes = len;
    var isArray = utils.getTypeOf(input) !== "string";
    while (i < input.length) {
      remainingBytes = len - i;
      if (!isArray) {
        chr1 = input.charCodeAt(i++);
        chr2 = i < len ? input.charCodeAt(i++) : 0;
        chr3 = i < len ? input.charCodeAt(i++) : 0;
      } else {
        chr1 = input[i++];
        chr2 = i < len ? input[i++] : 0;
        chr3 = i < len ? input[i++] : 0;
      }
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = remainingBytes > 1 ? (chr2 & 15) << 2 | chr3 >> 6 : 64;
      enc4 = remainingBytes > 2 ? chr3 & 63 : 64;
      output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));
    }
    return output.join("");
  };
  exports.decode = function(input) {
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0, resultIndex = 0;
    var dataUrlPrefix = "data:";
    if (input.substr(0, dataUrlPrefix.length) === dataUrlPrefix) {
      throw new Error("Invalid base64 input, it looks like a data url.");
    }
    input = input.replace(/[^A-Za-z0-9+/=]/g, "");
    var totalLength = input.length * 3 / 4;
    if (input.charAt(input.length - 1) === _keyStr.charAt(64)) {
      totalLength--;
    }
    if (input.charAt(input.length - 2) === _keyStr.charAt(64)) {
      totalLength--;
    }
    if (totalLength % 1 !== 0) {
      throw new Error("Invalid base64 input, bad content length.");
    }
    var output;
    if (support.uint8array) {
      output = new Uint8Array(totalLength | 0);
    } else {
      output = new Array(totalLength | 0);
    }
    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output[resultIndex++] = chr1;
      if (enc3 !== 64) {
        output[resultIndex++] = chr2;
      }
      if (enc4 !== 64) {
        output[resultIndex++] = chr3;
      }
    }
    return output;
  };
});

// ../../node_modules/jszip/lib/nodejsUtils.js
var require_nodejsUtils = __commonJS((exports, module) => {
  module.exports = {
    isNode: typeof Buffer !== "undefined",
    newBufferFrom: function(data, encoding) {
      if (Buffer.from && Buffer.from !== Uint8Array.from) {
        return Buffer.from(data, encoding);
      } else {
        if (typeof data === "number") {
          throw new Error("The \"data\" argument must not be a number");
        }
        return new Buffer(data, encoding);
      }
    },
    allocBuffer: function(size) {
      if (Buffer.alloc) {
        return Buffer.alloc(size);
      } else {
        var buf = new Buffer(size);
        buf.fill(0);
        return buf;
      }
    },
    isBuffer: function(b) {
      return Buffer.isBuffer(b);
    },
    isStream: function(obj) {
      return obj && typeof obj.on === "function" && typeof obj.pause === "function" && typeof obj.resume === "function";
    }
  };
});

// ../../node_modules/immediate/lib/browser.js
var require_browser = __commonJS((exports, module) => {
  function nextTick() {
    draining = true;
    var i, oldQueue;
    var len = queue.length;
    while (len) {
      oldQueue = queue;
      queue = [];
      i = -1;
      while (++i < len) {
        oldQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }
  function immediate(task) {
    if (queue.push(task) === 1 && !draining) {
      scheduleDrain();
    }
  }
  var Mutation = global.MutationObserver || global.WebKitMutationObserver;
  var scheduleDrain;
  {
    if (Mutation) {
      called = 0;
      observer = new Mutation(nextTick);
      element = global.document.createTextNode("");
      observer.observe(element, {
        characterData: true
      });
      scheduleDrain = function() {
        element.data = called = ++called % 2;
      };
    } else if (!global.setImmediate && typeof global.MessageChannel !== "undefined") {
      channel = new global.MessageChannel;
      channel.port1.onmessage = nextTick;
      scheduleDrain = function() {
        channel.port2.postMessage(0);
      };
    } else if ("document" in global && "onreadystatechange" in global.document.createElement("script")) {
      scheduleDrain = function() {
        var scriptEl = global.document.createElement("script");
        scriptEl.onreadystatechange = function() {
          nextTick();
          scriptEl.onreadystatechange = null;
          scriptEl.parentNode.removeChild(scriptEl);
          scriptEl = null;
        };
        global.document.documentElement.appendChild(scriptEl);
      };
    } else {
      scheduleDrain = function() {
        setTimeout(nextTick, 0);
      };
    }
  }
  var called;
  var observer;
  var element;
  var channel;
  var draining;
  var queue = [];
  module.exports = immediate;
});

// ../../node_modules/lie/lib/browser.js
var require_browser2 = __commonJS((exports, module) => {
  function INTERNAL() {
  }
  function Promise2(resolver) {
    if (typeof resolver !== "function") {
      throw new TypeError("resolver must be a function");
    }
    this.state = PENDING;
    this.queue = [];
    this.outcome = undefined;
    if (resolver !== INTERNAL) {
      safelyResolveThenable(this, resolver);
    }
  }
  function QueueItem(promise, onFulfilled, onRejected) {
    this.promise = promise;
    if (typeof onFulfilled === "function") {
      this.onFulfilled = onFulfilled;
      this.callFulfilled = this.otherCallFulfilled;
    }
    if (typeof onRejected === "function") {
      this.onRejected = onRejected;
      this.callRejected = this.otherCallRejected;
    }
  }
  function unwrap(promise, func, value) {
    immediate(function() {
      var returnValue;
      try {
        returnValue = func(value);
      } catch (e) {
        return handlers.reject(promise, e);
      }
      if (returnValue === promise) {
        handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
      } else {
        handlers.resolve(promise, returnValue);
      }
    });
  }
  function getThen(obj) {
    var then = obj && obj.then;
    if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
      return function appyThen() {
        then.apply(obj, arguments);
      };
    }
  }
  function safelyResolveThenable(self2, thenable) {
    var called = false;
    function onError(value) {
      if (called) {
        return;
      }
      called = true;
      handlers.reject(self2, value);
    }
    function onSuccess(value) {
      if (called) {
        return;
      }
      called = true;
      handlers.resolve(self2, value);
    }
    function tryToUnwrap() {
      thenable(onSuccess, onError);
    }
    var result = tryCatch(tryToUnwrap);
    if (result.status === "error") {
      onError(result.value);
    }
  }
  function tryCatch(func, value) {
    var out = {};
    try {
      out.value = func(value);
      out.status = "success";
    } catch (e) {
      out.status = "error";
      out.value = e;
    }
    return out;
  }
  function resolve(value) {
    if (value instanceof this) {
      return value;
    }
    return handlers.resolve(new this(INTERNAL), value);
  }
  function reject(reason) {
    var promise = new this(INTERNAL);
    return handlers.reject(promise, reason);
  }
  function all(iterable) {
    var self2 = this;
    if (Object.prototype.toString.call(iterable) !== "[object Array]") {
      return this.reject(new TypeError("must be an array"));
    }
    var len = iterable.length;
    var called = false;
    if (!len) {
      return this.resolve([]);
    }
    var values = new Array(len);
    var resolved = 0;
    var i = -1;
    var promise = new this(INTERNAL);
    while (++i < len) {
      allResolver(iterable[i], i);
    }
    return promise;
    function allResolver(value, i2) {
      self2.resolve(value).then(resolveFromAll, function(error) {
        if (!called) {
          called = true;
          handlers.reject(promise, error);
        }
      });
      function resolveFromAll(outValue) {
        values[i2] = outValue;
        if (++resolved === len && !called) {
          called = true;
          handlers.resolve(promise, values);
        }
      }
    }
  }
  function race(iterable) {
    var self2 = this;
    if (Object.prototype.toString.call(iterable) !== "[object Array]") {
      return this.reject(new TypeError("must be an array"));
    }
    var len = iterable.length;
    var called = false;
    if (!len) {
      return this.resolve([]);
    }
    var i = -1;
    var promise = new this(INTERNAL);
    while (++i < len) {
      resolver(iterable[i]);
    }
    return promise;
    function resolver(value) {
      self2.resolve(value).then(function(response) {
        if (!called) {
          called = true;
          handlers.resolve(promise, response);
        }
      }, function(error) {
        if (!called) {
          called = true;
          handlers.reject(promise, error);
        }
      });
    }
  }
  var immediate = require_browser();
  var handlers = {};
  var REJECTED = ["REJECTED"];
  var FULFILLED = ["FULFILLED"];
  var PENDING = ["PENDING"];
  module.exports = Promise2;
  Promise2.prototype["finally"] = function(callback) {
    if (typeof callback !== "function") {
      return this;
    }
    var p = this.constructor;
    return this.then(resolve2, reject2);
    function resolve2(value) {
      function yes() {
        return value;
      }
      return p.resolve(callback()).then(yes);
    }
    function reject2(reason) {
      function no() {
        throw reason;
      }
      return p.resolve(callback()).then(no);
    }
  };
  Promise2.prototype["catch"] = function(onRejected) {
    return this.then(null, onRejected);
  };
  Promise2.prototype.then = function(onFulfilled, onRejected) {
    if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
      return this;
    }
    var promise = new this.constructor(INTERNAL);
    if (this.state !== PENDING) {
      var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
      unwrap(promise, resolver, this.outcome);
    } else {
      this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
    }
    return promise;
  };
  QueueItem.prototype.callFulfilled = function(value) {
    handlers.resolve(this.promise, value);
  };
  QueueItem.prototype.otherCallFulfilled = function(value) {
    unwrap(this.promise, this.onFulfilled, value);
  };
  QueueItem.prototype.callRejected = function(value) {
    handlers.reject(this.promise, value);
  };
  QueueItem.prototype.otherCallRejected = function(value) {
    unwrap(this.promise, this.onRejected, value);
  };
  handlers.resolve = function(self2, value) {
    var result = tryCatch(getThen, value);
    if (result.status === "error") {
      return handlers.reject(self2, result.value);
    }
    var thenable = result.value;
    if (thenable) {
      safelyResolveThenable(self2, thenable);
    } else {
      self2.state = FULFILLED;
      self2.outcome = value;
      var i = -1;
      var len = self2.queue.length;
      while (++i < len) {
        self2.queue[i].callFulfilled(value);
      }
    }
    return self2;
  };
  handlers.reject = function(self2, error) {
    self2.state = REJECTED;
    self2.outcome = error;
    var i = -1;
    var len = self2.queue.length;
    while (++i < len) {
      self2.queue[i].callRejected(error);
    }
    return self2;
  };
  Promise2.resolve = resolve;
  Promise2.reject = reject;
  Promise2.all = all;
  Promise2.race = race;
});

// ../../node_modules/jszip/lib/external.js
var require_external = __commonJS((exports, module) => {
  var ES6Promise = null;
  if (typeof Promise !== "undefined") {
    ES6Promise = Promise;
  } else {
    ES6Promise = require_browser2();
  }
  module.exports = {
    Promise: ES6Promise
  };
});

// ../../node_modules/setimmediate/setImmediate.js
var require_setImmediate = __commonJS((exports) => {
  (function(global2, undefined2) {
    if (global2.setImmediate) {
      return;
    }
    var nextHandle = 1;
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global2.document;
    var registerImmediate;
    function setImmediate2(callback) {
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      var args = new Array(arguments.length - 1);
      for (var i = 0;i < args.length; i++) {
        args[i] = arguments[i + 1];
      }
      var task = { callback, args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }
    function clearImmediate(handle) {
      delete tasksByHandle[handle];
    }
    function run(task) {
      var callback = task.callback;
      var args = task.args;
      switch (args.length) {
        case 0:
          callback();
          break;
        case 1:
          callback(args[0]);
          break;
        case 2:
          callback(args[0], args[1]);
          break;
        case 3:
          callback(args[0], args[1], args[2]);
          break;
        default:
          callback.apply(undefined2, args);
          break;
      }
    }
    function runIfPresent(handle) {
      if (currentlyRunningATask) {
        setTimeout(runIfPresent, 0, handle);
      } else {
        var task = tasksByHandle[handle];
        if (task) {
          currentlyRunningATask = true;
          try {
            run(task);
          } finally {
            clearImmediate(handle);
            currentlyRunningATask = false;
          }
        }
      }
    }
    function installNextTickImplementation() {
      registerImmediate = function(handle) {
        process.nextTick(function() {
          runIfPresent(handle);
        });
      };
    }
    function canUsePostMessage() {
      if (global2.postMessage && !global2.importScripts) {
        var postMessageIsAsynchronous = true;
        var oldOnMessage = global2.onmessage;
        global2.onmessage = function() {
          postMessageIsAsynchronous = false;
        };
        global2.postMessage("", "*");
        global2.onmessage = oldOnMessage;
        return postMessageIsAsynchronous;
      }
    }
    function installPostMessageImplementation() {
      var messagePrefix = "setImmediate$" + Math.random() + "$";
      var onGlobalMessage = function(event) {
        if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
          runIfPresent(+event.data.slice(messagePrefix.length));
        }
      };
      if (global2.addEventListener) {
        global2.addEventListener("message", onGlobalMessage, false);
      } else {
        global2.attachEvent("onmessage", onGlobalMessage);
      }
      registerImmediate = function(handle) {
        global2.postMessage(messagePrefix + handle, "*");
      };
    }
    function installMessageChannelImplementation() {
      var channel = new MessageChannel;
      channel.port1.onmessage = function(event) {
        var handle = event.data;
        runIfPresent(handle);
      };
      registerImmediate = function(handle) {
        channel.port2.postMessage(handle);
      };
    }
    function installReadyStateChangeImplementation() {
      var html = doc.documentElement;
      registerImmediate = function(handle) {
        var script = doc.createElement("script");
        script.onreadystatechange = function() {
          runIfPresent(handle);
          script.onreadystatechange = null;
          html.removeChild(script);
          script = null;
        };
        html.appendChild(script);
      };
    }
    function installSetTimeoutImplementation() {
      registerImmediate = function(handle) {
        setTimeout(runIfPresent, 0, handle);
      };
    }
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
    if ({}.toString.call(global2.process) === "[object process]") {
      installNextTickImplementation();
    } else if (canUsePostMessage()) {
      installPostMessageImplementation();
    } else if (global2.MessageChannel) {
      installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
      installReadyStateChangeImplementation();
    } else {
      installSetTimeoutImplementation();
    }
    attachTo.setImmediate = setImmediate2;
    attachTo.clearImmediate = clearImmediate;
  })(typeof self === "undefined" ? typeof global === "undefined" ? exports : global : self);
});

// ../../node_modules/jszip/lib/utils.js
var require_utils = __commonJS((exports) => {
  function string2binary(str) {
    var result = null;
    if (support.uint8array) {
      result = new Uint8Array(str.length);
    } else {
      result = new Array(str.length);
    }
    return stringToArrayLike(str, result);
  }
  function identity(input) {
    return input;
  }
  function stringToArrayLike(str, array) {
    for (var i = 0;i < str.length; ++i) {
      array[i] = str.charCodeAt(i) & 255;
    }
    return array;
  }
  function arrayLikeToString(array) {
    var chunk = 65536, type = exports.getTypeOf(array), canUseApply = true;
    if (type === "uint8array") {
      canUseApply = arrayToStringHelper.applyCanBeUsed.uint8array;
    } else if (type === "nodebuffer") {
      canUseApply = arrayToStringHelper.applyCanBeUsed.nodebuffer;
    }
    if (canUseApply) {
      while (chunk > 1) {
        try {
          return arrayToStringHelper.stringifyByChunk(array, type, chunk);
        } catch (e) {
          chunk = Math.floor(chunk / 2);
        }
      }
    }
    return arrayToStringHelper.stringifyByChar(array);
  }
  function arrayLikeToArrayLike(arrayFrom, arrayTo) {
    for (var i = 0;i < arrayFrom.length; i++) {
      arrayTo[i] = arrayFrom[i];
    }
    return arrayTo;
  }
  var support = require_support();
  var base64 = require_base64();
  var nodejsUtils = require_nodejsUtils();
  var external = require_external();
  require_setImmediate();
  exports.newBlob = function(part, type) {
    exports.checkSupport("blob");
    try {
      return new Blob([part], {
        type
      });
    } catch (e) {
      try {
        var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
        var builder = new Builder;
        builder.append(part);
        return builder.getBlob(type);
      } catch (e2) {
        throw new Error("Bug : can't construct the Blob.");
      }
    }
  };
  var arrayToStringHelper = {
    stringifyByChunk: function(array, type, chunk) {
      var result = [], k2 = 0, len = array.length;
      if (len <= chunk) {
        return String.fromCharCode.apply(null, array);
      }
      while (k2 < len) {
        if (type === "array" || type === "nodebuffer") {
          result.push(String.fromCharCode.apply(null, array.slice(k2, Math.min(k2 + chunk, len))));
        } else {
          result.push(String.fromCharCode.apply(null, array.subarray(k2, Math.min(k2 + chunk, len))));
        }
        k2 += chunk;
      }
      return result.join("");
    },
    stringifyByChar: function(array) {
      var resultStr = "";
      for (var i = 0;i < array.length; i++) {
        resultStr += String.fromCharCode(array[i]);
      }
      return resultStr;
    },
    applyCanBeUsed: {
      uint8array: function() {
        try {
          return support.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch (e) {
          return false;
        }
      }(),
      nodebuffer: function() {
        try {
          return support.nodebuffer && String.fromCharCode.apply(null, nodejsUtils.allocBuffer(1)).length === 1;
        } catch (e) {
          return false;
        }
      }()
    }
  };
  exports.applyFromCharCode = arrayLikeToString;
  var transform = {};
  transform["string"] = {
    string: identity,
    array: function(input) {
      return stringToArrayLike(input, new Array(input.length));
    },
    arraybuffer: function(input) {
      return transform["string"]["uint8array"](input).buffer;
    },
    uint8array: function(input) {
      return stringToArrayLike(input, new Uint8Array(input.length));
    },
    nodebuffer: function(input) {
      return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
    }
  };
  transform["array"] = {
    string: arrayLikeToString,
    array: identity,
    arraybuffer: function(input) {
      return new Uint8Array(input).buffer;
    },
    uint8array: function(input) {
      return new Uint8Array(input);
    },
    nodebuffer: function(input) {
      return nodejsUtils.newBufferFrom(input);
    }
  };
  transform["arraybuffer"] = {
    string: function(input) {
      return arrayLikeToString(new Uint8Array(input));
    },
    array: function(input) {
      return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
    },
    arraybuffer: identity,
    uint8array: function(input) {
      return new Uint8Array(input);
    },
    nodebuffer: function(input) {
      return nodejsUtils.newBufferFrom(new Uint8Array(input));
    }
  };
  transform["uint8array"] = {
    string: arrayLikeToString,
    array: function(input) {
      return arrayLikeToArrayLike(input, new Array(input.length));
    },
    arraybuffer: function(input) {
      return input.buffer;
    },
    uint8array: identity,
    nodebuffer: function(input) {
      return nodejsUtils.newBufferFrom(input);
    }
  };
  transform["nodebuffer"] = {
    string: arrayLikeToString,
    array: function(input) {
      return arrayLikeToArrayLike(input, new Array(input.length));
    },
    arraybuffer: function(input) {
      return transform["nodebuffer"]["uint8array"](input).buffer;
    },
    uint8array: function(input) {
      return arrayLikeToArrayLike(input, new Uint8Array(input.length));
    },
    nodebuffer: identity
  };
  exports.transformTo = function(outputType, input) {
    if (!input) {
      input = "";
    }
    if (!outputType) {
      return input;
    }
    exports.checkSupport(outputType);
    var inputType = exports.getTypeOf(input);
    var result = transform[inputType][outputType](input);
    return result;
  };
  exports.resolve = function(path) {
    var parts = path.split("/");
    var result = [];
    for (var index = 0;index < parts.length; index++) {
      var part = parts[index];
      if (part === "." || part === "" && index !== 0 && index !== parts.length - 1) {
        continue;
      } else if (part === "..") {
        result.pop();
      } else {
        result.push(part);
      }
    }
    return result.join("/");
  };
  exports.getTypeOf = function(input) {
    if (typeof input === "string") {
      return "string";
    }
    if (Object.prototype.toString.call(input) === "[object Array]") {
      return "array";
    }
    if (support.nodebuffer && nodejsUtils.isBuffer(input)) {
      return "nodebuffer";
    }
    if (support.uint8array && input instanceof Uint8Array) {
      return "uint8array";
    }
    if (support.arraybuffer && input instanceof ArrayBuffer) {
      return "arraybuffer";
    }
  };
  exports.checkSupport = function(type) {
    var supported = support[type.toLowerCase()];
    if (!supported) {
      throw new Error(type + " is not supported by this platform");
    }
  };
  exports.MAX_VALUE_16BITS = 65535;
  exports.MAX_VALUE_32BITS = -1;
  exports.pretty = function(str) {
    var res = "", code, i;
    for (i = 0;i < (str || "").length; i++) {
      code = str.charCodeAt(i);
      res += "\\x" + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
    }
    return res;
  };
  exports.delay = function(callback, args, self2) {
    setImmediate(function() {
      callback.apply(self2 || null, args || []);
    });
  };
  exports.inherits = function(ctor, superCtor) {
    var Obj = function() {
    };
    Obj.prototype = superCtor.prototype;
    ctor.prototype = new Obj;
  };
  exports.extend = function() {
    var result = {}, i, attr;
    for (i = 0;i < arguments.length; i++) {
      for (attr in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], attr) && typeof result[attr] === "undefined") {
          result[attr] = arguments[i][attr];
        }
      }
    }
    return result;
  };
  exports.prepareContent = function(name, inputData, isBinary, isOptimizedBinaryString, isBase64) {
    var promise = external.Promise.resolve(inputData).then(function(data) {
      var isBlob = support.blob && (data instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(data)) !== -1);
      if (isBlob && typeof FileReader !== "undefined") {
        return new external.Promise(function(resolve, reject) {
          var reader = new FileReader;
          reader.onload = function(e) {
            resolve(e.target.result);
          };
          reader.onerror = function(e) {
            reject(e.target.error);
          };
          reader.readAsArrayBuffer(data);
        });
      } else {
        return data;
      }
    });
    return promise.then(function(data) {
      var dataType = exports.getTypeOf(data);
      if (!dataType) {
        return external.Promise.reject(new Error("Can't read the data of '" + name + "'. Is it " + "in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
      }
      if (dataType === "arraybuffer") {
        data = exports.transformTo("uint8array", data);
      } else if (dataType === "string") {
        if (isBase64) {
          data = base64.decode(data);
        } else if (isBinary) {
          if (isOptimizedBinaryString !== true) {
            data = string2binary(data);
          }
        }
      }
      return data;
    });
  };
});

// ../../node_modules/jszip/lib/stream/GenericWorker.js
var require_GenericWorker = __commonJS((exports, module) => {
  function GenericWorker(name) {
    this.name = name || "default";
    this.streamInfo = {};
    this.generatedError = null;
    this.extraStreamInfo = {};
    this.isPaused = true;
    this.isFinished = false;
    this.isLocked = false;
    this._listeners = {
      data: [],
      end: [],
      error: []
    };
    this.previous = null;
  }
  GenericWorker.prototype = {
    push: function(chunk) {
      this.emit("data", chunk);
    },
    end: function() {
      if (this.isFinished) {
        return false;
      }
      this.flush();
      try {
        this.emit("end");
        this.cleanUp();
        this.isFinished = true;
      } catch (e) {
        this.emit("error", e);
      }
      return true;
    },
    error: function(e) {
      if (this.isFinished) {
        return false;
      }
      if (this.isPaused) {
        this.generatedError = e;
      } else {
        this.isFinished = true;
        this.emit("error", e);
        if (this.previous) {
          this.previous.error(e);
        }
        this.cleanUp();
      }
      return true;
    },
    on: function(name, listener) {
      this._listeners[name].push(listener);
      return this;
    },
    cleanUp: function() {
      this.streamInfo = this.generatedError = this.extraStreamInfo = null;
      this._listeners = [];
    },
    emit: function(name, arg) {
      if (this._listeners[name]) {
        for (var i = 0;i < this._listeners[name].length; i++) {
          this._listeners[name][i].call(this, arg);
        }
      }
    },
    pipe: function(next) {
      return next.registerPrevious(this);
    },
    registerPrevious: function(previous) {
      if (this.isLocked) {
        throw new Error("The stream '" + this + "' has already been used.");
      }
      this.streamInfo = previous.streamInfo;
      this.mergeStreamInfo();
      this.previous = previous;
      var self2 = this;
      previous.on("data", function(chunk) {
        self2.processChunk(chunk);
      });
      previous.on("end", function() {
        self2.end();
      });
      previous.on("error", function(e) {
        self2.error(e);
      });
      return this;
    },
    pause: function() {
      if (this.isPaused || this.isFinished) {
        return false;
      }
      this.isPaused = true;
      if (this.previous) {
        this.previous.pause();
      }
      return true;
    },
    resume: function() {
      if (!this.isPaused || this.isFinished) {
        return false;
      }
      this.isPaused = false;
      var withError = false;
      if (this.generatedError) {
        this.error(this.generatedError);
        withError = true;
      }
      if (this.previous) {
        this.previous.resume();
      }
      return !withError;
    },
    flush: function() {
    },
    processChunk: function(chunk) {
      this.push(chunk);
    },
    withStreamInfo: function(key, value) {
      this.extraStreamInfo[key] = value;
      this.mergeStreamInfo();
      return this;
    },
    mergeStreamInfo: function() {
      for (var key in this.extraStreamInfo) {
        if (!Object.prototype.hasOwnProperty.call(this.extraStreamInfo, key)) {
          continue;
        }
        this.streamInfo[key] = this.extraStreamInfo[key];
      }
    },
    lock: function() {
      if (this.isLocked) {
        throw new Error("The stream '" + this + "' has already been used.");
      }
      this.isLocked = true;
      if (this.previous) {
        this.previous.lock();
      }
    },
    toString: function() {
      var me = "Worker " + this.name;
      if (this.previous) {
        return this.previous + " -> " + me;
      } else {
        return me;
      }
    }
  };
  module.exports = GenericWorker;
});

// ../../node_modules/jszip/lib/utf8.js
var require_utf8 = __commonJS((exports) => {
  function Utf8DecodeWorker() {
    GenericWorker.call(this, "utf-8 decode");
    this.leftOver = null;
  }
  function Utf8EncodeWorker() {
    GenericWorker.call(this, "utf-8 encode");
  }
  var utils = require_utils();
  var support = require_support();
  var nodejsUtils = require_nodejsUtils();
  var GenericWorker = require_GenericWorker();
  var _utf8len = new Array(256);
  for (i = 0;i < 256; i++) {
    _utf8len[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
  }
  var i;
  _utf8len[254] = _utf8len[254] = 1;
  var string2buf = function(str) {
    var buf, c, c2, m_pos, i2, str_len = str.length, buf_len = 0;
    for (m_pos = 0;m_pos < str_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 64512) === 56320) {
          c = 65536 + (c - 55296 << 10) + (c2 - 56320);
          m_pos++;
        }
      }
      buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
    }
    if (support.uint8array) {
      buf = new Uint8Array(buf_len);
    } else {
      buf = new Array(buf_len);
    }
    for (i2 = 0, m_pos = 0;i2 < buf_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 64512) === 56320) {
          c = 65536 + (c - 55296 << 10) + (c2 - 56320);
          m_pos++;
        }
      }
      if (c < 128) {
        buf[i2++] = c;
      } else if (c < 2048) {
        buf[i2++] = 192 | c >>> 6;
        buf[i2++] = 128 | c & 63;
      } else if (c < 65536) {
        buf[i2++] = 224 | c >>> 12;
        buf[i2++] = 128 | c >>> 6 & 63;
        buf[i2++] = 128 | c & 63;
      } else {
        buf[i2++] = 240 | c >>> 18;
        buf[i2++] = 128 | c >>> 12 & 63;
        buf[i2++] = 128 | c >>> 6 & 63;
        buf[i2++] = 128 | c & 63;
      }
    }
    return buf;
  };
  var utf8border = function(buf, max) {
    var pos;
    max = max || buf.length;
    if (max > buf.length) {
      max = buf.length;
    }
    pos = max - 1;
    while (pos >= 0 && (buf[pos] & 192) === 128) {
      pos--;
    }
    if (pos < 0) {
      return max;
    }
    if (pos === 0) {
      return max;
    }
    return pos + _utf8len[buf[pos]] > max ? pos : max;
  };
  var buf2string = function(buf) {
    var i2, out, c, c_len;
    var len = buf.length;
    var utf16buf = new Array(len * 2);
    for (out = 0, i2 = 0;i2 < len; ) {
      c = buf[i2++];
      if (c < 128) {
        utf16buf[out++] = c;
        continue;
      }
      c_len = _utf8len[c];
      if (c_len > 4) {
        utf16buf[out++] = 65533;
        i2 += c_len - 1;
        continue;
      }
      c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
      while (c_len > 1 && i2 < len) {
        c = c << 6 | buf[i2++] & 63;
        c_len--;
      }
      if (c_len > 1) {
        utf16buf[out++] = 65533;
        continue;
      }
      if (c < 65536) {
        utf16buf[out++] = c;
      } else {
        c -= 65536;
        utf16buf[out++] = 55296 | c >> 10 & 1023;
        utf16buf[out++] = 56320 | c & 1023;
      }
    }
    if (utf16buf.length !== out) {
      if (utf16buf.subarray) {
        utf16buf = utf16buf.subarray(0, out);
      } else {
        utf16buf.length = out;
      }
    }
    return utils.applyFromCharCode(utf16buf);
  };
  exports.utf8encode = function utf8encode(str) {
    if (support.nodebuffer) {
      return nodejsUtils.newBufferFrom(str, "utf-8");
    }
    return string2buf(str);
  };
  exports.utf8decode = function utf8decode(buf) {
    if (support.nodebuffer) {
      return utils.transformTo("nodebuffer", buf).toString("utf-8");
    }
    buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);
    return buf2string(buf);
  };
  utils.inherits(Utf8DecodeWorker, GenericWorker);
  Utf8DecodeWorker.prototype.processChunk = function(chunk) {
    var data = utils.transformTo(support.uint8array ? "uint8array" : "array", chunk.data);
    if (this.leftOver && this.leftOver.length) {
      if (support.uint8array) {
        var previousData = data;
        data = new Uint8Array(previousData.length + this.leftOver.length);
        data.set(this.leftOver, 0);
        data.set(previousData, this.leftOver.length);
      } else {
        data = this.leftOver.concat(data);
      }
      this.leftOver = null;
    }
    var nextBoundary = utf8border(data);
    var usableData = data;
    if (nextBoundary !== data.length) {
      if (support.uint8array) {
        usableData = data.subarray(0, nextBoundary);
        this.leftOver = data.subarray(nextBoundary, data.length);
      } else {
        usableData = data.slice(0, nextBoundary);
        this.leftOver = data.slice(nextBoundary, data.length);
      }
    }
    this.push({
      data: exports.utf8decode(usableData),
      meta: chunk.meta
    });
  };
  Utf8DecodeWorker.prototype.flush = function() {
    if (this.leftOver && this.leftOver.length) {
      this.push({
        data: exports.utf8decode(this.leftOver),
        meta: {}
      });
      this.leftOver = null;
    }
  };
  exports.Utf8DecodeWorker = Utf8DecodeWorker;
  utils.inherits(Utf8EncodeWorker, GenericWorker);
  Utf8EncodeWorker.prototype.processChunk = function(chunk) {
    this.push({
      data: exports.utf8encode(chunk.data),
      meta: chunk.meta
    });
  };
  exports.Utf8EncodeWorker = Utf8EncodeWorker;
});

// ../../node_modules/jszip/lib/stream/ConvertWorker.js
var require_ConvertWorker = __commonJS((exports, module) => {
  function ConvertWorker(destType) {
    GenericWorker.call(this, "ConvertWorker to " + destType);
    this.destType = destType;
  }
  var GenericWorker = require_GenericWorker();
  var utils = require_utils();
  utils.inherits(ConvertWorker, GenericWorker);
  ConvertWorker.prototype.processChunk = function(chunk) {
    this.push({
      data: utils.transformTo(this.destType, chunk.data),
      meta: chunk.meta
    });
  };
  module.exports = ConvertWorker;
});

// ../../node_modules/jszip/lib/nodejs/NodejsStreamOutputAdapter.js
var require_NodejsStreamOutputAdapter = __commonJS((exports, module) => {
  function NodejsStreamOutputAdapter(helper, options, updateCb) {
    Readable.call(this, options);
    this._helper = helper;
    var self2 = this;
    helper.on("data", function(data, meta) {
      if (!self2.push(data)) {
        self2._helper.pause();
      }
      if (updateCb) {
        updateCb(meta);
      }
    }).on("error", function(e) {
      self2.emit("error", e);
    }).on("end", function() {
      self2.push(null);
    });
  }
  var Readable = (init_stream(), __toCommonJS(exports_stream)).Readable;
  var utils = require_utils();
  utils.inherits(NodejsStreamOutputAdapter, Readable);
  NodejsStreamOutputAdapter.prototype._read = function() {
    this._helper.resume();
  };
  module.exports = NodejsStreamOutputAdapter;
});

// ../../node_modules/jszip/lib/stream/StreamHelper.js
var require_StreamHelper = __commonJS((exports, module) => {
  function transformZipOutput(type, content, mimeType) {
    switch (type) {
      case "blob":
        return utils.newBlob(utils.transformTo("arraybuffer", content), mimeType);
      case "base64":
        return base64.encode(content);
      default:
        return utils.transformTo(type, content);
    }
  }
  function concat(type, dataArray) {
    var i, index = 0, res = null, totalLength = 0;
    for (i = 0;i < dataArray.length; i++) {
      totalLength += dataArray[i].length;
    }
    switch (type) {
      case "string":
        return dataArray.join("");
      case "array":
        return Array.prototype.concat.apply([], dataArray);
      case "uint8array":
        res = new Uint8Array(totalLength);
        for (i = 0;i < dataArray.length; i++) {
          res.set(dataArray[i], index);
          index += dataArray[i].length;
        }
        return res;
      case "nodebuffer":
        return Buffer.concat(dataArray);
      default:
        throw new Error("concat : unsupported type '" + type + "'");
    }
  }
  function accumulate(helper, updateCallback) {
    return new external.Promise(function(resolve, reject) {
      var dataArray = [];
      var { _internalType: chunkType, _outputType: resultType, _mimeType: mimeType } = helper;
      helper.on("data", function(data, meta) {
        dataArray.push(data);
        if (updateCallback) {
          updateCallback(meta);
        }
      }).on("error", function(err) {
        dataArray = [];
        reject(err);
      }).on("end", function() {
        try {
          var result = transformZipOutput(resultType, concat(chunkType, dataArray), mimeType);
          resolve(result);
        } catch (e) {
          reject(e);
        }
        dataArray = [];
      }).resume();
    });
  }
  function StreamHelper(worker, outputType, mimeType) {
    var internalType = outputType;
    switch (outputType) {
      case "blob":
      case "arraybuffer":
        internalType = "uint8array";
        break;
      case "base64":
        internalType = "string";
        break;
    }
    try {
      this._internalType = internalType;
      this._outputType = outputType;
      this._mimeType = mimeType;
      utils.checkSupport(internalType);
      this._worker = worker.pipe(new ConvertWorker(internalType));
      worker.lock();
    } catch (e) {
      this._worker = new GenericWorker("error");
      this._worker.error(e);
    }
  }
  var utils = require_utils();
  var ConvertWorker = require_ConvertWorker();
  var GenericWorker = require_GenericWorker();
  var base64 = require_base64();
  var support = require_support();
  var external = require_external();
  var NodejsStreamOutputAdapter = null;
  if (support.nodestream) {
    try {
      NodejsStreamOutputAdapter = require_NodejsStreamOutputAdapter();
    } catch (e) {
    }
  }
  StreamHelper.prototype = {
    accumulate: function(updateCb) {
      return accumulate(this, updateCb);
    },
    on: function(evt, fn) {
      var self2 = this;
      if (evt === "data") {
        this._worker.on(evt, function(chunk) {
          fn.call(self2, chunk.data, chunk.meta);
        });
      } else {
        this._worker.on(evt, function() {
          utils.delay(fn, arguments, self2);
        });
      }
      return this;
    },
    resume: function() {
      utils.delay(this._worker.resume, [], this._worker);
      return this;
    },
    pause: function() {
      this._worker.pause();
      return this;
    },
    toNodejsStream: function(updateCb) {
      utils.checkSupport("nodestream");
      if (this._outputType !== "nodebuffer") {
        throw new Error(this._outputType + " is not supported by this method");
      }
      return new NodejsStreamOutputAdapter(this, {
        objectMode: this._outputType !== "nodebuffer"
      }, updateCb);
    }
  };
  module.exports = StreamHelper;
});

// ../../node_modules/jszip/lib/defaults.js
var require_defaults = __commonJS((exports) => {
  exports.base64 = false;
  exports.binary = false;
  exports.dir = false;
  exports.createFolders = true;
  exports.date = null;
  exports.compression = null;
  exports.compressionOptions = null;
  exports.comment = null;
  exports.unixPermissions = null;
  exports.dosPermissions = null;
});

// ../../node_modules/jszip/lib/stream/DataWorker.js
var require_DataWorker = __commonJS((exports, module) => {
  function DataWorker(dataP) {
    GenericWorker.call(this, "DataWorker");
    var self2 = this;
    this.dataIsReady = false;
    this.index = 0;
    this.max = 0;
    this.data = null;
    this.type = "";
    this._tickScheduled = false;
    dataP.then(function(data) {
      self2.dataIsReady = true;
      self2.data = data;
      self2.max = data && data.length || 0;
      self2.type = utils.getTypeOf(data);
      if (!self2.isPaused) {
        self2._tickAndRepeat();
      }
    }, function(e) {
      self2.error(e);
    });
  }
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  var DEFAULT_BLOCK_SIZE = 16 * 1024;
  utils.inherits(DataWorker, GenericWorker);
  DataWorker.prototype.cleanUp = function() {
    GenericWorker.prototype.cleanUp.call(this);
    this.data = null;
  };
  DataWorker.prototype.resume = function() {
    if (!GenericWorker.prototype.resume.call(this)) {
      return false;
    }
    if (!this._tickScheduled && this.dataIsReady) {
      this._tickScheduled = true;
      utils.delay(this._tickAndRepeat, [], this);
    }
    return true;
  };
  DataWorker.prototype._tickAndRepeat = function() {
    this._tickScheduled = false;
    if (this.isPaused || this.isFinished) {
      return;
    }
    this._tick();
    if (!this.isFinished) {
      utils.delay(this._tickAndRepeat, [], this);
      this._tickScheduled = true;
    }
  };
  DataWorker.prototype._tick = function() {
    if (this.isPaused || this.isFinished) {
      return false;
    }
    var size = DEFAULT_BLOCK_SIZE;
    var data = null, nextIndex = Math.min(this.max, this.index + size);
    if (this.index >= this.max) {
      return this.end();
    } else {
      switch (this.type) {
        case "string":
          data = this.data.substring(this.index, nextIndex);
          break;
        case "uint8array":
          data = this.data.subarray(this.index, nextIndex);
          break;
        case "array":
        case "nodebuffer":
          data = this.data.slice(this.index, nextIndex);
          break;
      }
      this.index = nextIndex;
      return this.push({
        data,
        meta: {
          percent: this.max ? this.index / this.max * 100 : 0
        }
      });
    }
  };
  module.exports = DataWorker;
});

// ../../node_modules/jszip/lib/crc32.js
var require_crc32 = __commonJS((exports, module) => {
  function makeTable() {
    var c, table = [];
    for (var n = 0;n < 256; n++) {
      c = n;
      for (var k2 = 0;k2 < 8; k2++) {
        c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
      }
      table[n] = c;
    }
    return table;
  }
  function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;
    crc = crc ^ -1;
    for (var i = pos;i < end; i++) {
      crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
    }
    return crc ^ -1;
  }
  function crc32str(crc, str, len, pos) {
    var t = crcTable, end = pos + len;
    crc = crc ^ -1;
    for (var i = pos;i < end; i++) {
      crc = crc >>> 8 ^ t[(crc ^ str.charCodeAt(i)) & 255];
    }
    return crc ^ -1;
  }
  var utils = require_utils();
  var crcTable = makeTable();
  module.exports = function crc32wrapper(input, crc) {
    if (typeof input === "undefined" || !input.length) {
      return 0;
    }
    var isArray = utils.getTypeOf(input) !== "string";
    if (isArray) {
      return crc32(crc | 0, input, input.length, 0);
    } else {
      return crc32str(crc | 0, input, input.length, 0);
    }
  };
});

// ../../node_modules/jszip/lib/stream/Crc32Probe.js
var require_Crc32Probe = __commonJS((exports, module) => {
  function Crc32Probe() {
    GenericWorker.call(this, "Crc32Probe");
    this.withStreamInfo("crc32", 0);
  }
  var GenericWorker = require_GenericWorker();
  var crc32 = require_crc32();
  var utils = require_utils();
  utils.inherits(Crc32Probe, GenericWorker);
  Crc32Probe.prototype.processChunk = function(chunk) {
    this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
    this.push(chunk);
  };
  module.exports = Crc32Probe;
});

// ../../node_modules/jszip/lib/stream/DataLengthProbe.js
var require_DataLengthProbe = __commonJS((exports, module) => {
  function DataLengthProbe(propName) {
    GenericWorker.call(this, "DataLengthProbe for " + propName);
    this.propName = propName;
    this.withStreamInfo(propName, 0);
  }
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  utils.inherits(DataLengthProbe, GenericWorker);
  DataLengthProbe.prototype.processChunk = function(chunk) {
    if (chunk) {
      var length = this.streamInfo[this.propName] || 0;
      this.streamInfo[this.propName] = length + chunk.data.length;
    }
    GenericWorker.prototype.processChunk.call(this, chunk);
  };
  module.exports = DataLengthProbe;
});

// ../../node_modules/jszip/lib/compressedObject.js
var require_compressedObject = __commonJS((exports, module) => {
  function CompressedObject(compressedSize, uncompressedSize, crc32, compression, data) {
    this.compressedSize = compressedSize;
    this.uncompressedSize = uncompressedSize;
    this.crc32 = crc32;
    this.compression = compression;
    this.compressedContent = data;
  }
  var external = require_external();
  var DataWorker = require_DataWorker();
  var Crc32Probe = require_Crc32Probe();
  var DataLengthProbe = require_DataLengthProbe();
  CompressedObject.prototype = {
    getContentWorker: function() {
      var worker = new DataWorker(external.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new DataLengthProbe("data_length"));
      var that = this;
      worker.on("end", function() {
        if (this.streamInfo["data_length"] !== that.uncompressedSize) {
          throw new Error("Bug : uncompressed data size mismatch");
        }
      });
      return worker;
    },
    getCompressedWorker: function() {
      return new DataWorker(external.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
    }
  };
  CompressedObject.createWorkerFrom = function(uncompressedWorker, compression, compressionOptions) {
    return uncompressedWorker.pipe(new Crc32Probe).pipe(new DataLengthProbe("uncompressedSize")).pipe(compression.compressWorker(compressionOptions)).pipe(new DataLengthProbe("compressedSize")).withStreamInfo("compression", compression);
  };
  module.exports = CompressedObject;
});

// ../../node_modules/jszip/lib/zipObject.js
var require_zipObject = __commonJS((exports, module) => {
  var StreamHelper = require_StreamHelper();
  var DataWorker = require_DataWorker();
  var utf8 = require_utf8();
  var CompressedObject = require_compressedObject();
  var GenericWorker = require_GenericWorker();
  var ZipObject = function(name, data, options) {
    this.name = name;
    this.dir = options.dir;
    this.date = options.date;
    this.comment = options.comment;
    this.unixPermissions = options.unixPermissions;
    this.dosPermissions = options.dosPermissions;
    this._data = data;
    this._dataBinary = options.binary;
    this.options = {
      compression: options.compression,
      compressionOptions: options.compressionOptions
    };
  };
  ZipObject.prototype = {
    internalStream: function(type) {
      var result = null, outputType = "string";
      try {
        if (!type) {
          throw new Error("No output type specified.");
        }
        outputType = type.toLowerCase();
        var askUnicodeString = outputType === "string" || outputType === "text";
        if (outputType === "binarystring" || outputType === "text") {
          outputType = "string";
        }
        result = this._decompressWorker();
        var isUnicodeString = !this._dataBinary;
        if (isUnicodeString && !askUnicodeString) {
          result = result.pipe(new utf8.Utf8EncodeWorker);
        }
        if (!isUnicodeString && askUnicodeString) {
          result = result.pipe(new utf8.Utf8DecodeWorker);
        }
      } catch (e) {
        result = new GenericWorker("error");
        result.error(e);
      }
      return new StreamHelper(result, outputType, "");
    },
    async: function(type, onUpdate) {
      return this.internalStream(type).accumulate(onUpdate);
    },
    nodeStream: function(type, onUpdate) {
      return this.internalStream(type || "nodebuffer").toNodejsStream(onUpdate);
    },
    _compressWorker: function(compression, compressionOptions) {
      if (this._data instanceof CompressedObject && this._data.compression.magic === compression.magic) {
        return this._data.getCompressedWorker();
      } else {
        var result = this._decompressWorker();
        if (!this._dataBinary) {
          result = result.pipe(new utf8.Utf8EncodeWorker);
        }
        return CompressedObject.createWorkerFrom(result, compression, compressionOptions);
      }
    },
    _decompressWorker: function() {
      if (this._data instanceof CompressedObject) {
        return this._data.getContentWorker();
      } else if (this._data instanceof GenericWorker) {
        return this._data;
      } else {
        return new DataWorker(this._data);
      }
    }
  };
  var removedMethods = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"];
  var removedFn = function() {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
  };
  for (i = 0;i < removedMethods.length; i++) {
    ZipObject.prototype[removedMethods[i]] = removedFn;
  }
  var i;
  module.exports = ZipObject;
});

// ../../node_modules/pako/lib/utils/common.js
var require_common = __commonJS((exports) => {
  function _has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
  exports.assign = function(obj) {
    var sources = Array.prototype.slice.call(arguments, 1);
    while (sources.length) {
      var source = sources.shift();
      if (!source) {
        continue;
      }
      if (typeof source !== "object") {
        throw new TypeError(source + "must be non-object");
      }
      for (var p in source) {
        if (_has(source, p)) {
          obj[p] = source[p];
        }
      }
    }
    return obj;
  };
  exports.shrinkBuf = function(buf, size) {
    if (buf.length === size) {
      return buf;
    }
    if (buf.subarray) {
      return buf.subarray(0, size);
    }
    buf.length = size;
    return buf;
  };
  var fnTyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
      if (src.subarray && dest.subarray) {
        dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
        return;
      }
      for (var i = 0;i < len; i++) {
        dest[dest_offs + i] = src[src_offs + i];
      }
    },
    flattenChunks: function(chunks) {
      var i, l, len, pos, chunk, result;
      len = 0;
      for (i = 0, l = chunks.length;i < l; i++) {
        len += chunks[i].length;
      }
      result = new Uint8Array(len);
      pos = 0;
      for (i = 0, l = chunks.length;i < l; i++) {
        chunk = chunks[i];
        result.set(chunk, pos);
        pos += chunk.length;
      }
      return result;
    }
  };
  var fnUntyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
      for (var i = 0;i < len; i++) {
        dest[dest_offs + i] = src[src_offs + i];
      }
    },
    flattenChunks: function(chunks) {
      return [].concat.apply([], chunks);
    }
  };
  exports.setTyped = function(on) {
    if (on) {
      exports.Buf8 = Uint8Array;
      exports.Buf16 = Uint16Array;
      exports.Buf32 = Int32Array;
      exports.assign(exports, fnTyped);
    } else {
      exports.Buf8 = Array;
      exports.Buf16 = Array;
      exports.Buf32 = Array;
      exports.assign(exports, fnUntyped);
    }
  };
  exports.setTyped(TYPED_OK);
});

// ../../node_modules/pako/lib/zlib/trees.js
var require_trees = __commonJS((exports) => {
  function zero(buf) {
    var len = buf.length;
    while (--len >= 0) {
      buf[len] = 0;
    }
  }
  function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree;
    this.extra_bits = extra_bits;
    this.extra_base = extra_base;
    this.elems = elems;
    this.max_length = max_length;
    this.has_stree = static_tree && static_tree.length;
  }
  function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree;
    this.max_code = 0;
    this.stat_desc = stat_desc;
  }
  function d_code(dist) {
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
  }
  function put_short(s, w) {
    s.pending_buf[s.pending++] = w & 255;
    s.pending_buf[s.pending++] = w >>> 8 & 255;
  }
  function send_bits(s, value, length) {
    if (s.bi_valid > Buf_size - length) {
      s.bi_buf |= value << s.bi_valid & 65535;
      put_short(s, s.bi_buf);
      s.bi_buf = value >> Buf_size - s.bi_valid;
      s.bi_valid += length - Buf_size;
    } else {
      s.bi_buf |= value << s.bi_valid & 65535;
      s.bi_valid += length;
    }
  }
  function send_code(s, c, tree) {
    send_bits(s, tree[c * 2], tree[c * 2 + 1]);
  }
  function bi_reverse(code, len) {
    var res = 0;
    do {
      res |= code & 1;
      code >>>= 1;
      res <<= 1;
    } while (--len > 0);
    return res >>> 1;
  }
  function bi_flush(s) {
    if (s.bi_valid === 16) {
      put_short(s, s.bi_buf);
      s.bi_buf = 0;
      s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
      s.pending_buf[s.pending++] = s.bi_buf & 255;
      s.bi_buf >>= 8;
      s.bi_valid -= 8;
    }
  }
  function gen_bitlen(s, desc) {
    var tree = desc.dyn_tree;
    var max_code = desc.max_code;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var extra = desc.stat_desc.extra_bits;
    var base = desc.stat_desc.extra_base;
    var max_length = desc.stat_desc.max_length;
    var h;
    var n, m;
    var bits;
    var xbits;
    var f;
    var overflow = 0;
    for (bits = 0;bits <= MAX_BITS; bits++) {
      s.bl_count[bits] = 0;
    }
    tree[s.heap[s.heap_max] * 2 + 1] = 0;
    for (h = s.heap_max + 1;h < HEAP_SIZE; h++) {
      n = s.heap[h];
      bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }
      tree[n * 2 + 1] = bits;
      if (n > max_code) {
        continue;
      }
      s.bl_count[bits]++;
      xbits = 0;
      if (n >= base) {
        xbits = extra[n - base];
      }
      f = tree[n * 2];
      s.opt_len += f * (bits + xbits);
      if (has_stree) {
        s.static_len += f * (stree[n * 2 + 1] + xbits);
      }
    }
    if (overflow === 0) {
      return;
    }
    do {
      bits = max_length - 1;
      while (s.bl_count[bits] === 0) {
        bits--;
      }
      s.bl_count[bits]--;
      s.bl_count[bits + 1] += 2;
      s.bl_count[max_length]--;
      overflow -= 2;
    } while (overflow > 0);
    for (bits = max_length;bits !== 0; bits--) {
      n = s.bl_count[bits];
      while (n !== 0) {
        m = s.heap[--h];
        if (m > max_code) {
          continue;
        }
        if (tree[m * 2 + 1] !== bits) {
          s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
          tree[m * 2 + 1] = bits;
        }
        n--;
      }
    }
  }
  function gen_codes(tree, max_code, bl_count) {
    var next_code = new Array(MAX_BITS + 1);
    var code = 0;
    var bits;
    var n;
    for (bits = 1;bits <= MAX_BITS; bits++) {
      next_code[bits] = code = code + bl_count[bits - 1] << 1;
    }
    for (n = 0;n <= max_code; n++) {
      var len = tree[n * 2 + 1];
      if (len === 0) {
        continue;
      }
      tree[n * 2] = bi_reverse(next_code[len]++, len);
    }
  }
  function tr_static_init() {
    var n;
    var bits;
    var length;
    var code;
    var dist;
    var bl_count = new Array(MAX_BITS + 1);
    length = 0;
    for (code = 0;code < LENGTH_CODES - 1; code++) {
      base_length[code] = length;
      for (n = 0;n < 1 << extra_lbits[code]; n++) {
        _length_code[length++] = code;
      }
    }
    _length_code[length - 1] = code;
    dist = 0;
    for (code = 0;code < 16; code++) {
      base_dist[code] = dist;
      for (n = 0;n < 1 << extra_dbits[code]; n++) {
        _dist_code[dist++] = code;
      }
    }
    dist >>= 7;
    for (;code < D_CODES; code++) {
      base_dist[code] = dist << 7;
      for (n = 0;n < 1 << extra_dbits[code] - 7; n++) {
        _dist_code[256 + dist++] = code;
      }
    }
    for (bits = 0;bits <= MAX_BITS; bits++) {
      bl_count[bits] = 0;
    }
    n = 0;
    while (n <= 143) {
      static_ltree[n * 2 + 1] = 8;
      n++;
      bl_count[8]++;
    }
    while (n <= 255) {
      static_ltree[n * 2 + 1] = 9;
      n++;
      bl_count[9]++;
    }
    while (n <= 279) {
      static_ltree[n * 2 + 1] = 7;
      n++;
      bl_count[7]++;
    }
    while (n <= 287) {
      static_ltree[n * 2 + 1] = 8;
      n++;
      bl_count[8]++;
    }
    gen_codes(static_ltree, L_CODES + 1, bl_count);
    for (n = 0;n < D_CODES; n++) {
      static_dtree[n * 2 + 1] = 5;
      static_dtree[n * 2] = bi_reverse(n, 5);
    }
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
  }
  function init_block(s) {
    var n;
    for (n = 0;n < L_CODES; n++) {
      s.dyn_ltree[n * 2] = 0;
    }
    for (n = 0;n < D_CODES; n++) {
      s.dyn_dtree[n * 2] = 0;
    }
    for (n = 0;n < BL_CODES; n++) {
      s.bl_tree[n * 2] = 0;
    }
    s.dyn_ltree[END_BLOCK * 2] = 1;
    s.opt_len = s.static_len = 0;
    s.last_lit = s.matches = 0;
  }
  function bi_windup(s) {
    if (s.bi_valid > 8) {
      put_short(s, s.bi_buf);
    } else if (s.bi_valid > 0) {
      s.pending_buf[s.pending++] = s.bi_buf;
    }
    s.bi_buf = 0;
    s.bi_valid = 0;
  }
  function copy_block(s, buf, len, header) {
    bi_windup(s);
    if (header) {
      put_short(s, len);
      put_short(s, ~len);
    }
    utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
    s.pending += len;
  }
  function smaller(tree, n, m, depth) {
    var _n2 = n * 2;
    var _m2 = m * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
  }
  function pqdownheap(s, tree, k2) {
    var v = s.heap[k2];
    var j = k2 << 1;
    while (j <= s.heap_len) {
      if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
        j++;
      }
      if (smaller(tree, v, s.heap[j], s.depth)) {
        break;
      }
      s.heap[k2] = s.heap[j];
      k2 = j;
      j <<= 1;
    }
    s.heap[k2] = v;
  }
  function compress_block(s, ltree, dtree) {
    var dist;
    var lc;
    var lx = 0;
    var code;
    var extra;
    if (s.last_lit !== 0) {
      do {
        dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
        lc = s.pending_buf[s.l_buf + lx];
        lx++;
        if (dist === 0) {
          send_code(s, lc, ltree);
        } else {
          code = _length_code[lc];
          send_code(s, code + LITERALS + 1, ltree);
          extra = extra_lbits[code];
          if (extra !== 0) {
            lc -= base_length[code];
            send_bits(s, lc, extra);
          }
          dist--;
          code = d_code(dist);
          send_code(s, code, dtree);
          extra = extra_dbits[code];
          if (extra !== 0) {
            dist -= base_dist[code];
            send_bits(s, dist, extra);
          }
        }
      } while (lx < s.last_lit);
    }
    send_code(s, END_BLOCK, ltree);
  }
  function build_tree(s, desc) {
    var tree = desc.dyn_tree;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var elems = desc.stat_desc.elems;
    var n, m;
    var max_code = -1;
    var node;
    s.heap_len = 0;
    s.heap_max = HEAP_SIZE;
    for (n = 0;n < elems; n++) {
      if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
      } else {
        tree[n * 2 + 1] = 0;
      }
    }
    while (s.heap_len < 2) {
      node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
      tree[node * 2] = 1;
      s.depth[node] = 0;
      s.opt_len--;
      if (has_stree) {
        s.static_len -= stree[node * 2 + 1];
      }
    }
    desc.max_code = max_code;
    for (n = s.heap_len >> 1;n >= 1; n--) {
      pqdownheap(s, tree, n);
    }
    node = elems;
    do {
      n = s.heap[1];
      s.heap[1] = s.heap[s.heap_len--];
      pqdownheap(s, tree, 1);
      m = s.heap[1];
      s.heap[--s.heap_max] = n;
      s.heap[--s.heap_max] = m;
      tree[node * 2] = tree[n * 2] + tree[m * 2];
      s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
      tree[n * 2 + 1] = tree[m * 2 + 1] = node;
      s.heap[1] = node++;
      pqdownheap(s, tree, 1);
    } while (s.heap_len >= 2);
    s.heap[--s.heap_max] = s.heap[1];
    gen_bitlen(s, desc);
    gen_codes(tree, max_code, s.bl_count);
  }
  function scan_tree(s, tree, max_code) {
    var n;
    var prevlen = -1;
    var curlen;
    var nextlen = tree[0 * 2 + 1];
    var count = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 65535;
    for (n = 0;n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1];
      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        s.bl_tree[curlen * 2] += count;
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          s.bl_tree[curlen * 2]++;
        }
        s.bl_tree[REP_3_6 * 2]++;
      } else if (count <= 10) {
        s.bl_tree[REPZ_3_10 * 2]++;
      } else {
        s.bl_tree[REPZ_11_138 * 2]++;
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  function send_tree(s, tree, max_code) {
    var n;
    var prevlen = -1;
    var curlen;
    var nextlen = tree[0 * 2 + 1];
    var count = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    for (n = 0;n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[(n + 1) * 2 + 1];
      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        do {
          send_code(s, curlen, s.bl_tree);
        } while (--count !== 0);
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          send_code(s, curlen, s.bl_tree);
          count--;
        }
        send_code(s, REP_3_6, s.bl_tree);
        send_bits(s, count - 3, 2);
      } else if (count <= 10) {
        send_code(s, REPZ_3_10, s.bl_tree);
        send_bits(s, count - 3, 3);
      } else {
        send_code(s, REPZ_11_138, s.bl_tree);
        send_bits(s, count - 11, 7);
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }
  function build_bl_tree(s) {
    var max_blindex;
    scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    build_tree(s, s.bl_desc);
    for (max_blindex = BL_CODES - 1;max_blindex >= 3; max_blindex--) {
      if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
        break;
      }
    }
    s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    return max_blindex;
  }
  function send_all_trees(s, lcodes, dcodes, blcodes) {
    var rank;
    send_bits(s, lcodes - 257, 5);
    send_bits(s, dcodes - 1, 5);
    send_bits(s, blcodes - 4, 4);
    for (rank = 0;rank < blcodes; rank++) {
      send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
    }
    send_tree(s, s.dyn_ltree, lcodes - 1);
    send_tree(s, s.dyn_dtree, dcodes - 1);
  }
  function detect_data_type(s) {
    var black_mask = 4093624447;
    var n;
    for (n = 0;n <= 31; n++, black_mask >>>= 1) {
      if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
        return Z_BINARY;
      }
    }
    if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
      return Z_TEXT;
    }
    for (n = 32;n < LITERALS; n++) {
      if (s.dyn_ltree[n * 2] !== 0) {
        return Z_TEXT;
      }
    }
    return Z_BINARY;
  }
  function _tr_init(s) {
    if (!static_init_done) {
      tr_static_init();
      static_init_done = true;
    }
    s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    init_block(s);
  }
  function _tr_stored_block(s, buf, stored_len, last) {
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
    copy_block(s, buf, stored_len, true);
  }
  function _tr_align(s) {
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
  }
  function _tr_flush_block(s, buf, stored_len, last) {
    var opt_lenb, static_lenb;
    var max_blindex = 0;
    if (s.level > 0) {
      if (s.strm.data_type === Z_UNKNOWN) {
        s.strm.data_type = detect_data_type(s);
      }
      build_tree(s, s.l_desc);
      build_tree(s, s.d_desc);
      max_blindex = build_bl_tree(s);
      opt_lenb = s.opt_len + 3 + 7 >>> 3;
      static_lenb = s.static_len + 3 + 7 >>> 3;
      if (static_lenb <= opt_lenb) {
        opt_lenb = static_lenb;
      }
    } else {
      opt_lenb = static_lenb = stored_len + 5;
    }
    if (stored_len + 4 <= opt_lenb && buf !== -1) {
      _tr_stored_block(s, buf, stored_len, last);
    } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
      send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
      compress_block(s, static_ltree, static_dtree);
    } else {
      send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
      send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
      compress_block(s, s.dyn_ltree, s.dyn_dtree);
    }
    init_block(s);
    if (last) {
      bi_windup(s);
    }
  }
  function _tr_tally(s, dist, lc) {
    s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
    s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
    s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
    s.last_lit++;
    if (dist === 0) {
      s.dyn_ltree[lc * 2]++;
    } else {
      s.matches++;
      dist--;
      s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
      s.dyn_dtree[d_code(dist) * 2]++;
    }
    return s.last_lit === s.lit_bufsize - 1;
  }
  var utils = require_common();
  var Z_FIXED = 4;
  var Z_BINARY = 0;
  var Z_TEXT = 1;
  var Z_UNKNOWN = 2;
  var STORED_BLOCK = 0;
  var STATIC_TREES = 1;
  var DYN_TREES = 2;
  var MIN_MATCH = 3;
  var MAX_MATCH = 258;
  var LENGTH_CODES = 29;
  var LITERALS = 256;
  var L_CODES = LITERALS + 1 + LENGTH_CODES;
  var D_CODES = 30;
  var BL_CODES = 19;
  var HEAP_SIZE = 2 * L_CODES + 1;
  var MAX_BITS = 15;
  var Buf_size = 16;
  var MAX_BL_BITS = 7;
  var END_BLOCK = 256;
  var REP_3_6 = 16;
  var REPZ_3_10 = 17;
  var REPZ_11_138 = 18;
  var extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  var extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  var extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
  var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var DIST_CODE_LEN = 512;
  var static_ltree = new Array((L_CODES + 2) * 2);
  zero(static_ltree);
  var static_dtree = new Array(D_CODES * 2);
  zero(static_dtree);
  var _dist_code = new Array(DIST_CODE_LEN);
  zero(_dist_code);
  var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
  zero(_length_code);
  var base_length = new Array(LENGTH_CODES);
  zero(base_length);
  var base_dist = new Array(D_CODES);
  zero(base_dist);
  var static_l_desc;
  var static_d_desc;
  var static_bl_desc;
  var static_init_done = false;
  exports._tr_init = _tr_init;
  exports._tr_stored_block = _tr_stored_block;
  exports._tr_flush_block = _tr_flush_block;
  exports._tr_tally = _tr_tally;
  exports._tr_align = _tr_align;
});

// ../../node_modules/pako/lib/zlib/adler32.js
var require_adler32 = __commonJS((exports, module) => {
  function adler32(adler, buf, len, pos) {
    var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
    while (len !== 0) {
      n = len > 2000 ? 2000 : len;
      len -= n;
      do {
        s1 = s1 + buf[pos++] | 0;
        s2 = s2 + s1 | 0;
      } while (--n);
      s1 %= 65521;
      s2 %= 65521;
    }
    return s1 | s2 << 16 | 0;
  }
  module.exports = adler32;
});

// ../../node_modules/pako/lib/zlib/crc32.js
var require_crc322 = __commonJS((exports, module) => {
  function makeTable() {
    var c, table = [];
    for (var n = 0;n < 256; n++) {
      c = n;
      for (var k2 = 0;k2 < 8; k2++) {
        c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
      }
      table[n] = c;
    }
    return table;
  }
  function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;
    crc ^= -1;
    for (var i = pos;i < end; i++) {
      crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
    }
    return crc ^ -1;
  }
  var crcTable = makeTable();
  module.exports = crc32;
});

// ../../node_modules/pako/lib/zlib/messages.js
var require_messages = __commonJS((exports, module) => {
  module.exports = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  };
});

// ../../node_modules/pako/lib/zlib/deflate.js
var require_deflate = __commonJS((exports) => {
  function err(strm, errorCode) {
    strm.msg = msg[errorCode];
    return errorCode;
  }
  function rank(f) {
    return (f << 1) - (f > 4 ? 9 : 0);
  }
  function zero(buf) {
    var len = buf.length;
    while (--len >= 0) {
      buf[len] = 0;
    }
  }
  function flush_pending(strm) {
    var s = strm.state;
    var len = s.pending;
    if (len > strm.avail_out) {
      len = strm.avail_out;
    }
    if (len === 0) {
      return;
    }
    utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;
    if (s.pending === 0) {
      s.pending_out = 0;
    }
  }
  function flush_block_only(s, last) {
    trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
    s.block_start = s.strstart;
    flush_pending(s.strm);
  }
  function put_byte(s, b) {
    s.pending_buf[s.pending++] = b;
  }
  function putShortMSB(s, b) {
    s.pending_buf[s.pending++] = b >>> 8 & 255;
    s.pending_buf[s.pending++] = b & 255;
  }
  function read_buf(strm, buf, start, size) {
    var len = strm.avail_in;
    if (len > size) {
      len = size;
    }
    if (len === 0) {
      return 0;
    }
    strm.avail_in -= len;
    utils.arraySet(buf, strm.input, strm.next_in, len, start);
    if (strm.state.wrap === 1) {
      strm.adler = adler32(strm.adler, buf, len, start);
    } else if (strm.state.wrap === 2) {
      strm.adler = crc32(strm.adler, buf, len, start);
    }
    strm.next_in += len;
    strm.total_in += len;
    return len;
  }
  function longest_match(s, cur_match) {
    var chain_length = s.max_chain_length;
    var scan = s.strstart;
    var match;
    var len;
    var best_len = s.prev_length;
    var nice_match = s.nice_match;
    var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
    var _win = s.window;
    var wmask = s.w_mask;
    var prev = s.prev;
    var strend = s.strstart + MAX_MATCH;
    var scan_end1 = _win[scan + best_len - 1];
    var scan_end = _win[scan + best_len];
    if (s.prev_length >= s.good_match) {
      chain_length >>= 2;
    }
    if (nice_match > s.lookahead) {
      nice_match = s.lookahead;
    }
    do {
      match = cur_match;
      if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
        continue;
      }
      scan += 2;
      match++;
      do {
      } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
      len = MAX_MATCH - (strend - scan);
      scan = strend - MAX_MATCH;
      if (len > best_len) {
        s.match_start = cur_match;
        best_len = len;
        if (len >= nice_match) {
          break;
        }
        scan_end1 = _win[scan + best_len - 1];
        scan_end = _win[scan + best_len];
      }
    } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
    if (best_len <= s.lookahead) {
      return best_len;
    }
    return s.lookahead;
  }
  function fill_window(s) {
    var _w_size = s.w_size;
    var p, n, m, more, str;
    do {
      more = s.window_size - s.lookahead - s.strstart;
      if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
        utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
        s.match_start -= _w_size;
        s.strstart -= _w_size;
        s.block_start -= _w_size;
        n = s.hash_size;
        p = n;
        do {
          m = s.head[--p];
          s.head[p] = m >= _w_size ? m - _w_size : 0;
        } while (--n);
        n = _w_size;
        p = n;
        do {
          m = s.prev[--p];
          s.prev[p] = m >= _w_size ? m - _w_size : 0;
        } while (--n);
        more += _w_size;
      }
      if (s.strm.avail_in === 0) {
        break;
      }
      n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
      s.lookahead += n;
      if (s.lookahead + s.insert >= MIN_MATCH) {
        str = s.strstart - s.insert;
        s.ins_h = s.window[str];
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
        while (s.insert) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
          s.insert--;
          if (s.lookahead + s.insert < MIN_MATCH) {
            break;
          }
        }
      }
    } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
  }
  function deflate_stored(s, flush) {
    var max_block_size = 65535;
    if (max_block_size > s.pending_buf_size - 5) {
      max_block_size = s.pending_buf_size - 5;
    }
    for (;; ) {
      if (s.lookahead <= 1) {
        fill_window(s);
        if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      s.strstart += s.lookahead;
      s.lookahead = 0;
      var max_start = s.block_start + max_block_size;
      if (s.strstart === 0 || s.strstart >= max_start) {
        s.lookahead = s.strstart - max_start;
        s.strstart = max_start;
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.strstart > s.block_start) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_NEED_MORE;
  }
  function deflate_fast(s, flush) {
    var hash_head;
    var bflush;
    for (;; ) {
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);
        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      hash_head = 0;
      if (s.lookahead >= MIN_MATCH) {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
      }
      if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
        s.match_length = longest_match(s, hash_head);
      }
      if (s.match_length >= MIN_MATCH) {
        bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
        s.lookahead -= s.match_length;
        if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
          s.match_length--;
          do {
            s.strstart++;
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
          } while (--s.match_length !== 0);
          s.strstart++;
        } else {
          s.strstart += s.match_length;
          s.match_length = 0;
          s.ins_h = s.window[s.strstart];
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
        }
      } else {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
      }
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function deflate_slow(s, flush) {
    var hash_head;
    var bflush;
    var max_insert;
    for (;; ) {
      if (s.lookahead < MIN_LOOKAHEAD) {
        fill_window(s);
        if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      hash_head = 0;
      if (s.lookahead >= MIN_MATCH) {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
        hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = s.strstart;
      }
      s.prev_length = s.match_length;
      s.prev_match = s.match_start;
      s.match_length = MIN_MATCH - 1;
      if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
        s.match_length = longest_match(s, hash_head);
        if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
          s.match_length = MIN_MATCH - 1;
        }
      }
      if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
        max_insert = s.strstart + s.lookahead - MIN_MATCH;
        bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
        s.lookahead -= s.prev_length - 1;
        s.prev_length -= 2;
        do {
          if (++s.strstart <= max_insert) {
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
          }
        } while (--s.prev_length !== 0);
        s.match_available = 0;
        s.match_length = MIN_MATCH - 1;
        s.strstart++;
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      } else if (s.match_available) {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
        if (bflush) {
          flush_block_only(s, false);
        }
        s.strstart++;
        s.lookahead--;
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      } else {
        s.match_available = 1;
        s.strstart++;
        s.lookahead--;
      }
    }
    if (s.match_available) {
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
      s.match_available = 0;
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function deflate_rle(s, flush) {
    var bflush;
    var prev;
    var scan, strend;
    var _win = s.window;
    for (;; ) {
      if (s.lookahead <= MAX_MATCH) {
        fill_window(s);
        if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        if (s.lookahead === 0) {
          break;
        }
      }
      s.match_length = 0;
      if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
        scan = s.strstart - 1;
        prev = _win[scan];
        if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
          strend = s.strstart + MAX_MATCH;
          do {
          } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
          s.match_length = MAX_MATCH - (strend - scan);
          if (s.match_length > s.lookahead) {
            s.match_length = s.lookahead;
          }
        }
      }
      if (s.match_length >= MIN_MATCH) {
        bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
        s.lookahead -= s.match_length;
        s.strstart += s.match_length;
        s.match_length = 0;
      } else {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
      }
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function deflate_huff(s, flush) {
    var bflush;
    for (;; ) {
      if (s.lookahead === 0) {
        fill_window(s);
        if (s.lookahead === 0) {
          if (flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          break;
        }
      }
      s.match_length = 0;
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
      flush_block_only(s, true);
      if (s.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s.last_lit) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  }
  function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
  }
  function lm_init(s) {
    s.window_size = 2 * s.w_size;
    zero(s.head);
    s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    s.ins_h = 0;
  }
  function DeflateState() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = Z_DEFLATED;
    this.last_flush = -1;
    this.w_size = 0;
    this.w_bits = 0;
    this.w_mask = 0;
    this.window = null;
    this.window_size = 0;
    this.prev = null;
    this.head = null;
    this.ins_h = 0;
    this.hash_size = 0;
    this.hash_bits = 0;
    this.hash_mask = 0;
    this.hash_shift = 0;
    this.block_start = 0;
    this.match_length = 0;
    this.prev_match = 0;
    this.match_available = 0;
    this.strstart = 0;
    this.match_start = 0;
    this.lookahead = 0;
    this.prev_length = 0;
    this.max_chain_length = 0;
    this.max_lazy_match = 0;
    this.level = 0;
    this.strategy = 0;
    this.good_match = 0;
    this.nice_match = 0;
    this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
    this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
    this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new utils.Buf16(MAX_BITS + 1);
    this.heap = new utils.Buf16(2 * L_CODES + 1);
    zero(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new utils.Buf16(2 * L_CODES + 1);
    zero(this.depth);
    this.l_buf = 0;
    this.lit_bufsize = 0;
    this.last_lit = 0;
    this.d_buf = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
  }
  function deflateResetKeep(strm) {
    var s;
    if (!strm || !strm.state) {
      return err(strm, Z_STREAM_ERROR);
    }
    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;
    s = strm.state;
    s.pending = 0;
    s.pending_out = 0;
    if (s.wrap < 0) {
      s.wrap = -s.wrap;
    }
    s.status = s.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 : 1;
    s.last_flush = Z_NO_FLUSH;
    trees._tr_init(s);
    return Z_OK;
  }
  function deflateReset(strm) {
    var ret = deflateResetKeep(strm);
    if (ret === Z_OK) {
      lm_init(strm.state);
    }
    return ret;
  }
  function deflateSetHeader(strm, head) {
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    if (strm.state.wrap !== 2) {
      return Z_STREAM_ERROR;
    }
    strm.state.gzhead = head;
    return Z_OK;
  }
  function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
    if (!strm) {
      return Z_STREAM_ERROR;
    }
    var wrap = 1;
    if (level === Z_DEFAULT_COMPRESSION) {
      level = 6;
    }
    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    } else if (windowBits > 15) {
      wrap = 2;
      windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
      return err(strm, Z_STREAM_ERROR);
    }
    if (windowBits === 8) {
      windowBits = 9;
    }
    var s = new DeflateState;
    strm.state = s;
    s.strm = strm;
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    s.window = new utils.Buf8(s.w_size * 2);
    s.head = new utils.Buf16(s.hash_size);
    s.prev = new utils.Buf16(s.w_size);
    s.lit_bufsize = 1 << memLevel + 6;
    s.pending_buf_size = s.lit_bufsize * 4;
    s.pending_buf = new utils.Buf8(s.pending_buf_size);
    s.d_buf = 1 * s.lit_bufsize;
    s.l_buf = (1 + 2) * s.lit_bufsize;
    s.level = level;
    s.strategy = strategy;
    s.method = method;
    return deflateReset(strm);
  }
  function deflateInit(strm, level) {
    return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
  }
  function deflate(strm, flush) {
    var old_flush, s;
    var beg, val;
    if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
      return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
    }
    s = strm.state;
    if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
      return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
    }
    s.strm = strm;
    old_flush = s.last_flush;
    s.last_flush = flush;
    if (s.status === INIT_STATE) {
      if (s.wrap === 2) {
        strm.adler = 0;
        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);
        if (!s.gzhead) {
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, OS_CODE);
          s.status = BUSY_STATE;
        } else {
          put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
          put_byte(s, s.gzhead.time & 255);
          put_byte(s, s.gzhead.time >> 8 & 255);
          put_byte(s, s.gzhead.time >> 16 & 255);
          put_byte(s, s.gzhead.time >> 24 & 255);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, s.gzhead.os & 255);
          if (s.gzhead.extra && s.gzhead.extra.length) {
            put_byte(s, s.gzhead.extra.length & 255);
            put_byte(s, s.gzhead.extra.length >> 8 & 255);
          }
          if (s.gzhead.hcrc) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
          }
          s.gzindex = 0;
          s.status = EXTRA_STATE;
        }
      } else {
        var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
        var level_flags = -1;
        if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
          level_flags = 0;
        } else if (s.level < 6) {
          level_flags = 1;
        } else if (s.level === 6) {
          level_flags = 2;
        } else {
          level_flags = 3;
        }
        header |= level_flags << 6;
        if (s.strstart !== 0) {
          header |= PRESET_DICT;
        }
        header += 31 - header % 31;
        s.status = BUSY_STATE;
        putShortMSB(s, header);
        if (s.strstart !== 0) {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 65535);
        }
        strm.adler = 1;
      }
    }
    if (s.status === EXTRA_STATE) {
      if (s.gzhead.extra) {
        beg = s.pending;
        while (s.gzindex < (s.gzhead.extra.length & 65535)) {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              break;
            }
          }
          put_byte(s, s.gzhead.extra[s.gzindex] & 255);
          s.gzindex++;
        }
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (s.gzindex === s.gzhead.extra.length) {
          s.gzindex = 0;
          s.status = NAME_STATE;
        }
      } else {
        s.status = NAME_STATE;
      }
    }
    if (s.status === NAME_STATE) {
      if (s.gzhead.name) {
        beg = s.pending;
        do {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              val = 1;
              break;
            }
          }
          if (s.gzindex < s.gzhead.name.length) {
            val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
          } else {
            val = 0;
          }
          put_byte(s, val);
        } while (val !== 0);
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (val === 0) {
          s.gzindex = 0;
          s.status = COMMENT_STATE;
        }
      } else {
        s.status = COMMENT_STATE;
      }
    }
    if (s.status === COMMENT_STATE) {
      if (s.gzhead.comment) {
        beg = s.pending;
        do {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            flush_pending(strm);
            beg = s.pending;
            if (s.pending === s.pending_buf_size) {
              val = 1;
              break;
            }
          }
          if (s.gzindex < s.gzhead.comment.length) {
            val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
          } else {
            val = 0;
          }
          put_byte(s, val);
        } while (val !== 0);
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        if (val === 0) {
          s.status = HCRC_STATE;
        }
      } else {
        s.status = HCRC_STATE;
      }
    }
    if (s.status === HCRC_STATE) {
      if (s.gzhead.hcrc) {
        if (s.pending + 2 > s.pending_buf_size) {
          flush_pending(strm);
        }
        if (s.pending + 2 <= s.pending_buf_size) {
          put_byte(s, strm.adler & 255);
          put_byte(s, strm.adler >> 8 & 255);
          strm.adler = 0;
          s.status = BUSY_STATE;
        }
      } else {
        s.status = BUSY_STATE;
      }
    }
    if (s.pending !== 0) {
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        return Z_OK;
      }
    } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
      return err(strm, Z_BUF_ERROR);
    }
    if (s.status === FINISH_STATE && strm.avail_in !== 0) {
      return err(strm, Z_BUF_ERROR);
    }
    if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
      var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
      if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
        s.status = FINISH_STATE;
      }
      if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
        if (strm.avail_out === 0) {
          s.last_flush = -1;
        }
        return Z_OK;
      }
      if (bstate === BS_BLOCK_DONE) {
        if (flush === Z_PARTIAL_FLUSH) {
          trees._tr_align(s);
        } else if (flush !== Z_BLOCK) {
          trees._tr_stored_block(s, 0, 0, false);
          if (flush === Z_FULL_FLUSH) {
            zero(s.head);
            if (s.lookahead === 0) {
              s.strstart = 0;
              s.block_start = 0;
              s.insert = 0;
            }
          }
        }
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      }
    }
    if (flush !== Z_FINISH) {
      return Z_OK;
    }
    if (s.wrap <= 0) {
      return Z_STREAM_END;
    }
    if (s.wrap === 2) {
      put_byte(s, strm.adler & 255);
      put_byte(s, strm.adler >> 8 & 255);
      put_byte(s, strm.adler >> 16 & 255);
      put_byte(s, strm.adler >> 24 & 255);
      put_byte(s, strm.total_in & 255);
      put_byte(s, strm.total_in >> 8 & 255);
      put_byte(s, strm.total_in >> 16 & 255);
      put_byte(s, strm.total_in >> 24 & 255);
    } else {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 65535);
    }
    flush_pending(strm);
    if (s.wrap > 0) {
      s.wrap = -s.wrap;
    }
    return s.pending !== 0 ? Z_OK : Z_STREAM_END;
  }
  function deflateEnd(strm) {
    var status;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    status = strm.state.status;
    if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
      return err(strm, Z_STREAM_ERROR);
    }
    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
  }
  function deflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var s;
    var str, n;
    var wrap;
    var avail;
    var next;
    var input;
    var tmpDict;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    s = strm.state;
    wrap = s.wrap;
    if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
      return Z_STREAM_ERROR;
    }
    if (wrap === 1) {
      strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
    }
    s.wrap = 0;
    if (dictLength >= s.w_size) {
      if (wrap === 0) {
        zero(s.head);
        s.strstart = 0;
        s.block_start = 0;
        s.insert = 0;
      }
      tmpDict = new utils.Buf8(s.w_size);
      utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
      dictionary = tmpDict;
      dictLength = s.w_size;
    }
    avail = strm.avail_in;
    next = strm.next_in;
    input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);
    while (s.lookahead >= MIN_MATCH) {
      str = s.strstart;
      n = s.lookahead - (MIN_MATCH - 1);
      do {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
      } while (--n);
      s.strstart = str;
      s.lookahead = MIN_MATCH - 1;
      fill_window(s);
    }
    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK;
  }
  var utils = require_common();
  var trees = require_trees();
  var adler32 = require_adler32();
  var crc32 = require_crc322();
  var msg = require_messages();
  var Z_NO_FLUSH = 0;
  var Z_PARTIAL_FLUSH = 1;
  var Z_FULL_FLUSH = 3;
  var Z_FINISH = 4;
  var Z_BLOCK = 5;
  var Z_OK = 0;
  var Z_STREAM_END = 1;
  var Z_STREAM_ERROR = -2;
  var Z_DATA_ERROR = -3;
  var Z_BUF_ERROR = -5;
  var Z_DEFAULT_COMPRESSION = -1;
  var Z_FILTERED = 1;
  var Z_HUFFMAN_ONLY = 2;
  var Z_RLE = 3;
  var Z_FIXED = 4;
  var Z_DEFAULT_STRATEGY = 0;
  var Z_UNKNOWN = 2;
  var Z_DEFLATED = 8;
  var MAX_MEM_LEVEL = 9;
  var MAX_WBITS = 15;
  var DEF_MEM_LEVEL = 8;
  var LENGTH_CODES = 29;
  var LITERALS = 256;
  var L_CODES = LITERALS + 1 + LENGTH_CODES;
  var D_CODES = 30;
  var BL_CODES = 19;
  var HEAP_SIZE = 2 * L_CODES + 1;
  var MAX_BITS = 15;
  var MIN_MATCH = 3;
  var MAX_MATCH = 258;
  var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
  var PRESET_DICT = 32;
  var INIT_STATE = 42;
  var EXTRA_STATE = 69;
  var NAME_STATE = 73;
  var COMMENT_STATE = 91;
  var HCRC_STATE = 103;
  var BUSY_STATE = 113;
  var FINISH_STATE = 666;
  var BS_NEED_MORE = 1;
  var BS_BLOCK_DONE = 2;
  var BS_FINISH_STARTED = 3;
  var BS_FINISH_DONE = 4;
  var OS_CODE = 3;
  var configuration_table;
  configuration_table = [
    new Config(0, 0, 0, 0, deflate_stored),
    new Config(4, 4, 8, 4, deflate_fast),
    new Config(4, 5, 16, 8, deflate_fast),
    new Config(4, 6, 32, 32, deflate_fast),
    new Config(4, 4, 16, 16, deflate_slow),
    new Config(8, 16, 32, 32, deflate_slow),
    new Config(8, 16, 128, 128, deflate_slow),
    new Config(8, 32, 128, 256, deflate_slow),
    new Config(32, 128, 258, 1024, deflate_slow),
    new Config(32, 258, 258, 4096, deflate_slow)
  ];
  exports.deflateInit = deflateInit;
  exports.deflateInit2 = deflateInit2;
  exports.deflateReset = deflateReset;
  exports.deflateResetKeep = deflateResetKeep;
  exports.deflateSetHeader = deflateSetHeader;
  exports.deflate = deflate;
  exports.deflateEnd = deflateEnd;
  exports.deflateSetDictionary = deflateSetDictionary;
  exports.deflateInfo = "pako deflate (from Nodeca project)";
});

// ../../node_modules/pako/lib/utils/strings.js
var require_strings = __commonJS((exports) => {
  function buf2binstring(buf, len) {
    if (len < 65534) {
      if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
        return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
      }
    }
    var result = "";
    for (var i = 0;i < len; i++) {
      result += String.fromCharCode(buf[i]);
    }
    return result;
  }
  var utils = require_common();
  var STR_APPLY_OK = true;
  var STR_APPLY_UIA_OK = true;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (__) {
    STR_APPLY_OK = false;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (__) {
    STR_APPLY_UIA_OK = false;
  }
  var _utf8len = new utils.Buf8(256);
  for (q = 0;q < 256; q++) {
    _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
  }
  var q;
  _utf8len[254] = _utf8len[254] = 1;
  exports.string2buf = function(str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
    for (m_pos = 0;m_pos < str_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 64512) === 56320) {
          c = 65536 + (c - 55296 << 10) + (c2 - 56320);
          m_pos++;
        }
      }
      buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
    }
    buf = new utils.Buf8(buf_len);
    for (i = 0, m_pos = 0;i < buf_len; m_pos++) {
      c = str.charCodeAt(m_pos);
      if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
        c2 = str.charCodeAt(m_pos + 1);
        if ((c2 & 64512) === 56320) {
          c = 65536 + (c - 55296 << 10) + (c2 - 56320);
          m_pos++;
        }
      }
      if (c < 128) {
        buf[i++] = c;
      } else if (c < 2048) {
        buf[i++] = 192 | c >>> 6;
        buf[i++] = 128 | c & 63;
      } else if (c < 65536) {
        buf[i++] = 224 | c >>> 12;
        buf[i++] = 128 | c >>> 6 & 63;
        buf[i++] = 128 | c & 63;
      } else {
        buf[i++] = 240 | c >>> 18;
        buf[i++] = 128 | c >>> 12 & 63;
        buf[i++] = 128 | c >>> 6 & 63;
        buf[i++] = 128 | c & 63;
      }
    }
    return buf;
  };
  exports.buf2binstring = function(buf) {
    return buf2binstring(buf, buf.length);
  };
  exports.binstring2buf = function(str) {
    var buf = new utils.Buf8(str.length);
    for (var i = 0, len = buf.length;i < len; i++) {
      buf[i] = str.charCodeAt(i);
    }
    return buf;
  };
  exports.buf2string = function(buf, max) {
    var i, out, c, c_len;
    var len = max || buf.length;
    var utf16buf = new Array(len * 2);
    for (out = 0, i = 0;i < len; ) {
      c = buf[i++];
      if (c < 128) {
        utf16buf[out++] = c;
        continue;
      }
      c_len = _utf8len[c];
      if (c_len > 4) {
        utf16buf[out++] = 65533;
        i += c_len - 1;
        continue;
      }
      c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
      while (c_len > 1 && i < len) {
        c = c << 6 | buf[i++] & 63;
        c_len--;
      }
      if (c_len > 1) {
        utf16buf[out++] = 65533;
        continue;
      }
      if (c < 65536) {
        utf16buf[out++] = c;
      } else {
        c -= 65536;
        utf16buf[out++] = 55296 | c >> 10 & 1023;
        utf16buf[out++] = 56320 | c & 1023;
      }
    }
    return buf2binstring(utf16buf, out);
  };
  exports.utf8border = function(buf, max) {
    var pos;
    max = max || buf.length;
    if (max > buf.length) {
      max = buf.length;
    }
    pos = max - 1;
    while (pos >= 0 && (buf[pos] & 192) === 128) {
      pos--;
    }
    if (pos < 0) {
      return max;
    }
    if (pos === 0) {
      return max;
    }
    return pos + _utf8len[buf[pos]] > max ? pos : max;
  };
});

// ../../node_modules/pako/lib/zlib/zstream.js
var require_zstream = __commonJS((exports, module) => {
  function ZStream() {
    this.input = null;
    this.next_in = 0;
    this.avail_in = 0;
    this.total_in = 0;
    this.output = null;
    this.next_out = 0;
    this.avail_out = 0;
    this.total_out = 0;
    this.msg = "";
    this.state = null;
    this.data_type = 2;
    this.adler = 0;
  }
  module.exports = ZStream;
});

// ../../node_modules/pako/lib/deflate.js
var require_deflate2 = __commonJS((exports) => {
  function Deflate(options) {
    if (!(this instanceof Deflate))
      return new Deflate(options);
    this.options = utils.assign({
      level: Z_DEFAULT_COMPRESSION,
      method: Z_DEFLATED,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: Z_DEFAULT_STRATEGY,
      to: ""
    }, options || {});
    var opt = this.options;
    if (opt.raw && opt.windowBits > 0) {
      opt.windowBits = -opt.windowBits;
    } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
      opt.windowBits += 16;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new ZStream;
    this.strm.avail_out = 0;
    var status = zlib_deflate.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }
    if (opt.header) {
      zlib_deflate.deflateSetHeader(this.strm, opt.header);
    }
    if (opt.dictionary) {
      var dict;
      if (typeof opt.dictionary === "string") {
        dict = strings.string2buf(opt.dictionary);
      } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
        dict = new Uint8Array(opt.dictionary);
      } else {
        dict = opt.dictionary;
      }
      status = zlib_deflate.deflateSetDictionary(this.strm, dict);
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      this._dict_set = true;
    }
  }
  function deflate(input, options) {
    var deflator = new Deflate(options);
    deflator.push(input, true);
    if (deflator.err) {
      throw deflator.msg || msg[deflator.err];
    }
    return deflator.result;
  }
  function deflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return deflate(input, options);
  }
  function gzip(input, options) {
    options = options || {};
    options.gzip = true;
    return deflate(input, options);
  }
  var zlib_deflate = require_deflate();
  var utils = require_common();
  var strings = require_strings();
  var msg = require_messages();
  var ZStream = require_zstream();
  var toString = Object.prototype.toString;
  var Z_NO_FLUSH = 0;
  var Z_FINISH = 4;
  var Z_OK = 0;
  var Z_STREAM_END = 1;
  var Z_SYNC_FLUSH = 2;
  var Z_DEFAULT_COMPRESSION = -1;
  var Z_DEFAULT_STRATEGY = 0;
  var Z_DEFLATED = 8;
  Deflate.prototype.push = function(data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var status, _mode;
    if (this.ended) {
      return false;
    }
    _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
    if (typeof data === "string") {
      strm.input = strings.string2buf(data);
    } else if (toString.call(data) === "[object ArrayBuffer]") {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    do {
      if (strm.avail_out === 0) {
        strm.output = new utils.Buf8(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }
      status = zlib_deflate.deflate(strm, _mode);
      if (status !== Z_STREAM_END && status !== Z_OK) {
        this.onEnd(status);
        this.ended = true;
        return false;
      }
      if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
        if (this.options.to === "string") {
          this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
    if (_mode === Z_FINISH) {
      status = zlib_deflate.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK;
    }
    if (_mode === Z_SYNC_FLUSH) {
      this.onEnd(Z_OK);
      strm.avail_out = 0;
      return true;
    }
    return true;
  };
  Deflate.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
  };
  Deflate.prototype.onEnd = function(status) {
    if (status === Z_OK) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = utils.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  exports.Deflate = Deflate;
  exports.deflate = deflate;
  exports.deflateRaw = deflateRaw;
  exports.gzip = gzip;
});

// ../../node_modules/pako/lib/zlib/inffast.js
var require_inffast = __commonJS((exports, module) => {
  var BAD = 30;
  var TYPE = 12;
  module.exports = function inflate_fast(strm, start) {
    var state;
    var _in;
    var last;
    var _out;
    var beg;
    var end;
    var dmax;
    var wsize;
    var whave;
    var wnext;
    var s_window;
    var hold;
    var bits;
    var lcode;
    var dcode;
    var lmask;
    var dmask;
    var here;
    var op;
    var len;
    var dist;
    var from;
    var from_source;
    var input, output;
    state = strm.state;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    dmax = state.dmax;
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    top:
      do {
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = lcode[hold & lmask];
        dolen:
          for (;; ) {
            op = here >>> 24;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 255;
            if (op === 0) {
              output[_out++] = here & 65535;
            } else if (op & 16) {
              len = here & 65535;
              op &= 15;
              if (op) {
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                len += hold & (1 << op) - 1;
                hold >>>= op;
                bits -= op;
              }
              if (bits < 15) {
                hold += input[_in++] << bits;
                bits += 8;
                hold += input[_in++] << bits;
                bits += 8;
              }
              here = dcode[hold & dmask];
              dodist:
                for (;; ) {
                  op = here >>> 24;
                  hold >>>= op;
                  bits -= op;
                  op = here >>> 16 & 255;
                  if (op & 16) {
                    dist = here & 65535;
                    op &= 15;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                      if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                      }
                    }
                    dist += hold & (1 << op) - 1;
                    if (dist > dmax) {
                      strm.msg = "invalid distance too far back";
                      state.mode = BAD;
                      break top;
                    }
                    hold >>>= op;
                    bits -= op;
                    op = _out - beg;
                    if (dist > op) {
                      op = dist - op;
                      if (op > whave) {
                        if (state.sane) {
                          strm.msg = "invalid distance too far back";
                          state.mode = BAD;
                          break top;
                        }
                      }
                      from = 0;
                      from_source = s_window;
                      if (wnext === 0) {
                        from += wsize - op;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      } else if (wnext < op) {
                        from += wsize + wnext - op;
                        op -= wnext;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = 0;
                          if (wnext < len) {
                            op = wnext;
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        }
                      } else {
                        from += wnext - op;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      }
                      while (len > 2) {
                        output[_out++] = from_source[from++];
                        output[_out++] = from_source[from++];
                        output[_out++] = from_source[from++];
                        len -= 3;
                      }
                      if (len) {
                        output[_out++] = from_source[from++];
                        if (len > 1) {
                          output[_out++] = from_source[from++];
                        }
                      }
                    } else {
                      from = _out - dist;
                      do {
                        output[_out++] = output[from++];
                        output[_out++] = output[from++];
                        output[_out++] = output[from++];
                        len -= 3;
                      } while (len > 2);
                      if (len) {
                        output[_out++] = output[from++];
                        if (len > 1) {
                          output[_out++] = output[from++];
                        }
                      }
                    }
                  } else if ((op & 64) === 0) {
                    here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                    continue dodist;
                  } else {
                    strm.msg = "invalid distance code";
                    state.mode = BAD;
                    break top;
                  }
                  break;
                }
            } else if ((op & 64) === 0) {
              here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
              continue dolen;
            } else if (op & 32) {
              state.mode = TYPE;
              break top;
            } else {
              strm.msg = "invalid literal/length code";
              state.mode = BAD;
              break top;
            }
            break;
          }
      } while (_in < last && _out < end);
    len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
  };
});

// ../../node_modules/pako/lib/zlib/inftrees.js
var require_inftrees = __commonJS((exports, module) => {
  var utils = require_common();
  var MAXBITS = 15;
  var ENOUGH_LENS = 852;
  var ENOUGH_DISTS = 592;
  var CODES = 0;
  var LENS = 1;
  var DISTS = 2;
  var lbase = [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ];
  var lext = [
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ];
  var dbase = [
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ];
  var dext = [
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ];
  module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
    var bits = opts.bits;
    var len = 0;
    var sym = 0;
    var min = 0, max = 0;
    var root = 0;
    var curr = 0;
    var drop = 0;
    var left = 0;
    var used = 0;
    var huff = 0;
    var incr;
    var fill;
    var low;
    var mask;
    var next;
    var base = null;
    var base_index = 0;
    var end;
    var count = new utils.Buf16(MAXBITS + 1);
    var offs = new utils.Buf16(MAXBITS + 1);
    var extra = null;
    var extra_index = 0;
    var here_bits, here_op, here_val;
    for (len = 0;len <= MAXBITS; len++) {
      count[len] = 0;
    }
    for (sym = 0;sym < codes; sym++) {
      count[lens[lens_index + sym]]++;
    }
    root = bits;
    for (max = MAXBITS;max >= 1; max--) {
      if (count[max] !== 0) {
        break;
      }
    }
    if (root > max) {
      root = max;
    }
    if (max === 0) {
      table[table_index++] = 1 << 24 | 64 << 16 | 0;
      table[table_index++] = 1 << 24 | 64 << 16 | 0;
      opts.bits = 1;
      return 0;
    }
    for (min = 1;min < max; min++) {
      if (count[min] !== 0) {
        break;
      }
    }
    if (root < min) {
      root = min;
    }
    left = 1;
    for (len = 1;len <= MAXBITS; len++) {
      left <<= 1;
      left -= count[len];
      if (left < 0) {
        return -1;
      }
    }
    if (left > 0 && (type === CODES || max !== 1)) {
      return -1;
    }
    offs[1] = 0;
    for (len = 1;len < MAXBITS; len++) {
      offs[len + 1] = offs[len] + count[len];
    }
    for (sym = 0;sym < codes; sym++) {
      if (lens[lens_index + sym] !== 0) {
        work[offs[lens[lens_index + sym]]++] = sym;
      }
    }
    if (type === CODES) {
      base = extra = work;
      end = 19;
    } else if (type === LENS) {
      base = lbase;
      base_index -= 257;
      extra = lext;
      extra_index -= 257;
      end = 256;
    } else {
      base = dbase;
      extra = dext;
      end = -1;
    }
    huff = 0;
    sym = 0;
    len = min;
    next = table_index;
    curr = root;
    drop = 0;
    low = -1;
    used = 1 << root;
    mask = used - 1;
    if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
      return 1;
    }
    for (;; ) {
      here_bits = len - drop;
      if (work[sym] < end) {
        here_op = 0;
        here_val = work[sym];
      } else if (work[sym] > end) {
        here_op = extra[extra_index + work[sym]];
        here_val = base[base_index + work[sym]];
      } else {
        here_op = 32 + 64;
        here_val = 0;
      }
      incr = 1 << len - drop;
      fill = 1 << curr;
      min = fill;
      do {
        fill -= incr;
        table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
      } while (fill !== 0);
      incr = 1 << len - 1;
      while (huff & incr) {
        incr >>= 1;
      }
      if (incr !== 0) {
        huff &= incr - 1;
        huff += incr;
      } else {
        huff = 0;
      }
      sym++;
      if (--count[len] === 0) {
        if (len === max) {
          break;
        }
        len = lens[lens_index + work[sym]];
      }
      if (len > root && (huff & mask) !== low) {
        if (drop === 0) {
          drop = root;
        }
        next += min;
        curr = len - drop;
        left = 1 << curr;
        while (curr + drop < max) {
          left -= count[curr + drop];
          if (left <= 0) {
            break;
          }
          curr++;
          left <<= 1;
        }
        used += 1 << curr;
        if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
          return 1;
        }
        low = huff & mask;
        table[low] = root << 24 | curr << 16 | next - table_index | 0;
      }
    }
    if (huff !== 0) {
      table[next + huff] = len - drop << 24 | 64 << 16 | 0;
    }
    opts.bits = root;
    return 0;
  };
});

// ../../node_modules/pako/lib/zlib/inflate.js
var require_inflate = __commonJS((exports) => {
  function zswap32(q) {
    return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
  }
  function InflateState() {
    this.mode = 0;
    this.last = false;
    this.wrap = 0;
    this.havedict = false;
    this.flags = 0;
    this.dmax = 0;
    this.check = 0;
    this.total = 0;
    this.head = null;
    this.wbits = 0;
    this.wsize = 0;
    this.whave = 0;
    this.wnext = 0;
    this.window = null;
    this.hold = 0;
    this.bits = 0;
    this.length = 0;
    this.offset = 0;
    this.extra = 0;
    this.lencode = null;
    this.distcode = null;
    this.lenbits = 0;
    this.distbits = 0;
    this.ncode = 0;
    this.nlen = 0;
    this.ndist = 0;
    this.have = 0;
    this.next = null;
    this.lens = new utils.Buf16(320);
    this.work = new utils.Buf16(288);
    this.lendyn = null;
    this.distdyn = null;
    this.sane = 0;
    this.back = 0;
    this.was = 0;
  }
  function inflateResetKeep(strm) {
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = "";
    if (state.wrap) {
      strm.adler = state.wrap & 1;
    }
    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.dmax = 32768;
    state.head = null;
    state.hold = 0;
    state.bits = 0;
    state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
    state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
    state.sane = 1;
    state.back = -1;
    return Z_OK;
  }
  function inflateReset(strm) {
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
  }
  function inflateReset2(strm, windowBits) {
    var wrap;
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    } else {
      wrap = (windowBits >> 4) + 1;
      if (windowBits < 48) {
        windowBits &= 15;
      }
    }
    if (windowBits && (windowBits < 8 || windowBits > 15)) {
      return Z_STREAM_ERROR;
    }
    if (state.window !== null && state.wbits !== windowBits) {
      state.window = null;
    }
    state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
  }
  function inflateInit2(strm, windowBits) {
    var ret;
    var state;
    if (!strm) {
      return Z_STREAM_ERROR;
    }
    state = new InflateState;
    strm.state = state;
    state.window = null;
    ret = inflateReset2(strm, windowBits);
    if (ret !== Z_OK) {
      strm.state = null;
    }
    return ret;
  }
  function inflateInit(strm) {
    return inflateInit2(strm, DEF_WBITS);
  }
  function fixedtables(state) {
    if (virgin) {
      var sym;
      lenfix = new utils.Buf32(512);
      distfix = new utils.Buf32(32);
      sym = 0;
      while (sym < 144) {
        state.lens[sym++] = 8;
      }
      while (sym < 256) {
        state.lens[sym++] = 9;
      }
      while (sym < 280) {
        state.lens[sym++] = 7;
      }
      while (sym < 288) {
        state.lens[sym++] = 8;
      }
      inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
      sym = 0;
      while (sym < 32) {
        state.lens[sym++] = 5;
      }
      inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
      virgin = false;
    }
    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
  }
  function updatewindow(strm, src, end, copy) {
    var dist;
    var state = strm.state;
    if (state.window === null) {
      state.wsize = 1 << state.wbits;
      state.wnext = 0;
      state.whave = 0;
      state.window = new utils.Buf8(state.wsize);
    }
    if (copy >= state.wsize) {
      utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
      state.wnext = 0;
      state.whave = state.wsize;
    } else {
      dist = state.wsize - state.wnext;
      if (dist > copy) {
        dist = copy;
      }
      utils.arraySet(state.window, src, end - copy, dist, state.wnext);
      copy -= dist;
      if (copy) {
        utils.arraySet(state.window, src, end - copy, copy, 0);
        state.wnext = copy;
        state.whave = state.wsize;
      } else {
        state.wnext += dist;
        if (state.wnext === state.wsize) {
          state.wnext = 0;
        }
        if (state.whave < state.wsize) {
          state.whave += dist;
        }
      }
    }
    return 0;
  }
  function inflate(strm, flush) {
    var state;
    var input, output;
    var next;
    var put;
    var have, left;
    var hold;
    var bits;
    var _in, _out;
    var copy;
    var from;
    var from_source;
    var here = 0;
    var here_bits, here_op, here_val;
    var last_bits, last_op, last_val;
    var len;
    var ret;
    var hbuf = new utils.Buf8(4);
    var opts;
    var n;
    var order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if (state.mode === TYPE) {
      state.mode = TYPEDO;
    }
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    _in = have;
    _out = left;
    ret = Z_OK;
    inf_leave:
      for (;; ) {
        switch (state.mode) {
          case HEAD:
            if (state.wrap === 0) {
              state.mode = TYPEDO;
              break;
            }
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.wrap & 2 && hold === 35615) {
              state.check = 0;
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
              hold = 0;
              bits = 0;
              state.mode = FLAGS;
              break;
            }
            state.flags = 0;
            if (state.head) {
              state.head.done = false;
            }
            if (!(state.wrap & 1) || (((hold & 255) << 8) + (hold >> 8)) % 31) {
              strm.msg = "incorrect header check";
              state.mode = BAD;
              break;
            }
            if ((hold & 15) !== Z_DEFLATED) {
              strm.msg = "unknown compression method";
              state.mode = BAD;
              break;
            }
            hold >>>= 4;
            bits -= 4;
            len = (hold & 15) + 8;
            if (state.wbits === 0) {
              state.wbits = len;
            } else if (len > state.wbits) {
              strm.msg = "invalid window size";
              state.mode = BAD;
              break;
            }
            state.dmax = 1 << len;
            strm.adler = state.check = 1;
            state.mode = hold & 512 ? DICTID : TYPE;
            hold = 0;
            bits = 0;
            break;
          case FLAGS:
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.flags = hold;
            if ((state.flags & 255) !== Z_DEFLATED) {
              strm.msg = "unknown compression method";
              state.mode = BAD;
              break;
            }
            if (state.flags & 57344) {
              strm.msg = "unknown header flags set";
              state.mode = BAD;
              break;
            }
            if (state.head) {
              state.head.text = hold >> 8 & 1;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = TIME;
          case TIME:
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.head) {
              state.head.time = hold;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              hbuf[2] = hold >>> 16 & 255;
              hbuf[3] = hold >>> 24 & 255;
              state.check = crc32(state.check, hbuf, 4, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = OS;
          case OS:
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (state.head) {
              state.head.xflags = hold & 255;
              state.head.os = hold >> 8;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = EXLEN;
          case EXLEN:
            if (state.flags & 1024) {
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.length = hold;
              if (state.head) {
                state.head.extra_len = hold;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
            } else if (state.head) {
              state.head.extra = null;
            }
            state.mode = EXTRA;
          case EXTRA:
            if (state.flags & 1024) {
              copy = state.length;
              if (copy > have) {
                copy = have;
              }
              if (copy) {
                if (state.head) {
                  len = state.head.extra_len - state.length;
                  if (!state.head.extra) {
                    state.head.extra = new Array(state.head.extra_len);
                  }
                  utils.arraySet(state.head.extra, input, next, copy, len);
                }
                if (state.flags & 512) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                state.length -= copy;
              }
              if (state.length) {
                break inf_leave;
              }
            }
            state.length = 0;
            state.mode = NAME;
          case NAME:
            if (state.flags & 2048) {
              if (have === 0) {
                break inf_leave;
              }
              copy = 0;
              do {
                len = input[next + copy++];
                if (state.head && len && state.length < 65536) {
                  state.head.name += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 512) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) {
                break inf_leave;
              }
            } else if (state.head) {
              state.head.name = null;
            }
            state.length = 0;
            state.mode = COMMENT;
          case COMMENT:
            if (state.flags & 4096) {
              if (have === 0) {
                break inf_leave;
              }
              copy = 0;
              do {
                len = input[next + copy++];
                if (state.head && len && state.length < 65536) {
                  state.head.comment += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 512) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) {
                break inf_leave;
              }
            } else if (state.head) {
              state.head.comment = null;
            }
            state.mode = HCRC;
          case HCRC:
            if (state.flags & 512) {
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (hold !== (state.check & 65535)) {
                strm.msg = "header crc mismatch";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            if (state.head) {
              state.head.hcrc = state.flags >> 9 & 1;
              state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE;
            break;
          case DICTID:
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            strm.adler = state.check = zswap32(hold);
            hold = 0;
            bits = 0;
            state.mode = DICT;
          case DICT:
            if (state.havedict === 0) {
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              return Z_NEED_DICT;
            }
            strm.adler = state.check = 1;
            state.mode = TYPE;
          case TYPE:
            if (flush === Z_BLOCK || flush === Z_TREES) {
              break inf_leave;
            }
          case TYPEDO:
            if (state.last) {
              hold >>>= bits & 7;
              bits -= bits & 7;
              state.mode = CHECK;
              break;
            }
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.last = hold & 1;
            hold >>>= 1;
            bits -= 1;
            switch (hold & 3) {
              case 0:
                state.mode = STORED;
                break;
              case 1:
                fixedtables(state);
                state.mode = LEN_;
                if (flush === Z_TREES) {
                  hold >>>= 2;
                  bits -= 2;
                  break inf_leave;
                }
                break;
              case 2:
                state.mode = TABLE;
                break;
              case 3:
                strm.msg = "invalid block type";
                state.mode = BAD;
            }
            hold >>>= 2;
            bits -= 2;
            break;
          case STORED:
            hold >>>= bits & 7;
            bits -= bits & 7;
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
              strm.msg = "invalid stored block lengths";
              state.mode = BAD;
              break;
            }
            state.length = hold & 65535;
            hold = 0;
            bits = 0;
            state.mode = COPY_;
            if (flush === Z_TREES) {
              break inf_leave;
            }
          case COPY_:
            state.mode = COPY;
          case COPY:
            copy = state.length;
            if (copy) {
              if (copy > have) {
                copy = have;
              }
              if (copy > left) {
                copy = left;
              }
              if (copy === 0) {
                break inf_leave;
              }
              utils.arraySet(output, input, next, copy, put);
              have -= copy;
              next += copy;
              left -= copy;
              put += copy;
              state.length -= copy;
              break;
            }
            state.mode = TYPE;
            break;
          case TABLE:
            while (bits < 14) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.nlen = (hold & 31) + 257;
            hold >>>= 5;
            bits -= 5;
            state.ndist = (hold & 31) + 1;
            hold >>>= 5;
            bits -= 5;
            state.ncode = (hold & 15) + 4;
            hold >>>= 4;
            bits -= 4;
            if (state.nlen > 286 || state.ndist > 30) {
              strm.msg = "too many length or distance symbols";
              state.mode = BAD;
              break;
            }
            state.have = 0;
            state.mode = LENLENS;
          case LENLENS:
            while (state.have < state.ncode) {
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.lens[order[state.have++]] = hold & 7;
              hold >>>= 3;
              bits -= 3;
            }
            while (state.have < 19) {
              state.lens[order[state.have++]] = 0;
            }
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = { bits: state.lenbits };
            ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
              strm.msg = "invalid code lengths set";
              state.mode = BAD;
              break;
            }
            state.have = 0;
            state.mode = CODELENS;
          case CODELENS:
            while (state.have < state.nlen + state.ndist) {
              for (;; ) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_val < 16) {
                hold >>>= here_bits;
                bits -= here_bits;
                state.lens[state.have++] = here_val;
              } else {
                if (here_val === 16) {
                  n = here_bits + 2;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  if (state.have === 0) {
                    strm.msg = "invalid bit length repeat";
                    state.mode = BAD;
                    break;
                  }
                  len = state.lens[state.have - 1];
                  copy = 3 + (hold & 3);
                  hold >>>= 2;
                  bits -= 2;
                } else if (here_val === 17) {
                  n = here_bits + 3;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  len = 0;
                  copy = 3 + (hold & 7);
                  hold >>>= 3;
                  bits -= 3;
                } else {
                  n = here_bits + 7;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  len = 0;
                  copy = 11 + (hold & 127);
                  hold >>>= 7;
                  bits -= 7;
                }
                if (state.have + copy > state.nlen + state.ndist) {
                  strm.msg = "invalid bit length repeat";
                  state.mode = BAD;
                  break;
                }
                while (copy--) {
                  state.lens[state.have++] = len;
                }
              }
            }
            if (state.mode === BAD) {
              break;
            }
            if (state.lens[256] === 0) {
              strm.msg = "invalid code -- missing end-of-block";
              state.mode = BAD;
              break;
            }
            state.lenbits = 9;
            opts = { bits: state.lenbits };
            ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
              strm.msg = "invalid literal/lengths set";
              state.mode = BAD;
              break;
            }
            state.distbits = 6;
            state.distcode = state.distdyn;
            opts = { bits: state.distbits };
            ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            state.distbits = opts.bits;
            if (ret) {
              strm.msg = "invalid distances set";
              state.mode = BAD;
              break;
            }
            state.mode = LEN_;
            if (flush === Z_TREES) {
              break inf_leave;
            }
          case LEN_:
            state.mode = LEN;
          case LEN:
            if (have >= 6 && left >= 258) {
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              inflate_fast(strm, _out);
              put = strm.next_out;
              output = strm.output;
              left = strm.avail_out;
              next = strm.next_in;
              input = strm.input;
              have = strm.avail_in;
              hold = state.hold;
              bits = state.bits;
              if (state.mode === TYPE) {
                state.back = -1;
              }
              break;
            }
            state.back = 0;
            for (;; ) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (here_op && (here_op & 240) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (;; ) {
                here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (last_bits + here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              hold >>>= last_bits;
              bits -= last_bits;
              state.back += last_bits;
            }
            hold >>>= here_bits;
            bits -= here_bits;
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
              state.mode = LIT;
              break;
            }
            if (here_op & 32) {
              state.back = -1;
              state.mode = TYPE;
              break;
            }
            if (here_op & 64) {
              strm.msg = "invalid literal/length code";
              state.mode = BAD;
              break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
          case LENEXT:
            if (state.extra) {
              n = state.extra;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.length += hold & (1 << state.extra) - 1;
              hold >>>= state.extra;
              bits -= state.extra;
              state.back += state.extra;
            }
            state.was = state.length;
            state.mode = DIST;
          case DIST:
            for (;; ) {
              here = state.distcode[hold & (1 << state.distbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if ((here_op & 240) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (;; ) {
                here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (last_bits + here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              hold >>>= last_bits;
              bits -= last_bits;
              state.back += last_bits;
            }
            hold >>>= here_bits;
            bits -= here_bits;
            state.back += here_bits;
            if (here_op & 64) {
              strm.msg = "invalid distance code";
              state.mode = BAD;
              break;
            }
            state.offset = here_val;
            state.extra = here_op & 15;
            state.mode = DISTEXT;
          case DISTEXT:
            if (state.extra) {
              n = state.extra;
              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.offset += hold & (1 << state.extra) - 1;
              hold >>>= state.extra;
              bits -= state.extra;
              state.back += state.extra;
            }
            if (state.offset > state.dmax) {
              strm.msg = "invalid distance too far back";
              state.mode = BAD;
              break;
            }
            state.mode = MATCH;
          case MATCH:
            if (left === 0) {
              break inf_leave;
            }
            copy = _out - left;
            if (state.offset > copy) {
              copy = state.offset - copy;
              if (copy > state.whave) {
                if (state.sane) {
                  strm.msg = "invalid distance too far back";
                  state.mode = BAD;
                  break;
                }
              }
              if (copy > state.wnext) {
                copy -= state.wnext;
                from = state.wsize - copy;
              } else {
                from = state.wnext - copy;
              }
              if (copy > state.length) {
                copy = state.length;
              }
              from_source = state.window;
            } else {
              from_source = output;
              from = put - state.offset;
              copy = state.length;
            }
            if (copy > left) {
              copy = left;
            }
            left -= copy;
            state.length -= copy;
            do {
              output[put++] = from_source[from++];
            } while (--copy);
            if (state.length === 0) {
              state.mode = LEN;
            }
            break;
          case LIT:
            if (left === 0) {
              break inf_leave;
            }
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
          case CHECK:
            if (state.wrap) {
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold |= input[next++] << bits;
                bits += 8;
              }
              _out -= left;
              strm.total_out += _out;
              state.total += _out;
              if (_out) {
                strm.adler = state.check = state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
              }
              _out = left;
              if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                strm.msg = "incorrect data check";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            state.mode = LENGTH;
          case LENGTH:
            if (state.wrap && state.flags) {
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (hold !== (state.total & 4294967295)) {
                strm.msg = "incorrect length check";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            state.mode = DONE;
          case DONE:
            ret = Z_STREAM_END;
            break inf_leave;
          case BAD:
            ret = Z_DATA_ERROR;
            break inf_leave;
          case MEM:
            return Z_MEM_ERROR;
          case SYNC:
          default:
            return Z_STREAM_ERROR;
        }
      }
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
      if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
        state.mode = MEM;
        return Z_MEM_ERROR;
      }
    }
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap && _out) {
      strm.adler = state.check = state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
    }
    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
    if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
      ret = Z_BUF_ERROR;
    }
    return ret;
  }
  function inflateEnd(strm) {
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    var state = strm.state;
    if (state.window) {
      state.window = null;
    }
    strm.state = null;
    return Z_OK;
  }
  function inflateGetHeader(strm, head) {
    var state;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if ((state.wrap & 2) === 0) {
      return Z_STREAM_ERROR;
    }
    state.head = head;
    head.done = false;
    return Z_OK;
  }
  function inflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var state;
    var dictid;
    var ret;
    if (!strm || !strm.state) {
      return Z_STREAM_ERROR;
    }
    state = strm.state;
    if (state.wrap !== 0 && state.mode !== DICT) {
      return Z_STREAM_ERROR;
    }
    if (state.mode === DICT) {
      dictid = 1;
      dictid = adler32(dictid, dictionary, dictLength, 0);
      if (dictid !== state.check) {
        return Z_DATA_ERROR;
      }
    }
    ret = updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
    state.havedict = 1;
    return Z_OK;
  }
  var utils = require_common();
  var adler32 = require_adler32();
  var crc32 = require_crc322();
  var inflate_fast = require_inffast();
  var inflate_table = require_inftrees();
  var CODES = 0;
  var LENS = 1;
  var DISTS = 2;
  var Z_FINISH = 4;
  var Z_BLOCK = 5;
  var Z_TREES = 6;
  var Z_OK = 0;
  var Z_STREAM_END = 1;
  var Z_NEED_DICT = 2;
  var Z_STREAM_ERROR = -2;
  var Z_DATA_ERROR = -3;
  var Z_MEM_ERROR = -4;
  var Z_BUF_ERROR = -5;
  var Z_DEFLATED = 8;
  var HEAD = 1;
  var FLAGS = 2;
  var TIME = 3;
  var OS = 4;
  var EXLEN = 5;
  var EXTRA = 6;
  var NAME = 7;
  var COMMENT = 8;
  var HCRC = 9;
  var DICTID = 10;
  var DICT = 11;
  var TYPE = 12;
  var TYPEDO = 13;
  var STORED = 14;
  var COPY_ = 15;
  var COPY = 16;
  var TABLE = 17;
  var LENLENS = 18;
  var CODELENS = 19;
  var LEN_ = 20;
  var LEN = 21;
  var LENEXT = 22;
  var DIST = 23;
  var DISTEXT = 24;
  var MATCH = 25;
  var LIT = 26;
  var CHECK = 27;
  var LENGTH = 28;
  var DONE = 29;
  var BAD = 30;
  var MEM = 31;
  var SYNC = 32;
  var ENOUGH_LENS = 852;
  var ENOUGH_DISTS = 592;
  var MAX_WBITS = 15;
  var DEF_WBITS = MAX_WBITS;
  var virgin = true;
  var lenfix;
  var distfix;
  exports.inflateReset = inflateReset;
  exports.inflateReset2 = inflateReset2;
  exports.inflateResetKeep = inflateResetKeep;
  exports.inflateInit = inflateInit;
  exports.inflateInit2 = inflateInit2;
  exports.inflate = inflate;
  exports.inflateEnd = inflateEnd;
  exports.inflateGetHeader = inflateGetHeader;
  exports.inflateSetDictionary = inflateSetDictionary;
  exports.inflateInfo = "pako inflate (from Nodeca project)";
});

// ../../node_modules/pako/lib/zlib/constants.js
var require_constants = __commonJS((exports, module) => {
  module.exports = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
  };
});

// ../../node_modules/pako/lib/zlib/gzheader.js
var require_gzheader = __commonJS((exports, module) => {
  function GZheader() {
    this.text = 0;
    this.time = 0;
    this.xflags = 0;
    this.os = 0;
    this.extra = null;
    this.extra_len = 0;
    this.name = "";
    this.comment = "";
    this.hcrc = 0;
    this.done = false;
  }
  module.exports = GZheader;
});

// ../../node_modules/pako/lib/inflate.js
var require_inflate2 = __commonJS((exports) => {
  function Inflate(options) {
    if (!(this instanceof Inflate))
      return new Inflate(options);
    this.options = utils.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, options || {});
    var opt = this.options;
    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
      opt.windowBits = -opt.windowBits;
      if (opt.windowBits === 0) {
        opt.windowBits = -15;
      }
    }
    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
      opt.windowBits += 32;
    }
    if (opt.windowBits > 15 && opt.windowBits < 48) {
      if ((opt.windowBits & 15) === 0) {
        opt.windowBits |= 15;
      }
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new ZStream;
    this.strm.avail_out = 0;
    var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);
    if (status !== c.Z_OK) {
      throw new Error(msg[status]);
    }
    this.header = new GZheader;
    zlib_inflate.inflateGetHeader(this.strm, this.header);
    if (opt.dictionary) {
      if (typeof opt.dictionary === "string") {
        opt.dictionary = strings.string2buf(opt.dictionary);
      } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
        opt.dictionary = new Uint8Array(opt.dictionary);
      }
      if (opt.raw) {
        status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
        if (status !== c.Z_OK) {
          throw new Error(msg[status]);
        }
      }
    }
  }
  function inflate(input, options) {
    var inflator = new Inflate(options);
    inflator.push(input, true);
    if (inflator.err) {
      throw inflator.msg || msg[inflator.err];
    }
    return inflator.result;
  }
  function inflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return inflate(input, options);
  }
  var zlib_inflate = require_inflate();
  var utils = require_common();
  var strings = require_strings();
  var c = require_constants();
  var msg = require_messages();
  var ZStream = require_zstream();
  var GZheader = require_gzheader();
  var toString = Object.prototype.toString;
  Inflate.prototype.push = function(data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var dictionary = this.options.dictionary;
    var status, _mode;
    var next_out_utf8, tail, utf8str;
    var allowBufError = false;
    if (this.ended) {
      return false;
    }
    _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
    if (typeof data === "string") {
      strm.input = strings.binstring2buf(data);
    } else if (toString.call(data) === "[object ArrayBuffer]") {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    do {
      if (strm.avail_out === 0) {
        strm.output = new utils.Buf8(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }
      status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
      if (status === c.Z_NEED_DICT && dictionary) {
        status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
      }
      if (status === c.Z_BUF_ERROR && allowBufError === true) {
        status = c.Z_OK;
        allowBufError = false;
      }
      if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
        this.onEnd(status);
        this.ended = true;
        return false;
      }
      if (strm.next_out) {
        if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
          if (this.options.to === "string") {
            next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
            tail = strm.next_out - next_out_utf8;
            utf8str = strings.buf2string(strm.output, next_out_utf8);
            strm.next_out = tail;
            strm.avail_out = chunkSize - tail;
            if (tail) {
              utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
            }
            this.onData(utf8str);
          } else {
            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
          }
        }
      }
      if (strm.avail_in === 0 && strm.avail_out === 0) {
        allowBufError = true;
      }
    } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
    if (status === c.Z_STREAM_END) {
      _mode = c.Z_FINISH;
    }
    if (_mode === c.Z_FINISH) {
      status = zlib_inflate.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === c.Z_OK;
    }
    if (_mode === c.Z_SYNC_FLUSH) {
      this.onEnd(c.Z_OK);
      strm.avail_out = 0;
      return true;
    }
    return true;
  };
  Inflate.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
  };
  Inflate.prototype.onEnd = function(status) {
    if (status === c.Z_OK) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = utils.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  exports.Inflate = Inflate;
  exports.inflate = inflate;
  exports.inflateRaw = inflateRaw;
  exports.ungzip = inflate;
});

// ../../node_modules/pako/index.js
var require_pako = __commonJS((exports, module) => {
  var assign = require_common().assign;
  var deflate = require_deflate2();
  var inflate = require_inflate2();
  var constants = require_constants();
  var pako = {};
  assign(pako, deflate, inflate, constants);
  module.exports = pako;
});

// ../../node_modules/jszip/lib/flate.js
var require_flate = __commonJS((exports) => {
  function FlateWorker(action, options) {
    GenericWorker.call(this, "FlateWorker/" + action);
    this._pako = null;
    this._pakoAction = action;
    this._pakoOptions = options;
    this.meta = {};
  }
  var USE_TYPEDARRAY = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Uint32Array !== "undefined";
  var pako = require_pako();
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  var ARRAY_TYPE = USE_TYPEDARRAY ? "uint8array" : "array";
  exports.magic = "\b\0";
  utils.inherits(FlateWorker, GenericWorker);
  FlateWorker.prototype.processChunk = function(chunk) {
    this.meta = chunk.meta;
    if (this._pako === null) {
      this._createPako();
    }
    this._pako.push(utils.transformTo(ARRAY_TYPE, chunk.data), false);
  };
  FlateWorker.prototype.flush = function() {
    GenericWorker.prototype.flush.call(this);
    if (this._pako === null) {
      this._createPako();
    }
    this._pako.push([], true);
  };
  FlateWorker.prototype.cleanUp = function() {
    GenericWorker.prototype.cleanUp.call(this);
    this._pako = null;
  };
  FlateWorker.prototype._createPako = function() {
    this._pako = new pako[this._pakoAction]({
      raw: true,
      level: this._pakoOptions.level || -1
    });
    var self2 = this;
    this._pako.onData = function(data) {
      self2.push({
        data,
        meta: self2.meta
      });
    };
  };
  exports.compressWorker = function(compressionOptions) {
    return new FlateWorker("Deflate", compressionOptions);
  };
  exports.uncompressWorker = function() {
    return new FlateWorker("Inflate", {});
  };
});

// ../../node_modules/jszip/lib/compressions.js
var require_compressions = __commonJS((exports) => {
  var GenericWorker = require_GenericWorker();
  exports.STORE = {
    magic: "\0\0",
    compressWorker: function() {
      return new GenericWorker("STORE compression");
    },
    uncompressWorker: function() {
      return new GenericWorker("STORE decompression");
    }
  };
  exports.DEFLATE = require_flate();
});

// ../../node_modules/jszip/lib/signature.js
var require_signature = __commonJS((exports) => {
  exports.LOCAL_FILE_HEADER = "PK\x03\x04";
  exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
  exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
  exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
  exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
  exports.DATA_DESCRIPTOR = "PK\x07\b";
});

// ../../node_modules/jszip/lib/generate/ZipFileWorker.js
var require_ZipFileWorker = __commonJS((exports, module) => {
  function ZipFileWorker(streamFiles, comment, platform, encodeFileName) {
    GenericWorker.call(this, "ZipFileWorker");
    this.bytesWritten = 0;
    this.zipComment = comment;
    this.zipPlatform = platform;
    this.encodeFileName = encodeFileName;
    this.streamFiles = streamFiles;
    this.accumulate = false;
    this.contentBuffer = [];
    this.dirRecords = [];
    this.currentSourceOffset = 0;
    this.entriesCount = 0;
    this.currentFile = null;
    this._sources = [];
  }
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  var utf8 = require_utf8();
  var crc32 = require_crc32();
  var signature = require_signature();
  var decToHex = function(dec, bytes) {
    var hex = "", i;
    for (i = 0;i < bytes; i++) {
      hex += String.fromCharCode(dec & 255);
      dec = dec >>> 8;
    }
    return hex;
  };
  var generateUnixExternalFileAttr = function(unixPermissions, isDir) {
    var result = unixPermissions;
    if (!unixPermissions) {
      result = isDir ? 16893 : 33204;
    }
    return (result & 65535) << 16;
  };
  var generateDosExternalFileAttr = function(dosPermissions) {
    return (dosPermissions || 0) & 63;
  };
  var generateZipParts = function(streamInfo, streamedContent, streamingEnded, offset, platform, encodeFileName) {
    var file = streamInfo["file"], compression = streamInfo["compression"], useCustomEncoding = encodeFileName !== utf8.utf8encode, encodedFileName = utils.transformTo("string", encodeFileName(file.name)), utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)), comment = file.comment, encodedComment = utils.transformTo("string", encodeFileName(comment)), utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)), useUTF8ForFileName = utfEncodedFileName.length !== file.name.length, useUTF8ForComment = utfEncodedComment.length !== comment.length, dosTime, dosDate, extraFields = "", unicodePathExtraField = "", unicodeCommentExtraField = "", dir = file.dir, date = file.date;
    var dataInfo = {
      crc32: 0,
      compressedSize: 0,
      uncompressedSize: 0
    };
    if (!streamedContent || streamingEnded) {
      dataInfo.crc32 = streamInfo["crc32"];
      dataInfo.compressedSize = streamInfo["compressedSize"];
      dataInfo.uncompressedSize = streamInfo["uncompressedSize"];
    }
    var bitflag = 0;
    if (streamedContent) {
      bitflag |= 8;
    }
    if (!useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment)) {
      bitflag |= 2048;
    }
    var extFileAttr = 0;
    var versionMadeBy = 0;
    if (dir) {
      extFileAttr |= 16;
    }
    if (platform === "UNIX") {
      versionMadeBy = 798;
      extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
    } else {
      versionMadeBy = 20;
      extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
    }
    dosTime = date.getUTCHours();
    dosTime = dosTime << 6;
    dosTime = dosTime | date.getUTCMinutes();
    dosTime = dosTime << 5;
    dosTime = dosTime | date.getUTCSeconds() / 2;
    dosDate = date.getUTCFullYear() - 1980;
    dosDate = dosDate << 4;
    dosDate = dosDate | date.getUTCMonth() + 1;
    dosDate = dosDate << 5;
    dosDate = dosDate | date.getUTCDate();
    if (useUTF8ForFileName) {
      unicodePathExtraField = decToHex(1, 1) + decToHex(crc32(encodedFileName), 4) + utfEncodedFileName;
      extraFields += "up" + decToHex(unicodePathExtraField.length, 2) + unicodePathExtraField;
    }
    if (useUTF8ForComment) {
      unicodeCommentExtraField = decToHex(1, 1) + decToHex(crc32(encodedComment), 4) + utfEncodedComment;
      extraFields += "uc" + decToHex(unicodeCommentExtraField.length, 2) + unicodeCommentExtraField;
    }
    var header = "";
    header += `
\0`;
    header += decToHex(bitflag, 2);
    header += compression.magic;
    header += decToHex(dosTime, 2);
    header += decToHex(dosDate, 2);
    header += decToHex(dataInfo.crc32, 4);
    header += decToHex(dataInfo.compressedSize, 4);
    header += decToHex(dataInfo.uncompressedSize, 4);
    header += decToHex(encodedFileName.length, 2);
    header += decToHex(extraFields.length, 2);
    var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;
    var dirRecord = signature.CENTRAL_FILE_HEADER + decToHex(versionMadeBy, 2) + header + decToHex(encodedComment.length, 2) + "\0\0" + "\0\0" + decToHex(extFileAttr, 4) + decToHex(offset, 4) + encodedFileName + extraFields + encodedComment;
    return {
      fileRecord,
      dirRecord
    };
  };
  var generateCentralDirectoryEnd = function(entriesCount, centralDirLength, localDirLength, comment, encodeFileName) {
    var dirEnd = "";
    var encodedComment = utils.transformTo("string", encodeFileName(comment));
    dirEnd = signature.CENTRAL_DIRECTORY_END + "\0\0" + "\0\0" + decToHex(entriesCount, 2) + decToHex(entriesCount, 2) + decToHex(centralDirLength, 4) + decToHex(localDirLength, 4) + decToHex(encodedComment.length, 2) + encodedComment;
    return dirEnd;
  };
  var generateDataDescriptors = function(streamInfo) {
    var descriptor = "";
    descriptor = signature.DATA_DESCRIPTOR + decToHex(streamInfo["crc32"], 4) + decToHex(streamInfo["compressedSize"], 4) + decToHex(streamInfo["uncompressedSize"], 4);
    return descriptor;
  };
  utils.inherits(ZipFileWorker, GenericWorker);
  ZipFileWorker.prototype.push = function(chunk) {
    var currentFilePercent = chunk.meta.percent || 0;
    var entriesCount = this.entriesCount;
    var remainingFiles = this._sources.length;
    if (this.accumulate) {
      this.contentBuffer.push(chunk);
    } else {
      this.bytesWritten += chunk.data.length;
      GenericWorker.prototype.push.call(this, {
        data: chunk.data,
        meta: {
          currentFile: this.currentFile,
          percent: entriesCount ? (currentFilePercent + 100 * (entriesCount - remainingFiles - 1)) / entriesCount : 100
        }
      });
    }
  };
  ZipFileWorker.prototype.openedSource = function(streamInfo) {
    this.currentSourceOffset = this.bytesWritten;
    this.currentFile = streamInfo["file"].name;
    var streamedContent = this.streamFiles && !streamInfo["file"].dir;
    if (streamedContent) {
      var record = generateZipParts(streamInfo, streamedContent, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
      this.push({
        data: record.fileRecord,
        meta: { percent: 0 }
      });
    } else {
      this.accumulate = true;
    }
  };
  ZipFileWorker.prototype.closedSource = function(streamInfo) {
    this.accumulate = false;
    var streamedContent = this.streamFiles && !streamInfo["file"].dir;
    var record = generateZipParts(streamInfo, streamedContent, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
    this.dirRecords.push(record.dirRecord);
    if (streamedContent) {
      this.push({
        data: generateDataDescriptors(streamInfo),
        meta: { percent: 100 }
      });
    } else {
      this.push({
        data: record.fileRecord,
        meta: { percent: 0 }
      });
      while (this.contentBuffer.length) {
        this.push(this.contentBuffer.shift());
      }
    }
    this.currentFile = null;
  };
  ZipFileWorker.prototype.flush = function() {
    var localDirLength = this.bytesWritten;
    for (var i = 0;i < this.dirRecords.length; i++) {
      this.push({
        data: this.dirRecords[i],
        meta: { percent: 100 }
      });
    }
    var centralDirLength = this.bytesWritten - localDirLength;
    var dirEnd = generateCentralDirectoryEnd(this.dirRecords.length, centralDirLength, localDirLength, this.zipComment, this.encodeFileName);
    this.push({
      data: dirEnd,
      meta: { percent: 100 }
    });
  };
  ZipFileWorker.prototype.prepareNextSource = function() {
    this.previous = this._sources.shift();
    this.openedSource(this.previous.streamInfo);
    if (this.isPaused) {
      this.previous.pause();
    } else {
      this.previous.resume();
    }
  };
  ZipFileWorker.prototype.registerPrevious = function(previous) {
    this._sources.push(previous);
    var self2 = this;
    previous.on("data", function(chunk) {
      self2.processChunk(chunk);
    });
    previous.on("end", function() {
      self2.closedSource(self2.previous.streamInfo);
      if (self2._sources.length) {
        self2.prepareNextSource();
      } else {
        self2.end();
      }
    });
    previous.on("error", function(e) {
      self2.error(e);
    });
    return this;
  };
  ZipFileWorker.prototype.resume = function() {
    if (!GenericWorker.prototype.resume.call(this)) {
      return false;
    }
    if (!this.previous && this._sources.length) {
      this.prepareNextSource();
      return true;
    }
    if (!this.previous && !this._sources.length && !this.generatedError) {
      this.end();
      return true;
    }
  };
  ZipFileWorker.prototype.error = function(e) {
    var sources = this._sources;
    if (!GenericWorker.prototype.error.call(this, e)) {
      return false;
    }
    for (var i = 0;i < sources.length; i++) {
      try {
        sources[i].error(e);
      } catch (e2) {
      }
    }
    return true;
  };
  ZipFileWorker.prototype.lock = function() {
    GenericWorker.prototype.lock.call(this);
    var sources = this._sources;
    for (var i = 0;i < sources.length; i++) {
      sources[i].lock();
    }
  };
  module.exports = ZipFileWorker;
});

// ../../node_modules/jszip/lib/generate/index.js
var require_generate = __commonJS((exports) => {
  var compressions = require_compressions();
  var ZipFileWorker = require_ZipFileWorker();
  var getCompression = function(fileCompression, zipCompression) {
    var compressionName = fileCompression || zipCompression;
    var compression = compressions[compressionName];
    if (!compression) {
      throw new Error(compressionName + " is not a valid compression method !");
    }
    return compression;
  };
  exports.generateWorker = function(zip, options, comment) {
    var zipFileWorker = new ZipFileWorker(options.streamFiles, comment, options.platform, options.encodeFileName);
    var entriesCount = 0;
    try {
      zip.forEach(function(relativePath, file) {
        entriesCount++;
        var compression = getCompression(file.options.compression, options.compression);
        var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
        var { dir, date } = file;
        file._compressWorker(compression, compressionOptions).withStreamInfo("file", {
          name: relativePath,
          dir,
          date,
          comment: file.comment || "",
          unixPermissions: file.unixPermissions,
          dosPermissions: file.dosPermissions
        }).pipe(zipFileWorker);
      });
      zipFileWorker.entriesCount = entriesCount;
    } catch (e) {
      zipFileWorker.error(e);
    }
    return zipFileWorker;
  };
});

// ../../node_modules/jszip/lib/nodejs/NodejsStreamInputAdapter.js
var require_NodejsStreamInputAdapter = __commonJS((exports, module) => {
  function NodejsStreamInputAdapter(filename, stream) {
    GenericWorker.call(this, "Nodejs stream input adapter for " + filename);
    this._upstreamEnded = false;
    this._bindStream(stream);
  }
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  utils.inherits(NodejsStreamInputAdapter, GenericWorker);
  NodejsStreamInputAdapter.prototype._bindStream = function(stream) {
    var self2 = this;
    this._stream = stream;
    stream.pause();
    stream.on("data", function(chunk) {
      self2.push({
        data: chunk,
        meta: {
          percent: 0
        }
      });
    }).on("error", function(e) {
      if (self2.isPaused) {
        this.generatedError = e;
      } else {
        self2.error(e);
      }
    }).on("end", function() {
      if (self2.isPaused) {
        self2._upstreamEnded = true;
      } else {
        self2.end();
      }
    });
  };
  NodejsStreamInputAdapter.prototype.pause = function() {
    if (!GenericWorker.prototype.pause.call(this)) {
      return false;
    }
    this._stream.pause();
    return true;
  };
  NodejsStreamInputAdapter.prototype.resume = function() {
    if (!GenericWorker.prototype.resume.call(this)) {
      return false;
    }
    if (this._upstreamEnded) {
      this.end();
    } else {
      this._stream.resume();
    }
    return true;
  };
  module.exports = NodejsStreamInputAdapter;
});

// ../../node_modules/jszip/lib/object.js
var require_object = __commonJS((exports, module) => {
  function isRegExp(object) {
    return Object.prototype.toString.call(object) === "[object RegExp]";
  }
  var utf8 = require_utf8();
  var utils = require_utils();
  var GenericWorker = require_GenericWorker();
  var StreamHelper = require_StreamHelper();
  var defaults = require_defaults();
  var CompressedObject = require_compressedObject();
  var ZipObject = require_zipObject();
  var generate = require_generate();
  var nodejsUtils = require_nodejsUtils();
  var NodejsStreamInputAdapter = require_NodejsStreamInputAdapter();
  var fileAdd = function(name, data, originalOptions) {
    var dataType = utils.getTypeOf(data), parent;
    var o = utils.extend(originalOptions || {}, defaults);
    o.date = o.date || new Date;
    if (o.compression !== null) {
      o.compression = o.compression.toUpperCase();
    }
    if (typeof o.unixPermissions === "string") {
      o.unixPermissions = parseInt(o.unixPermissions, 8);
    }
    if (o.unixPermissions && o.unixPermissions & 16384) {
      o.dir = true;
    }
    if (o.dosPermissions && o.dosPermissions & 16) {
      o.dir = true;
    }
    if (o.dir) {
      name = forceTrailingSlash(name);
    }
    if (o.createFolders && (parent = parentFolder(name))) {
      folderAdd.call(this, parent, true);
    }
    var isUnicodeString = dataType === "string" && o.binary === false && o.base64 === false;
    if (!originalOptions || typeof originalOptions.binary === "undefined") {
      o.binary = !isUnicodeString;
    }
    var isCompressedEmpty = data instanceof CompressedObject && data.uncompressedSize === 0;
    if (isCompressedEmpty || o.dir || !data || data.length === 0) {
      o.base64 = false;
      o.binary = true;
      data = "";
      o.compression = "STORE";
      dataType = "string";
    }
    var zipObjectContent = null;
    if (data instanceof CompressedObject || data instanceof GenericWorker) {
      zipObjectContent = data;
    } else if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
      zipObjectContent = new NodejsStreamInputAdapter(name, data);
    } else {
      zipObjectContent = utils.prepareContent(name, data, o.binary, o.optimizedBinaryString, o.base64);
    }
    var object = new ZipObject(name, zipObjectContent, o);
    this.files[name] = object;
  };
  var parentFolder = function(path) {
    if (path.slice(-1) === "/") {
      path = path.substring(0, path.length - 1);
    }
    var lastSlash = path.lastIndexOf("/");
    return lastSlash > 0 ? path.substring(0, lastSlash) : "";
  };
  var forceTrailingSlash = function(path) {
    if (path.slice(-1) !== "/") {
      path += "/";
    }
    return path;
  };
  var folderAdd = function(name, createFolders) {
    createFolders = typeof createFolders !== "undefined" ? createFolders : defaults.createFolders;
    name = forceTrailingSlash(name);
    if (!this.files[name]) {
      fileAdd.call(this, name, null, {
        dir: true,
        createFolders
      });
    }
    return this.files[name];
  };
  var out = {
    load: function() {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    forEach: function(cb) {
      var filename, relativePath, file;
      for (filename in this.files) {
        file = this.files[filename];
        relativePath = filename.slice(this.root.length, filename.length);
        if (relativePath && filename.slice(0, this.root.length) === this.root) {
          cb(relativePath, file);
        }
      }
    },
    filter: function(search) {
      var result = [];
      this.forEach(function(relativePath, entry) {
        if (search(relativePath, entry)) {
          result.push(entry);
        }
      });
      return result;
    },
    file: function(name, data, o) {
      if (arguments.length === 1) {
        if (isRegExp(name)) {
          var regexp = name;
          return this.filter(function(relativePath, file) {
            return !file.dir && regexp.test(relativePath);
          });
        } else {
          var obj = this.files[this.root + name];
          if (obj && !obj.dir) {
            return obj;
          } else {
            return null;
          }
        }
      } else {
        name = this.root + name;
        fileAdd.call(this, name, data, o);
      }
      return this;
    },
    folder: function(arg) {
      if (!arg) {
        return this;
      }
      if (isRegExp(arg)) {
        return this.filter(function(relativePath, file) {
          return file.dir && arg.test(relativePath);
        });
      }
      var name = this.root + arg;
      var newFolder = folderAdd.call(this, name);
      var ret = this.clone();
      ret.root = newFolder.name;
      return ret;
    },
    remove: function(name) {
      name = this.root + name;
      var file = this.files[name];
      if (!file) {
        if (name.slice(-1) !== "/") {
          name += "/";
        }
        file = this.files[name];
      }
      if (file && !file.dir) {
        delete this.files[name];
      } else {
        var kids = this.filter(function(relativePath, file2) {
          return file2.name.slice(0, name.length) === name;
        });
        for (var i = 0;i < kids.length; i++) {
          delete this.files[kids[i].name];
        }
      }
      return this;
    },
    generate: function() {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    generateInternalStream: function(options) {
      var worker, opts = {};
      try {
        opts = utils.extend(options || {}, {
          streamFiles: false,
          compression: "STORE",
          compressionOptions: null,
          type: "",
          platform: "DOS",
          comment: null,
          mimeType: "application/zip",
          encodeFileName: utf8.utf8encode
        });
        opts.type = opts.type.toLowerCase();
        opts.compression = opts.compression.toUpperCase();
        if (opts.type === "binarystring") {
          opts.type = "string";
        }
        if (!opts.type) {
          throw new Error("No output type specified.");
        }
        utils.checkSupport(opts.type);
        if (opts.platform === "darwin" || opts.platform === "freebsd" || opts.platform === "linux" || opts.platform === "sunos") {
          opts.platform = "UNIX";
        }
        if (opts.platform === "win32") {
          opts.platform = "DOS";
        }
        var comment = opts.comment || this.comment || "";
        worker = generate.generateWorker(this, opts, comment);
      } catch (e) {
        worker = new GenericWorker("error");
        worker.error(e);
      }
      return new StreamHelper(worker, opts.type || "string", opts.mimeType);
    },
    generateAsync: function(options, onUpdate) {
      return this.generateInternalStream(options).accumulate(onUpdate);
    },
    generateNodeStream: function(options, onUpdate) {
      options = options || {};
      if (!options.type) {
        options.type = "nodebuffer";
      }
      return this.generateInternalStream(options).toNodejsStream(onUpdate);
    }
  };
  module.exports = out;
});

// ../../node_modules/jszip/lib/reader/DataReader.js
var require_DataReader = __commonJS((exports, module) => {
  function DataReader(data) {
    this.data = data;
    this.length = data.length;
    this.index = 0;
    this.zero = 0;
  }
  var utils = require_utils();
  DataReader.prototype = {
    checkOffset: function(offset) {
      this.checkIndex(this.index + offset);
    },
    checkIndex: function(newIndex) {
      if (this.length < this.zero + newIndex || newIndex < 0) {
        throw new Error("End of data reached (data length = " + this.length + ", asked index = " + newIndex + "). Corrupted zip ?");
      }
    },
    setIndex: function(newIndex) {
      this.checkIndex(newIndex);
      this.index = newIndex;
    },
    skip: function(n) {
      this.setIndex(this.index + n);
    },
    byteAt: function() {
    },
    readInt: function(size) {
      var result = 0, i;
      this.checkOffset(size);
      for (i = this.index + size - 1;i >= this.index; i--) {
        result = (result << 8) + this.byteAt(i);
      }
      this.index += size;
      return result;
    },
    readString: function(size) {
      return utils.transformTo("string", this.readData(size));
    },
    readData: function() {
    },
    lastIndexOfSignature: function() {
    },
    readAndCheckSignature: function() {
    },
    readDate: function() {
      var dostime = this.readInt(4);
      return new Date(Date.UTC((dostime >> 25 & 127) + 1980, (dostime >> 21 & 15) - 1, dostime >> 16 & 31, dostime >> 11 & 31, dostime >> 5 & 63, (dostime & 31) << 1));
    }
  };
  module.exports = DataReader;
});

// ../../node_modules/jszip/lib/reader/ArrayReader.js
var require_ArrayReader = __commonJS((exports, module) => {
  function ArrayReader(data) {
    DataReader.call(this, data);
    for (var i = 0;i < this.data.length; i++) {
      data[i] = data[i] & 255;
    }
  }
  var DataReader = require_DataReader();
  var utils = require_utils();
  utils.inherits(ArrayReader, DataReader);
  ArrayReader.prototype.byteAt = function(i) {
    return this.data[this.zero + i];
  };
  ArrayReader.prototype.lastIndexOfSignature = function(sig) {
    var sig0 = sig.charCodeAt(0), sig1 = sig.charCodeAt(1), sig2 = sig.charCodeAt(2), sig3 = sig.charCodeAt(3);
    for (var i = this.length - 4;i >= 0; --i) {
      if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
        return i - this.zero;
      }
    }
    return -1;
  };
  ArrayReader.prototype.readAndCheckSignature = function(sig) {
    var sig0 = sig.charCodeAt(0), sig1 = sig.charCodeAt(1), sig2 = sig.charCodeAt(2), sig3 = sig.charCodeAt(3), data = this.readData(4);
    return sig0 === data[0] && sig1 === data[1] && sig2 === data[2] && sig3 === data[3];
  };
  ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if (size === 0) {
      return [];
    }
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
  };
  module.exports = ArrayReader;
});

// ../../node_modules/jszip/lib/reader/StringReader.js
var require_StringReader = __commonJS((exports, module) => {
  function StringReader(data) {
    DataReader.call(this, data);
  }
  var DataReader = require_DataReader();
  var utils = require_utils();
  utils.inherits(StringReader, DataReader);
  StringReader.prototype.byteAt = function(i) {
    return this.data.charCodeAt(this.zero + i);
  };
  StringReader.prototype.lastIndexOfSignature = function(sig) {
    return this.data.lastIndexOf(sig) - this.zero;
  };
  StringReader.prototype.readAndCheckSignature = function(sig) {
    var data = this.readData(4);
    return sig === data;
  };
  StringReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
  };
  module.exports = StringReader;
});

// ../../node_modules/jszip/lib/reader/Uint8ArrayReader.js
var require_Uint8ArrayReader = __commonJS((exports, module) => {
  function Uint8ArrayReader(data) {
    ArrayReader.call(this, data);
  }
  var ArrayReader = require_ArrayReader();
  var utils = require_utils();
  utils.inherits(Uint8ArrayReader, ArrayReader);
  Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if (size === 0) {
      return new Uint8Array(0);
    }
    var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
  };
  module.exports = Uint8ArrayReader;
});

// ../../node_modules/jszip/lib/reader/NodeBufferReader.js
var require_NodeBufferReader = __commonJS((exports, module) => {
  function NodeBufferReader(data) {
    Uint8ArrayReader.call(this, data);
  }
  var Uint8ArrayReader = require_Uint8ArrayReader();
  var utils = require_utils();
  utils.inherits(NodeBufferReader, Uint8ArrayReader);
  NodeBufferReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
  };
  module.exports = NodeBufferReader;
});

// ../../node_modules/jszip/lib/reader/readerFor.js
var require_readerFor = __commonJS((exports, module) => {
  var utils = require_utils();
  var support = require_support();
  var ArrayReader = require_ArrayReader();
  var StringReader = require_StringReader();
  var NodeBufferReader = require_NodeBufferReader();
  var Uint8ArrayReader = require_Uint8ArrayReader();
  module.exports = function(data) {
    var type = utils.getTypeOf(data);
    utils.checkSupport(type);
    if (type === "string" && !support.uint8array) {
      return new StringReader(data);
    }
    if (type === "nodebuffer") {
      return new NodeBufferReader(data);
    }
    if (support.uint8array) {
      return new Uint8ArrayReader(utils.transformTo("uint8array", data));
    }
    return new ArrayReader(utils.transformTo("array", data));
  };
});

// ../../node_modules/jszip/lib/zipEntry.js
var require_zipEntry = __commonJS((exports, module) => {
  function ZipEntry(options, loadOptions) {
    this.options = options;
    this.loadOptions = loadOptions;
  }
  var readerFor = require_readerFor();
  var utils = require_utils();
  var CompressedObject = require_compressedObject();
  var crc32fn = require_crc32();
  var utf8 = require_utf8();
  var compressions = require_compressions();
  var support = require_support();
  var MADE_BY_DOS = 0;
  var MADE_BY_UNIX = 3;
  var findCompression = function(compressionMethod) {
    for (var method in compressions) {
      if (!Object.prototype.hasOwnProperty.call(compressions, method)) {
        continue;
      }
      if (compressions[method].magic === compressionMethod) {
        return compressions[method];
      }
    }
    return null;
  };
  ZipEntry.prototype = {
    isEncrypted: function() {
      return (this.bitFlag & 1) === 1;
    },
    useUTF8: function() {
      return (this.bitFlag & 2048) === 2048;
    },
    readLocalPart: function(reader) {
      var compression, localExtraFieldsLength;
      reader.skip(22);
      this.fileNameLength = reader.readInt(2);
      localExtraFieldsLength = reader.readInt(2);
      this.fileName = reader.readData(this.fileNameLength);
      reader.skip(localExtraFieldsLength);
      if (this.compressedSize === -1 || this.uncompressedSize === -1) {
        throw new Error("Bug or corrupted zip : didn't get enough information from the central directory " + "(compressedSize === -1 || uncompressedSize === -1)");
      }
      compression = findCompression(this.compressionMethod);
      if (compression === null) {
        throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
      }
      this.decompressed = new CompressedObject(this.compressedSize, this.uncompressedSize, this.crc32, compression, reader.readData(this.compressedSize));
    },
    readCentralPart: function(reader) {
      this.versionMadeBy = reader.readInt(2);
      reader.skip(2);
      this.bitFlag = reader.readInt(2);
      this.compressionMethod = reader.readString(2);
      this.date = reader.readDate();
      this.crc32 = reader.readInt(4);
      this.compressedSize = reader.readInt(4);
      this.uncompressedSize = reader.readInt(4);
      var fileNameLength = reader.readInt(2);
      this.extraFieldsLength = reader.readInt(2);
      this.fileCommentLength = reader.readInt(2);
      this.diskNumberStart = reader.readInt(2);
      this.internalFileAttributes = reader.readInt(2);
      this.externalFileAttributes = reader.readInt(4);
      this.localHeaderOffset = reader.readInt(4);
      if (this.isEncrypted()) {
        throw new Error("Encrypted zip are not supported");
      }
      reader.skip(fileNameLength);
      this.readExtraFields(reader);
      this.parseZIP64ExtraField(reader);
      this.fileComment = reader.readData(this.fileCommentLength);
    },
    processAttributes: function() {
      this.unixPermissions = null;
      this.dosPermissions = null;
      var madeBy = this.versionMadeBy >> 8;
      this.dir = this.externalFileAttributes & 16 ? true : false;
      if (madeBy === MADE_BY_DOS) {
        this.dosPermissions = this.externalFileAttributes & 63;
      }
      if (madeBy === MADE_BY_UNIX) {
        this.unixPermissions = this.externalFileAttributes >> 16 & 65535;
      }
      if (!this.dir && this.fileNameStr.slice(-1) === "/") {
        this.dir = true;
      }
    },
    parseZIP64ExtraField: function() {
      if (!this.extraFields[1]) {
        return;
      }
      var extraReader = readerFor(this.extraFields[1].value);
      if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
        this.uncompressedSize = extraReader.readInt(8);
      }
      if (this.compressedSize === utils.MAX_VALUE_32BITS) {
        this.compressedSize = extraReader.readInt(8);
      }
      if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
        this.localHeaderOffset = extraReader.readInt(8);
      }
      if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
        this.diskNumberStart = extraReader.readInt(4);
      }
    },
    readExtraFields: function(reader) {
      var end = reader.index + this.extraFieldsLength, extraFieldId, extraFieldLength, extraFieldValue;
      if (!this.extraFields) {
        this.extraFields = {};
      }
      while (reader.index + 4 < end) {
        extraFieldId = reader.readInt(2);
        extraFieldLength = reader.readInt(2);
        extraFieldValue = reader.readData(extraFieldLength);
        this.extraFields[extraFieldId] = {
          id: extraFieldId,
          length: extraFieldLength,
          value: extraFieldValue
        };
      }
      reader.setIndex(end);
    },
    handleUTF8: function() {
      var decodeParamType = support.uint8array ? "uint8array" : "array";
      if (this.useUTF8()) {
        this.fileNameStr = utf8.utf8decode(this.fileName);
        this.fileCommentStr = utf8.utf8decode(this.fileComment);
      } else {
        var upath = this.findExtraFieldUnicodePath();
        if (upath !== null) {
          this.fileNameStr = upath;
        } else {
          var fileNameByteArray = utils.transformTo(decodeParamType, this.fileName);
          this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
        }
        var ucomment = this.findExtraFieldUnicodeComment();
        if (ucomment !== null) {
          this.fileCommentStr = ucomment;
        } else {
          var commentByteArray = utils.transformTo(decodeParamType, this.fileComment);
          this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
        }
      }
    },
    findExtraFieldUnicodePath: function() {
      var upathField = this.extraFields[28789];
      if (upathField) {
        var extraReader = readerFor(upathField.value);
        if (extraReader.readInt(1) !== 1) {
          return null;
        }
        if (crc32fn(this.fileName) !== extraReader.readInt(4)) {
          return null;
        }
        return utf8.utf8decode(extraReader.readData(upathField.length - 5));
      }
      return null;
    },
    findExtraFieldUnicodeComment: function() {
      var ucommentField = this.extraFields[25461];
      if (ucommentField) {
        var extraReader = readerFor(ucommentField.value);
        if (extraReader.readInt(1) !== 1) {
          return null;
        }
        if (crc32fn(this.fileComment) !== extraReader.readInt(4)) {
          return null;
        }
        return utf8.utf8decode(extraReader.readData(ucommentField.length - 5));
      }
      return null;
    }
  };
  module.exports = ZipEntry;
});

// ../../node_modules/jszip/lib/zipEntries.js
var require_zipEntries = __commonJS((exports, module) => {
  function ZipEntries(loadOptions) {
    this.files = [];
    this.loadOptions = loadOptions;
  }
  var readerFor = require_readerFor();
  var utils = require_utils();
  var sig = require_signature();
  var ZipEntry = require_zipEntry();
  var support = require_support();
  ZipEntries.prototype = {
    checkSignature: function(expectedSignature) {
      if (!this.reader.readAndCheckSignature(expectedSignature)) {
        this.reader.index -= 4;
        var signature = this.reader.readString(4);
        throw new Error("Corrupted zip or bug: unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
      }
    },
    isSignature: function(askedIndex, expectedSignature) {
      var currentIndex = this.reader.index;
      this.reader.setIndex(askedIndex);
      var signature = this.reader.readString(4);
      var result = signature === expectedSignature;
      this.reader.setIndex(currentIndex);
      return result;
    },
    readBlockEndOfCentral: function() {
      this.diskNumber = this.reader.readInt(2);
      this.diskWithCentralDirStart = this.reader.readInt(2);
      this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
      this.centralDirRecords = this.reader.readInt(2);
      this.centralDirSize = this.reader.readInt(4);
      this.centralDirOffset = this.reader.readInt(4);
      this.zipCommentLength = this.reader.readInt(2);
      var zipComment = this.reader.readData(this.zipCommentLength);
      var decodeParamType = support.uint8array ? "uint8array" : "array";
      var decodeContent = utils.transformTo(decodeParamType, zipComment);
      this.zipComment = this.loadOptions.decodeFileName(decodeContent);
    },
    readBlockZip64EndOfCentral: function() {
      this.zip64EndOfCentralSize = this.reader.readInt(8);
      this.reader.skip(4);
      this.diskNumber = this.reader.readInt(4);
      this.diskWithCentralDirStart = this.reader.readInt(4);
      this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
      this.centralDirRecords = this.reader.readInt(8);
      this.centralDirSize = this.reader.readInt(8);
      this.centralDirOffset = this.reader.readInt(8);
      this.zip64ExtensibleData = {};
      var extraDataSize = this.zip64EndOfCentralSize - 44, index = 0, extraFieldId, extraFieldLength, extraFieldValue;
      while (index < extraDataSize) {
        extraFieldId = this.reader.readInt(2);
        extraFieldLength = this.reader.readInt(4);
        extraFieldValue = this.reader.readData(extraFieldLength);
        this.zip64ExtensibleData[extraFieldId] = {
          id: extraFieldId,
          length: extraFieldLength,
          value: extraFieldValue
        };
      }
    },
    readBlockZip64EndOfCentralLocator: function() {
      this.diskWithZip64CentralDirStart = this.reader.readInt(4);
      this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
      this.disksCount = this.reader.readInt(4);
      if (this.disksCount > 1) {
        throw new Error("Multi-volumes zip are not supported");
      }
    },
    readLocalFiles: function() {
      var i, file;
      for (i = 0;i < this.files.length; i++) {
        file = this.files[i];
        this.reader.setIndex(file.localHeaderOffset);
        this.checkSignature(sig.LOCAL_FILE_HEADER);
        file.readLocalPart(this.reader);
        file.handleUTF8();
        file.processAttributes();
      }
    },
    readCentralDir: function() {
      var file;
      this.reader.setIndex(this.centralDirOffset);
      while (this.reader.readAndCheckSignature(sig.CENTRAL_FILE_HEADER)) {
        file = new ZipEntry({
          zip64: this.zip64
        }, this.loadOptions);
        file.readCentralPart(this.reader);
        this.files.push(file);
      }
      if (this.centralDirRecords !== this.files.length) {
        if (this.centralDirRecords !== 0 && this.files.length === 0) {
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        } else {
        }
      }
    },
    readEndOfCentral: function() {
      var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
      if (offset < 0) {
        var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);
        if (isGarbage) {
          throw new Error("Can't find end of central directory : is this a zip file ? " + "If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        } else {
          throw new Error("Corrupted zip: can't find end of central directory");
        }
      }
      this.reader.setIndex(offset);
      var endOfCentralDirOffset = offset;
      this.checkSignature(sig.CENTRAL_DIRECTORY_END);
      this.readBlockEndOfCentral();
      if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
        this.zip64 = true;
        offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
        if (offset < 0) {
          throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
        }
        this.reader.setIndex(offset);
        this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
        this.readBlockZip64EndOfCentralLocator();
        if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
          this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
          if (this.relativeOffsetEndOfZip64CentralDir < 0) {
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          }
        }
        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
        this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
        this.readBlockZip64EndOfCentral();
      }
      var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
      if (this.zip64) {
        expectedEndOfCentralDirOffset += 20;
        expectedEndOfCentralDirOffset += 12 + this.zip64EndOfCentralSize;
      }
      var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;
      if (extraBytes > 0) {
        if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
        } else {
          this.reader.zero = extraBytes;
        }
      } else if (extraBytes < 0) {
        throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
      }
    },
    prepareReader: function(data) {
      this.reader = readerFor(data);
    },
    load: function(data) {
      this.prepareReader(data);
      this.readEndOfCentral();
      this.readCentralDir();
      this.readLocalFiles();
    }
  };
  module.exports = ZipEntries;
});

// ../../node_modules/jszip/lib/load.js
var require_load = __commonJS((exports, module) => {
  function checkEntryCRC32(zipEntry) {
    return new external.Promise(function(resolve, reject) {
      var worker = zipEntry.decompressed.getContentWorker().pipe(new Crc32Probe);
      worker.on("error", function(e) {
        reject(e);
      }).on("end", function() {
        if (worker.streamInfo.crc32 !== zipEntry.decompressed.crc32) {
          reject(new Error("Corrupted zip : CRC32 mismatch"));
        } else {
          resolve();
        }
      }).resume();
    });
  }
  var utils = require_utils();
  var external = require_external();
  var utf8 = require_utf8();
  var ZipEntries = require_zipEntries();
  var Crc32Probe = require_Crc32Probe();
  var nodejsUtils = require_nodejsUtils();
  module.exports = function(data, options) {
    var zip = this;
    options = utils.extend(options || {}, {
      base64: false,
      checkCRC32: false,
      optimizedBinaryString: false,
      createFolders: false,
      decodeFileName: utf8.utf8decode
    });
    if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
      return external.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
    }
    return utils.prepareContent("the loaded zip file", data, true, options.optimizedBinaryString, options.base64).then(function(data2) {
      var zipEntries = new ZipEntries(options);
      zipEntries.load(data2);
      return zipEntries;
    }).then(function checkCRC32(zipEntries) {
      var promises = [external.Promise.resolve(zipEntries)];
      var files = zipEntries.files;
      if (options.checkCRC32) {
        for (var i = 0;i < files.length; i++) {
          promises.push(checkEntryCRC32(files[i]));
        }
      }
      return external.Promise.all(promises);
    }).then(function addFiles(results) {
      var zipEntries = results.shift();
      var files = zipEntries.files;
      for (var i = 0;i < files.length; i++) {
        var input = files[i];
        var unsafeName = input.fileNameStr;
        var safeName = utils.resolve(input.fileNameStr);
        zip.file(safeName, input.decompressed, {
          binary: true,
          optimizedBinaryString: true,
          date: input.date,
          dir: input.dir,
          comment: input.fileCommentStr.length ? input.fileCommentStr : null,
          unixPermissions: input.unixPermissions,
          dosPermissions: input.dosPermissions,
          createFolders: options.createFolders
        });
        if (!input.dir) {
          zip.file(safeName).unsafeOriginalName = unsafeName;
        }
      }
      if (zipEntries.zipComment.length) {
        zip.comment = zipEntries.zipComment;
      }
      return zip;
    });
  };
});

// ../../node_modules/jszip/lib/index.js
var require_lib = __commonJS((exports, module) => {
  function JSZip() {
    if (!(this instanceof JSZip)) {
      return new JSZip;
    }
    if (arguments.length) {
      throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    }
    this.files = Object.create(null);
    this.comment = null;
    this.root = "";
    this.clone = function() {
      var newObj = new JSZip;
      for (var i in this) {
        if (typeof this[i] !== "function") {
          newObj[i] = this[i];
        }
      }
      return newObj;
    };
  }
  JSZip.prototype = require_object();
  JSZip.prototype.loadAsync = require_load();
  JSZip.support = require_support();
  JSZip.defaults = require_defaults();
  JSZip.version = "3.10.1";
  JSZip.loadAsync = function(content, options) {
    return new JSZip().loadAsync(content, options);
  };
  JSZip.external = require_external();
  module.exports = JSZip;
});

// ../../node_modules/xml2js/lib/defaults.js
var require_defaults2 = __commonJS((exports) => {
  (function() {
    exports.defaults = {
      "0.1": {
        explicitCharkey: false,
        trim: true,
        normalize: true,
        normalizeTags: false,
        attrkey: "@",
        charkey: "#",
        explicitArray: false,
        ignoreAttrs: false,
        mergeAttrs: false,
        explicitRoot: false,
        validator: null,
        xmlns: false,
        explicitChildren: false,
        childkey: "@@",
        charsAsChildren: false,
        includeWhiteChars: false,
        async: false,
        strict: true,
        attrNameProcessors: null,
        attrValueProcessors: null,
        tagNameProcessors: null,
        valueProcessors: null,
        emptyTag: ""
      },
      "0.2": {
        explicitCharkey: false,
        trim: false,
        normalize: false,
        normalizeTags: false,
        attrkey: "$",
        charkey: "_",
        explicitArray: true,
        ignoreAttrs: false,
        mergeAttrs: false,
        explicitRoot: true,
        validator: null,
        xmlns: false,
        explicitChildren: false,
        preserveChildrenOrder: false,
        childkey: "$$",
        charsAsChildren: false,
        includeWhiteChars: false,
        async: false,
        strict: true,
        attrNameProcessors: null,
        attrValueProcessors: null,
        tagNameProcessors: null,
        valueProcessors: null,
        rootName: "root",
        xmldec: {
          version: "1.0",
          encoding: "UTF-8",
          standalone: true
        },
        doctype: null,
        renderOpts: {
          pretty: true,
          indent: "  ",
          newline: "\n"
        },
        headless: false,
        chunkSize: 1e4,
        emptyTag: "",
        cdata: false
      }
    };
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/Utility.js
var require_Utility = __commonJS((exports, module) => {
  (function() {
    var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, slice = [].slice, hasProp = {}.hasOwnProperty;
    assign = function() {
      var i, key, len, source, sources, target;
      target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (isFunction(Object.assign)) {
        Object.assign.apply(null, arguments);
      } else {
        for (i = 0, len = sources.length;i < len; i++) {
          source = sources[i];
          if (source != null) {
            for (key in source) {
              if (!hasProp.call(source, key))
                continue;
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
    isFunction = function(val) {
      return !!val && Object.prototype.toString.call(val) === "[object Function]";
    };
    isObject = function(val) {
      var ref;
      return !!val && ((ref = typeof val) === "function" || ref === "object");
    };
    isArray = function(val) {
      if (isFunction(Array.isArray)) {
        return Array.isArray(val);
      } else {
        return Object.prototype.toString.call(val) === "[object Array]";
      }
    };
    isEmpty = function(val) {
      var key;
      if (isArray(val)) {
        return !val.length;
      } else {
        for (key in val) {
          if (!hasProp.call(val, key))
            continue;
          return false;
        }
        return true;
      }
    };
    isPlainObject = function(val) {
      var ctor, proto;
      return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
    };
    getValue = function(obj) {
      if (isFunction(obj.valueOf)) {
        return obj.valueOf();
      } else {
        return obj;
      }
    };
    exports.assign = assign;
    exports.isFunction = isFunction;
    exports.isObject = isObject;
    exports.isArray = isArray;
    exports.isEmpty = isEmpty;
    exports.isPlainObject = isPlainObject;
    exports.getValue = getValue;
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDOMImplementation.js
var require_XMLDOMImplementation = __commonJS((exports, module) => {
  (function() {
    var XMLDOMImplementation;
    module.exports = XMLDOMImplementation = function() {
      function XMLDOMImplementation2() {
      }
      XMLDOMImplementation2.prototype.hasFeature = function(feature, version) {
        return true;
      };
      XMLDOMImplementation2.prototype.createDocumentType = function(qualifiedName, publicId, systemId) {
        throw new Error("This DOM method is not implemented.");
      };
      XMLDOMImplementation2.prototype.createDocument = function(namespaceURI, qualifiedName, doctype) {
        throw new Error("This DOM method is not implemented.");
      };
      XMLDOMImplementation2.prototype.createHTMLDocument = function(title) {
        throw new Error("This DOM method is not implemented.");
      };
      XMLDOMImplementation2.prototype.getFeature = function(feature, version) {
        throw new Error("This DOM method is not implemented.");
      };
      return XMLDOMImplementation2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js
var require_XMLDOMErrorHandler = __commonJS((exports, module) => {
  (function() {
    var XMLDOMErrorHandler;
    module.exports = XMLDOMErrorHandler = function() {
      function XMLDOMErrorHandler2() {
      }
      XMLDOMErrorHandler2.prototype.handleError = function(error) {
        throw new Error(error);
      };
      return XMLDOMErrorHandler2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDOMStringList.js
var require_XMLDOMStringList = __commonJS((exports, module) => {
  (function() {
    var XMLDOMStringList;
    module.exports = XMLDOMStringList = function() {
      function XMLDOMStringList2(arr) {
        this.arr = arr || [];
      }
      Object.defineProperty(XMLDOMStringList2.prototype, "length", {
        get: function() {
          return this.arr.length;
        }
      });
      XMLDOMStringList2.prototype.item = function(index) {
        return this.arr[index] || null;
      };
      XMLDOMStringList2.prototype.contains = function(str) {
        return this.arr.indexOf(str) !== -1;
      };
      return XMLDOMStringList2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDOMConfiguration.js
var require_XMLDOMConfiguration = __commonJS((exports, module) => {
  (function() {
    var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;
    XMLDOMErrorHandler = require_XMLDOMErrorHandler();
    XMLDOMStringList = require_XMLDOMStringList();
    module.exports = XMLDOMConfiguration = function() {
      function XMLDOMConfiguration2() {
        var clonedSelf;
        this.defaultParams = {
          "canonical-form": false,
          "cdata-sections": false,
          comments: false,
          "datatype-normalization": false,
          "element-content-whitespace": true,
          entities: true,
          "error-handler": new XMLDOMErrorHandler,
          infoset: true,
          "validate-if-schema": false,
          namespaces: true,
          "namespace-declarations": true,
          "normalize-characters": false,
          "schema-location": "",
          "schema-type": "",
          "split-cdata-sections": true,
          validate: false,
          "well-formed": true
        };
        this.params = clonedSelf = Object.create(this.defaultParams);
      }
      Object.defineProperty(XMLDOMConfiguration2.prototype, "parameterNames", {
        get: function() {
          return new XMLDOMStringList(Object.keys(this.defaultParams));
        }
      });
      XMLDOMConfiguration2.prototype.getParameter = function(name) {
        if (this.params.hasOwnProperty(name)) {
          return this.params[name];
        } else {
          return null;
        }
      };
      XMLDOMConfiguration2.prototype.canSetParameter = function(name, value) {
        return true;
      };
      XMLDOMConfiguration2.prototype.setParameter = function(name, value) {
        if (value != null) {
          return this.params[name] = value;
        } else {
          return delete this.params[name];
        }
      };
      return XMLDOMConfiguration2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/NodeType.js
var require_NodeType = __commonJS((exports, module) => {
  (function() {
    module.exports = {
      Element: 1,
      Attribute: 2,
      Text: 3,
      CData: 4,
      EntityReference: 5,
      EntityDeclaration: 6,
      ProcessingInstruction: 7,
      Comment: 8,
      Document: 9,
      DocType: 10,
      DocumentFragment: 11,
      NotationDeclaration: 12,
      Declaration: 201,
      Raw: 202,
      AttributeDeclaration: 203,
      ElementDeclaration: 204,
      Dummy: 205
    };
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLAttribute.js
var require_XMLAttribute = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLAttribute, XMLNode;
    NodeType = require_NodeType();
    XMLNode = require_XMLNode();
    module.exports = XMLAttribute = function() {
      function XMLAttribute2(parent, name, value) {
        this.parent = parent;
        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }
        if (name == null) {
          throw new Error("Missing attribute name. " + this.debugInfo(name));
        }
        this.name = this.stringify.name(name);
        this.value = this.stringify.attValue(value);
        this.type = NodeType.Attribute;
        this.isId = false;
        this.schemaTypeInfo = null;
      }
      Object.defineProperty(XMLAttribute2.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "ownerElement", {
        get: function() {
          return this.parent;
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(value) {
          return this.value = value || "";
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "namespaceURI", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "prefix", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "localName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "specified", {
        get: function() {
          return true;
        }
      });
      XMLAttribute2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLAttribute2.prototype.toString = function(options) {
        return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
      };
      XMLAttribute2.prototype.debugInfo = function(name) {
        name = name || this.name;
        if (name == null) {
          return "parent: <" + this.parent.name + ">";
        } else {
          return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
        }
      };
      XMLAttribute2.prototype.isEqualNode = function(node) {
        if (node.namespaceURI !== this.namespaceURI) {
          return false;
        }
        if (node.prefix !== this.prefix) {
          return false;
        }
        if (node.localName !== this.localName) {
          return false;
        }
        if (node.value !== this.value) {
          return false;
        }
        return true;
      };
      return XMLAttribute2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLNamedNodeMap.js
var require_XMLNamedNodeMap = __commonJS((exports, module) => {
  (function() {
    var XMLNamedNodeMap;
    module.exports = XMLNamedNodeMap = function() {
      function XMLNamedNodeMap2(nodes) {
        this.nodes = nodes;
      }
      Object.defineProperty(XMLNamedNodeMap2.prototype, "length", {
        get: function() {
          return Object.keys(this.nodes).length || 0;
        }
      });
      XMLNamedNodeMap2.prototype.clone = function() {
        return this.nodes = null;
      };
      XMLNamedNodeMap2.prototype.getNamedItem = function(name) {
        return this.nodes[name];
      };
      XMLNamedNodeMap2.prototype.setNamedItem = function(node) {
        var oldNode;
        oldNode = this.nodes[node.nodeName];
        this.nodes[node.nodeName] = node;
        return oldNode || null;
      };
      XMLNamedNodeMap2.prototype.removeNamedItem = function(name) {
        var oldNode;
        oldNode = this.nodes[name];
        delete this.nodes[name];
        return oldNode || null;
      };
      XMLNamedNodeMap2.prototype.item = function(index) {
        return this.nodes[Object.keys(this.nodes)[index]] || null;
      };
      XMLNamedNodeMap2.prototype.getNamedItemNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented.");
      };
      XMLNamedNodeMap2.prototype.setNamedItemNS = function(node) {
        throw new Error("This DOM method is not implemented.");
      };
      XMLNamedNodeMap2.prototype.removeNamedItemNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented.");
      };
      return XMLNamedNodeMap2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLElement.js
var require_XMLElement = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLAttribute, XMLElement, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, ref, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    XMLAttribute = require_XMLAttribute();
    XMLNamedNodeMap = require_XMLNamedNodeMap();
    module.exports = XMLElement = function(superClass) {
      extend(XMLElement2, superClass);
      function XMLElement2(parent, name, attributes) {
        var child, j, len, ref1;
        XMLElement2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing element name. " + this.debugInfo());
        }
        this.name = this.stringify.name(name);
        this.type = NodeType.Element;
        this.attribs = {};
        this.schemaTypeInfo = null;
        if (attributes != null) {
          this.attribute(attributes);
        }
        if (parent.type === NodeType.Document) {
          this.isRoot = true;
          this.documentObject = parent;
          parent.rootObject = this;
          if (parent.children) {
            ref1 = parent.children;
            for (j = 0, len = ref1.length;j < len; j++) {
              child = ref1[j];
              if (child.type === NodeType.DocType) {
                child.name = this.name;
                break;
              }
            }
          }
        }
      }
      Object.defineProperty(XMLElement2.prototype, "tagName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLElement2.prototype, "namespaceURI", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLElement2.prototype, "prefix", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLElement2.prototype, "localName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLElement2.prototype, "id", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLElement2.prototype, "className", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLElement2.prototype, "classList", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLElement2.prototype, "attributes", {
        get: function() {
          if (!this.attributeMap || !this.attributeMap.nodes) {
            this.attributeMap = new XMLNamedNodeMap(this.attribs);
          }
          return this.attributeMap;
        }
      });
      XMLElement2.prototype.clone = function() {
        var att, attName, clonedSelf, ref1;
        clonedSelf = Object.create(this);
        if (clonedSelf.isRoot) {
          clonedSelf.documentObject = null;
        }
        clonedSelf.attribs = {};
        ref1 = this.attribs;
        for (attName in ref1) {
          if (!hasProp.call(ref1, attName))
            continue;
          att = ref1[attName];
          clonedSelf.attribs[attName] = att.clone();
        }
        clonedSelf.children = [];
        this.children.forEach(function(child) {
          var clonedChild;
          clonedChild = child.clone();
          clonedChild.parent = clonedSelf;
          return clonedSelf.children.push(clonedChild);
        });
        return clonedSelf;
      };
      XMLElement2.prototype.attribute = function(name, value) {
        var attName, attValue;
        if (name != null) {
          name = getValue(name);
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName))
              continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (this.options.keepNullAttributes && value == null) {
            this.attribs[name] = new XMLAttribute(this, name, "");
          } else if (value != null) {
            this.attribs[name] = new XMLAttribute(this, name, value);
          }
        }
        return this;
      };
      XMLElement2.prototype.removeAttribute = function(name) {
        var attName, j, len;
        if (name == null) {
          throw new Error("Missing attribute name. " + this.debugInfo());
        }
        name = getValue(name);
        if (Array.isArray(name)) {
          for (j = 0, len = name.length;j < len; j++) {
            attName = name[j];
            delete this.attribs[attName];
          }
        } else {
          delete this.attribs[name];
        }
        return this;
      };
      XMLElement2.prototype.toString = function(options) {
        return this.options.writer.element(this, this.options.writer.filterOptions(options));
      };
      XMLElement2.prototype.att = function(name, value) {
        return this.attribute(name, value);
      };
      XMLElement2.prototype.a = function(name, value) {
        return this.attribute(name, value);
      };
      XMLElement2.prototype.getAttribute = function(name) {
        if (this.attribs.hasOwnProperty(name)) {
          return this.attribs[name].value;
        } else {
          return null;
        }
      };
      XMLElement2.prototype.setAttribute = function(name, value) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getAttributeNode = function(name) {
        if (this.attribs.hasOwnProperty(name)) {
          return this.attribs[name];
        } else {
          return null;
        }
      };
      XMLElement2.prototype.setAttributeNode = function(newAttr) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.removeAttributeNode = function(oldAttr) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getElementsByTagName = function(name) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getAttributeNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.setAttributeNS = function(namespaceURI, qualifiedName, value) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.removeAttributeNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getAttributeNodeNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.setAttributeNodeNS = function(newAttr) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.hasAttribute = function(name) {
        return this.attribs.hasOwnProperty(name);
      };
      XMLElement2.prototype.hasAttributeNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.setIdAttribute = function(name, isId) {
        if (this.attribs.hasOwnProperty(name)) {
          return this.attribs[name].isId;
        } else {
          return isId;
        }
      };
      XMLElement2.prototype.setIdAttributeNS = function(namespaceURI, localName, isId) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.setIdAttributeNode = function(idAttr, isId) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getElementsByTagName = function(tagname) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getElementsByClassName = function(classNames) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.isEqualNode = function(node) {
        var i, j, ref1;
        if (!XMLElement2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
          return false;
        }
        if (node.namespaceURI !== this.namespaceURI) {
          return false;
        }
        if (node.prefix !== this.prefix) {
          return false;
        }
        if (node.localName !== this.localName) {
          return false;
        }
        if (node.attribs.length !== this.attribs.length) {
          return false;
        }
        for (i = j = 0, ref1 = this.attribs.length - 1;0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
          if (!this.attribs[i].isEqualNode(node.attribs[i])) {
            return false;
          }
        }
        return true;
      };
      return XMLElement2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLCharacterData.js
var require_XMLCharacterData = __commonJS((exports, module) => {
  (function() {
    var XMLCharacterData, XMLNode, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = require_XMLNode();
    module.exports = XMLCharacterData = function(superClass) {
      extend(XMLCharacterData2, superClass);
      function XMLCharacterData2(parent) {
        XMLCharacterData2.__super__.constructor.call(this, parent);
        this.value = "";
      }
      Object.defineProperty(XMLCharacterData2.prototype, "data", {
        get: function() {
          return this.value;
        },
        set: function(value) {
          return this.value = value || "";
        }
      });
      Object.defineProperty(XMLCharacterData2.prototype, "length", {
        get: function() {
          return this.value.length;
        }
      });
      Object.defineProperty(XMLCharacterData2.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(value) {
          return this.value = value || "";
        }
      });
      XMLCharacterData2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLCharacterData2.prototype.substringData = function(offset, count) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLCharacterData2.prototype.appendData = function(arg) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLCharacterData2.prototype.insertData = function(offset, arg) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLCharacterData2.prototype.deleteData = function(offset, count) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLCharacterData2.prototype.replaceData = function(offset, count, arg) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLCharacterData2.prototype.isEqualNode = function(node) {
        if (!XMLCharacterData2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
          return false;
        }
        if (node.data !== this.data) {
          return false;
        }
        return true;
      };
      return XMLCharacterData2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLCData.js
var require_XMLCData = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLCData, XMLCharacterData, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require_NodeType();
    XMLCharacterData = require_XMLCharacterData();
    module.exports = XMLCData = function(superClass) {
      extend(XMLCData2, superClass);
      function XMLCData2(parent, text) {
        XMLCData2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing CDATA text. " + this.debugInfo());
        }
        this.name = "#cdata-section";
        this.type = NodeType.CData;
        this.value = this.stringify.cdata(text);
      }
      XMLCData2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLCData2.prototype.toString = function(options) {
        return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
      };
      return XMLCData2;
    }(XMLCharacterData);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLComment.js
var require_XMLComment = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLCharacterData, XMLComment, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require_NodeType();
    XMLCharacterData = require_XMLCharacterData();
    module.exports = XMLComment = function(superClass) {
      extend(XMLComment2, superClass);
      function XMLComment2(parent, text) {
        XMLComment2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing comment text. " + this.debugInfo());
        }
        this.name = "#comment";
        this.type = NodeType.Comment;
        this.value = this.stringify.comment(text);
      }
      XMLComment2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLComment2.prototype.toString = function(options) {
        return this.options.writer.comment(this, this.options.writer.filterOptions(options));
      };
      return XMLComment2;
    }(XMLCharacterData);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDeclaration.js
var require_XMLDeclaration = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDeclaration, XMLNode, isObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = require_Utility().isObject;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDeclaration = function(superClass) {
      extend(XMLDeclaration2, superClass);
      function XMLDeclaration2(parent, version, encoding, standalone) {
        var ref;
        XMLDeclaration2.__super__.constructor.call(this, parent);
        if (isObject(version)) {
          ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
        }
        if (!version) {
          version = "1.0";
        }
        this.type = NodeType.Declaration;
        this.version = this.stringify.xmlVersion(version);
        if (encoding != null) {
          this.encoding = this.stringify.xmlEncoding(encoding);
        }
        if (standalone != null) {
          this.standalone = this.stringify.xmlStandalone(standalone);
        }
      }
      XMLDeclaration2.prototype.toString = function(options) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
      };
      return XMLDeclaration2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDTDAttList.js
var require_XMLDTDAttList = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDTDAttList, XMLNode, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDTDAttList = function(superClass) {
      extend(XMLDTDAttList2, superClass);
      function XMLDTDAttList2(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        XMLDTDAttList2.__super__.constructor.call(this, parent);
        if (elementName == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        if (attributeName == null) {
          throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
        }
        if (!attributeType) {
          throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
        }
        if (!defaultValueType) {
          throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
        }
        if (defaultValueType.indexOf("#") !== 0) {
          defaultValueType = "#" + defaultValueType;
        }
        if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
        }
        if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
        }
        this.elementName = this.stringify.name(elementName);
        this.type = NodeType.AttributeDeclaration;
        this.attributeName = this.stringify.name(attributeName);
        this.attributeType = this.stringify.dtdAttType(attributeType);
        if (defaultValue) {
          this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
        }
        this.defaultValueType = defaultValueType;
      }
      XMLDTDAttList2.prototype.toString = function(options) {
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
      };
      return XMLDTDAttList2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDTDEntity.js
var require_XMLDTDEntity = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDTDEntity, XMLNode, isObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = require_Utility().isObject;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDTDEntity = function(superClass) {
      extend(XMLDTDEntity2, superClass);
      function XMLDTDEntity2(parent, pe2, name, value) {
        XMLDTDEntity2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD entity name. " + this.debugInfo(name));
        }
        if (value == null) {
          throw new Error("Missing DTD entity value. " + this.debugInfo(name));
        }
        this.pe = !!pe2;
        this.name = this.stringify.name(name);
        this.type = NodeType.EntityDeclaration;
        if (!isObject(value)) {
          this.value = this.stringify.dtdEntityValue(value);
          this.internal = true;
        } else {
          if (!value.pubID && !value.sysID) {
            throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
          }
          if (value.pubID && !value.sysID) {
            throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
          }
          this.internal = false;
          if (value.pubID != null) {
            this.pubID = this.stringify.dtdPubID(value.pubID);
          }
          if (value.sysID != null) {
            this.sysID = this.stringify.dtdSysID(value.sysID);
          }
          if (value.nData != null) {
            this.nData = this.stringify.dtdNData(value.nData);
          }
          if (this.pe && this.nData) {
            throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
          }
        }
      }
      Object.defineProperty(XMLDTDEntity2.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "notationName", {
        get: function() {
          return this.nData || null;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "inputEncoding", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "xmlEncoding", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "xmlVersion", {
        get: function() {
          return null;
        }
      });
      XMLDTDEntity2.prototype.toString = function(options) {
        return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
      };
      return XMLDTDEntity2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDTDElement.js
var require_XMLDTDElement = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDTDElement, XMLNode, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDTDElement = function(superClass) {
      extend(XMLDTDElement2, superClass);
      function XMLDTDElement2(parent, name, value) {
        XMLDTDElement2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        if (!value) {
          value = "(#PCDATA)";
        }
        if (Array.isArray(value)) {
          value = "(" + value.join(",") + ")";
        }
        this.name = this.stringify.name(name);
        this.type = NodeType.ElementDeclaration;
        this.value = this.stringify.dtdElementValue(value);
      }
      XMLDTDElement2.prototype.toString = function(options) {
        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
      };
      return XMLDTDElement2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDTDNotation.js
var require_XMLDTDNotation = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDTDNotation, XMLNode, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDTDNotation = function(superClass) {
      extend(XMLDTDNotation2, superClass);
      function XMLDTDNotation2(parent, name, value) {
        XMLDTDNotation2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD notation name. " + this.debugInfo(name));
        }
        if (!value.pubID && !value.sysID) {
          throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
        }
        this.name = this.stringify.name(name);
        this.type = NodeType.NotationDeclaration;
        if (value.pubID != null) {
          this.pubID = this.stringify.dtdPubID(value.pubID);
        }
        if (value.sysID != null) {
          this.sysID = this.stringify.dtdSysID(value.sysID);
        }
      }
      Object.defineProperty(XMLDTDNotation2.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      });
      Object.defineProperty(XMLDTDNotation2.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      });
      XMLDTDNotation2.prototype.toString = function(options) {
        return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
      };
      return XMLDTDNotation2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDocType.js
var require_XMLDocType = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = require_Utility().isObject;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    XMLDTDAttList = require_XMLDTDAttList();
    XMLDTDEntity = require_XMLDTDEntity();
    XMLDTDElement = require_XMLDTDElement();
    XMLDTDNotation = require_XMLDTDNotation();
    XMLNamedNodeMap = require_XMLNamedNodeMap();
    module.exports = XMLDocType = function(superClass) {
      extend(XMLDocType2, superClass);
      function XMLDocType2(parent, pubID, sysID) {
        var child, i, len, ref, ref1, ref2;
        XMLDocType2.__super__.constructor.call(this, parent);
        this.type = NodeType.DocType;
        if (parent.children) {
          ref = parent.children;
          for (i = 0, len = ref.length;i < len; i++) {
            child = ref[i];
            if (child.type === NodeType.Element) {
              this.name = child.name;
              break;
            }
          }
        }
        this.documentObject = parent;
        if (isObject(pubID)) {
          ref1 = pubID, pubID = ref1.pubID, sysID = ref1.sysID;
        }
        if (sysID == null) {
          ref2 = [pubID, sysID], sysID = ref2[0], pubID = ref2[1];
        }
        if (pubID != null) {
          this.pubID = this.stringify.dtdPubID(pubID);
        }
        if (sysID != null) {
          this.sysID = this.stringify.dtdSysID(sysID);
        }
      }
      Object.defineProperty(XMLDocType2.prototype, "entities", {
        get: function() {
          var child, i, len, nodes, ref;
          nodes = {};
          ref = this.children;
          for (i = 0, len = ref.length;i < len; i++) {
            child = ref[i];
            if (child.type === NodeType.EntityDeclaration && !child.pe) {
              nodes[child.name] = child;
            }
          }
          return new XMLNamedNodeMap(nodes);
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "notations", {
        get: function() {
          var child, i, len, nodes, ref;
          nodes = {};
          ref = this.children;
          for (i = 0, len = ref.length;i < len; i++) {
            child = ref[i];
            if (child.type === NodeType.NotationDeclaration) {
              nodes[child.name] = child;
            }
          }
          return new XMLNamedNodeMap(nodes);
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "internalSubset", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      XMLDocType2.prototype.element = function(name, value) {
        var child;
        child = new XMLDTDElement(this, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var child;
        child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.entity = function(name, value) {
        var child;
        child = new XMLDTDEntity(this, false, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.pEntity = function(name, value) {
        var child;
        child = new XMLDTDEntity(this, true, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.notation = function(name, value) {
        var child;
        child = new XMLDTDNotation(this, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.toString = function(options) {
        return this.options.writer.docType(this, this.options.writer.filterOptions(options));
      };
      XMLDocType2.prototype.ele = function(name, value) {
        return this.element(name, value);
      };
      XMLDocType2.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
      };
      XMLDocType2.prototype.ent = function(name, value) {
        return this.entity(name, value);
      };
      XMLDocType2.prototype.pent = function(name, value) {
        return this.pEntity(name, value);
      };
      XMLDocType2.prototype.not = function(name, value) {
        return this.notation(name, value);
      };
      XMLDocType2.prototype.up = function() {
        return this.root() || this.documentObject;
      };
      XMLDocType2.prototype.isEqualNode = function(node) {
        if (!XMLDocType2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
          return false;
        }
        if (node.name !== this.name) {
          return false;
        }
        if (node.publicId !== this.publicId) {
          return false;
        }
        if (node.systemId !== this.systemId) {
          return false;
        }
        return true;
      };
      return XMLDocType2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLRaw.js
var require_XMLRaw = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLNode, XMLRaw, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require_NodeType();
    XMLNode = require_XMLNode();
    module.exports = XMLRaw = function(superClass) {
      extend(XMLRaw2, superClass);
      function XMLRaw2(parent, text) {
        XMLRaw2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing raw text. " + this.debugInfo());
        }
        this.type = NodeType.Raw;
        this.value = this.stringify.raw(text);
      }
      XMLRaw2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLRaw2.prototype.toString = function(options) {
        return this.options.writer.raw(this, this.options.writer.filterOptions(options));
      };
      return XMLRaw2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLText.js
var require_XMLText = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLCharacterData, XMLText, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require_NodeType();
    XMLCharacterData = require_XMLCharacterData();
    module.exports = XMLText = function(superClass) {
      extend(XMLText2, superClass);
      function XMLText2(parent, text) {
        XMLText2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing element text. " + this.debugInfo());
        }
        this.name = "#text";
        this.type = NodeType.Text;
        this.value = this.stringify.text(text);
      }
      Object.defineProperty(XMLText2.prototype, "isElementContentWhitespace", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLText2.prototype, "wholeText", {
        get: function() {
          var next, prev, str;
          str = "";
          prev = this.previousSibling;
          while (prev) {
            str = prev.data + str;
            prev = prev.previousSibling;
          }
          str += this.data;
          next = this.nextSibling;
          while (next) {
            str = str + next.data;
            next = next.nextSibling;
          }
          return str;
        }
      });
      XMLText2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLText2.prototype.toString = function(options) {
        return this.options.writer.text(this, this.options.writer.filterOptions(options));
      };
      XMLText2.prototype.splitText = function(offset) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLText2.prototype.replaceWholeText = function(content) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      return XMLText2;
    }(XMLCharacterData);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLProcessingInstruction.js
var require_XMLProcessingInstruction = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLCharacterData, XMLProcessingInstruction, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require_NodeType();
    XMLCharacterData = require_XMLCharacterData();
    module.exports = XMLProcessingInstruction = function(superClass) {
      extend(XMLProcessingInstruction2, superClass);
      function XMLProcessingInstruction2(parent, target, value) {
        XMLProcessingInstruction2.__super__.constructor.call(this, parent);
        if (target == null) {
          throw new Error("Missing instruction target. " + this.debugInfo());
        }
        this.type = NodeType.ProcessingInstruction;
        this.target = this.stringify.insTarget(target);
        this.name = this.target;
        if (value) {
          this.value = this.stringify.insValue(value);
        }
      }
      XMLProcessingInstruction2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLProcessingInstruction2.prototype.toString = function(options) {
        return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
      };
      XMLProcessingInstruction2.prototype.isEqualNode = function(node) {
        if (!XMLProcessingInstruction2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
          return false;
        }
        if (node.target !== this.target) {
          return false;
        }
        return true;
      };
      return XMLProcessingInstruction2;
    }(XMLCharacterData);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDummy.js
var require_XMLDummy = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDummy, XMLNode, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDummy = function(superClass) {
      extend(XMLDummy2, superClass);
      function XMLDummy2(parent) {
        XMLDummy2.__super__.constructor.call(this, parent);
        this.type = NodeType.Dummy;
      }
      XMLDummy2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLDummy2.prototype.toString = function(options) {
        return "";
      };
      return XMLDummy2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLNodeList.js
var require_XMLNodeList = __commonJS((exports, module) => {
  (function() {
    var XMLNodeList;
    module.exports = XMLNodeList = function() {
      function XMLNodeList2(nodes) {
        this.nodes = nodes;
      }
      Object.defineProperty(XMLNodeList2.prototype, "length", {
        get: function() {
          return this.nodes.length || 0;
        }
      });
      XMLNodeList2.prototype.clone = function() {
        return this.nodes = null;
      };
      XMLNodeList2.prototype.item = function(index) {
        return this.nodes[index] || null;
      };
      return XMLNodeList2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/DocumentPosition.js
var require_DocumentPosition = __commonJS((exports, module) => {
  (function() {
    module.exports = {
      Disconnected: 1,
      Preceding: 2,
      Following: 4,
      Contains: 8,
      ContainedBy: 16,
      ImplementationSpecific: 32
    };
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLNode.js
var require_XMLNode = __commonJS((exports, module) => {
  (function() {
    var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNamedNodeMap, XMLNode, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, ref1, hasProp = {}.hasOwnProperty;
    ref1 = require_Utility(), isObject = ref1.isObject, isFunction = ref1.isFunction, isEmpty = ref1.isEmpty, getValue = ref1.getValue;
    XMLElement = null;
    XMLCData = null;
    XMLComment = null;
    XMLDeclaration = null;
    XMLDocType = null;
    XMLRaw = null;
    XMLText = null;
    XMLProcessingInstruction = null;
    XMLDummy = null;
    NodeType = null;
    XMLNodeList = null;
    XMLNamedNodeMap = null;
    DocumentPosition = null;
    module.exports = XMLNode = function() {
      function XMLNode2(parent1) {
        this.parent = parent1;
        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }
        this.value = null;
        this.children = [];
        this.baseURI = null;
        if (!XMLElement) {
          XMLElement = require_XMLElement();
          XMLCData = require_XMLCData();
          XMLComment = require_XMLComment();
          XMLDeclaration = require_XMLDeclaration();
          XMLDocType = require_XMLDocType();
          XMLRaw = require_XMLRaw();
          XMLText = require_XMLText();
          XMLProcessingInstruction = require_XMLProcessingInstruction();
          XMLDummy = require_XMLDummy();
          NodeType = require_NodeType();
          XMLNodeList = require_XMLNodeList();
          XMLNamedNodeMap = require_XMLNamedNodeMap();
          DocumentPosition = require_DocumentPosition();
        }
      }
      Object.defineProperty(XMLNode2.prototype, "nodeName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "nodeValue", {
        get: function() {
          return this.value;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "parentNode", {
        get: function() {
          return this.parent;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "childNodes", {
        get: function() {
          if (!this.childNodeList || !this.childNodeList.nodes) {
            this.childNodeList = new XMLNodeList(this.children);
          }
          return this.childNodeList;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "firstChild", {
        get: function() {
          return this.children[0] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "lastChild", {
        get: function() {
          return this.children[this.children.length - 1] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "previousSibling", {
        get: function() {
          var i;
          i = this.parent.children.indexOf(this);
          return this.parent.children[i - 1] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "nextSibling", {
        get: function() {
          var i;
          i = this.parent.children.indexOf(this);
          return this.parent.children[i + 1] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "ownerDocument", {
        get: function() {
          return this.document() || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "textContent", {
        get: function() {
          var child, j, len, ref2, str;
          if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
            str = "";
            ref2 = this.children;
            for (j = 0, len = ref2.length;j < len; j++) {
              child = ref2[j];
              if (child.textContent) {
                str += child.textContent;
              }
            }
            return str;
          } else {
            return null;
          }
        },
        set: function(value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      XMLNode2.prototype.setParent = function(parent) {
        var child, j, len, ref2, results;
        this.parent = parent;
        if (parent) {
          this.options = parent.options;
          this.stringify = parent.stringify;
        }
        ref2 = this.children;
        results = [];
        for (j = 0, len = ref2.length;j < len; j++) {
          child = ref2[j];
          results.push(child.setParent(this));
        }
        return results;
      };
      XMLNode2.prototype.element = function(name, attributes, text) {
        var childNode, item, j, k2, key, lastChild, len, len1, ref2, ref3, val;
        lastChild = null;
        if (attributes === null && text == null) {
          ref2 = [{}, null], attributes = ref2[0], text = ref2[1];
        }
        if (attributes == null) {
          attributes = {};
        }
        attributes = getValue(attributes);
        if (!isObject(attributes)) {
          ref3 = [attributes, text], text = ref3[0], attributes = ref3[1];
        }
        if (name != null) {
          name = getValue(name);
        }
        if (Array.isArray(name)) {
          for (j = 0, len = name.length;j < len; j++) {
            item = name[j];
            lastChild = this.element(item);
          }
        } else if (isFunction(name)) {
          lastChild = this.element(name.apply());
        } else if (isObject(name)) {
          for (key in name) {
            if (!hasProp.call(name, key))
              continue;
            val = name[key];
            if (isFunction(val)) {
              val = val.apply();
            }
            if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
              lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
            } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
              lastChild = this.dummy();
            } else if (isObject(val) && isEmpty(val)) {
              lastChild = this.element(key);
            } else if (!this.options.keepNullNodes && val == null) {
              lastChild = this.dummy();
            } else if (!this.options.separateArrayItems && Array.isArray(val)) {
              for (k2 = 0, len1 = val.length;k2 < len1; k2++) {
                item = val[k2];
                childNode = {};
                childNode[key] = item;
                lastChild = this.element(childNode);
              }
            } else if (isObject(val)) {
              if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
                lastChild = this.element(val);
              } else {
                lastChild = this.element(key);
                lastChild.element(val);
              }
            } else {
              lastChild = this.element(key, val);
            }
          }
        } else if (!this.options.keepNullNodes && text === null) {
          lastChild = this.dummy();
        } else {
          if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
            lastChild = this.text(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
            lastChild = this.cdata(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
            lastChild = this.comment(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
            lastChild = this.raw(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
            lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
          } else {
            lastChild = this.node(name, attributes, text);
          }
        }
        if (lastChild == null) {
          throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
        }
        return lastChild;
      };
      XMLNode2.prototype.insertBefore = function(name, attributes, text) {
        var child, i, newChild, refChild, removed;
        if (name != null ? name.type : undefined) {
          newChild = name;
          refChild = attributes;
          newChild.setParent(this);
          if (refChild) {
            i = children.indexOf(refChild);
            removed = children.splice(i);
            children.push(newChild);
            Array.prototype.push.apply(children, removed);
          } else {
            children.push(newChild);
          }
          return newChild;
        } else {
          if (this.isRoot) {
            throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
          }
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.element(name, attributes, text);
          Array.prototype.push.apply(this.parent.children, removed);
          return child;
        }
      };
      XMLNode2.prototype.insertAfter = function(name, attributes, text) {
        var child, i, removed;
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
        }
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.element(name, attributes, text);
        Array.prototype.push.apply(this.parent.children, removed);
        return child;
      };
      XMLNode2.prototype.remove = function() {
        var i, ref2;
        if (this.isRoot) {
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        }
        i = this.parent.children.indexOf(this);
        [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref2 = []));
        return this.parent;
      };
      XMLNode2.prototype.node = function(name, attributes, text) {
        var child, ref2;
        if (name != null) {
          name = getValue(name);
        }
        attributes || (attributes = {});
        attributes = getValue(attributes);
        if (!isObject(attributes)) {
          ref2 = [attributes, text], text = ref2[0], attributes = ref2[1];
        }
        child = new XMLElement(this, name, attributes);
        if (text != null) {
          child.text(text);
        }
        this.children.push(child);
        return child;
      };
      XMLNode2.prototype.text = function(value) {
        var child;
        if (isObject(value)) {
          this.element(value);
        }
        child = new XMLText(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.cdata = function(value) {
        var child;
        child = new XMLCData(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.comment = function(value) {
        var child;
        child = new XMLComment(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.commentBefore = function(value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        child = this.parent.comment(value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.commentAfter = function(value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.comment(value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.raw = function(value) {
        var child;
        child = new XMLRaw(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.dummy = function() {
        var child;
        child = new XMLDummy(this);
        return child;
      };
      XMLNode2.prototype.instruction = function(target, value) {
        var insTarget, insValue, instruction, j, len;
        if (target != null) {
          target = getValue(target);
        }
        if (value != null) {
          value = getValue(value);
        }
        if (Array.isArray(target)) {
          for (j = 0, len = target.length;j < len; j++) {
            insTarget = target[j];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget))
              continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          instruction = new XMLProcessingInstruction(this, target, value);
          this.children.push(instruction);
        }
        return this;
      };
      XMLNode2.prototype.instructionBefore = function(target, value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        child = this.parent.instruction(target, value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.instructionAfter = function(target, value) {
        var child, i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.instruction(target, value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.declaration = function(version, encoding, standalone) {
        var doc, xmldec;
        doc = this.document();
        xmldec = new XMLDeclaration(doc, version, encoding, standalone);
        if (doc.children.length === 0) {
          doc.children.unshift(xmldec);
        } else if (doc.children[0].type === NodeType.Declaration) {
          doc.children[0] = xmldec;
        } else {
          doc.children.unshift(xmldec);
        }
        return doc.root() || doc;
      };
      XMLNode2.prototype.dtd = function(pubID, sysID) {
        var child, doc, doctype, i, j, k2, len, len1, ref2, ref3;
        doc = this.document();
        doctype = new XMLDocType(doc, pubID, sysID);
        ref2 = doc.children;
        for (i = j = 0, len = ref2.length;j < len; i = ++j) {
          child = ref2[i];
          if (child.type === NodeType.DocType) {
            doc.children[i] = doctype;
            return doctype;
          }
        }
        ref3 = doc.children;
        for (i = k2 = 0, len1 = ref3.length;k2 < len1; i = ++k2) {
          child = ref3[i];
          if (child.isRoot) {
            doc.children.splice(i, 0, doctype);
            return doctype;
          }
        }
        doc.children.push(doctype);
        return doctype;
      };
      XMLNode2.prototype.up = function() {
        if (this.isRoot) {
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        }
        return this.parent;
      };
      XMLNode2.prototype.root = function() {
        var node;
        node = this;
        while (node) {
          if (node.type === NodeType.Document) {
            return node.rootObject;
          } else if (node.isRoot) {
            return node;
          } else {
            node = node.parent;
          }
        }
      };
      XMLNode2.prototype.document = function() {
        var node;
        node = this;
        while (node) {
          if (node.type === NodeType.Document) {
            return node;
          } else {
            node = node.parent;
          }
        }
      };
      XMLNode2.prototype.end = function(options) {
        return this.document().end(options);
      };
      XMLNode2.prototype.prev = function() {
        var i;
        i = this.parent.children.indexOf(this);
        if (i < 1) {
          throw new Error("Already at the first node. " + this.debugInfo());
        }
        return this.parent.children[i - 1];
      };
      XMLNode2.prototype.next = function() {
        var i;
        i = this.parent.children.indexOf(this);
        if (i === -1 || i === this.parent.children.length - 1) {
          throw new Error("Already at the last node. " + this.debugInfo());
        }
        return this.parent.children[i + 1];
      };
      XMLNode2.prototype.importDocument = function(doc) {
        var clonedRoot;
        clonedRoot = doc.root().clone();
        clonedRoot.parent = this;
        clonedRoot.isRoot = false;
        this.children.push(clonedRoot);
        return this;
      };
      XMLNode2.prototype.debugInfo = function(name) {
        var ref2, ref3;
        name = name || this.name;
        if (name == null && !((ref2 = this.parent) != null ? ref2.name : undefined)) {
          return "";
        } else if (name == null) {
          return "parent: <" + this.parent.name + ">";
        } else if (!((ref3 = this.parent) != null ? ref3.name : undefined)) {
          return "node: <" + name + ">";
        } else {
          return "node: <" + name + ">, parent: <" + this.parent.name + ">";
        }
      };
      XMLNode2.prototype.ele = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };
      XMLNode2.prototype.nod = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLNode2.prototype.txt = function(value) {
        return this.text(value);
      };
      XMLNode2.prototype.dat = function(value) {
        return this.cdata(value);
      };
      XMLNode2.prototype.com = function(value) {
        return this.comment(value);
      };
      XMLNode2.prototype.ins = function(target, value) {
        return this.instruction(target, value);
      };
      XMLNode2.prototype.doc = function() {
        return this.document();
      };
      XMLNode2.prototype.dec = function(version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      };
      XMLNode2.prototype.e = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };
      XMLNode2.prototype.n = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLNode2.prototype.t = function(value) {
        return this.text(value);
      };
      XMLNode2.prototype.d = function(value) {
        return this.cdata(value);
      };
      XMLNode2.prototype.c = function(value) {
        return this.comment(value);
      };
      XMLNode2.prototype.r = function(value) {
        return this.raw(value);
      };
      XMLNode2.prototype.i = function(target, value) {
        return this.instruction(target, value);
      };
      XMLNode2.prototype.u = function() {
        return this.up();
      };
      XMLNode2.prototype.importXMLBuilder = function(doc) {
        return this.importDocument(doc);
      };
      XMLNode2.prototype.replaceChild = function(newChild, oldChild) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.removeChild = function(oldChild) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.appendChild = function(newChild) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.hasChildNodes = function() {
        return this.children.length !== 0;
      };
      XMLNode2.prototype.cloneNode = function(deep) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.normalize = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.isSupported = function(feature, version) {
        return true;
      };
      XMLNode2.prototype.hasAttributes = function() {
        return this.attribs.length !== 0;
      };
      XMLNode2.prototype.compareDocumentPosition = function(other) {
        var ref, res;
        ref = this;
        if (ref === other) {
          return 0;
        } else if (this.document() !== other.document()) {
          res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
          if (Math.random() < 0.5) {
            res |= DocumentPosition.Preceding;
          } else {
            res |= DocumentPosition.Following;
          }
          return res;
        } else if (ref.isAncestor(other)) {
          return DocumentPosition.Contains | DocumentPosition.Preceding;
        } else if (ref.isDescendant(other)) {
          return DocumentPosition.Contains | DocumentPosition.Following;
        } else if (ref.isPreceding(other)) {
          return DocumentPosition.Preceding;
        } else {
          return DocumentPosition.Following;
        }
      };
      XMLNode2.prototype.isSameNode = function(other) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.lookupPrefix = function(namespaceURI) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.isDefaultNamespace = function(namespaceURI) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.lookupNamespaceURI = function(prefix) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.isEqualNode = function(node) {
        var i, j, ref2;
        if (node.nodeType !== this.nodeType) {
          return false;
        }
        if (node.children.length !== this.children.length) {
          return false;
        }
        for (i = j = 0, ref2 = this.children.length - 1;0 <= ref2 ? j <= ref2 : j >= ref2; i = 0 <= ref2 ? ++j : --j) {
          if (!this.children[i].isEqualNode(node.children[i])) {
            return false;
          }
        }
        return true;
      };
      XMLNode2.prototype.getFeature = function(feature, version) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.setUserData = function(key, data, handler) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.getUserData = function(key) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.contains = function(other) {
        if (!other) {
          return false;
        }
        return other === this || this.isDescendant(other);
      };
      XMLNode2.prototype.isDescendant = function(node) {
        var child, isDescendantChild, j, len, ref2;
        ref2 = this.children;
        for (j = 0, len = ref2.length;j < len; j++) {
          child = ref2[j];
          if (node === child) {
            return true;
          }
          isDescendantChild = child.isDescendant(node);
          if (isDescendantChild) {
            return true;
          }
        }
        return false;
      };
      XMLNode2.prototype.isAncestor = function(node) {
        return node.isDescendant(this);
      };
      XMLNode2.prototype.isPreceding = function(node) {
        var nodePos, thisPos;
        nodePos = this.treePosition(node);
        thisPos = this.treePosition(this);
        if (nodePos === -1 || thisPos === -1) {
          return false;
        } else {
          return nodePos < thisPos;
        }
      };
      XMLNode2.prototype.isFollowing = function(node) {
        var nodePos, thisPos;
        nodePos = this.treePosition(node);
        thisPos = this.treePosition(this);
        if (nodePos === -1 || thisPos === -1) {
          return false;
        } else {
          return nodePos > thisPos;
        }
      };
      XMLNode2.prototype.treePosition = function(node) {
        var found, pos;
        pos = 0;
        found = false;
        this.foreachTreeNode(this.document(), function(childNode) {
          pos++;
          if (!found && childNode === node) {
            return found = true;
          }
        });
        if (found) {
          return pos;
        } else {
          return -1;
        }
      };
      XMLNode2.prototype.foreachTreeNode = function(node, func) {
        var child, j, len, ref2, res;
        node || (node = this.document());
        ref2 = node.children;
        for (j = 0, len = ref2.length;j < len; j++) {
          child = ref2[j];
          if (res = func(child)) {
            return res;
          } else {
            res = this.foreachTreeNode(child, func);
            if (res) {
              return res;
            }
          }
        }
      };
      return XMLNode2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLStringifier.js
var require_XMLStringifier = __commonJS((exports, module) => {
  (function() {
    var XMLStringifier, bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    }, hasProp = {}.hasOwnProperty;
    module.exports = XMLStringifier = function() {
      function XMLStringifier2(options) {
        this.assertLegalName = bind(this.assertLegalName, this);
        this.assertLegalChar = bind(this.assertLegalChar, this);
        var key, ref, value;
        options || (options = {});
        this.options = options;
        if (!this.options.version) {
          this.options.version = "1.0";
        }
        ref = options.stringify || {};
        for (key in ref) {
          if (!hasProp.call(ref, key))
            continue;
          value = ref[key];
          this[key] = value;
        }
      }
      XMLStringifier2.prototype.name = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalName("" + val || "");
      };
      XMLStringifier2.prototype.text = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar(this.textEscape("" + val || ""));
      };
      XMLStringifier2.prototype.cdata = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        val = "" + val || "";
        val = val.replace("]]>", "]]]]><![CDATA[>");
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.comment = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        val = "" + val || "";
        if (val.match(/--/)) {
          throw new Error("Comment text cannot contain double-hypen: " + val);
        }
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.raw = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return "" + val || "";
      };
      XMLStringifier2.prototype.attValue = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar(this.attEscape(val = "" + val || ""));
      };
      XMLStringifier2.prototype.insTarget = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.insValue = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        val = "" + val || "";
        if (val.match(/\?>/)) {
          throw new Error("Invalid processing instruction value: " + val);
        }
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.xmlVersion = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        val = "" + val || "";
        if (!val.match(/1\.[0-9]+/)) {
          throw new Error("Invalid version number: " + val);
        }
        return val;
      };
      XMLStringifier2.prototype.xmlEncoding = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        val = "" + val || "";
        if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
          throw new Error("Invalid encoding: " + val);
        }
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.xmlStandalone = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        if (val) {
          return "yes";
        } else {
          return "no";
        }
      };
      XMLStringifier2.prototype.dtdPubID = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdSysID = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdElementValue = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdAttType = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdAttDefault = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdEntityValue = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdNData = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.convertAttKey = "@";
      XMLStringifier2.prototype.convertPIKey = "?";
      XMLStringifier2.prototype.convertTextKey = "#text";
      XMLStringifier2.prototype.convertCDataKey = "#cdata";
      XMLStringifier2.prototype.convertCommentKey = "#comment";
      XMLStringifier2.prototype.convertRawKey = "#raw";
      XMLStringifier2.prototype.assertLegalChar = function(str) {
        var regex, res;
        if (this.options.noValidation) {
          return str;
        }
        regex = "";
        if (this.options.version === "1.0") {
          regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
          if (res = str.match(regex)) {
            throw new Error("Invalid character in string: " + str + " at index " + res.index);
          }
        } else if (this.options.version === "1.1") {
          regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
          if (res = str.match(regex)) {
            throw new Error("Invalid character in string: " + str + " at index " + res.index);
          }
        }
        return str;
      };
      XMLStringifier2.prototype.assertLegalName = function(str) {
        var regex;
        if (this.options.noValidation) {
          return str;
        }
        this.assertLegalChar(str);
        regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
        if (!str.match(regex)) {
          throw new Error("Invalid character in name");
        }
        return str;
      };
      XMLStringifier2.prototype.textEscape = function(str) {
        var ampregex;
        if (this.options.noValidation) {
          return str;
        }
        ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
      };
      XMLStringifier2.prototype.attEscape = function(str) {
        var ampregex;
        if (this.options.noValidation) {
          return str;
        }
        ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
      };
      return XMLStringifier2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/WriterState.js
var require_WriterState = __commonJS((exports, module) => {
  (function() {
    module.exports = {
      None: 0,
      OpenTag: 1,
      InsideTag: 2,
      CloseTag: 3
    };
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLWriterBase.js
var require_XMLWriterBase = __commonJS((exports, module) => {
  (function() {
    var NodeType, WriterState, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLText, XMLWriterBase, assign, hasProp = {}.hasOwnProperty;
    assign = require_Utility().assign;
    NodeType = require_NodeType();
    XMLDeclaration = require_XMLDeclaration();
    XMLDocType = require_XMLDocType();
    XMLCData = require_XMLCData();
    XMLComment = require_XMLComment();
    XMLElement = require_XMLElement();
    XMLRaw = require_XMLRaw();
    XMLText = require_XMLText();
    XMLProcessingInstruction = require_XMLProcessingInstruction();
    XMLDummy = require_XMLDummy();
    XMLDTDAttList = require_XMLDTDAttList();
    XMLDTDElement = require_XMLDTDElement();
    XMLDTDEntity = require_XMLDTDEntity();
    XMLDTDNotation = require_XMLDTDNotation();
    WriterState = require_WriterState();
    module.exports = XMLWriterBase = function() {
      function XMLWriterBase2(options) {
        var key, ref, value;
        options || (options = {});
        this.options = options;
        ref = options.writer || {};
        for (key in ref) {
          if (!hasProp.call(ref, key))
            continue;
          value = ref[key];
          this["_" + key] = this[key];
          this[key] = value;
        }
      }
      XMLWriterBase2.prototype.filterOptions = function(options) {
        var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6;
        options || (options = {});
        options = assign({}, this.options, options);
        filteredOptions = {
          writer: this
        };
        filteredOptions.pretty = options.pretty || false;
        filteredOptions.allowEmpty = options.allowEmpty || false;
        filteredOptions.indent = (ref = options.indent) != null ? ref : "  ";
        filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : "\n";
        filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
        filteredOptions.dontPrettyTextNodes = (ref3 = (ref4 = options.dontPrettyTextNodes) != null ? ref4 : options.dontprettytextnodes) != null ? ref3 : 0;
        filteredOptions.spaceBeforeSlash = (ref5 = (ref6 = options.spaceBeforeSlash) != null ? ref6 : options.spacebeforeslash) != null ? ref5 : "";
        if (filteredOptions.spaceBeforeSlash === true) {
          filteredOptions.spaceBeforeSlash = " ";
        }
        filteredOptions.suppressPrettyCount = 0;
        filteredOptions.user = {};
        filteredOptions.state = WriterState.None;
        return filteredOptions;
      };
      XMLWriterBase2.prototype.indent = function(node, options, level) {
        var indentLevel;
        if (!options.pretty || options.suppressPrettyCount) {
          return "";
        } else if (options.pretty) {
          indentLevel = (level || 0) + options.offset + 1;
          if (indentLevel > 0) {
            return new Array(indentLevel).join(options.indent);
          }
        }
        return "";
      };
      XMLWriterBase2.prototype.endline = function(node, options, level) {
        if (!options.pretty || options.suppressPrettyCount) {
          return "";
        } else {
          return options.newline;
        }
      };
      XMLWriterBase2.prototype.attribute = function(att, options, level) {
        var r;
        this.openAttribute(att, options, level);
        r = " " + att.name + '="' + att.value + '"';
        this.closeAttribute(att, options, level);
        return r;
      };
      XMLWriterBase2.prototype.cdata = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<![CDATA[";
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += "]]>" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.comment = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<!-- ";
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += " -->" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.declaration = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<?xml";
        options.state = WriterState.InsideTag;
        r += ' version="' + node.version + '"';
        if (node.encoding != null) {
          r += ' encoding="' + node.encoding + '"';
        }
        if (node.standalone != null) {
          r += ' standalone="' + node.standalone + '"';
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + "?>";
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.docType = function(node, options, level) {
        var child, i, len, r, ref;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level);
        r += "<!DOCTYPE " + node.root().name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        if (node.children.length > 0) {
          r += " [";
          r += this.endline(node, options, level);
          options.state = WriterState.InsideTag;
          ref = node.children;
          for (i = 0, len = ref.length;i < len; i++) {
            child = ref[i];
            r += this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState.CloseTag;
          r += "]";
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + ">";
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.element = function(node, options, level) {
        var att, child, childNodeCount, firstChildNode, i, j, len, len1, name, prettySuppressed, r, ref, ref1, ref2;
        level || (level = 0);
        prettySuppressed = false;
        r = "";
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r += this.indent(node, options, level) + "<" + node.name;
        ref = node.attribs;
        for (name in ref) {
          if (!hasProp.call(ref, name))
            continue;
          att = ref[name];
          r += this.attribute(att, options, level);
        }
        childNodeCount = node.children.length;
        firstChildNode = childNodeCount === 0 ? null : node.children[0];
        if (childNodeCount === 0 || node.children.every(function(e) {
          return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === "";
        })) {
          if (options.allowEmpty) {
            r += ">";
            options.state = WriterState.CloseTag;
            r += "</" + node.name + ">" + this.endline(node, options, level);
          } else {
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + "/>" + this.endline(node, options, level);
          }
        } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
          r += ">";
          options.state = WriterState.InsideTag;
          options.suppressPrettyCount++;
          prettySuppressed = true;
          r += this.writeChildNode(firstChildNode, options, level + 1);
          options.suppressPrettyCount--;
          prettySuppressed = false;
          options.state = WriterState.CloseTag;
          r += "</" + node.name + ">" + this.endline(node, options, level);
        } else {
          if (options.dontPrettyTextNodes) {
            ref1 = node.children;
            for (i = 0, len = ref1.length;i < len; i++) {
              child = ref1[i];
              if ((child.type === NodeType.Text || child.type === NodeType.Raw) && child.value != null) {
                options.suppressPrettyCount++;
                prettySuppressed = true;
                break;
              }
            }
          }
          r += ">" + this.endline(node, options, level);
          options.state = WriterState.InsideTag;
          ref2 = node.children;
          for (j = 0, len1 = ref2.length;j < len1; j++) {
            child = ref2[j];
            r += this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState.CloseTag;
          r += this.indent(node, options, level) + "</" + node.name + ">";
          if (prettySuppressed) {
            options.suppressPrettyCount--;
          }
          r += this.endline(node, options, level);
          options.state = WriterState.None;
        }
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.writeChildNode = function(node, options, level) {
        switch (node.type) {
          case NodeType.CData:
            return this.cdata(node, options, level);
          case NodeType.Comment:
            return this.comment(node, options, level);
          case NodeType.Element:
            return this.element(node, options, level);
          case NodeType.Raw:
            return this.raw(node, options, level);
          case NodeType.Text:
            return this.text(node, options, level);
          case NodeType.ProcessingInstruction:
            return this.processingInstruction(node, options, level);
          case NodeType.Dummy:
            return "";
          case NodeType.Declaration:
            return this.declaration(node, options, level);
          case NodeType.DocType:
            return this.docType(node, options, level);
          case NodeType.AttributeDeclaration:
            return this.dtdAttList(node, options, level);
          case NodeType.ElementDeclaration:
            return this.dtdElement(node, options, level);
          case NodeType.EntityDeclaration:
            return this.dtdEntity(node, options, level);
          case NodeType.NotationDeclaration:
            return this.dtdNotation(node, options, level);
          default:
            throw new Error("Unknown XML node type: " + node.constructor.name);
        }
      };
      XMLWriterBase2.prototype.processingInstruction = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<?";
        options.state = WriterState.InsideTag;
        r += node.target;
        if (node.value) {
          r += " " + node.value;
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + "?>";
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.raw = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level);
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.text = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level);
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.dtdAttList = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<!ATTLIST";
        options.state = WriterState.InsideTag;
        r += " " + node.elementName + " " + node.attributeName + " " + node.attributeType;
        if (node.defaultValueType !== "#DEFAULT") {
          r += " " + node.defaultValueType;
        }
        if (node.defaultValue) {
          r += ' "' + node.defaultValue + '"';
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.dtdElement = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<!ELEMENT";
        options.state = WriterState.InsideTag;
        r += " " + node.name + " " + node.value;
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.dtdEntity = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<!ENTITY";
        options.state = WriterState.InsideTag;
        if (node.pe) {
          r += " %";
        }
        r += " " + node.name;
        if (node.value) {
          r += ' "' + node.value + '"';
        } else {
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.nData) {
            r += " NDATA " + node.nData;
          }
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.dtdNotation = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<!NOTATION";
        options.state = WriterState.InsideTag;
        r += " " + node.name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.pubID) {
          r += ' PUBLIC "' + node.pubID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.openNode = function(node, options, level) {
      };
      XMLWriterBase2.prototype.closeNode = function(node, options, level) {
      };
      XMLWriterBase2.prototype.openAttribute = function(att, options, level) {
      };
      XMLWriterBase2.prototype.closeAttribute = function(att, options, level) {
      };
      return XMLWriterBase2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLStringWriter.js
var require_XMLStringWriter = __commonJS((exports, module) => {
  (function() {
    var XMLStringWriter, XMLWriterBase, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLWriterBase = require_XMLWriterBase();
    module.exports = XMLStringWriter = function(superClass) {
      extend(XMLStringWriter2, superClass);
      function XMLStringWriter2(options) {
        XMLStringWriter2.__super__.constructor.call(this, options);
      }
      XMLStringWriter2.prototype.document = function(doc, options) {
        var child, i, len, r, ref;
        options = this.filterOptions(options);
        r = "";
        ref = doc.children;
        for (i = 0, len = ref.length;i < len; i++) {
          child = ref[i];
          r += this.writeChildNode(child, options, 0);
        }
        if (options.pretty && r.slice(-options.newline.length) === options.newline) {
          r = r.slice(0, -options.newline.length);
        }
        return r;
      };
      return XMLStringWriter2;
    }(XMLWriterBase);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDocument.js
var require_XMLDocument = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isPlainObject = require_Utility().isPlainObject;
    XMLDOMImplementation = require_XMLDOMImplementation();
    XMLDOMConfiguration = require_XMLDOMConfiguration();
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    XMLStringifier = require_XMLStringifier();
    XMLStringWriter = require_XMLStringWriter();
    module.exports = XMLDocument = function(superClass) {
      extend(XMLDocument2, superClass);
      function XMLDocument2(options) {
        XMLDocument2.__super__.constructor.call(this, null);
        this.name = "#document";
        this.type = NodeType.Document;
        this.documentURI = null;
        this.domConfig = new XMLDOMConfiguration;
        options || (options = {});
        if (!options.writer) {
          options.writer = new XMLStringWriter;
        }
        this.options = options;
        this.stringify = new XMLStringifier(options);
      }
      Object.defineProperty(XMLDocument2.prototype, "implementation", {
        value: new XMLDOMImplementation
      });
      Object.defineProperty(XMLDocument2.prototype, "doctype", {
        get: function() {
          var child, i, len, ref;
          ref = this.children;
          for (i = 0, len = ref.length;i < len; i++) {
            child = ref[i];
            if (child.type === NodeType.DocType) {
              return child;
            }
          }
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "documentElement", {
        get: function() {
          return this.rootObject || null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "inputEncoding", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "strictErrorChecking", {
        get: function() {
          return false;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "xmlEncoding", {
        get: function() {
          if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
            return this.children[0].encoding;
          } else {
            return null;
          }
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "xmlStandalone", {
        get: function() {
          if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
            return this.children[0].standalone === "yes";
          } else {
            return false;
          }
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "xmlVersion", {
        get: function() {
          if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
            return this.children[0].version;
          } else {
            return "1.0";
          }
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "URL", {
        get: function() {
          return this.documentURI;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "origin", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "compatMode", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "characterSet", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "contentType", {
        get: function() {
          return null;
        }
      });
      XMLDocument2.prototype.end = function(writer) {
        var writerOptions;
        writerOptions = {};
        if (!writer) {
          writer = this.options.writer;
        } else if (isPlainObject(writer)) {
          writerOptions = writer;
          writer = this.options.writer;
        }
        return writer.document(this, writer.filterOptions(writerOptions));
      };
      XMLDocument2.prototype.toString = function(options) {
        return this.options.writer.document(this, this.options.writer.filterOptions(options));
      };
      XMLDocument2.prototype.createElement = function(tagName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createDocumentFragment = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createTextNode = function(data) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createComment = function(data) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createCDATASection = function(data) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createProcessingInstruction = function(target, data) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createAttribute = function(name) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createEntityReference = function(name) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.getElementsByTagName = function(tagname) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.importNode = function(importedNode, deep) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createElementNS = function(namespaceURI, qualifiedName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createAttributeNS = function(namespaceURI, qualifiedName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.getElementById = function(elementId) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.adoptNode = function(source) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.normalizeDocument = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.renameNode = function(node, namespaceURI, qualifiedName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.getElementsByClassName = function(classNames) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createEvent = function(eventInterface) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createRange = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createNodeIterator = function(root, whatToShow, filter) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createTreeWalker = function(root, whatToShow, filter) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      return XMLDocument2;
    }(XMLNode);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLDocumentCB.js
var require_XMLDocumentCB = __commonJS((exports, module) => {
  (function() {
    var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, ref, hasProp = {}.hasOwnProperty;
    ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject, getValue = ref.getValue;
    NodeType = require_NodeType();
    XMLDocument = require_XMLDocument();
    XMLElement = require_XMLElement();
    XMLCData = require_XMLCData();
    XMLComment = require_XMLComment();
    XMLRaw = require_XMLRaw();
    XMLText = require_XMLText();
    XMLProcessingInstruction = require_XMLProcessingInstruction();
    XMLDeclaration = require_XMLDeclaration();
    XMLDocType = require_XMLDocType();
    XMLDTDAttList = require_XMLDTDAttList();
    XMLDTDEntity = require_XMLDTDEntity();
    XMLDTDElement = require_XMLDTDElement();
    XMLDTDNotation = require_XMLDTDNotation();
    XMLAttribute = require_XMLAttribute();
    XMLStringifier = require_XMLStringifier();
    XMLStringWriter = require_XMLStringWriter();
    WriterState = require_WriterState();
    module.exports = XMLDocumentCB = function() {
      function XMLDocumentCB2(options, onData, onEnd) {
        var writerOptions;
        this.name = "?xml";
        this.type = NodeType.Document;
        options || (options = {});
        writerOptions = {};
        if (!options.writer) {
          options.writer = new XMLStringWriter;
        } else if (isPlainObject(options.writer)) {
          writerOptions = options.writer;
          options.writer = new XMLStringWriter;
        }
        this.options = options;
        this.writer = options.writer;
        this.writerOptions = this.writer.filterOptions(writerOptions);
        this.stringify = new XMLStringifier(options);
        this.onDataCallback = onData || function() {
        };
        this.onEndCallback = onEnd || function() {
        };
        this.currentNode = null;
        this.currentLevel = -1;
        this.openTags = {};
        this.documentStarted = false;
        this.documentCompleted = false;
        this.root = null;
      }
      XMLDocumentCB2.prototype.createChildNode = function(node) {
        var att, attName, attributes, child, i, len, ref1, ref2;
        switch (node.type) {
          case NodeType.CData:
            this.cdata(node.value);
            break;
          case NodeType.Comment:
            this.comment(node.value);
            break;
          case NodeType.Element:
            attributes = {};
            ref1 = node.attribs;
            for (attName in ref1) {
              if (!hasProp.call(ref1, attName))
                continue;
              att = ref1[attName];
              attributes[attName] = att.value;
            }
            this.node(node.name, attributes);
            break;
          case NodeType.Dummy:
            this.dummy();
            break;
          case NodeType.Raw:
            this.raw(node.value);
            break;
          case NodeType.Text:
            this.text(node.value);
            break;
          case NodeType.ProcessingInstruction:
            this.instruction(node.target, node.value);
            break;
          default:
            throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
        }
        ref2 = node.children;
        for (i = 0, len = ref2.length;i < len; i++) {
          child = ref2[i];
          this.createChildNode(child);
          if (child.type === NodeType.Element) {
            this.up();
          }
        }
        return this;
      };
      XMLDocumentCB2.prototype.dummy = function() {
        return this;
      };
      XMLDocumentCB2.prototype.node = function(name, attributes, text) {
        var ref1;
        if (name == null) {
          throw new Error("Missing node name.");
        }
        if (this.root && this.currentLevel === -1) {
          throw new Error("Document can only have one root node. " + this.debugInfo(name));
        }
        this.openCurrent();
        name = getValue(name);
        if (attributes == null) {
          attributes = {};
        }
        attributes = getValue(attributes);
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        this.currentNode = new XMLElement(this, name, attributes);
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        if (text != null) {
          this.text(text);
        }
        return this;
      };
      XMLDocumentCB2.prototype.element = function(name, attributes, text) {
        var child, i, len, oldValidationFlag, ref1, root;
        if (this.currentNode && this.currentNode.type === NodeType.DocType) {
          this.dtdElement.apply(this, arguments);
        } else {
          if (Array.isArray(name) || isObject(name) || isFunction(name)) {
            oldValidationFlag = this.options.noValidation;
            this.options.noValidation = true;
            root = new XMLDocument(this.options).element("TEMP_ROOT");
            root.element(name);
            this.options.noValidation = oldValidationFlag;
            ref1 = root.children;
            for (i = 0, len = ref1.length;i < len; i++) {
              child = ref1[i];
              this.createChildNode(child);
              if (child.type === NodeType.Element) {
                this.up();
              }
            }
          } else {
            this.node(name, attributes, text);
          }
        }
        return this;
      };
      XMLDocumentCB2.prototype.attribute = function(name, value) {
        var attName, attValue;
        if (!this.currentNode || this.currentNode.children) {
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
        }
        if (name != null) {
          name = getValue(name);
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName))
              continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (this.options.keepNullAttributes && value == null) {
            this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
          } else if (value != null) {
            this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
          }
        }
        return this;
      };
      XMLDocumentCB2.prototype.text = function(value) {
        var node;
        this.openCurrent();
        node = new XMLText(this, value);
        this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.cdata = function(value) {
        var node;
        this.openCurrent();
        node = new XMLCData(this, value);
        this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.comment = function(value) {
        var node;
        this.openCurrent();
        node = new XMLComment(this, value);
        this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.raw = function(value) {
        var node;
        this.openCurrent();
        node = new XMLRaw(this, value);
        this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.instruction = function(target, value) {
        var i, insTarget, insValue, len, node;
        this.openCurrent();
        if (target != null) {
          target = getValue(target);
        }
        if (value != null) {
          value = getValue(value);
        }
        if (Array.isArray(target)) {
          for (i = 0, len = target.length;i < len; i++) {
            insTarget = target[i];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget))
              continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          node = new XMLProcessingInstruction(this, target, value);
          this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        }
        return this;
      };
      XMLDocumentCB2.prototype.declaration = function(version, encoding, standalone) {
        var node;
        this.openCurrent();
        if (this.documentStarted) {
          throw new Error("declaration() must be the first node.");
        }
        node = new XMLDeclaration(this, version, encoding, standalone);
        this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.doctype = function(root, pubID, sysID) {
        this.openCurrent();
        if (root == null) {
          throw new Error("Missing root node name.");
        }
        if (this.root) {
          throw new Error("dtd() must come before the root node.");
        }
        this.currentNode = new XMLDocType(this, pubID, sysID);
        this.currentNode.rootNodeName = root;
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        return this;
      };
      XMLDocumentCB2.prototype.dtdElement = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDElement(this, name, value);
        this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var node;
        this.openCurrent();
        node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.entity = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity(this, false, name, value);
        this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.pEntity = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity(this, true, name, value);
        this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.notation = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDNotation(this, name, value);
        this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.up = function() {
        if (this.currentLevel < 0) {
          throw new Error("The document node has no parent.");
        }
        if (this.currentNode) {
          if (this.currentNode.children) {
            this.closeNode(this.currentNode);
          } else {
            this.openNode(this.currentNode);
          }
          this.currentNode = null;
        } else {
          this.closeNode(this.openTags[this.currentLevel]);
        }
        delete this.openTags[this.currentLevel];
        this.currentLevel--;
        return this;
      };
      XMLDocumentCB2.prototype.end = function() {
        while (this.currentLevel >= 0) {
          this.up();
        }
        return this.onEnd();
      };
      XMLDocumentCB2.prototype.openCurrent = function() {
        if (this.currentNode) {
          this.currentNode.children = true;
          return this.openNode(this.currentNode);
        }
      };
      XMLDocumentCB2.prototype.openNode = function(node) {
        var att, chunk, name, ref1;
        if (!node.isOpen) {
          if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) {
            this.root = node;
          }
          chunk = "";
          if (node.type === NodeType.Element) {
            this.writerOptions.state = WriterState.OpenTag;
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<" + node.name;
            ref1 = node.attribs;
            for (name in ref1) {
              if (!hasProp.call(ref1, name))
                continue;
              att = ref1[name];
              chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
            }
            chunk += (node.children ? ">" : "/>") + this.writer.endline(node, this.writerOptions, this.currentLevel);
            this.writerOptions.state = WriterState.InsideTag;
          } else {
            this.writerOptions.state = WriterState.OpenTag;
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + node.rootNodeName;
            if (node.pubID && node.sysID) {
              chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              chunk += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.children) {
              chunk += " [";
              this.writerOptions.state = WriterState.InsideTag;
            } else {
              this.writerOptions.state = WriterState.CloseTag;
              chunk += ">";
            }
            chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
          }
          this.onData(chunk, this.currentLevel);
          return node.isOpen = true;
        }
      };
      XMLDocumentCB2.prototype.closeNode = function(node) {
        var chunk;
        if (!node.isClosed) {
          chunk = "";
          this.writerOptions.state = WriterState.CloseTag;
          if (node.type === NodeType.Element) {
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "</" + node.name + ">" + this.writer.endline(node, this.writerOptions, this.currentLevel);
          } else {
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(node, this.writerOptions, this.currentLevel);
          }
          this.writerOptions.state = WriterState.None;
          this.onData(chunk, this.currentLevel);
          return node.isClosed = true;
        }
      };
      XMLDocumentCB2.prototype.onData = function(chunk, level) {
        this.documentStarted = true;
        return this.onDataCallback(chunk, level + 1);
      };
      XMLDocumentCB2.prototype.onEnd = function() {
        this.documentCompleted = true;
        return this.onEndCallback();
      };
      XMLDocumentCB2.prototype.debugInfo = function(name) {
        if (name == null) {
          return "";
        } else {
          return "node: <" + name + ">";
        }
      };
      XMLDocumentCB2.prototype.ele = function() {
        return this.element.apply(this, arguments);
      };
      XMLDocumentCB2.prototype.nod = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLDocumentCB2.prototype.txt = function(value) {
        return this.text(value);
      };
      XMLDocumentCB2.prototype.dat = function(value) {
        return this.cdata(value);
      };
      XMLDocumentCB2.prototype.com = function(value) {
        return this.comment(value);
      };
      XMLDocumentCB2.prototype.ins = function(target, value) {
        return this.instruction(target, value);
      };
      XMLDocumentCB2.prototype.dec = function(version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      };
      XMLDocumentCB2.prototype.dtd = function(root, pubID, sysID) {
        return this.doctype(root, pubID, sysID);
      };
      XMLDocumentCB2.prototype.e = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };
      XMLDocumentCB2.prototype.n = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLDocumentCB2.prototype.t = function(value) {
        return this.text(value);
      };
      XMLDocumentCB2.prototype.d = function(value) {
        return this.cdata(value);
      };
      XMLDocumentCB2.prototype.c = function(value) {
        return this.comment(value);
      };
      XMLDocumentCB2.prototype.r = function(value) {
        return this.raw(value);
      };
      XMLDocumentCB2.prototype.i = function(target, value) {
        return this.instruction(target, value);
      };
      XMLDocumentCB2.prototype.att = function() {
        if (this.currentNode && this.currentNode.type === NodeType.DocType) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };
      XMLDocumentCB2.prototype.a = function() {
        if (this.currentNode && this.currentNode.type === NodeType.DocType) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };
      XMLDocumentCB2.prototype.ent = function(name, value) {
        return this.entity(name, value);
      };
      XMLDocumentCB2.prototype.pent = function(name, value) {
        return this.pEntity(name, value);
      };
      XMLDocumentCB2.prototype.not = function(name, value) {
        return this.notation(name, value);
      };
      return XMLDocumentCB2;
    }();
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/XMLStreamWriter.js
var require_XMLStreamWriter = __commonJS((exports, module) => {
  (function() {
    var NodeType, WriterState, XMLStreamWriter, XMLWriterBase, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType = require_NodeType();
    XMLWriterBase = require_XMLWriterBase();
    WriterState = require_WriterState();
    module.exports = XMLStreamWriter = function(superClass) {
      extend(XMLStreamWriter2, superClass);
      function XMLStreamWriter2(stream, options) {
        this.stream = stream;
        XMLStreamWriter2.__super__.constructor.call(this, options);
      }
      XMLStreamWriter2.prototype.endline = function(node, options, level) {
        if (node.isLastRootNode && options.state === WriterState.CloseTag) {
          return "";
        } else {
          return XMLStreamWriter2.__super__.endline.call(this, node, options, level);
        }
      };
      XMLStreamWriter2.prototype.document = function(doc, options) {
        var child, i, j, k2, len, len1, ref, ref1, results;
        ref = doc.children;
        for (i = j = 0, len = ref.length;j < len; i = ++j) {
          child = ref[i];
          child.isLastRootNode = i === doc.children.length - 1;
        }
        options = this.filterOptions(options);
        ref1 = doc.children;
        results = [];
        for (k2 = 0, len1 = ref1.length;k2 < len1; k2++) {
          child = ref1[k2];
          results.push(this.writeChildNode(child, options, 0));
        }
        return results;
      };
      XMLStreamWriter2.prototype.attribute = function(att, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.attribute.call(this, att, options, level));
      };
      XMLStreamWriter2.prototype.cdata = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.cdata.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.comment = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.comment.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.declaration = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.declaration.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.docType = function(node, options, level) {
        var child, j, len, ref;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        this.stream.write(this.indent(node, options, level));
        this.stream.write("<!DOCTYPE " + node.root().name);
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        if (node.children.length > 0) {
          this.stream.write(" [");
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.InsideTag;
          ref = node.children;
          for (j = 0, len = ref.length;j < len; j++) {
            child = ref[j];
            this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState.CloseTag;
          this.stream.write("]");
        }
        options.state = WriterState.CloseTag;
        this.stream.write(options.spaceBeforeSlash + ">");
        this.stream.write(this.endline(node, options, level));
        options.state = WriterState.None;
        return this.closeNode(node, options, level);
      };
      XMLStreamWriter2.prototype.element = function(node, options, level) {
        var att, child, childNodeCount, firstChildNode, j, len, name, prettySuppressed, ref, ref1;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        this.stream.write(this.indent(node, options, level) + "<" + node.name);
        ref = node.attribs;
        for (name in ref) {
          if (!hasProp.call(ref, name))
            continue;
          att = ref[name];
          this.attribute(att, options, level);
        }
        childNodeCount = node.children.length;
        firstChildNode = childNodeCount === 0 ? null : node.children[0];
        if (childNodeCount === 0 || node.children.every(function(e) {
          return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === "";
        })) {
          if (options.allowEmpty) {
            this.stream.write(">");
            options.state = WriterState.CloseTag;
            this.stream.write("</" + node.name + ">");
          } else {
            options.state = WriterState.CloseTag;
            this.stream.write(options.spaceBeforeSlash + "/>");
          }
        } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
          this.stream.write(">");
          options.state = WriterState.InsideTag;
          options.suppressPrettyCount++;
          prettySuppressed = true;
          this.writeChildNode(firstChildNode, options, level + 1);
          options.suppressPrettyCount--;
          prettySuppressed = false;
          options.state = WriterState.CloseTag;
          this.stream.write("</" + node.name + ">");
        } else {
          this.stream.write(">" + this.endline(node, options, level));
          options.state = WriterState.InsideTag;
          ref1 = node.children;
          for (j = 0, len = ref1.length;j < len; j++) {
            child = ref1[j];
            this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState.CloseTag;
          this.stream.write(this.indent(node, options, level) + "</" + node.name + ">");
        }
        this.stream.write(this.endline(node, options, level));
        options.state = WriterState.None;
        return this.closeNode(node, options, level);
      };
      XMLStreamWriter2.prototype.processingInstruction = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.processingInstruction.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.raw = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.raw.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.text = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.text.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.dtdAttList = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.dtdAttList.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.dtdElement = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.dtdElement.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.dtdEntity = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.dtdEntity.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.dtdNotation = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.dtdNotation.call(this, node, options, level));
      };
      return XMLStreamWriter2;
    }(XMLWriterBase);
  }).call(exports);
});

// ../../node_modules/xmlbuilder/lib/index.js
var require_lib2 = __commonJS((exports, module) => {
  (function() {
    var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;
    ref = require_Utility(), assign = ref.assign, isFunction = ref.isFunction;
    XMLDOMImplementation = require_XMLDOMImplementation();
    XMLDocument = require_XMLDocument();
    XMLDocumentCB = require_XMLDocumentCB();
    XMLStringWriter = require_XMLStringWriter();
    XMLStreamWriter = require_XMLStreamWriter();
    NodeType = require_NodeType();
    WriterState = require_WriterState();
    exports.create = function(name, xmldec, doctype, options) {
      var doc, root;
      if (name == null) {
        throw new Error("Root element needs a name.");
      }
      options = assign({}, xmldec, doctype, options);
      doc = new XMLDocument(options);
      root = doc.element(name);
      if (!options.headless) {
        doc.declaration(options);
        if (options.pubID != null || options.sysID != null) {
          doc.dtd(options);
        }
      }
      return root;
    };
    exports.begin = function(options, onData, onEnd) {
      var ref1;
      if (isFunction(options)) {
        ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
        options = {};
      }
      if (onData) {
        return new XMLDocumentCB(options, onData, onEnd);
      } else {
        return new XMLDocument(options);
      }
    };
    exports.stringWriter = function(options) {
      return new XMLStringWriter(options);
    };
    exports.streamWriter = function(stream, options) {
      return new XMLStreamWriter(stream, options);
    };
    exports.implementation = new XMLDOMImplementation;
    exports.nodeType = NodeType;
    exports.writerState = WriterState;
  }).call(exports);
});

// ../../node_modules/xml2js/lib/builder.js
var require_builder = __commonJS((exports) => {
  (function() {
    var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA, hasProp = {}.hasOwnProperty;
    builder = require_lib2();
    defaults = require_defaults2().defaults;
    requiresCDATA = function(entry) {
      return typeof entry === "string" && (entry.indexOf("&") >= 0 || entry.indexOf(">") >= 0 || entry.indexOf("<") >= 0);
    };
    wrapCDATA = function(entry) {
      return "<![CDATA[" + escapeCDATA(entry) + "]]>";
    };
    escapeCDATA = function(entry) {
      return entry.replace("]]>", "]]]]><![CDATA[>");
    };
    exports.Builder = function() {
      function Builder(opts) {
        var key, ref, value;
        this.options = {};
        ref = defaults["0.2"];
        for (key in ref) {
          if (!hasProp.call(ref, key))
            continue;
          value = ref[key];
          this.options[key] = value;
        }
        for (key in opts) {
          if (!hasProp.call(opts, key))
            continue;
          value = opts[key];
          this.options[key] = value;
        }
      }
      Builder.prototype.buildObject = function(rootObj) {
        var attrkey, charkey, render, rootElement, rootName;
        attrkey = this.options.attrkey;
        charkey = this.options.charkey;
        if (Object.keys(rootObj).length === 1 && this.options.rootName === defaults["0.2"].rootName) {
          rootName = Object.keys(rootObj)[0];
          rootObj = rootObj[rootName];
        } else {
          rootName = this.options.rootName;
        }
        render = function(_this) {
          return function(element, obj) {
            var attr, child, entry, index, key, value;
            if (typeof obj !== "object") {
              if (_this.options.cdata && requiresCDATA(obj)) {
                element.raw(wrapCDATA(obj));
              } else {
                element.txt(obj);
              }
            } else if (Array.isArray(obj)) {
              for (index in obj) {
                if (!hasProp.call(obj, index))
                  continue;
                child = obj[index];
                for (key in child) {
                  entry = child[key];
                  element = render(element.ele(key), entry).up();
                }
              }
            } else {
              for (key in obj) {
                if (!hasProp.call(obj, key))
                  continue;
                child = obj[key];
                if (key === attrkey) {
                  if (typeof child === "object") {
                    for (attr in child) {
                      value = child[attr];
                      element = element.att(attr, value);
                    }
                  }
                } else if (key === charkey) {
                  if (_this.options.cdata && requiresCDATA(child)) {
                    element = element.raw(wrapCDATA(child));
                  } else {
                    element = element.txt(child);
                  }
                } else if (Array.isArray(child)) {
                  for (index in child) {
                    if (!hasProp.call(child, index))
                      continue;
                    entry = child[index];
                    if (typeof entry === "string") {
                      if (_this.options.cdata && requiresCDATA(entry)) {
                        element = element.ele(key).raw(wrapCDATA(entry)).up();
                      } else {
                        element = element.ele(key, entry).up();
                      }
                    } else {
                      element = render(element.ele(key), entry).up();
                    }
                  }
                } else if (typeof child === "object") {
                  element = render(element.ele(key), child).up();
                } else {
                  if (typeof child === "string" && _this.options.cdata && requiresCDATA(child)) {
                    element = element.ele(key).raw(wrapCDATA(child)).up();
                  } else {
                    if (child == null) {
                      child = "";
                    }
                    element = element.ele(key, child.toString()).up();
                  }
                }
              }
            }
            return element;
          };
        }(this);
        rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
          headless: this.options.headless,
          allowSurrogateChars: this.options.allowSurrogateChars
        });
        return render(rootElement, rootObj).end(this.options.renderOpts);
      };
      return Builder;
    }();
  }).call(exports);
});

// node:string_decoder
var exports_string_decoder = {};
__export(exports_string_decoder, {
  default: () => export_default,
  StringDecoder: () => export_StringDecoder
});
var Tt2, Z, Nt, St, Rt, _t, R = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Lt = (e, t, r, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of St(t))
      !_t.call(e, n) && n !== r && Z(e, n, { get: () => t[n], enumerable: !(i = Nt(t, n)) || i.enumerable });
  return e;
}, kt = (e, t, r) => (r = e != null ? Tt2(Rt(e)) : {}, Lt(t || !e || !e.__esModule ? Z(r, "default", { value: e, enumerable: true }) : r, e)), tt2, rt2, Bt, mt, At2, Ut2, export_StringDecoder, export_default;
var init_string_decoder = __esm(() => {
  Tt2 = Object.create;
  Z = Object.defineProperty;
  Nt = Object.getOwnPropertyDescriptor;
  St = Object.getOwnPropertyNames;
  Rt = Object.getPrototypeOf;
  _t = Object.prototype.hasOwnProperty;
  tt2 = R((k2) => {
    k2.byteLength = Mt;
    k2.toByteArray = Pt;
    k2.fromByteArray = Gt;
    var d = [], w = [], Dt = typeof Uint8Array < "u" ? Uint8Array : Array, O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (I2 = 0, Q = O.length;I2 < Q; ++I2)
      d[I2] = O[I2], w[O.charCodeAt(I2)] = I2;
    var I2, Q;
    w["-".charCodeAt(0)] = 62;
    w["_".charCodeAt(0)] = 63;
    function v(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      r === -1 && (r = t);
      var i = r === t ? 0 : 4 - r % 4;
      return [r, i];
    }
    function Mt(e) {
      var t = v(e), r = t[0], i = t[1];
      return (r + i) * 3 / 4 - i;
    }
    function $t(e, t, r) {
      return (t + r) * 3 / 4 - r;
    }
    function Pt(e) {
      var t, r = v(e), i = r[0], n = r[1], o = new Dt($t(e, i, n)), u = 0, s = n > 0 ? i - 4 : i, f;
      for (f = 0;f < s; f += 4)
        t = w[e.charCodeAt(f)] << 18 | w[e.charCodeAt(f + 1)] << 12 | w[e.charCodeAt(f + 2)] << 6 | w[e.charCodeAt(f + 3)], o[u++] = t >> 16 & 255, o[u++] = t >> 8 & 255, o[u++] = t & 255;
      return n === 2 && (t = w[e.charCodeAt(f)] << 2 | w[e.charCodeAt(f + 1)] >> 4, o[u++] = t & 255), n === 1 && (t = w[e.charCodeAt(f)] << 10 | w[e.charCodeAt(f + 1)] << 4 | w[e.charCodeAt(f + 2)] >> 2, o[u++] = t >> 8 & 255, o[u++] = t & 255), o;
    }
    function Ot(e) {
      return d[e >> 18 & 63] + d[e >> 12 & 63] + d[e >> 6 & 63] + d[e & 63];
    }
    function qt(e, t, r) {
      for (var i, n = [], o = t;o < r; o += 3)
        i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), n.push(Ot(i));
      return n.join("");
    }
    function Gt(e) {
      for (var t, r = e.length, i = r % 3, n = [], o = 16383, u = 0, s = r - i;u < s; u += o)
        n.push(qt(e, u, u + o > s ? s : u + o));
      return i === 1 ? (t = e[r - 1], n.push(d[t >> 2] + d[t << 4 & 63] + "==")) : i === 2 && (t = (e[r - 2] << 8) + e[r - 1], n.push(d[t >> 10] + d[t >> 4 & 63] + d[t << 2 & 63] + "=")), n.join("");
    }
  });
  rt2 = R((q) => {
    q.read = function(e, t, r, i, n) {
      var o, u, s = n * 8 - i - 1, f = (1 << s) - 1, l = f >> 1, a = -7, c = r ? n - 1 : 0, U = r ? -1 : 1, x = e[t + c];
      for (c += U, o = x & (1 << -a) - 1, x >>= -a, a += s;a > 0; o = o * 256 + e[t + c], c += U, a -= 8)
        ;
      for (u = o & (1 << -a) - 1, o >>= -a, a += i;a > 0; u = u * 256 + e[t + c], c += U, a -= 8)
        ;
      if (o === 0)
        o = 1 - l;
      else {
        if (o === f)
          return u ? NaN : (x ? -1 : 1) * (1 / 0);
        u = u + Math.pow(2, i), o = o - l;
      }
      return (x ? -1 : 1) * u * Math.pow(2, o - i);
    };
    q.write = function(e, t, r, i, n, o) {
      var u, s, f, l = o * 8 - n - 1, a = (1 << l) - 1, c = a >> 1, U = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x = i ? 0 : o - 1, P = i ? 1 : -1, Ct = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, u = a) : (u = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -u)) < 1 && (u--, f *= 2), u + c >= 1 ? t += U / f : t += U * Math.pow(2, 1 - c), t * f >= 2 && (u++, f /= 2), u + c >= a ? (s = 0, u = a) : u + c >= 1 ? (s = (t * f - 1) * Math.pow(2, n), u = u + c) : (s = t * Math.pow(2, c - 1) * Math.pow(2, n), u = 0));n >= 8; e[r + x] = s & 255, x += P, s /= 256, n -= 8)
        ;
      for (u = u << n | s, l += n;l > 0; e[r + x] = u & 255, x += P, u /= 256, l -= 8)
        ;
      e[r + x - P] |= Ct * 128;
    };
  });
  Bt = R((S) => {
    var G = tt2(), T = rt2(), et2 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    S.Buffer = h;
    S.SlowBuffer = Vt;
    S.INSPECT_MAX_BYTES = 50;
    var D = 2147483647;
    S.kMaxLength = D;
    h.TYPED_ARRAY_SUPPORT = Wt();
    !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Wt() {
      try {
        let e = new Uint8Array(1), t = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(h.prototype, "parent", { enumerable: true, get: function() {
      if (!!h.isBuffer(this))
        return this.buffer;
    } });
    Object.defineProperty(h.prototype, "offset", { enumerable: true, get: function() {
      if (!!h.isBuffer(this))
        return this.byteOffset;
    } });
    function E2(e) {
      if (e > D)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
      let t = new Uint8Array(e);
      return Object.setPrototypeOf(t, h.prototype), t;
    }
    function h(e, t, r) {
      if (typeof e == "number") {
        if (typeof t == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return b(e);
      }
      return ut2(e, t, r);
    }
    h.poolSize = 8192;
    function ut2(e, t, r) {
      if (typeof e == "string")
        return jt(e, t);
      if (ArrayBuffer.isView(e))
        return bt(e);
      if (e == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      if (B(e, ArrayBuffer) || e && B(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (B(e, SharedArrayBuffer) || e && B(e.buffer, SharedArrayBuffer)))
        return Y(e, t, r);
      if (typeof e == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let i = e.valueOf && e.valueOf();
      if (i != null && i !== e)
        return h.from(i, t, r);
      let n = Ht(e);
      if (n)
        return n;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
        return h.from(e[Symbol.toPrimitive]("string"), t, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    h.from = function(e, t, r) {
      return ut2(e, t, r);
    };
    Object.setPrototypeOf(h.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(h, Uint8Array);
    function ht(e) {
      if (typeof e != "number")
        throw new TypeError('"size" argument must be of type number');
      if (e < 0)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function Yt(e, t, r) {
      return ht(e), e <= 0 ? E2(e) : t !== undefined ? typeof r == "string" ? E2(e).fill(t, r) : E2(e).fill(t) : E2(e);
    }
    h.alloc = function(e, t, r) {
      return Yt(e, t, r);
    };
    function b(e) {
      return ht(e), E2(e < 0 ? 0 : H(e) | 0);
    }
    h.allocUnsafe = function(e) {
      return b(e);
    };
    h.allocUnsafeSlow = function(e) {
      return b(e);
    };
    function jt(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !h.isEncoding(t))
        throw new TypeError("Unknown encoding: " + t);
      let r = st(e, t) | 0, i = E2(r), n = i.write(e, t);
      return n !== r && (i = i.slice(0, n)), i;
    }
    function W(e) {
      let t = e.length < 0 ? 0 : H(e.length) | 0, r = E2(t);
      for (let i = 0;i < t; i += 1)
        r[i] = e[i] & 255;
      return r;
    }
    function bt(e) {
      if (B(e, Uint8Array)) {
        let t = new Uint8Array(e);
        return Y(t.buffer, t.byteOffset, t.byteLength);
      }
      return W(e);
    }
    function Y(e, t, r) {
      if (t < 0 || e.byteLength < t)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (r || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let i;
      return t === undefined && r === undefined ? i = new Uint8Array(e) : r === undefined ? i = new Uint8Array(e, t) : i = new Uint8Array(e, t, r), Object.setPrototypeOf(i, h.prototype), i;
    }
    function Ht(e) {
      if (h.isBuffer(e)) {
        let t = H(e.length) | 0, r = E2(t);
        return r.length === 0 || e.copy(r, 0, 0, t), r;
      }
      if (e.length !== undefined)
        return typeof e.length != "number" || X(e.length) ? E2(0) : W(e);
      if (e.type === "Buffer" && Array.isArray(e.data))
        return W(e.data);
    }
    function H(e) {
      if (e >= D)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + D.toString(16) + " bytes");
      return e | 0;
    }
    function Vt(e) {
      return +e != e && (e = 0), h.alloc(+e);
    }
    h.isBuffer = function(t) {
      return t != null && t._isBuffer === true && t !== h.prototype;
    };
    h.compare = function(t, r) {
      if (B(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), B(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)), !h.isBuffer(t) || !h.isBuffer(r))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === r)
        return 0;
      let i = t.length, n = r.length;
      for (let o = 0, u = Math.min(i, n);o < u; ++o)
        if (t[o] !== r[o]) {
          i = t[o], n = r[o];
          break;
        }
      return i < n ? -1 : n < i ? 1 : 0;
    };
    h.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    h.concat = function(t, r) {
      if (!Array.isArray(t))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0)
        return h.alloc(0);
      let i;
      if (r === undefined)
        for (r = 0, i = 0;i < t.length; ++i)
          r += t[i].length;
      let n = h.allocUnsafe(r), o = 0;
      for (i = 0;i < t.length; ++i) {
        let u = t[i];
        if (B(u, Uint8Array))
          o + u.length > n.length ? (h.isBuffer(u) || (u = h.from(u)), u.copy(n, o)) : Uint8Array.prototype.set.call(n, u, o);
        else if (h.isBuffer(u))
          u.copy(n, o);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        o += u.length;
      }
      return n;
    };
    function st(e, t) {
      if (h.isBuffer(e))
        return e.length;
      if (ArrayBuffer.isView(e) || B(e, ArrayBuffer))
        return e.byteLength;
      if (typeof e != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
      let r = e.length, i = arguments.length > 2 && arguments[2] === true;
      if (!i && r === 0)
        return 0;
      let n = false;
      for (;; )
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return j(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return dt(e).length;
          default:
            if (n)
              return i ? -1 : j(e).length;
            t = ("" + t).toLowerCase(), n = true;
        }
    }
    h.byteLength = st;
    function Xt(e, t, r) {
      let i = false;
      if ((t === undefined || t < 0) && (t = 0), t > this.length || ((r === undefined || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
        return "";
      for (e || (e = "utf8");; )
        switch (e) {
          case "hex":
            return ir2(this, t, r);
          case "utf8":
          case "utf-8":
            return ct(this, t, r);
          case "ascii":
            return rr(this, t, r);
          case "latin1":
          case "binary":
            return er(this, t, r);
          case "base64":
            return vt(this, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return nr(this, t, r);
          default:
            if (i)
              throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), i = true;
        }
    }
    h.prototype._isBuffer = true;
    function F(e, t, r) {
      let i = e[t];
      e[t] = e[r], e[r] = i;
    }
    h.prototype.swap16 = function() {
      let t = this.length;
      if (t % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let r = 0;r < t; r += 2)
        F(this, r, r + 1);
      return this;
    };
    h.prototype.swap32 = function() {
      let t = this.length;
      if (t % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let r = 0;r < t; r += 4)
        F(this, r, r + 3), F(this, r + 1, r + 2);
      return this;
    };
    h.prototype.swap64 = function() {
      let t = this.length;
      if (t % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let r = 0;r < t; r += 8)
        F(this, r, r + 7), F(this, r + 1, r + 6), F(this, r + 2, r + 5), F(this, r + 3, r + 4);
      return this;
    };
    h.prototype.toString = function() {
      let t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? ct(this, 0, t) : Xt.apply(this, arguments);
    };
    h.prototype.toLocaleString = h.prototype.toString;
    h.prototype.equals = function(t) {
      if (!h.isBuffer(t))
        throw new TypeError("Argument must be a Buffer");
      return this === t ? true : h.compare(this, t) === 0;
    };
    h.prototype.inspect = function() {
      let t = "", r = S.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">";
    };
    et2 && (h.prototype[et2] = h.prototype.inspect);
    h.prototype.compare = function(t, r, i, n, o) {
      if (B(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(t))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
      if (r === undefined && (r = 0), i === undefined && (i = t ? t.length : 0), n === undefined && (n = 0), o === undefined && (o = this.length), r < 0 || i > t.length || n < 0 || o > this.length)
        throw new RangeError("out of range index");
      if (n >= o && r >= i)
        return 0;
      if (n >= o)
        return -1;
      if (r >= i)
        return 1;
      if (r >>>= 0, i >>>= 0, n >>>= 0, o >>>= 0, this === t)
        return 0;
      let u = o - n, s = i - r, f = Math.min(u, s), l = this.slice(n, o), a = t.slice(r, i);
      for (let c = 0;c < f; ++c)
        if (l[c] !== a[c]) {
          u = l[c], s = a[c];
          break;
        }
      return u < s ? -1 : s < u ? 1 : 0;
    };
    function ft(e, t, r, i, n) {
      if (e.length === 0)
        return -1;
      if (typeof r == "string" ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, X(r) && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
        if (n)
          return -1;
        r = e.length - 1;
      } else if (r < 0)
        if (n)
          r = 0;
        else
          return -1;
      if (typeof t == "string" && (t = h.from(t, i)), h.isBuffer(t))
        return t.length === 0 ? -1 : it(e, t, r, i, n);
      if (typeof t == "number")
        return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : it(e, [t], r, i, n);
      throw new TypeError("val must be string, number or Buffer");
    }
    function it(e, t, r, i, n) {
      let o = 1, u = e.length, s = t.length;
      if (i !== undefined && (i = String(i).toLowerCase(), i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
        if (e.length < 2 || t.length < 2)
          return -1;
        o = 2, u /= 2, s /= 2, r /= 2;
      }
      function f(a, c) {
        return o === 1 ? a[c] : a.readUInt16BE(c * o);
      }
      let l;
      if (n) {
        let a = -1;
        for (l = r;l < u; l++)
          if (f(e, l) === f(t, a === -1 ? 0 : l - a)) {
            if (a === -1 && (a = l), l - a + 1 === s)
              return a * o;
          } else
            a !== -1 && (l -= l - a), a = -1;
      } else
        for (r + s > u && (r = u - s), l = r;l >= 0; l--) {
          let a = true;
          for (let c = 0;c < s; c++)
            if (f(e, l + c) !== f(t, c)) {
              a = false;
              break;
            }
          if (a)
            return l;
        }
      return -1;
    }
    h.prototype.includes = function(t, r, i) {
      return this.indexOf(t, r, i) !== -1;
    };
    h.prototype.indexOf = function(t, r, i) {
      return ft(this, t, r, i, true);
    };
    h.prototype.lastIndexOf = function(t, r, i) {
      return ft(this, t, r, i, false);
    };
    function Jt(e, t, r, i) {
      r = Number(r) || 0;
      let n = e.length - r;
      i ? (i = Number(i), i > n && (i = n)) : i = n;
      let o = t.length;
      i > o / 2 && (i = o / 2);
      let u;
      for (u = 0;u < i; ++u) {
        let s = parseInt(t.substr(u * 2, 2), 16);
        if (X(s))
          return u;
        e[r + u] = s;
      }
      return u;
    }
    function zt(e, t, r, i) {
      return M(j(t, e.length - r), e, r, i);
    }
    function Kt(e, t, r, i) {
      return M(sr(t), e, r, i);
    }
    function Zt(e, t, r, i) {
      return M(dt(t), e, r, i);
    }
    function Qt(e, t, r, i) {
      return M(fr(t, e.length - r), e, r, i);
    }
    h.prototype.write = function(t, r, i, n) {
      if (r === undefined)
        n = "utf8", i = this.length, r = 0;
      else if (i === undefined && typeof r == "string")
        n = r, i = this.length, r = 0;
      else if (isFinite(r))
        r = r >>> 0, isFinite(i) ? (i = i >>> 0, n === undefined && (n = "utf8")) : (n = i, i = undefined);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let o = this.length - r;
      if ((i === undefined || i > o) && (i = o), t.length > 0 && (i < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n || (n = "utf8");
      let u = false;
      for (;; )
        switch (n) {
          case "hex":
            return Jt(this, t, r, i);
          case "utf8":
          case "utf-8":
            return zt(this, t, r, i);
          case "ascii":
          case "latin1":
          case "binary":
            return Kt(this, t, r, i);
          case "base64":
            return Zt(this, t, r, i);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Qt(this, t, r, i);
          default:
            if (u)
              throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), u = true;
        }
    };
    h.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function vt(e, t, r) {
      return t === 0 && r === e.length ? G.fromByteArray(e) : G.fromByteArray(e.slice(t, r));
    }
    function ct(e, t, r) {
      r = Math.min(e.length, r);
      let i = [], n = t;
      for (;n < r; ) {
        let o = e[n], u = null, s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (n + s <= r) {
          let f, l, a, c;
          switch (s) {
            case 1:
              o < 128 && (u = o);
              break;
            case 2:
              f = e[n + 1], (f & 192) === 128 && (c = (o & 31) << 6 | f & 63, c > 127 && (u = c));
              break;
            case 3:
              f = e[n + 1], l = e[n + 2], (f & 192) === 128 && (l & 192) === 128 && (c = (o & 15) << 12 | (f & 63) << 6 | l & 63, c > 2047 && (c < 55296 || c > 57343) && (u = c));
              break;
            case 4:
              f = e[n + 1], l = e[n + 2], a = e[n + 3], (f & 192) === 128 && (l & 192) === 128 && (a & 192) === 128 && (c = (o & 15) << 18 | (f & 63) << 12 | (l & 63) << 6 | a & 63, c > 65535 && c < 1114112 && (u = c));
          }
        }
        u === null ? (u = 65533, s = 1) : u > 65535 && (u -= 65536, i.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), i.push(u), n += s;
      }
      return tr(i);
    }
    var nt = 4096;
    function tr(e) {
      let t = e.length;
      if (t <= nt)
        return String.fromCharCode.apply(String, e);
      let r = "", i = 0;
      for (;i < t; )
        r += String.fromCharCode.apply(String, e.slice(i, i += nt));
      return r;
    }
    function rr(e, t, r) {
      let i = "";
      r = Math.min(e.length, r);
      for (let n = t;n < r; ++n)
        i += String.fromCharCode(e[n] & 127);
      return i;
    }
    function er(e, t, r) {
      let i = "";
      r = Math.min(e.length, r);
      for (let n = t;n < r; ++n)
        i += String.fromCharCode(e[n]);
      return i;
    }
    function ir2(e, t, r) {
      let i = e.length;
      (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
      let n = "";
      for (let o = t;o < r; ++o)
        n += cr[e[o]];
      return n;
    }
    function nr(e, t, r) {
      let i = e.slice(t, r), n = "";
      for (let o = 0;o < i.length - 1; o += 2)
        n += String.fromCharCode(i[o] + i[o + 1] * 256);
      return n;
    }
    h.prototype.slice = function(t, r) {
      let i = this.length;
      t = ~~t, r = r === undefined ? i : ~~r, t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), r < 0 ? (r += i, r < 0 && (r = 0)) : r > i && (r = i), r < t && (r = t);
      let n = this.subarray(t, r);
      return Object.setPrototypeOf(n, h.prototype), n;
    };
    function p(e, t, r) {
      if (e % 1 !== 0 || e < 0)
        throw new RangeError("offset is not uint");
      if (e + t > r)
        throw new RangeError("Trying to access beyond buffer length");
    }
    h.prototype.readUintLE = h.prototype.readUIntLE = function(t, r, i) {
      t = t >>> 0, r = r >>> 0, i || p(t, r, this.length);
      let n = this[t], o = 1, u = 0;
      for (;++u < r && (o *= 256); )
        n += this[t + u] * o;
      return n;
    };
    h.prototype.readUintBE = h.prototype.readUIntBE = function(t, r, i) {
      t = t >>> 0, r = r >>> 0, i || p(t, r, this.length);
      let n = this[t + --r], o = 1;
      for (;r > 0 && (o *= 256); )
        n += this[t + --r] * o;
      return n;
    };
    h.prototype.readUint8 = h.prototype.readUInt8 = function(t, r) {
      return t = t >>> 0, r || p(t, 1, this.length), this[t];
    };
    h.prototype.readUint16LE = h.prototype.readUInt16LE = function(t, r) {
      return t = t >>> 0, r || p(t, 2, this.length), this[t] | this[t + 1] << 8;
    };
    h.prototype.readUint16BE = h.prototype.readUInt16BE = function(t, r) {
      return t = t >>> 0, r || p(t, 2, this.length), this[t] << 8 | this[t + 1];
    };
    h.prototype.readUint32LE = h.prototype.readUInt32LE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    h.prototype.readUint32BE = h.prototype.readUInt32BE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    h.prototype.readBigUInt64LE = m(function(t) {
      t = t >>> 0, N(t, "offset");
      let r = this[t], i = this[t + 7];
      (r === undefined || i === undefined) && _(t, this.length - 8);
      let n = r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + i * 2 ** 24;
      return BigInt(n) + (BigInt(o) << BigInt(32));
    });
    h.prototype.readBigUInt64BE = m(function(t) {
      t = t >>> 0, N(t, "offset");
      let r = this[t], i = this[t + 7];
      (r === undefined || i === undefined) && _(t, this.length - 8);
      let n = r * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + i;
      return (BigInt(n) << BigInt(32)) + BigInt(o);
    });
    h.prototype.readIntLE = function(t, r, i) {
      t = t >>> 0, r = r >>> 0, i || p(t, r, this.length);
      let n = this[t], o = 1, u = 0;
      for (;++u < r && (o *= 256); )
        n += this[t + u] * o;
      return o *= 128, n >= o && (n -= Math.pow(2, 8 * r)), n;
    };
    h.prototype.readIntBE = function(t, r, i) {
      t = t >>> 0, r = r >>> 0, i || p(t, r, this.length);
      let n = r, o = 1, u = this[t + --n];
      for (;n > 0 && (o *= 256); )
        u += this[t + --n] * o;
      return o *= 128, u >= o && (u -= Math.pow(2, 8 * r)), u;
    };
    h.prototype.readInt8 = function(t, r) {
      return t = t >>> 0, r || p(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    };
    h.prototype.readInt16LE = function(t, r) {
      t = t >>> 0, r || p(t, 2, this.length);
      let i = this[t] | this[t + 1] << 8;
      return i & 32768 ? i | 4294901760 : i;
    };
    h.prototype.readInt16BE = function(t, r) {
      t = t >>> 0, r || p(t, 2, this.length);
      let i = this[t + 1] | this[t] << 8;
      return i & 32768 ? i | 4294901760 : i;
    };
    h.prototype.readInt32LE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    h.prototype.readInt32BE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    h.prototype.readBigInt64LE = m(function(t) {
      t = t >>> 0, N(t, "offset");
      let r = this[t], i = this[t + 7];
      (r === undefined || i === undefined) && _(t, this.length - 8);
      let n = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (i << 24);
      return (BigInt(n) << BigInt(32)) + BigInt(r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
    });
    h.prototype.readBigInt64BE = m(function(t) {
      t = t >>> 0, N(t, "offset");
      let r = this[t], i = this[t + 7];
      (r === undefined || i === undefined) && _(t, this.length - 8);
      let n = (r << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
      return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + i);
    });
    h.prototype.readFloatLE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), T.read(this, t, true, 23, 4);
    };
    h.prototype.readFloatBE = function(t, r) {
      return t = t >>> 0, r || p(t, 4, this.length), T.read(this, t, false, 23, 4);
    };
    h.prototype.readDoubleLE = function(t, r) {
      return t = t >>> 0, r || p(t, 8, this.length), T.read(this, t, true, 52, 8);
    };
    h.prototype.readDoubleBE = function(t, r) {
      return t = t >>> 0, r || p(t, 8, this.length), T.read(this, t, false, 52, 8);
    };
    function y(e, t, r, i, n, o) {
      if (!h.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > n || t < o)
        throw new RangeError('"value" argument is out of bounds');
      if (r + i > e.length)
        throw new RangeError("Index out of range");
    }
    h.prototype.writeUintLE = h.prototype.writeUIntLE = function(t, r, i, n) {
      if (t = +t, r = r >>> 0, i = i >>> 0, !n) {
        let s = Math.pow(2, 8 * i) - 1;
        y(this, t, r, i, s, 0);
      }
      let o = 1, u = 0;
      for (this[r] = t & 255;++u < i && (o *= 256); )
        this[r + u] = t / o & 255;
      return r + i;
    };
    h.prototype.writeUintBE = h.prototype.writeUIntBE = function(t, r, i, n) {
      if (t = +t, r = r >>> 0, i = i >>> 0, !n) {
        let s = Math.pow(2, 8 * i) - 1;
        y(this, t, r, i, s, 0);
      }
      let o = i - 1, u = 1;
      for (this[r + o] = t & 255;--o >= 0 && (u *= 256); )
        this[r + o] = t / u & 255;
      return r + i;
    };
    h.prototype.writeUint8 = h.prototype.writeUInt8 = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 1, 255, 0), this[r] = t & 255, r + 1;
    };
    h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 2, 65535, 0), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = t & 255, r + 4;
    };
    h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    function at(e, t, r, i, n) {
      xt2(t, i, n, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
      let u = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r++] = u, u = u >> 8, e[r++] = u, u = u >> 8, e[r++] = u, u = u >> 8, e[r++] = u, r;
    }
    function lt(e, t, r, i, n) {
      xt2(t, i, n, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
      let u = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r + 3] = u, u = u >> 8, e[r + 2] = u, u = u >> 8, e[r + 1] = u, u = u >> 8, e[r] = u, r + 8;
    }
    h.prototype.writeBigUInt64LE = m(function(t, r = 0) {
      return at(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h.prototype.writeBigUInt64BE = m(function(t, r = 0) {
      return lt(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h.prototype.writeIntLE = function(t, r, i, n) {
      if (t = +t, r = r >>> 0, !n) {
        let f = Math.pow(2, 8 * i - 1);
        y(this, t, r, i, f - 1, -f);
      }
      let o = 0, u = 1, s = 0;
      for (this[r] = t & 255;++o < i && (u *= 256); )
        t < 0 && s === 0 && this[r + o - 1] !== 0 && (s = 1), this[r + o] = (t / u >> 0) - s & 255;
      return r + i;
    };
    h.prototype.writeIntBE = function(t, r, i, n) {
      if (t = +t, r = r >>> 0, !n) {
        let f = Math.pow(2, 8 * i - 1);
        y(this, t, r, i, f - 1, -f);
      }
      let o = i - 1, u = 1, s = 0;
      for (this[r + o] = t & 255;--o >= 0 && (u *= 256); )
        t < 0 && s === 0 && this[r + o + 1] !== 0 && (s = 1), this[r + o] = (t / u >> 0) - s & 255;
      return r + i;
    };
    h.prototype.writeInt8 = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = t & 255, r + 1;
    };
    h.prototype.writeInt16LE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 2, 32767, -32768), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    h.prototype.writeInt16BE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    h.prototype.writeInt32LE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 4, 2147483647, -2147483648), this[r] = t & 255, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4;
    };
    h.prototype.writeInt32BE = function(t, r, i) {
      return t = +t, r = r >>> 0, i || y(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    h.prototype.writeBigInt64LE = m(function(t, r = 0) {
      return at(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    h.prototype.writeBigInt64BE = m(function(t, r = 0) {
      return lt(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function pt(e, t, r, i, n, o) {
      if (r + i > e.length)
        throw new RangeError("Index out of range");
      if (r < 0)
        throw new RangeError("Index out of range");
    }
    function yt(e, t, r, i, n) {
      return t = +t, r = r >>> 0, n || pt(e, t, r, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), T.write(e, t, r, i, 23, 4), r + 4;
    }
    h.prototype.writeFloatLE = function(t, r, i) {
      return yt(this, t, r, true, i);
    };
    h.prototype.writeFloatBE = function(t, r, i) {
      return yt(this, t, r, false, i);
    };
    function wt(e, t, r, i, n) {
      return t = +t, r = r >>> 0, n || pt(e, t, r, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), T.write(e, t, r, i, 52, 8), r + 8;
    }
    h.prototype.writeDoubleLE = function(t, r, i) {
      return wt(this, t, r, true, i);
    };
    h.prototype.writeDoubleBE = function(t, r, i) {
      return wt(this, t, r, false, i);
    };
    h.prototype.copy = function(t, r, i, n) {
      if (!h.isBuffer(t))
        throw new TypeError("argument should be a Buffer");
      if (i || (i = 0), !n && n !== 0 && (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < i && (n = i), n === i || t.length === 0 || this.length === 0)
        return 0;
      if (r < 0)
        throw new RangeError("targetStart out of bounds");
      if (i < 0 || i >= this.length)
        throw new RangeError("Index out of range");
      if (n < 0)
        throw new RangeError("sourceEnd out of bounds");
      n > this.length && (n = this.length), t.length - r < n - i && (n = t.length - r + i);
      let o = n - i;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, i, n) : Uint8Array.prototype.set.call(t, this.subarray(i, n), r), o;
    };
    h.prototype.fill = function(t, r, i, n) {
      if (typeof t == "string") {
        if (typeof r == "string" ? (n = r, r = 0, i = this.length) : typeof i == "string" && (n = i, i = this.length), n !== undefined && typeof n != "string")
          throw new TypeError("encoding must be a string");
        if (typeof n == "string" && !h.isEncoding(n))
          throw new TypeError("Unknown encoding: " + n);
        if (t.length === 1) {
          let u = t.charCodeAt(0);
          (n === "utf8" && u < 128 || n === "latin1") && (t = u);
        }
      } else
        typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (r < 0 || this.length < r || this.length < i)
        throw new RangeError("Out of range index");
      if (i <= r)
        return this;
      r = r >>> 0, i = i === undefined ? this.length : i >>> 0, t || (t = 0);
      let o;
      if (typeof t == "number")
        for (o = r;o < i; ++o)
          this[o] = t;
      else {
        let u = h.isBuffer(t) ? t : h.from(t, n), s = u.length;
        if (s === 0)
          throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (o = 0;o < i - r; ++o)
          this[o + r] = u[o % s];
      }
      return this;
    };
    var C2 = {};
    function V2(e, t, r) {
      C2[e] = class extends r {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
        }
        get code() {
          return e;
        }
        set code(n) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      };
    }
    V2("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    V2("ERR_INVALID_ARG_TYPE", function(e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    }, TypeError);
    V2("ERR_OUT_OF_RANGE", function(e, t, r) {
      let i = `The value of "${e}" is out of range.`, n = r;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = ot(String(r)) : typeof r == "bigint" && (n = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (n = ot(n)), n += "n"), i += ` It must be ${t}. Received ${n}`, i;
    }, RangeError);
    function ot(e) {
      let t = "", r = e.length, i = e[0] === "-" ? 1 : 0;
      for (;r >= i + 4; r -= 3)
        t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function or(e, t, r) {
      N(t, "offset"), (e[t] === undefined || e[t + r] === undefined) && _(t, e.length - (r + 1));
    }
    function xt2(e, t, r, i, n, o) {
      if (e > r || e < t) {
        let u = typeof t == "bigint" ? "n" : "", s;
        throw o > 3 ? t === 0 || t === BigInt(0) ? s = `>= 0${u} and < 2${u} ** ${(o + 1) * 8}${u}` : s = `>= -(2${u} ** ${(o + 1) * 8 - 1}${u}) and < 2 ** ${(o + 1) * 8 - 1}${u}` : s = `>= ${t}${u} and <= ${r}${u}`, new C2.ERR_OUT_OF_RANGE("value", s, e);
      }
      or(i, n, o);
    }
    function N(e, t) {
      if (typeof e != "number")
        throw new C2.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function _(e, t, r) {
      throw Math.floor(e) !== e ? (N(e, r), new C2.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new C2.ERR_BUFFER_OUT_OF_BOUNDS : new C2.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
    }
    var ur = /[^+/0-9A-Za-z-_]/g;
    function hr(e) {
      if (e = e.split("=")[0], e = e.trim().replace(ur, ""), e.length < 2)
        return "";
      for (;e.length % 4 !== 0; )
        e = e + "=";
      return e;
    }
    function j(e, t) {
      t = t || 1 / 0;
      let r, i = e.length, n = null, o = [];
      for (let u = 0;u < i; ++u) {
        if (r = e.charCodeAt(u), r > 55295 && r < 57344) {
          if (!n) {
            if (r > 56319) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            } else if (u + 1 === i) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            n = r;
            continue;
          }
          if (r < 56320) {
            (t -= 3) > -1 && o.push(239, 191, 189), n = r;
            continue;
          }
          r = (n - 55296 << 10 | r - 56320) + 65536;
        } else
          n && (t -= 3) > -1 && o.push(239, 191, 189);
        if (n = null, r < 128) {
          if ((t -= 1) < 0)
            break;
          o.push(r);
        } else if (r < 2048) {
          if ((t -= 2) < 0)
            break;
          o.push(r >> 6 | 192, r & 63 | 128);
        } else if (r < 65536) {
          if ((t -= 3) < 0)
            break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
        } else if (r < 1114112) {
          if ((t -= 4) < 0)
            break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return o;
    }
    function sr(e) {
      let t = [];
      for (let r = 0;r < e.length; ++r)
        t.push(e.charCodeAt(r) & 255);
      return t;
    }
    function fr(e, t) {
      let r, i, n, o = [];
      for (let u = 0;u < e.length && !((t -= 2) < 0); ++u)
        r = e.charCodeAt(u), i = r >> 8, n = r % 256, o.push(n), o.push(i);
      return o;
    }
    function dt(e) {
      return G.toByteArray(hr(e));
    }
    function M(e, t, r, i) {
      let n;
      for (n = 0;n < i && !(n + r >= t.length || n >= e.length); ++n)
        t[n + r] = e[n];
      return n;
    }
    function B(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function X(e) {
      return e !== e;
    }
    var cr = function() {
      let e = "0123456789abcdef", t = new Array(256);
      for (let r = 0;r < 16; ++r) {
        let i = r * 16;
        for (let n = 0;n < 16; ++n)
          t[i + n] = e[r] + e[n];
      }
      return t;
    }();
    function m(e) {
      return typeof BigInt > "u" ? ar : e;
    }
    function ar() {
      throw new Error("BigInt not supported");
    }
  });
  mt = R((J2, Et2) => {
    var $ = Bt(), g = $.Buffer;
    function gt(e, t) {
      for (var r in e)
        t[r] = e[r];
    }
    g.from && g.alloc && g.allocUnsafe && g.allocUnsafeSlow ? Et2.exports = $ : (gt($, J2), J2.Buffer = A);
    function A(e, t, r) {
      return g(e, t, r);
    }
    A.prototype = Object.create(g.prototype);
    gt(g, A);
    A.from = function(e, t, r) {
      if (typeof e == "number")
        throw new TypeError("Argument must not be a number");
      return g(e, t, r);
    };
    A.alloc = function(e, t, r) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      var i = g(e);
      return t !== undefined ? typeof r == "string" ? i.fill(t, r) : i.fill(t) : i.fill(0), i;
    };
    A.allocUnsafe = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return g(e);
    };
    A.allocUnsafeSlow = function(e) {
      if (typeof e != "number")
        throw new TypeError("Argument must be a number");
      return $.SlowBuffer(e);
    };
  });
  At2 = R((Ft) => {
    var K = mt().Buffer, It = K.isEncoding || function(e) {
      switch (e = "" + e, e && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function lr(e) {
      if (!e)
        return "utf8";
      for (var t;; )
        switch (e) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return e;
          default:
            if (t)
              return;
            e = ("" + e).toLowerCase(), t = true;
        }
    }
    function pr(e) {
      var t = lr(e);
      if (typeof t != "string" && (K.isEncoding === It || !It(e)))
        throw new Error("Unknown encoding: " + e);
      return t || e;
    }
    Ft.StringDecoder = L;
    function L(e) {
      this.encoding = pr(e);
      var t;
      switch (this.encoding) {
        case "utf16le":
          this.text = gr, this.end = Er2, t = 4;
          break;
        case "utf8":
          this.fillLast = xr, t = 4;
          break;
        case "base64":
          this.text = mr, this.end = Ir, t = 3;
          break;
        default:
          this.write = Fr, this.end = Ar;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = K.allocUnsafe(t);
    }
    L.prototype.write = function(e) {
      if (e.length === 0)
        return "";
      var t, r;
      if (this.lastNeed) {
        if (t = this.fillLast(e), t === undefined)
          return "";
        r = this.lastNeed, this.lastNeed = 0;
      } else
        r = 0;
      return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
    };
    L.prototype.end = Br;
    L.prototype.text = dr;
    L.prototype.fillLast = function(e) {
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
    };
    function z(e) {
      return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
    }
    function yr(e, t, r) {
      var i = t.length - 1;
      if (i < r)
        return 0;
      var n = z(t[i]);
      return n >= 0 ? (n > 0 && (e.lastNeed = n - 1), n) : --i < r || n === -2 ? 0 : (n = z(t[i]), n >= 0 ? (n > 0 && (e.lastNeed = n - 2), n) : --i < r || n === -2 ? 0 : (n = z(t[i]), n >= 0 ? (n > 0 && (n === 2 ? n = 0 : e.lastNeed = n - 3), n) : 0));
    }
    function wr(e, t, r) {
      if ((t[0] & 192) !== 128)
        return e.lastNeed = 0, "\uFFFD";
      if (e.lastNeed > 1 && t.length > 1) {
        if ((t[1] & 192) !== 128)
          return e.lastNeed = 1, "\uFFFD";
        if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) !== 128)
          return e.lastNeed = 2, "\uFFFD";
      }
    }
    function xr(e) {
      var t = this.lastTotal - this.lastNeed, r = wr(this, e, t);
      if (r !== undefined)
        return r;
      if (this.lastNeed <= e.length)
        return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length;
    }
    function dr(e, t) {
      var r = yr(this, e, t);
      if (!this.lastNeed)
        return e.toString("utf8", t);
      this.lastTotal = r;
      var i = e.length - (r - this.lastNeed);
      return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i);
    }
    function Br(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + "\uFFFD" : t;
    }
    function gr(e, t) {
      if ((e.length - t) % 2 === 0) {
        var r = e.toString("utf16le", t);
        if (r) {
          var i = r.charCodeAt(r.length - 1);
          if (i >= 55296 && i <= 56319)
            return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
        }
        return r;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
    }
    function Er2(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }
      return t;
    }
    function mr(e, t) {
      var r = (e.length - t) % 3;
      return r === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
    }
    function Ir(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
    }
    function Fr(e) {
      return e.toString(this.encoding);
    }
    function Ar(e) {
      return e && e.length ? this.write(e) : "";
    }
  });
  Ut2 = kt(At2());
  export_StringDecoder = Ut2.StringDecoder;
  export_default = Ut2.StringDecoder;
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
});

// ../../node_modules/sax/lib/sax.js
var require_sax = __commonJS((exports) => {
  (function(sax) {
    sax.parser = function(strict, opt) {
      return new SAXParser(strict, opt);
    };
    sax.SAXParser = SAXParser;
    sax.SAXStream = SAXStream;
    sax.createStream = createStream;
    sax.MAX_BUFFER_LENGTH = 64 * 1024;
    var buffers = [
      "comment",
      "sgmlDecl",
      "textNode",
      "tagName",
      "doctype",
      "procInstName",
      "procInstBody",
      "entity",
      "attribName",
      "attribValue",
      "cdata",
      "script"
    ];
    sax.EVENTS = [
      "text",
      "processinginstruction",
      "sgmldeclaration",
      "doctype",
      "comment",
      "opentagstart",
      "attribute",
      "opentag",
      "closetag",
      "opencdata",
      "cdata",
      "closecdata",
      "error",
      "end",
      "ready",
      "script",
      "opennamespace",
      "closenamespace"
    ];
    function SAXParser(strict, opt) {
      if (!(this instanceof SAXParser)) {
        return new SAXParser(strict, opt);
      }
      var parser = this;
      clearBuffers(parser);
      parser.q = parser.c = "";
      parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
      parser.opt = opt || {};
      parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
      parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
      parser.tags = [];
      parser.closed = parser.closedRoot = parser.sawRoot = false;
      parser.tag = parser.error = null;
      parser.strict = !!strict;
      parser.noscript = !!(strict || parser.opt.noscript);
      parser.state = S.BEGIN;
      parser.strictEntities = parser.opt.strictEntities;
      parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
      parser.attribList = [];
      if (parser.opt.xmlns) {
        parser.ns = Object.create(rootNS);
      }
      if (parser.opt.unquotedAttributeValues === undefined) {
        parser.opt.unquotedAttributeValues = !strict;
      }
      parser.trackPosition = parser.opt.position !== false;
      if (parser.trackPosition) {
        parser.position = parser.line = parser.column = 0;
      }
      emit(parser, "onready");
    }
    if (!Object.create) {
      Object.create = function(o) {
        function F() {
        }
        F.prototype = o;
        var newf = new F;
        return newf;
      };
    }
    if (!Object.keys) {
      Object.keys = function(o) {
        var a = [];
        for (var i in o)
          if (o.hasOwnProperty(i))
            a.push(i);
        return a;
      };
    }
    function checkBufferLength(parser) {
      var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
      var maxActual = 0;
      for (var i = 0, l = buffers.length;i < l; i++) {
        var len = parser[buffers[i]].length;
        if (len > maxAllowed) {
          switch (buffers[i]) {
            case "textNode":
              closeText(parser);
              break;
            case "cdata":
              emitNode(parser, "oncdata", parser.cdata);
              parser.cdata = "";
              break;
            case "script":
              emitNode(parser, "onscript", parser.script);
              parser.script = "";
              break;
            default:
              error(parser, "Max buffer length exceeded: " + buffers[i]);
          }
        }
        maxActual = Math.max(maxActual, len);
      }
      var m = sax.MAX_BUFFER_LENGTH - maxActual;
      parser.bufferCheckPosition = m + parser.position;
    }
    function clearBuffers(parser) {
      for (var i = 0, l = buffers.length;i < l; i++) {
        parser[buffers[i]] = "";
      }
    }
    function flushBuffers(parser) {
      closeText(parser);
      if (parser.cdata !== "") {
        emitNode(parser, "oncdata", parser.cdata);
        parser.cdata = "";
      }
      if (parser.script !== "") {
        emitNode(parser, "onscript", parser.script);
        parser.script = "";
      }
    }
    SAXParser.prototype = {
      end: function() {
        end(this);
      },
      write,
      resume: function() {
        this.error = null;
        return this;
      },
      close: function() {
        return this.write(null);
      },
      flush: function() {
        flushBuffers(this);
      }
    };
    var Stream;
    try {
      Stream = (init_stream(), __toCommonJS(exports_stream)).Stream;
    } catch (ex) {
      Stream = function() {
      };
    }
    if (!Stream)
      Stream = function() {
      };
    var streamWraps = sax.EVENTS.filter(function(ev) {
      return ev !== "error" && ev !== "end";
    });
    function createStream(strict, opt) {
      return new SAXStream(strict, opt);
    }
    function SAXStream(strict, opt) {
      if (!(this instanceof SAXStream)) {
        return new SAXStream(strict, opt);
      }
      Stream.apply(this);
      this._parser = new SAXParser(strict, opt);
      this.writable = true;
      this.readable = true;
      var me = this;
      this._parser.onend = function() {
        me.emit("end");
      };
      this._parser.onerror = function(er) {
        me.emit("error", er);
        me._parser.error = null;
      };
      this._decoder = null;
      streamWraps.forEach(function(ev) {
        Object.defineProperty(me, "on" + ev, {
          get: function() {
            return me._parser["on" + ev];
          },
          set: function(h) {
            if (!h) {
              me.removeAllListeners(ev);
              me._parser["on" + ev] = h;
              return h;
            }
            me.on(ev, h);
          },
          enumerable: true,
          configurable: false
        });
      });
    }
    SAXStream.prototype = Object.create(Stream.prototype, {
      constructor: {
        value: SAXStream
      }
    });
    SAXStream.prototype.write = function(data) {
      if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
        if (!this._decoder) {
          var SD = (init_string_decoder(), __toCommonJS(exports_string_decoder)).StringDecoder;
          this._decoder = new SD("utf8");
        }
        data = this._decoder.write(data);
      }
      this._parser.write(data.toString());
      this.emit("data", data);
      return true;
    };
    SAXStream.prototype.end = function(chunk) {
      if (chunk && chunk.length) {
        this.write(chunk);
      }
      this._parser.end();
      return true;
    };
    SAXStream.prototype.on = function(ev, handler) {
      var me = this;
      if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
        me._parser["on" + ev] = function() {
          var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          args.splice(0, 0, ev);
          me.emit.apply(me, args);
        };
      }
      return Stream.prototype.on.call(me, ev, handler);
    };
    var CDATA = "[CDATA[";
    var DOCTYPE = "DOCTYPE";
    var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
    var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
    var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
    var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function isWhitespace(c) {
      return c === " " || c === "\n" || c === "\r" || c === "\t";
    }
    function isQuote(c) {
      return c === '"' || c === "\'";
    }
    function isAttribEnd(c) {
      return c === ">" || isWhitespace(c);
    }
    function isMatch(regex, c) {
      return regex.test(c);
    }
    function notMatch(regex, c) {
      return !isMatch(regex, c);
    }
    var S = 0;
    sax.STATE = {
      BEGIN: S++,
      BEGIN_WHITESPACE: S++,
      TEXT: S++,
      TEXT_ENTITY: S++,
      OPEN_WAKA: S++,
      SGML_DECL: S++,
      SGML_DECL_QUOTED: S++,
      DOCTYPE: S++,
      DOCTYPE_QUOTED: S++,
      DOCTYPE_DTD: S++,
      DOCTYPE_DTD_QUOTED: S++,
      COMMENT_STARTING: S++,
      COMMENT: S++,
      COMMENT_ENDING: S++,
      COMMENT_ENDED: S++,
      CDATA: S++,
      CDATA_ENDING: S++,
      CDATA_ENDING_2: S++,
      PROC_INST: S++,
      PROC_INST_BODY: S++,
      PROC_INST_ENDING: S++,
      OPEN_TAG: S++,
      OPEN_TAG_SLASH: S++,
      ATTRIB: S++,
      ATTRIB_NAME: S++,
      ATTRIB_NAME_SAW_WHITE: S++,
      ATTRIB_VALUE: S++,
      ATTRIB_VALUE_QUOTED: S++,
      ATTRIB_VALUE_CLOSED: S++,
      ATTRIB_VALUE_UNQUOTED: S++,
      ATTRIB_VALUE_ENTITY_Q: S++,
      ATTRIB_VALUE_ENTITY_U: S++,
      CLOSE_TAG: S++,
      CLOSE_TAG_SAW_WHITE: S++,
      SCRIPT: S++,
      SCRIPT_ENDING: S++
    };
    sax.XML_ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'"
    };
    sax.ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'",
      AElig: 198,
      Aacute: 193,
      Acirc: 194,
      Agrave: 192,
      Aring: 197,
      Atilde: 195,
      Auml: 196,
      Ccedil: 199,
      ETH: 208,
      Eacute: 201,
      Ecirc: 202,
      Egrave: 200,
      Euml: 203,
      Iacute: 205,
      Icirc: 206,
      Igrave: 204,
      Iuml: 207,
      Ntilde: 209,
      Oacute: 211,
      Ocirc: 212,
      Ograve: 210,
      Oslash: 216,
      Otilde: 213,
      Ouml: 214,
      THORN: 222,
      Uacute: 218,
      Ucirc: 219,
      Ugrave: 217,
      Uuml: 220,
      Yacute: 221,
      aacute: 225,
      acirc: 226,
      aelig: 230,
      agrave: 224,
      aring: 229,
      atilde: 227,
      auml: 228,
      ccedil: 231,
      eacute: 233,
      ecirc: 234,
      egrave: 232,
      eth: 240,
      euml: 235,
      iacute: 237,
      icirc: 238,
      igrave: 236,
      iuml: 239,
      ntilde: 241,
      oacute: 243,
      ocirc: 244,
      ograve: 242,
      oslash: 248,
      otilde: 245,
      ouml: 246,
      szlig: 223,
      thorn: 254,
      uacute: 250,
      ucirc: 251,
      ugrave: 249,
      uuml: 252,
      yacute: 253,
      yuml: 255,
      copy: 169,
      reg: 174,
      nbsp: 160,
      iexcl: 161,
      cent: 162,
      pound: 163,
      curren: 164,
      yen: 165,
      brvbar: 166,
      sect: 167,
      uml: 168,
      ordf: 170,
      laquo: 171,
      not: 172,
      shy: 173,
      macr: 175,
      deg: 176,
      plusmn: 177,
      sup1: 185,
      sup2: 178,
      sup3: 179,
      acute: 180,
      micro: 181,
      para: 182,
      middot: 183,
      cedil: 184,
      ordm: 186,
      raquo: 187,
      frac14: 188,
      frac12: 189,
      frac34: 190,
      iquest: 191,
      times: 215,
      divide: 247,
      OElig: 338,
      oelig: 339,
      Scaron: 352,
      scaron: 353,
      Yuml: 376,
      fnof: 402,
      circ: 710,
      tilde: 732,
      Alpha: 913,
      Beta: 914,
      Gamma: 915,
      Delta: 916,
      Epsilon: 917,
      Zeta: 918,
      Eta: 919,
      Theta: 920,
      Iota: 921,
      Kappa: 922,
      Lambda: 923,
      Mu: 924,
      Nu: 925,
      Xi: 926,
      Omicron: 927,
      Pi: 928,
      Rho: 929,
      Sigma: 931,
      Tau: 932,
      Upsilon: 933,
      Phi: 934,
      Chi: 935,
      Psi: 936,
      Omega: 937,
      alpha: 945,
      beta: 946,
      gamma: 947,
      delta: 948,
      epsilon: 949,
      zeta: 950,
      eta: 951,
      theta: 952,
      iota: 953,
      kappa: 954,
      lambda: 955,
      mu: 956,
      nu: 957,
      xi: 958,
      omicron: 959,
      pi: 960,
      rho: 961,
      sigmaf: 962,
      sigma: 963,
      tau: 964,
      upsilon: 965,
      phi: 966,
      chi: 967,
      psi: 968,
      omega: 969,
      thetasym: 977,
      upsih: 978,
      piv: 982,
      ensp: 8194,
      emsp: 8195,
      thinsp: 8201,
      zwnj: 8204,
      zwj: 8205,
      lrm: 8206,
      rlm: 8207,
      ndash: 8211,
      mdash: 8212,
      lsquo: 8216,
      rsquo: 8217,
      sbquo: 8218,
      ldquo: 8220,
      rdquo: 8221,
      bdquo: 8222,
      dagger: 8224,
      Dagger: 8225,
      bull: 8226,
      hellip: 8230,
      permil: 8240,
      prime: 8242,
      Prime: 8243,
      lsaquo: 8249,
      rsaquo: 8250,
      oline: 8254,
      frasl: 8260,
      euro: 8364,
      image: 8465,
      weierp: 8472,
      real: 8476,
      trade: 8482,
      alefsym: 8501,
      larr: 8592,
      uarr: 8593,
      rarr: 8594,
      darr: 8595,
      harr: 8596,
      crarr: 8629,
      lArr: 8656,
      uArr: 8657,
      rArr: 8658,
      dArr: 8659,
      hArr: 8660,
      forall: 8704,
      part: 8706,
      exist: 8707,
      empty: 8709,
      nabla: 8711,
      isin: 8712,
      notin: 8713,
      ni: 8715,
      prod: 8719,
      sum: 8721,
      minus: 8722,
      lowast: 8727,
      radic: 8730,
      prop: 8733,
      infin: 8734,
      ang: 8736,
      and: 8743,
      or: 8744,
      cap: 8745,
      cup: 8746,
      int: 8747,
      there4: 8756,
      sim: 8764,
      cong: 8773,
      asymp: 8776,
      ne: 8800,
      equiv: 8801,
      le: 8804,
      ge: 8805,
      sub: 8834,
      sup: 8835,
      nsub: 8836,
      sube: 8838,
      supe: 8839,
      oplus: 8853,
      otimes: 8855,
      perp: 8869,
      sdot: 8901,
      lceil: 8968,
      rceil: 8969,
      lfloor: 8970,
      rfloor: 8971,
      lang: 9001,
      rang: 9002,
      loz: 9674,
      spades: 9824,
      clubs: 9827,
      hearts: 9829,
      diams: 9830
    };
    Object.keys(sax.ENTITIES).forEach(function(key) {
      var e = sax.ENTITIES[key];
      var s2 = typeof e === "number" ? String.fromCharCode(e) : e;
      sax.ENTITIES[key] = s2;
    });
    for (var s in sax.STATE) {
      sax.STATE[sax.STATE[s]] = s;
    }
    S = sax.STATE;
    function emit(parser, event, data) {
      parser[event] && parser[event](data);
    }
    function emitNode(parser, nodeType, data) {
      if (parser.textNode)
        closeText(parser);
      emit(parser, nodeType, data);
    }
    function closeText(parser) {
      parser.textNode = textopts(parser.opt, parser.textNode);
      if (parser.textNode)
        emit(parser, "ontext", parser.textNode);
      parser.textNode = "";
    }
    function textopts(opt, text) {
      if (opt.trim)
        text = text.trim();
      if (opt.normalize)
        text = text.replace(/\s+/g, " ");
      return text;
    }
    function error(parser, er) {
      closeText(parser);
      if (parser.trackPosition) {
        er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
      }
      er = new Error(er);
      parser.error = er;
      emit(parser, "onerror", er);
      return parser;
    }
    function end(parser) {
      if (parser.sawRoot && !parser.closedRoot)
        strictFail(parser, "Unclosed root tag");
      if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
        error(parser, "Unexpected end");
      }
      closeText(parser);
      parser.c = "";
      parser.closed = true;
      emit(parser, "onend");
      SAXParser.call(parser, parser.strict, parser.opt);
      return parser;
    }
    function strictFail(parser, message) {
      if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
        throw new Error("bad call to strictFail");
      }
      if (parser.strict) {
        error(parser, message);
      }
    }
    function newTag(parser) {
      if (!parser.strict)
        parser.tagName = parser.tagName[parser.looseCase]();
      var parent = parser.tags[parser.tags.length - 1] || parser;
      var tag = parser.tag = { name: parser.tagName, attributes: {} };
      if (parser.opt.xmlns) {
        tag.ns = parent.ns;
      }
      parser.attribList.length = 0;
      emitNode(parser, "onopentagstart", tag);
    }
    function qname(name, attribute) {
      var i = name.indexOf(":");
      var qualName = i < 0 ? ["", name] : name.split(":");
      var prefix = qualName[0];
      var local = qualName[1];
      if (attribute && name === "xmlns") {
        prefix = "xmlns";
        local = "";
      }
      return { prefix, local };
    }
    function attrib(parser) {
      if (!parser.strict) {
        parser.attribName = parser.attribName[parser.looseCase]();
      }
      if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
        parser.attribName = parser.attribValue = "";
        return;
      }
      if (parser.opt.xmlns) {
        var qn = qname(parser.attribName, true);
        var prefix = qn.prefix;
        var local = qn.local;
        if (prefix === "xmlns") {
          if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
            strictFail(parser, "xml: prefix must be bound to " + XML_NAMESPACE + "\n" + "Actual: " + parser.attribValue);
          } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
            strictFail(parser, "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\n" + "Actual: " + parser.attribValue);
          } else {
            var tag = parser.tag;
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (tag.ns === parent.ns) {
              tag.ns = Object.create(parent.ns);
            }
            tag.ns[local] = parser.attribValue;
          }
        }
        parser.attribList.push([parser.attribName, parser.attribValue]);
      } else {
        parser.tag.attributes[parser.attribName] = parser.attribValue;
        emitNode(parser, "onattribute", {
          name: parser.attribName,
          value: parser.attribValue
        });
      }
      parser.attribName = parser.attribValue = "";
    }
    function openTag(parser, selfClosing) {
      if (parser.opt.xmlns) {
        var tag = parser.tag;
        var qn = qname(parser.tagName);
        tag.prefix = qn.prefix;
        tag.local = qn.local;
        tag.uri = tag.ns[qn.prefix] || "";
        if (tag.prefix && !tag.uri) {
          strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
          tag.uri = qn.prefix;
        }
        var parent = parser.tags[parser.tags.length - 1] || parser;
        if (tag.ns && parent.ns !== tag.ns) {
          Object.keys(tag.ns).forEach(function(p) {
            emitNode(parser, "onopennamespace", {
              prefix: p,
              uri: tag.ns[p]
            });
          });
        }
        for (var i = 0, l = parser.attribList.length;i < l; i++) {
          var nv = parser.attribList[i];
          var name = nv[0];
          var value = nv[1];
          var qualName = qname(name, true);
          var prefix = qualName.prefix;
          var local = qualName.local;
          var uri = prefix === "" ? "" : tag.ns[prefix] || "";
          var a = {
            name,
            value,
            prefix,
            local,
            uri
          };
          if (prefix && prefix !== "xmlns" && !uri) {
            strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
            a.uri = prefix;
          }
          parser.tag.attributes[name] = a;
          emitNode(parser, "onattribute", a);
        }
        parser.attribList.length = 0;
      }
      parser.tag.isSelfClosing = !!selfClosing;
      parser.sawRoot = true;
      parser.tags.push(parser.tag);
      emitNode(parser, "onopentag", parser.tag);
      if (!selfClosing) {
        if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
          parser.state = S.SCRIPT;
        } else {
          parser.state = S.TEXT;
        }
        parser.tag = null;
        parser.tagName = "";
      }
      parser.attribName = parser.attribValue = "";
      parser.attribList.length = 0;
    }
    function closeTag(parser) {
      if (!parser.tagName) {
        strictFail(parser, "Weird empty close tag.");
        parser.textNode += "</>";
        parser.state = S.TEXT;
        return;
      }
      if (parser.script) {
        if (parser.tagName !== "script") {
          parser.script += "</" + parser.tagName + ">";
          parser.tagName = "";
          parser.state = S.SCRIPT;
          return;
        }
        emitNode(parser, "onscript", parser.script);
        parser.script = "";
      }
      var t = parser.tags.length;
      var tagName = parser.tagName;
      if (!parser.strict) {
        tagName = tagName[parser.looseCase]();
      }
      var closeTo = tagName;
      while (t--) {
        var close = parser.tags[t];
        if (close.name !== closeTo) {
          strictFail(parser, "Unexpected close tag");
        } else {
          break;
        }
      }
      if (t < 0) {
        strictFail(parser, "Unmatched closing tag: " + parser.tagName);
        parser.textNode += "</" + parser.tagName + ">";
        parser.state = S.TEXT;
        return;
      }
      parser.tagName = tagName;
      var s2 = parser.tags.length;
      while (s2-- > t) {
        var tag = parser.tag = parser.tags.pop();
        parser.tagName = parser.tag.name;
        emitNode(parser, "onclosetag", parser.tagName);
        var x = {};
        for (var i in tag.ns) {
          x[i] = tag.ns[i];
        }
        var parent = parser.tags[parser.tags.length - 1] || parser;
        if (parser.opt.xmlns && tag.ns !== parent.ns) {
          Object.keys(tag.ns).forEach(function(p) {
            var n = tag.ns[p];
            emitNode(parser, "onclosenamespace", { prefix: p, uri: n });
          });
        }
      }
      if (t === 0)
        parser.closedRoot = true;
      parser.tagName = parser.attribValue = parser.attribName = "";
      parser.attribList.length = 0;
      parser.state = S.TEXT;
    }
    function parseEntity(parser) {
      var entity = parser.entity;
      var entityLC = entity.toLowerCase();
      var num;
      var numStr = "";
      if (parser.ENTITIES[entity]) {
        return parser.ENTITIES[entity];
      }
      if (parser.ENTITIES[entityLC]) {
        return parser.ENTITIES[entityLC];
      }
      entity = entityLC;
      if (entity.charAt(0) === "#") {
        if (entity.charAt(1) === "x") {
          entity = entity.slice(2);
          num = parseInt(entity, 16);
          numStr = num.toString(16);
        } else {
          entity = entity.slice(1);
          num = parseInt(entity, 10);
          numStr = num.toString(10);
        }
      }
      entity = entity.replace(/^0+/, "");
      if (isNaN(num) || numStr.toLowerCase() !== entity) {
        strictFail(parser, "Invalid character entity");
        return "&" + parser.entity + ";";
      }
      return String.fromCodePoint(num);
    }
    function beginWhiteSpace(parser, c) {
      if (c === "<") {
        parser.state = S.OPEN_WAKA;
        parser.startTagPosition = parser.position;
      } else if (!isWhitespace(c)) {
        strictFail(parser, "Non-whitespace before first tag.");
        parser.textNode = c;
        parser.state = S.TEXT;
      }
    }
    function charAt(chunk, i) {
      var result = "";
      if (i < chunk.length) {
        result = chunk.charAt(i);
      }
      return result;
    }
    function write(chunk) {
      var parser = this;
      if (this.error) {
        throw this.error;
      }
      if (parser.closed) {
        return error(parser, "Cannot write after close. Assign an onready handler.");
      }
      if (chunk === null) {
        return end(parser);
      }
      if (typeof chunk === "object") {
        chunk = chunk.toString();
      }
      var i = 0;
      var c = "";
      while (true) {
        c = charAt(chunk, i++);
        parser.c = c;
        if (!c) {
          break;
        }
        if (parser.trackPosition) {
          parser.position++;
          if (c === "\n") {
            parser.line++;
            parser.column = 0;
          } else {
            parser.column++;
          }
        }
        switch (parser.state) {
          case S.BEGIN:
            parser.state = S.BEGIN_WHITESPACE;
            if (c === "\uFEFF") {
              continue;
            }
            beginWhiteSpace(parser, c);
            continue;
          case S.BEGIN_WHITESPACE:
            beginWhiteSpace(parser, c);
            continue;
          case S.TEXT:
            if (parser.sawRoot && !parser.closedRoot) {
              var starti = i - 1;
              while (c && c !== "<" && c !== "&") {
                c = charAt(chunk, i++);
                if (c && parser.trackPosition) {
                  parser.position++;
                  if (c === "\n") {
                    parser.line++;
                    parser.column = 0;
                  } else {
                    parser.column++;
                  }
                }
              }
              parser.textNode += chunk.substring(starti, i - 1);
            }
            if (c === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
              parser.state = S.OPEN_WAKA;
              parser.startTagPosition = parser.position;
            } else {
              if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                strictFail(parser, "Text data outside of root node.");
              }
              if (c === "&") {
                parser.state = S.TEXT_ENTITY;
              } else {
                parser.textNode += c;
              }
            }
            continue;
          case S.SCRIPT:
            if (c === "<") {
              parser.state = S.SCRIPT_ENDING;
            } else {
              parser.script += c;
            }
            continue;
          case S.SCRIPT_ENDING:
            if (c === "/") {
              parser.state = S.CLOSE_TAG;
            } else {
              parser.script += "<" + c;
              parser.state = S.SCRIPT;
            }
            continue;
          case S.OPEN_WAKA:
            if (c === "!") {
              parser.state = S.SGML_DECL;
              parser.sgmlDecl = "";
            } else if (isWhitespace(c)) {
            } else if (isMatch(nameStart, c)) {
              parser.state = S.OPEN_TAG;
              parser.tagName = c;
            } else if (c === "/") {
              parser.state = S.CLOSE_TAG;
              parser.tagName = "";
            } else if (c === "?") {
              parser.state = S.PROC_INST;
              parser.procInstName = parser.procInstBody = "";
            } else {
              strictFail(parser, "Unencoded <");
              if (parser.startTagPosition + 1 < parser.position) {
                var pad = parser.position - parser.startTagPosition;
                c = new Array(pad).join(" ") + c;
              }
              parser.textNode += "<" + c;
              parser.state = S.TEXT;
            }
            continue;
          case S.SGML_DECL:
            if (parser.sgmlDecl + c === "--") {
              parser.state = S.COMMENT;
              parser.comment = "";
              parser.sgmlDecl = "";
              continue;
            }
            if (parser.doctype && parser.doctype !== true && parser.sgmlDecl) {
              parser.state = S.DOCTYPE_DTD;
              parser.doctype += "<!" + parser.sgmlDecl + c;
              parser.sgmlDecl = "";
            } else if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
              emitNode(parser, "onopencdata");
              parser.state = S.CDATA;
              parser.sgmlDecl = "";
              parser.cdata = "";
            } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
              parser.state = S.DOCTYPE;
              if (parser.doctype || parser.sawRoot) {
                strictFail(parser, "Inappropriately located doctype declaration");
              }
              parser.doctype = "";
              parser.sgmlDecl = "";
            } else if (c === ">") {
              emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
              parser.sgmlDecl = "";
              parser.state = S.TEXT;
            } else if (isQuote(c)) {
              parser.state = S.SGML_DECL_QUOTED;
              parser.sgmlDecl += c;
            } else {
              parser.sgmlDecl += c;
            }
            continue;
          case S.SGML_DECL_QUOTED:
            if (c === parser.q) {
              parser.state = S.SGML_DECL;
              parser.q = "";
            }
            parser.sgmlDecl += c;
            continue;
          case S.DOCTYPE:
            if (c === ">") {
              parser.state = S.TEXT;
              emitNode(parser, "ondoctype", parser.doctype);
              parser.doctype = true;
            } else {
              parser.doctype += c;
              if (c === "[") {
                parser.state = S.DOCTYPE_DTD;
              } else if (isQuote(c)) {
                parser.state = S.DOCTYPE_QUOTED;
                parser.q = c;
              }
            }
            continue;
          case S.DOCTYPE_QUOTED:
            parser.doctype += c;
            if (c === parser.q) {
              parser.q = "";
              parser.state = S.DOCTYPE;
            }
            continue;
          case S.DOCTYPE_DTD:
            if (c === "]") {
              parser.doctype += c;
              parser.state = S.DOCTYPE;
            } else if (c === "<") {
              parser.state = S.OPEN_WAKA;
              parser.startTagPosition = parser.position;
            } else if (isQuote(c)) {
              parser.doctype += c;
              parser.state = S.DOCTYPE_DTD_QUOTED;
              parser.q = c;
            } else {
              parser.doctype += c;
            }
            continue;
          case S.DOCTYPE_DTD_QUOTED:
            parser.doctype += c;
            if (c === parser.q) {
              parser.state = S.DOCTYPE_DTD;
              parser.q = "";
            }
            continue;
          case S.COMMENT:
            if (c === "-") {
              parser.state = S.COMMENT_ENDING;
            } else {
              parser.comment += c;
            }
            continue;
          case S.COMMENT_ENDING:
            if (c === "-") {
              parser.state = S.COMMENT_ENDED;
              parser.comment = textopts(parser.opt, parser.comment);
              if (parser.comment) {
                emitNode(parser, "oncomment", parser.comment);
              }
              parser.comment = "";
            } else {
              parser.comment += "-" + c;
              parser.state = S.COMMENT;
            }
            continue;
          case S.COMMENT_ENDED:
            if (c !== ">") {
              strictFail(parser, "Malformed comment");
              parser.comment += "--" + c;
              parser.state = S.COMMENT;
            } else if (parser.doctype && parser.doctype !== true) {
              parser.state = S.DOCTYPE_DTD;
            } else {
              parser.state = S.TEXT;
            }
            continue;
          case S.CDATA:
            if (c === "]") {
              parser.state = S.CDATA_ENDING;
            } else {
              parser.cdata += c;
            }
            continue;
          case S.CDATA_ENDING:
            if (c === "]") {
              parser.state = S.CDATA_ENDING_2;
            } else {
              parser.cdata += "]" + c;
              parser.state = S.CDATA;
            }
            continue;
          case S.CDATA_ENDING_2:
            if (c === ">") {
              if (parser.cdata) {
                emitNode(parser, "oncdata", parser.cdata);
              }
              emitNode(parser, "onclosecdata");
              parser.cdata = "";
              parser.state = S.TEXT;
            } else if (c === "]") {
              parser.cdata += "]";
            } else {
              parser.cdata += "]]" + c;
              parser.state = S.CDATA;
            }
            continue;
          case S.PROC_INST:
            if (c === "?") {
              parser.state = S.PROC_INST_ENDING;
            } else if (isWhitespace(c)) {
              parser.state = S.PROC_INST_BODY;
            } else {
              parser.procInstName += c;
            }
            continue;
          case S.PROC_INST_BODY:
            if (!parser.procInstBody && isWhitespace(c)) {
              continue;
            } else if (c === "?") {
              parser.state = S.PROC_INST_ENDING;
            } else {
              parser.procInstBody += c;
            }
            continue;
          case S.PROC_INST_ENDING:
            if (c === ">") {
              emitNode(parser, "onprocessinginstruction", {
                name: parser.procInstName,
                body: parser.procInstBody
              });
              parser.procInstName = parser.procInstBody = "";
              parser.state = S.TEXT;
            } else {
              parser.procInstBody += "?" + c;
              parser.state = S.PROC_INST_BODY;
            }
            continue;
          case S.OPEN_TAG:
            if (isMatch(nameBody, c)) {
              parser.tagName += c;
            } else {
              newTag(parser);
              if (c === ">") {
                openTag(parser);
              } else if (c === "/") {
                parser.state = S.OPEN_TAG_SLASH;
              } else {
                if (!isWhitespace(c)) {
                  strictFail(parser, "Invalid character in tag name");
                }
                parser.state = S.ATTRIB;
              }
            }
            continue;
          case S.OPEN_TAG_SLASH:
            if (c === ">") {
              openTag(parser, true);
              closeTag(parser);
            } else {
              strictFail(parser, "Forward-slash in opening tag not followed by >");
              parser.state = S.ATTRIB;
            }
            continue;
          case S.ATTRIB:
            if (isWhitespace(c)) {
              continue;
            } else if (c === ">") {
              openTag(parser);
            } else if (c === "/") {
              parser.state = S.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              parser.attribName = c;
              parser.attribValue = "";
              parser.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S.ATTRIB_NAME:
            if (c === "=") {
              parser.state = S.ATTRIB_VALUE;
            } else if (c === ">") {
              strictFail(parser, "Attribute without value");
              parser.attribValue = parser.attribName;
              attrib(parser);
              openTag(parser);
            } else if (isWhitespace(c)) {
              parser.state = S.ATTRIB_NAME_SAW_WHITE;
            } else if (isMatch(nameBody, c)) {
              parser.attribName += c;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S.ATTRIB_NAME_SAW_WHITE:
            if (c === "=") {
              parser.state = S.ATTRIB_VALUE;
            } else if (isWhitespace(c)) {
              continue;
            } else {
              strictFail(parser, "Attribute without value");
              parser.tag.attributes[parser.attribName] = "";
              parser.attribValue = "";
              emitNode(parser, "onattribute", {
                name: parser.attribName,
                value: ""
              });
              parser.attribName = "";
              if (c === ">") {
                openTag(parser);
              } else if (isMatch(nameStart, c)) {
                parser.attribName = c;
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
                parser.state = S.ATTRIB;
              }
            }
            continue;
          case S.ATTRIB_VALUE:
            if (isWhitespace(c)) {
              continue;
            } else if (isQuote(c)) {
              parser.q = c;
              parser.state = S.ATTRIB_VALUE_QUOTED;
            } else {
              if (!parser.opt.unquotedAttributeValues) {
                error(parser, "Unquoted attribute value");
              }
              parser.state = S.ATTRIB_VALUE_UNQUOTED;
              parser.attribValue = c;
            }
            continue;
          case S.ATTRIB_VALUE_QUOTED:
            if (c !== parser.q) {
              if (c === "&") {
                parser.state = S.ATTRIB_VALUE_ENTITY_Q;
              } else {
                parser.attribValue += c;
              }
              continue;
            }
            attrib(parser);
            parser.q = "";
            parser.state = S.ATTRIB_VALUE_CLOSED;
            continue;
          case S.ATTRIB_VALUE_CLOSED:
            if (isWhitespace(c)) {
              parser.state = S.ATTRIB;
            } else if (c === ">") {
              openTag(parser);
            } else if (c === "/") {
              parser.state = S.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              strictFail(parser, "No whitespace between attributes");
              parser.attribName = c;
              parser.attribValue = "";
              parser.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser, "Invalid attribute name");
            }
            continue;
          case S.ATTRIB_VALUE_UNQUOTED:
            if (!isAttribEnd(c)) {
              if (c === "&") {
                parser.state = S.ATTRIB_VALUE_ENTITY_U;
              } else {
                parser.attribValue += c;
              }
              continue;
            }
            attrib(parser);
            if (c === ">") {
              openTag(parser);
            } else {
              parser.state = S.ATTRIB;
            }
            continue;
          case S.CLOSE_TAG:
            if (!parser.tagName) {
              if (isWhitespace(c)) {
                continue;
              } else if (notMatch(nameStart, c)) {
                if (parser.script) {
                  parser.script += "</" + c;
                  parser.state = S.SCRIPT;
                } else {
                  strictFail(parser, "Invalid tagname in closing tag.");
                }
              } else {
                parser.tagName = c;
              }
            } else if (c === ">") {
              closeTag(parser);
            } else if (isMatch(nameBody, c)) {
              parser.tagName += c;
            } else if (parser.script) {
              parser.script += "</" + parser.tagName;
              parser.tagName = "";
              parser.state = S.SCRIPT;
            } else {
              if (!isWhitespace(c)) {
                strictFail(parser, "Invalid tagname in closing tag");
              }
              parser.state = S.CLOSE_TAG_SAW_WHITE;
            }
            continue;
          case S.CLOSE_TAG_SAW_WHITE:
            if (isWhitespace(c)) {
              continue;
            }
            if (c === ">") {
              closeTag(parser);
            } else {
              strictFail(parser, "Invalid characters in closing tag");
            }
            continue;
          case S.TEXT_ENTITY:
          case S.ATTRIB_VALUE_ENTITY_Q:
          case S.ATTRIB_VALUE_ENTITY_U:
            var returnState;
            var buffer;
            switch (parser.state) {
              case S.TEXT_ENTITY:
                returnState = S.TEXT;
                buffer = "textNode";
                break;
              case S.ATTRIB_VALUE_ENTITY_Q:
                returnState = S.ATTRIB_VALUE_QUOTED;
                buffer = "attribValue";
                break;
              case S.ATTRIB_VALUE_ENTITY_U:
                returnState = S.ATTRIB_VALUE_UNQUOTED;
                buffer = "attribValue";
                break;
            }
            if (c === ";") {
              var parsedEntity = parseEntity(parser);
              if (parser.opt.unparsedEntities && !Object.values(sax.XML_ENTITIES).includes(parsedEntity)) {
                parser.entity = "";
                parser.state = returnState;
                parser.write(parsedEntity);
              } else {
                parser[buffer] += parsedEntity;
                parser.entity = "";
                parser.state = returnState;
              }
            } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
              parser.entity += c;
            } else {
              strictFail(parser, "Invalid character in entity name");
              parser[buffer] += "&" + parser.entity + c;
              parser.entity = "";
              parser.state = returnState;
            }
            continue;
          default: {
            throw new Error(parser, "Unknown state: " + parser.state);
          }
        }
      }
      if (parser.position >= parser.bufferCheckPosition) {
        checkBufferLength(parser);
      }
      return parser;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
    if (!String.fromCodePoint) {
      (function() {
        var stringFromCharCode = String.fromCharCode;
        var floor = Math.floor;
        var fromCodePoint = function() {
          var MAX_SIZE = 16384;
          var codeUnits = [];
          var highSurrogate;
          var lowSurrogate;
          var index = -1;
          var length = arguments.length;
          if (!length) {
            return "";
          }
          var result = "";
          while (++index < length) {
            var codePoint = Number(arguments[index]);
            if (!isFinite(codePoint) || codePoint < 0 || codePoint > 1114111 || floor(codePoint) !== codePoint) {
              throw RangeError("Invalid code point: " + codePoint);
            }
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              highSurrogate = (codePoint >> 10) + 55296;
              lowSurrogate = codePoint % 1024 + 56320;
              codeUnits.push(highSurrogate, lowSurrogate);
            }
            if (index + 1 === length || codeUnits.length > MAX_SIZE) {
              result += stringFromCharCode.apply(null, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        if (Object.defineProperty) {
          Object.defineProperty(String, "fromCodePoint", {
            value: fromCodePoint,
            configurable: true,
            writable: true
          });
        } else {
          String.fromCodePoint = fromCodePoint;
        }
      })();
    }
  })(typeof exports === "undefined" ? exports.sax = {} : exports);
});

// node:events
var exports_events = {};
__export(exports_events, {
  prototype: () => P,
  once: () => M,
  default: () => A,
  EventEmitter: () => o
});
function x(t) {
  console && console.warn && console.warn(t);
}
function o() {
  o.init.call(this);
}
function v(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
function m(t) {
  return t._maxListeners === undefined ? o.defaultMaxListeners : t._maxListeners;
}
function y(t, e, n, r) {
  var i, f, s;
  if (v(n), f = t._events, f === undefined ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== undefined && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), s = f[e]), s === undefined)
    s = f[e] = n, ++t._eventsCount;
  else if (typeof s == "function" ? s = f[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), i = m(t), i > 0 && s.length > i && !s.warned) {
    s.warned = true;
    var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = s.length, x(u);
  }
  return t;
}
function C2() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function g(t, e, n) {
  var r = { fired: false, wrapFn: undefined, target: t, type: e, listener: n }, i = C2.bind(r);
  return i.listener = n, r.wrapFn = i, i;
}
function _(t, e, n) {
  var r = t._events;
  if (r === undefined)
    return [];
  var i = r[e];
  return i === undefined ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? R2(i) : b(i, i.length);
}
function w(t) {
  var e = this._events;
  if (e !== undefined) {
    var n = e[t];
    if (typeof n == "function")
      return 1;
    if (n !== undefined)
      return n.length;
  }
  return 0;
}
function b(t, e) {
  for (var n = new Array(e), r = 0;r < e; ++r)
    n[r] = t[r];
  return n;
}
function j(t, e) {
  for (;e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function R2(t) {
  for (var e = new Array(t.length), n = 0;n < e.length; ++n)
    e[n] = t[n].listener || t[n];
  return e;
}
function M(t, e) {
  return new Promise(function(n, r) {
    function i(s) {
      t.removeListener(e, f), r(s);
    }
    function f() {
      typeof t.removeListener == "function" && t.removeListener("error", i), n([].slice.call(arguments));
    }
    E2(t, e, f, { once: true }), e !== "error" && N(t, i, { once: true });
  });
}
function N(t, e, n) {
  typeof t.on == "function" && E2(t, "error", e, n);
}
function E2(t, e, n, r) {
  if (typeof t.on == "function")
    r.once ? t.once(e, n) : t.on(e, n);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(f) {
      r.once && t.removeEventListener(e, i), n(f);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var a, d, l, L, h = 10, A, P;
var init_events = __esm(() => {
  a = typeof Reflect == "object" ? Reflect : null;
  d = a && typeof a.apply == "function" ? a.apply : function(e, n, r) {
    return Function.prototype.apply.call(e, n, r);
  };
  a && typeof a.ownKeys == "function" ? l = a.ownKeys : Object.getOwnPropertySymbols ? l = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : l = function(e) {
    return Object.getOwnPropertyNames(e);
  };
  L = Number.isNaN || function(e) {
    return e !== e;
  };
  o.EventEmitter = o;
  o.prototype._events = undefined;
  o.prototype._eventsCount = 0;
  o.prototype._maxListeners = undefined;
  Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
    return h;
  }, set: function(t) {
    if (typeof t != "number" || t < 0 || L(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    h = t;
  } });
  o.init = function() {
    (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
  };
  o.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || L(e))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  };
  o.prototype.getMaxListeners = function() {
    return m(this);
  };
  o.prototype.emit = function(e) {
    for (var n = [], r = 1;r < arguments.length; r++)
      n.push(arguments[r]);
    var i = e === "error", f = this._events;
    if (f !== undefined)
      i = i && f.error === undefined;
    else if (!i)
      return false;
    if (i) {
      var s;
      if (n.length > 0 && (s = n[0]), s instanceof Error)
        throw s;
      var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
      throw u.context = s, u;
    }
    var c = f[e];
    if (c === undefined)
      return false;
    if (typeof c == "function")
      d(c, this, n);
    else
      for (var p = c.length, O = b(c, p), r = 0;r < p; ++r)
        d(O[r], this, n);
    return true;
  };
  o.prototype.addListener = function(e, n) {
    return y(this, e, n, false);
  };
  o.prototype.on = o.prototype.addListener;
  o.prototype.prependListener = function(e, n) {
    return y(this, e, n, true);
  };
  o.prototype.once = function(e, n) {
    return v(n), this.on(e, g(this, e, n)), this;
  };
  o.prototype.prependOnceListener = function(e, n) {
    return v(n), this.prependListener(e, g(this, e, n)), this;
  };
  o.prototype.removeListener = function(e, n) {
    var r, i, f, s, u;
    if (v(n), i = this._events, i === undefined)
      return this;
    if (r = i[e], r === undefined)
      return this;
    if (r === n || r.listener === n)
      --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || n));
    else if (typeof r != "function") {
      for (f = -1, s = r.length - 1;s >= 0; s--)
        if (r[s] === n || r[s].listener === n) {
          u = r[s].listener, f = s;
          break;
        }
      if (f < 0)
        return this;
      f === 0 ? r.shift() : j(r, f), r.length === 1 && (i[e] = r[0]), i.removeListener !== undefined && this.emit("removeListener", e, u || n);
    }
    return this;
  };
  o.prototype.off = o.prototype.removeListener;
  o.prototype.removeAllListeners = function(e) {
    var n, r, i;
    if (r = this._events, r === undefined)
      return this;
    if (r.removeListener === undefined)
      return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[e] !== undefined && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[e]), this;
    if (arguments.length === 0) {
      var f = Object.keys(r), s;
      for (i = 0;i < f.length; ++i)
        s = f[i], s !== "removeListener" && this.removeAllListeners(s);
      return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if (n = r[e], typeof n == "function")
      this.removeListener(e, n);
    else if (n !== undefined)
      for (i = n.length - 1;i >= 0; i--)
        this.removeListener(e, n[i]);
    return this;
  };
  o.prototype.listeners = function(e) {
    return _(this, e, true);
  };
  o.prototype.rawListeners = function(e) {
    return _(this, e, false);
  };
  o.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : w.call(t, e);
  };
  o.prototype.listenerCount = w;
  o.prototype.eventNames = function() {
    return this._eventsCount > 0 ? l(this._events) : [];
  };
  A = o;
  P = o.prototype;
});

// ../../node_modules/xml2js/lib/bom.js
var require_bom = __commonJS((exports) => {
  (function() {
    exports.stripBOM = function(str) {
      if (str[0] === "\uFEFF") {
        return str.substring(1);
      } else {
        return str;
      }
    };
  }).call(exports);
});

// ../../node_modules/xml2js/lib/processors.js
var require_processors = __commonJS((exports) => {
  (function() {
    var prefixMatch;
    prefixMatch = new RegExp(/(?!xmlns)^.*:/);
    exports.normalize = function(str) {
      return str.toLowerCase();
    };
    exports.firstCharLowerCase = function(str) {
      return str.charAt(0).toLowerCase() + str.slice(1);
    };
    exports.stripPrefix = function(str) {
      return str.replace(prefixMatch, "");
    };
    exports.parseNumbers = function(str) {
      if (!isNaN(str)) {
        str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
      }
      return str;
    };
    exports.parseBooleans = function(str) {
      if (/^(?:true|false)$/i.test(str)) {
        str = str.toLowerCase() === "true";
      }
      return str;
    };
  }).call(exports);
});

// node:timers
var exports_timers = {};
__export(exports_timers, {
  default: () => G
});
var L2, I2, R3, $, b2, q, _2 = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports), B = (e, n) => {
  for (var s in n)
    I2(e, s, { get: n[s], enumerable: true });
}, v2 = (e, n, s, c) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let o2 of $(n))
      !q.call(e, o2) && o2 !== s && I2(e, o2, { get: () => n[o2], enumerable: !(c = R3(n, o2)) || c.enumerable });
  return e;
}, g2 = (e, n, s) => (v2(e, n, "default"), s && v2(s, n, "default")), M2 = (e, n, s) => (s = e != null ? L2(b2(e)) : {}, v2(n || !e || !e.__esModule ? I2(s, "default", { value: e, enumerable: true }) : s, e)), w2, T, d2, G;
var init_timers = __esm(() => {
  L2 = Object.create;
  I2 = Object.defineProperty;
  R3 = Object.getOwnPropertyDescriptor;
  $ = Object.getOwnPropertyNames;
  b2 = Object.getPrototypeOf;
  q = Object.prototype.hasOwnProperty;
  w2 = _2((k2) => {
    (function(e, n) {
      if (e.setImmediate)
        return;
      var s = 1, c = {}, o2 = false, p = e.document, f;
      function E3(t) {
        typeof t != "function" && (t = new Function("" + t));
        for (var i = new Array(arguments.length - 1), a2 = 0;a2 < i.length; a2++)
          i[a2] = arguments[a2 + 1];
        var H = { callback: t, args: i };
        return c[s] = H, f(s), s++;
      }
      function h2(t) {
        delete c[t];
      }
      function P2(t) {
        var { callback: i, args: a2 } = t;
        switch (a2.length) {
          case 0:
            i();
            break;
          case 1:
            i(a2[0]);
            break;
          case 2:
            i(a2[0], a2[1]);
            break;
          case 3:
            i(a2[0], a2[1], a2[2]);
            break;
          default:
            i.apply(n, a2);
            break;
        }
      }
      function u(t) {
        if (o2)
          setTimeout(u, 0, t);
        else {
          var i = c[t];
          if (i) {
            o2 = true;
            try {
              P2(i);
            } finally {
              h2(t), o2 = false;
            }
          }
        }
      }
      function O() {
        f = function(t) {
          process.nextTick(function() {
            u(t);
          });
        };
      }
      function F() {
        if (e.postMessage && !e.importScripts) {
          var t = true, i = e.onmessage;
          return e.onmessage = function() {
            t = false;
          }, e.postMessage("", "*"), e.onmessage = i, t;
        }
      }
      function S() {
        var t = "setImmediate$" + Math.random() + "$", i = function(a2) {
          a2.source === e && typeof a2.data == "string" && a2.data.indexOf(t) === 0 && u(+a2.data.slice(t.length));
        };
        e.addEventListener ? e.addEventListener("message", i, false) : e.attachEvent("onmessage", i), f = function(a2) {
          e.postMessage(t + a2, "*");
        };
      }
      function j2() {
        var t = new MessageChannel;
        t.port1.onmessage = function(i) {
          var a2 = i.data;
          u(a2);
        }, f = function(i) {
          t.port2.postMessage(i);
        };
      }
      function x2() {
        var t = p.documentElement;
        f = function(i) {
          var a2 = p.createElement("script");
          a2.onreadystatechange = function() {
            u(i), a2.onreadystatechange = null, t.removeChild(a2), a2 = null;
          }, t.appendChild(a2);
        };
      }
      function A2() {
        f = function(t) {
          setTimeout(u, 0, t);
        };
      }
      var l2 = Object.getPrototypeOf && Object.getPrototypeOf(e);
      l2 = l2 && l2.setTimeout ? l2 : e, {}.toString.call(e.process) === "[object process]" ? O() : F() ? S() : e.MessageChannel ? j2() : p && ("onreadystatechange" in p.createElement("script")) ? x2() : A2(), l2.setImmediate = E3, l2.clearImmediate = h2;
    })(typeof self > "u" ? typeof global > "u" ? k2 : global : self);
  });
  T = _2((r) => {
    var y2 = typeof global < "u" && global || typeof self < "u" && self || window, C3 = Function.prototype.apply;
    r.setTimeout = function() {
      return new m2(C3.call(setTimeout, y2, arguments), clearTimeout);
    };
    r.setInterval = function() {
      return new m2(C3.call(setInterval, y2, arguments), clearInterval);
    };
    r.clearTimeout = r.clearInterval = function(e) {
      e && e.close();
    };
    function m2(e, n) {
      this._id = e, this._clearFn = n;
    }
    m2.prototype.unref = m2.prototype.ref = function() {
    };
    m2.prototype.close = function() {
      this._clearFn.call(y2, this._id);
    };
    r.enroll = function(e, n) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = n;
    };
    r.unenroll = function(e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
    };
    r._unrefActive = r.active = function(e) {
      clearTimeout(e._idleTimeoutId);
      var n = e._idleTimeout;
      n >= 0 && (e._idleTimeoutId = setTimeout(function() {
        e._onTimeout && e._onTimeout();
      }, n));
    };
    w2();
    r.setImmediate = typeof self < "u" && self.setImmediate || typeof global < "u" && global.setImmediate || r && r.setImmediate;
    r.clearImmediate = typeof self < "u" && self.clearImmediate || typeof global < "u" && global.clearImmediate || r && r.clearImmediate;
  });
  d2 = {};
  B(d2, { default: () => G });
  g2(d2, M2(T()));
  G = M2(T());
});

// ../../node_modules/xml2js/lib/parser.js
var require_parser = __commonJS((exports) => {
  (function() {
    var bom, defaults, defineProperty, events, isEmpty, processItem, processors, sax, setImmediate2, bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    }, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    sax = require_sax();
    events = (init_events(), __toCommonJS(exports_events));
    bom = require_bom();
    processors = require_processors();
    setImmediate2 = (init_timers(), __toCommonJS(exports_timers)).setImmediate;
    defaults = require_defaults2().defaults;
    isEmpty = function(thing) {
      return typeof thing === "object" && thing != null && Object.keys(thing).length === 0;
    };
    processItem = function(processors2, item, key) {
      var i, len, process2;
      for (i = 0, len = processors2.length;i < len; i++) {
        process2 = processors2[i];
        item = process2(item, key);
      }
      return item;
    };
    defineProperty = function(obj, key, value) {
      var descriptor;
      descriptor = Object.create(null);
      descriptor.value = value;
      descriptor.writable = true;
      descriptor.enumerable = true;
      descriptor.configurable = true;
      return Object.defineProperty(obj, key, descriptor);
    };
    exports.Parser = function(superClass) {
      extend(Parser, superClass);
      function Parser(opts) {
        this.parseStringPromise = bind(this.parseStringPromise, this);
        this.parseString = bind(this.parseString, this);
        this.reset = bind(this.reset, this);
        this.assignOrPush = bind(this.assignOrPush, this);
        this.processAsync = bind(this.processAsync, this);
        var key, ref, value;
        if (!(this instanceof exports.Parser)) {
          return new exports.Parser(opts);
        }
        this.options = {};
        ref = defaults["0.2"];
        for (key in ref) {
          if (!hasProp.call(ref, key))
            continue;
          value = ref[key];
          this.options[key] = value;
        }
        for (key in opts) {
          if (!hasProp.call(opts, key))
            continue;
          value = opts[key];
          this.options[key] = value;
        }
        if (this.options.xmlns) {
          this.options.xmlnskey = this.options.attrkey + "ns";
        }
        if (this.options.normalizeTags) {
          if (!this.options.tagNameProcessors) {
            this.options.tagNameProcessors = [];
          }
          this.options.tagNameProcessors.unshift(processors.normalize);
        }
        this.reset();
      }
      Parser.prototype.processAsync = function() {
        var chunk, err;
        try {
          if (this.remaining.length <= this.options.chunkSize) {
            chunk = this.remaining;
            this.remaining = "";
            this.saxParser = this.saxParser.write(chunk);
            return this.saxParser.close();
          } else {
            chunk = this.remaining.substr(0, this.options.chunkSize);
            this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
            this.saxParser = this.saxParser.write(chunk);
            return setImmediate2(this.processAsync);
          }
        } catch (error1) {
          err = error1;
          if (!this.saxParser.errThrown) {
            this.saxParser.errThrown = true;
            return this.emit(err);
          }
        }
      };
      Parser.prototype.assignOrPush = function(obj, key, newValue) {
        if (!(key in obj)) {
          if (!this.options.explicitArray) {
            return defineProperty(obj, key, newValue);
          } else {
            return defineProperty(obj, key, [newValue]);
          }
        } else {
          if (!(obj[key] instanceof Array)) {
            defineProperty(obj, key, [obj[key]]);
          }
          return obj[key].push(newValue);
        }
      };
      Parser.prototype.reset = function() {
        var attrkey, charkey, ontext, stack;
        this.removeAllListeners();
        this.saxParser = sax.parser(this.options.strict, {
          trim: false,
          normalize: false,
          xmlns: this.options.xmlns
        });
        this.saxParser.errThrown = false;
        this.saxParser.onerror = function(_this) {
          return function(error) {
            _this.saxParser.resume();
            if (!_this.saxParser.errThrown) {
              _this.saxParser.errThrown = true;
              return _this.emit("error", error);
            }
          };
        }(this);
        this.saxParser.onend = function(_this) {
          return function() {
            if (!_this.saxParser.ended) {
              _this.saxParser.ended = true;
              return _this.emit("end", _this.resultObject);
            }
          };
        }(this);
        this.saxParser.ended = false;
        this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
        this.resultObject = null;
        stack = [];
        attrkey = this.options.attrkey;
        charkey = this.options.charkey;
        this.saxParser.onopentag = function(_this) {
          return function(node) {
            var key, newValue, obj, processedKey, ref;
            obj = {};
            obj[charkey] = "";
            if (!_this.options.ignoreAttrs) {
              ref = node.attributes;
              for (key in ref) {
                if (!hasProp.call(ref, key))
                  continue;
                if (!(attrkey in obj) && !_this.options.mergeAttrs) {
                  obj[attrkey] = {};
                }
                newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
                processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
                if (_this.options.mergeAttrs) {
                  _this.assignOrPush(obj, processedKey, newValue);
                } else {
                  defineProperty(obj[attrkey], processedKey, newValue);
                }
              }
            }
            obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
            if (_this.options.xmlns) {
              obj[_this.options.xmlnskey] = {
                uri: node.uri,
                local: node.local
              };
            }
            return stack.push(obj);
          };
        }(this);
        this.saxParser.onclosetag = function(_this) {
          return function() {
            var cdata, emptyStr, key, node, nodeName, obj, objClone, old, s, xpath;
            obj = stack.pop();
            nodeName = obj["#name"];
            if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
              delete obj["#name"];
            }
            if (obj.cdata === true) {
              cdata = obj.cdata;
              delete obj.cdata;
            }
            s = stack[stack.length - 1];
            if (obj[charkey].match(/^\s*$/) && !cdata) {
              emptyStr = obj[charkey];
              delete obj[charkey];
            } else {
              if (_this.options.trim) {
                obj[charkey] = obj[charkey].trim();
              }
              if (_this.options.normalize) {
                obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
              }
              obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
              if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                obj = obj[charkey];
              }
            }
            if (isEmpty(obj)) {
              if (typeof _this.options.emptyTag === "function") {
                obj = _this.options.emptyTag();
              } else {
                obj = _this.options.emptyTag !== "" ? _this.options.emptyTag : emptyStr;
              }
            }
            if (_this.options.validator != null) {
              xpath = "/" + function() {
                var i, len, results;
                results = [];
                for (i = 0, len = stack.length;i < len; i++) {
                  node = stack[i];
                  results.push(node["#name"]);
                }
                return results;
              }().concat(nodeName).join("/");
              (function() {
                var err;
                try {
                  return obj = _this.options.validator(xpath, s && s[nodeName], obj);
                } catch (error1) {
                  err = error1;
                  return _this.emit("error", err);
                }
              })();
            }
            if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === "object") {
              if (!_this.options.preserveChildrenOrder) {
                node = {};
                if (_this.options.attrkey in obj) {
                  node[_this.options.attrkey] = obj[_this.options.attrkey];
                  delete obj[_this.options.attrkey];
                }
                if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                  node[_this.options.charkey] = obj[_this.options.charkey];
                  delete obj[_this.options.charkey];
                }
                if (Object.getOwnPropertyNames(obj).length > 0) {
                  node[_this.options.childkey] = obj;
                }
                obj = node;
              } else if (s) {
                s[_this.options.childkey] = s[_this.options.childkey] || [];
                objClone = {};
                for (key in obj) {
                  if (!hasProp.call(obj, key))
                    continue;
                  defineProperty(objClone, key, obj[key]);
                }
                s[_this.options.childkey].push(objClone);
                delete obj["#name"];
                if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                  obj = obj[charkey];
                }
              }
            }
            if (stack.length > 0) {
              return _this.assignOrPush(s, nodeName, obj);
            } else {
              if (_this.options.explicitRoot) {
                old = obj;
                obj = {};
                defineProperty(obj, nodeName, old);
              }
              _this.resultObject = obj;
              _this.saxParser.ended = true;
              return _this.emit("end", _this.resultObject);
            }
          };
        }(this);
        ontext = function(_this) {
          return function(text) {
            var charChild, s;
            s = stack[stack.length - 1];
            if (s) {
              s[charkey] += text;
              if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, "").trim() !== "")) {
                s[_this.options.childkey] = s[_this.options.childkey] || [];
                charChild = {
                  "#name": "__text__"
                };
                charChild[charkey] = text;
                if (_this.options.normalize) {
                  charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
                }
                s[_this.options.childkey].push(charChild);
              }
              return s;
            }
          };
        }(this);
        this.saxParser.ontext = ontext;
        return this.saxParser.oncdata = function(_this) {
          return function(text) {
            var s;
            s = ontext(text);
            if (s) {
              return s.cdata = true;
            }
          };
        }(this);
      };
      Parser.prototype.parseString = function(str, cb) {
        var err;
        if (cb != null && typeof cb === "function") {
          this.on("end", function(result) {
            this.reset();
            return cb(null, result);
          });
          this.on("error", function(err2) {
            this.reset();
            return cb(err2);
          });
        }
        try {
          str = str.toString();
          if (str.trim() === "") {
            this.emit("end", null);
            return true;
          }
          str = bom.stripBOM(str);
          if (this.options.async) {
            this.remaining = str;
            setImmediate2(this.processAsync);
            return this.saxParser;
          }
          return this.saxParser.write(str).close();
        } catch (error1) {
          err = error1;
          if (!(this.saxParser.errThrown || this.saxParser.ended)) {
            this.emit("error", err);
            return this.saxParser.errThrown = true;
          } else if (this.saxParser.ended) {
            throw err;
          }
        }
      };
      Parser.prototype.parseStringPromise = function(str) {
        return new Promise(function(_this) {
          return function(resolve, reject) {
            return _this.parseString(str, function(err, value) {
              if (err) {
                return reject(err);
              } else {
                return resolve(value);
              }
            });
          };
        }(this));
      };
      return Parser;
    }(events);
    exports.parseString = function(str, a2, b3) {
      var cb, options, parser;
      if (b3 != null) {
        if (typeof b3 === "function") {
          cb = b3;
        }
        if (typeof a2 === "object") {
          options = a2;
        }
      } else {
        if (typeof a2 === "function") {
          cb = a2;
        }
        options = {};
      }
      parser = new exports.Parser(options);
      return parser.parseString(str, cb);
    };
    exports.parseStringPromise = function(str, a2) {
      var options, parser;
      if (typeof a2 === "object") {
        options = a2;
      }
      parser = new exports.Parser(options);
      return parser.parseStringPromise(str);
    };
  }).call(exports);
});

// ../../node_modules/xml2js/lib/xml2js.js
var require_xml2js = __commonJS((exports) => {
  (function() {
    var builder, defaults, parser, processors, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    defaults = require_defaults2();
    builder = require_builder();
    parser = require_parser();
    processors = require_processors();
    exports.defaults = defaults.defaults;
    exports.processors = processors;
    exports.ValidationError = function(superClass) {
      extend(ValidationError, superClass);
      function ValidationError(message) {
        this.message = message;
      }
      return ValidationError;
    }(Error);
    exports.Builder = builder.Builder;
    exports.Parser = parser.Parser;
    exports.parseString = parser.parseString;
    exports.parseStringPromise = parser.parseStringPromise;
  }).call(exports);
});

// dist/enums.js
var Rules;
(function(Rules2) {
  Rules2["NAME"] = "SUMMARY";
  Rules2["STARTTIME"] = "DTSTART";
  Rules2["ENDTIME"] = "DTEND";
  Rules2["DESCRIPTION"] = "DESCRIPTION";
  Rules2["RECUR"] = "RRULE";
  Rules2["UID"] = "UID";
})(Rules || (Rules = {}));
var Days;
(function(Days2) {
  Days2["MONDAY"] = "MO";
  Days2["TUESDAY"] = "TU";
  Days2["WEDNESDAY"] = "WE";
  Days2["THURSDAY"] = "TH";
  Days2["FRIDAY"] = "FR";
  Days2["SATURDAY"] = "SA";
  Days2["SUNDAY"] = "SU";
})(Days || (Days = {}));
var Timezone;
(function(Timezone2) {
  Timezone2["EST"] = "America/New_York";
  Timezone2["CST"] = "America/Chicago";
  Timezone2["MST"] = "America/Denver";
  Timezone2["PST"] = "America/Los_Angeles";
})(Timezone || (Timezone = {}));

// dist/test.js
var import_jszip = __toESM(require_lib(), 1);
var import_xml2js = __toESM(require_xml2js(), 1);
function toRequiredInfo(row) {
  return row["Course Listing"] && row["Meeting Patterns"] && row["Instructor"] && row["Start Date"] && row["End Date"] ? {
    course: row["Course Listing"],
    patterns: row["Meeting Patterns"],
    instructor: row["Instructor"],
    start: row["Start Date"],
    end: row["End Date"]
  } : null;
}
function getString(arr, cell) {
  if (cell.v) {
    try {
      let num = Number.parseInt(cell.v);
      if (num < arr.length) {
        return arr[Number.parseInt(cell.v)];
      } else {
        let time = new Date("1900-01-01T00:00:00.000Z");
        time.setDate(time.getDate() + num - 2);
        return time.toISOString();
      }
    } catch (err) {
    }
  }
  return null;
}
function getCol(cell) {
  return cell["$"].r.charAt(0);
}
async function parseFile(file) {
  try {
    let reqInfoArr = [];
    await import_jszip.default.loadAsync(file).then(async (zip) => {
      console.log(zip);
      console.log(zip.files);
      let sharedXmlString = null;
      let dataXmlString = null;
      await zip.file("xl/sharedStrings.xml")?.async("string").then((content) => {
        sharedXmlString = content;
      });
      await zip.file("xl/worksheets/sheet1.xml")?.async("string").then((content) => {
        dataXmlString = content;
      });
      if (!sharedXmlString || !dataXmlString) {
        throw new Error("Failed to unzip .xlsx file");
      }
      let sharedArr = [];
      import_xml2js.parseString(sharedXmlString, (err, result) => {
        if (err) {
          console.log(err);
        }
        result.sst.si.forEach((si) => sharedArr.push(si.t[0]));
      });
      import_xml2js.parseString(dataXmlString, (err, result) => {
        if (err) {
          console.log(err);
        }
        let classRows = [];
        let headers = {};
        let isHeadersRow = false;
        let isClassRow = false;
        for (const row of result.worksheet.sheetData[0].row) {
          if (!isClassRow) {
            row.c.forEach((c) => {
              let text = getString(sharedArr, c);
              if (text == "Course Listing") {
                isHeadersRow = true;
              }
              if (isHeadersRow) {
                headers[getCol(c)] = text ? text : "undefined";
              }
            });
            if (isHeadersRow) {
              isClassRow = true;
            }
          } else if (isClassRow) {
            let addRow = {};
            row.c.forEach((c) => {
              if (getCol(c) in headers) {
                let text = getString(sharedArr, c);
                addRow[headers[getCol(c)]] = text ? text : "undefined";
              }
            });
            classRows.push(addRow);
          } else {
            break;
          }
        }
        classRows.forEach((row) => {
          let converted = toRequiredInfo(row);
          if (converted) {
            reqInfoArr.push(converted);
          }
        });
      });
    });
    return reqInfoArr;
  } catch (err) {
    console.error(err);
    throw Error("Failed to read .xlsx file and parse cells into objects");
  }
}

// dist/functions.js
function generateUid() {
  let longUidString = "";
  for (let i = 0;i < 3; i++)
    longUidString += Math.random().toString(16).substring(2);
  return longUidString.substring(0, 8) + "-" + longUidString.substring(8, 12) + "-" + longUidString.substring(12, 16) + "-" + longUidString.substring(16, 20) + "-" + longUidString.substring(20, 32);
}
function eventToString(event) {
  let retString = "BEGIN:VEVENT\n";
  let hasUid = false;
  for (const rule of event) {
    if (rule.key == Rules.UID) {
      hasUid = true;
    } else if (rule.key == Rules.STARTTIME || rule.key == Rules.ENDTIME) {
      retString += rule.val + "\n";
      continue;
    }
    retString += rule.key + ":" + rule.val + "\n";
  }
  if (!hasUid)
    retString += Rules.UID + ":" + generateUid() + "\n";
  return retString + "END:VEVENT";
}
function calendarToString(cal) {
  let retString = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:ian-lundy27.github.io/workday-ics\n";
  for (const event of cal) {
    retString += eventToString(event) + "\n";
  }
  return retString + "END:VCALENDAR";
}
function createRule(type, val) {
  return {
    key: type,
    val
  };
}
function buildRRuleValString(params) {
  let arr = [];
  Object.keys(params).forEach((param) => {
    arr.push(param + "=" + params[param]);
  });
  return arr.join(";");
}
function timestampToString(s) {
  if (!isValidDate(s) || !isValidTime(s)) {
    throw new Error("Attempted to convert incomplete timestamp into a string");
  }
  return s.year + s.month + s.day + "T" + s.hour + s.minute + s.second + "Z";
}
function isoToTimestamp(stamp) {
  let vals = stamp.split(/[-:.TZ]/);
  return {
    year: vals[0],
    month: vals[1],
    day: vals[2],
    hour: vals[3],
    minute: vals[4],
    second: vals[5]
  };
}
function isMeetingDays(text) {
  let chars = new Set(["M", "T", "W", "R", "F"]);
  for (const char of text) {
    if (!chars.has(char))
      return false;
  }
  return true;
}
function meetingDaysToEnum(text) {
  let days = [];
  for (const char of text) {
    switch (char) {
      case "M":
        days.push(Days.MONDAY);
        break;
      case "T":
        days.push(Days.TUESDAY);
        break;
      case "W":
        days.push(Days.WEDNESDAY);
        break;
      case "R":
        days.push(Days.THURSDAY);
        break;
      case "F":
        days.push(Days.FRIDAY);
        break;
    }
  }
  return days;
}
function amPmToTimestamp(text) {
  let pm = text.includes("PM");
  if (text.includes(":") && (text.includes(" AM") || text.includes(" PM"))) {
    let arr = text.split(" ")[0].split(":");
    let hour = Number.parseInt(arr[0]);
    if (hour == 12 && !pm) {
      hour = 0;
    } else if (pm && hour != 12) {
      hour += 12;
    }
    let minute = arr[1];
    return {
      hour: hour.toString().padStart(2, "0"),
      minute: minute.padStart(2, "0"),
      second: "00"
    };
  }
  return {};
}
function isValidDate(date) {
  return typeof date.year == "string" && typeof date.month == "string" && typeof date.day == "string";
}
function isValidTime(time) {
  return typeof time.hour == "string" && typeof time.minute == "string" && typeof time.second == "string";
}
function parseMeetingCellBlock(text) {
  let pattern = {
    days: [],
    start: {},
    end: {},
    room: ""
  };
  for (let block of text.split("|")) {
    block = block.trim();
    if (isMeetingDays(block)) {
      pattern.days = meetingDaysToEnum(block);
    } else if (block.includes("/")) {
      continue;
    } else if (block.includes(" - ")) {
      let times = block.split(" - ");
      if (times.length == 2) {
        pattern.start = amPmToTimestamp(times[0].trim());
        pattern.end = amPmToTimestamp(times[1].trim());
      }
    } else {
      pattern.room = block;
    }
  }
  if (!(pattern.days.length > 0 && isValidTime(pattern.start) && isValidTime(pattern.end) && pattern.room.length > 0)) {
    throw new Error("Failed to parse meeting pattern cell");
  }
  return pattern;
}
function parseMeetingCell(text) {
  let patterns = [];
  for (let block of text.split("\n")) {
    if (block.trim()) {
      let pattern = parseMeetingCellBlock(block);
      patterns.push(pattern);
    }
  }
  return patterns;
}
function patternToRRuleParams(pattern, end) {
  return {
    FREQ: "WEEKLY",
    INTERVAL: "1",
    UNTIL: timestampToString(isoToTimestamp(end)),
    BYDAY: pattern.days.join(",")
  };
}
function combineDateTime(date, time) {
  return {
    year: date.year,
    month: date.month,
    day: date.day,
    hour: time.hour,
    minute: time.minute,
    second: time.second
  };
}
function icsDateTime(type, timestamp, endpoint, timezone) {
  return type + ";TZID=" + timezone + ":" + timestampToString(combineDateTime(isoToTimestamp(timestamp), endpoint));
}
function reqInfoToEvent(info, timezone) {
  let events = [];
  let patterns = parseMeetingCell(info.patterns);
  for (const pattern of patterns) {
    let event = [];
    event.push(createRule(Rules.DESCRIPTION, info.instructor + " | " + pattern.room));
    event.push(createRule(Rules.NAME, info.course));
    event.push(createRule(Rules.STARTTIME, icsDateTime(Rules.STARTTIME, info.start, pattern.start, timezone)));
    event.push(createRule(Rules.ENDTIME, icsDateTime(Rules.ENDTIME, info.start, pattern.end, timezone)));
    event.push(createRule(Rules.UID, generateUid()));
    event.push(createRule(Rules.RECUR, buildRRuleValString(patternToRRuleParams(pattern, info.end))));
    events.push(event);
  }
  return events;
}
async function convertXlsxPathToIcsString(file, timezone) {
  let calendar = [];
  await parseFile(file).then((reqInfos) => {
    reqInfos.forEach((reqInfo) => calendar = calendar.concat(reqInfoToEvent(reqInfo, timezone)));
    console.log(calendar);
  });
  return calendarToString(calendar);
}

// dist/main.js
var upload = document.getElementById("upload");
var convert = document.getElementById("convert");
var response = document.getElementById("response");
upload?.addEventListener("change", (event) => {
  console.log(event);
  convert.disabled = false;
});
if (convert) {
  convert.onclick = (click) => {
    if (upload.files && upload.files.length > 0) {
      const file = upload.files[0];
      console.log(file);
      try {
        const result = convertXlsxPathToIcsString(file, Timezone.EST).then((ics) => {
          const blob = new Blob([ics], { type: "text/plain" });
          const link = document.createElement("a");
          link.download = "schedule.ics";
          link.href = URL.createObjectURL(blob);
          link.click();
          response.classList.add("success");
          response.innerText = "Converted .xlsx file to a .ics file, downloading...";
        });
      } catch (err) {
        response.classList.add("error");
        response.innerText = err instanceof Error ? err.message : "Unknown error occurred";
      }
    } else {
      response.classList.add("error");
      response.innerText = "Something went wrong uploading the .xlsx file";
    }
    response.classList.remove("hidden");
  };
}
