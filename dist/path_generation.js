"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var eos = __importStar(require("./blockchains/eos/index"));
var ethereum = __importStar(require("./blockchains/ethereum/index"));
var BNTBlockchainId = '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C';
var EthereumAnchorToken = {
    blockchainType: 'ethereum',
    blockchainId: BNTBlockchainId
};
var EOSAnchorToken = {
    blockchainType: 'eos',
    blockchainId: 'bntbntbntbnt',
    symbol: 'BNT'
};
var anchorTokens = {
    ethereum: EthereumAnchorToken,
    eos: EOSAnchorToken
};
function isAnchorToken(token) {
    if (token.blockchainType == 'ethereum' && token.blockchainId.toLowerCase() == BNTBlockchainId.toLowerCase())
        return true;
    if (token.blockchainType == 'eos' && token.blockchainId == anchorTokens['eos'].blockchainId)
        return true;
    return false;
}
function getTokenBlockchainId(token) {
    var _a;
    if (token.blockchainType == 'ethereum')
        return token.blockchainId.toLowerCase();
    return _a = {}, _a[token.symbol] = token.blockchainId.toLowerCase(), _a;
}
// function getTokenBlockchainId(token: Token) {
//     if (token.blockchainType == 'ethereum') return token.blockchainId.toLowerCase();
//     return token.blockchainId.toLowerCase();
// }
function isReserveToken(reserveToken, token) {
    if (token.blockchainType == 'ethereum' && token.blockchainId == reserveToken.blockchainId)
        return true;
    if (token.blockchainType == 'eos' && token.blockchainId == reserveToken.blockchainId)
        return true;
    return false;
}
exports.getConverterBlockchainId = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(token.blockchainType == 'ethereum')) return [3 /*break*/, 2];
                return [4 /*yield*/, ethereum.getConverterBlockchainId(token.blockchainId)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2: return [4 /*yield*/, eos.getConverterBlockchainId(token)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getReserveCount = function (reserves, blockchainType) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(blockchainType == 'ethereum')) return [3 /*break*/, 2];
                return [4 /*yield*/, ethereum.getReservesCount(reserves)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2: return [4 /*yield*/, eos.getReservesCount(reserves)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getReserves = function (blockchainId, blockchainType, symbol, isMulti) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(blockchainType == 'ethereum')) return [3 /*break*/, 2];
                return [4 /*yield*/, ethereum.getReserves(blockchainId)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2: return [4 /*yield*/, eos.getReserves(blockchainId, symbol, isMulti)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getReserveToken = function (token, index, blockchainType) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(blockchainType == 'ethereum')) return [3 /*break*/, 2];
                return [4 /*yield*/, ethereum.getReserveBlockchainId(token, index)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2: return [4 /*yield*/, eos.getReserveBlockchainId(token, index)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
function getConverterToken(blockchainId, connector, blockchainType) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(blockchainType == 'ethereum')) return [3 /*break*/, 2];
                    return [4 /*yield*/, ethereum.getConverterSmartToken(connector)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [2 /*return*/, blockchainId];
            }
        });
    });
}
exports.getConverterToken = getConverterToken;
function generatePathByBlockchainIds(sourceToken, targetToken) {
    return __awaiter(this, void 0, void 0, function () {
        var pathObjects, _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    pathObjects = { paths: [] };
                    if (!(sourceToken.blockchainType == targetToken.blockchainType)) return [3 /*break*/, 2];
                    _b = (_a = pathObjects.paths).push;
                    _c = { type: sourceToken.blockchainType };
                    return [4 /*yield*/, getConversionPath(sourceToken, targetToken)];
                case 1:
                    _b.apply(_a, [(_c.path = _k.sent(), _c)]);
                    return [3 /*break*/, 5];
                case 2:
                    _e = (_d = pathObjects.paths).push;
                    _f = { type: sourceToken.blockchainType };
                    return [4 /*yield*/, getConversionPath(sourceToken, null)];
                case 3:
                    _e.apply(_d, [(_f.path = _k.sent(), _f)]);
                    _h = (_g = pathObjects.paths).push;
                    _j = { type: targetToken.blockchainType };
                    return [4 /*yield*/, getConversionPath(null, targetToken)];
                case 4:
                    _h.apply(_g, [(_j.path = _k.sent(), _j)]);
                    _k.label = 5;
                case 5: return [2 /*return*/, pathObjects];
            }
        });
    });
}
exports.generatePathByBlockchainIds = generatePathByBlockchainIds;
function getPath(from, to) {
    var blockchainType = from ? from.blockchainType : to.blockchainType;
    var path = {
        from: from ? from : null,
        to: to ? to : null
    };
    if (!path.to)
        path.to = __assign({}, anchorTokens[blockchainType]);
    if (!path.from)
        path.from = __assign({}, anchorTokens[blockchainType]);
    return path;
}
function getConversionPath(from, to) {
    return __awaiter(this, void 0, void 0, function () {
        var blockchainType, path;
        return __generator(this, function (_a) {
            blockchainType = from ? from.blockchainType : to.blockchainType;
            path = getPath(from, to);
            return [2 /*return*/, findPath(path, blockchainType)];
        });
    });
}
exports.getConversionPath = getConversionPath;
function findPath(pathObject, blockchainType) {
    return __awaiter(this, void 0, void 0, function () {
        var from, to;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getPathToAnchorByBlockchainId(__assign({}, pathObject.from), anchorTokens[blockchainType])];
                case 1:
                    from = _a.sent();
                    return [4 /*yield*/, getPathToAnchorByBlockchainId(__assign({}, pathObject.to), anchorTokens[blockchainType])];
                case 2:
                    to = _a.sent();
                    return [2 /*return*/, getShortestPath(from, to)];
            }
        });
    });
}
exports.findPath = findPath;
function getPathToAnchorByBlockchainId(token, anchorToken) {
    return __awaiter(this, void 0, void 0, function () {
        var smartTokens, _a, isMulti, response, _i, smartTokens_1, smartToken, blockchainId, converterBlockchainId, reserves, reservesCount, i, reserveToken, path;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (isAnchorToken(token))
                        return [2 /*return*/, [getTokenBlockchainId(token)]];
                    if (!(token.blockchainType == 'eos')) return [3 /*break*/, 1];
                    _a = [token.blockchainId];
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, ethereum.getSmartTokens(token)];
                case 2:
                    _a = _b.sent();
                    _b.label = 3;
                case 3:
                    smartTokens = _a;
                    isMulti = token.blockchainType == 'eos' ? eos.isMultiConverter(token.blockchainId) : false;
                    response = [];
                    _i = 0, smartTokens_1 = smartTokens;
                    _b.label = 4;
                case 4:
                    if (!(_i < smartTokens_1.length)) return [3 /*break*/, 13];
                    smartToken = smartTokens_1[_i];
                    return [4 /*yield*/, exports.getConverterBlockchainId(token.blockchainType == 'ethereum' ? { blockchainType: token.blockchainType, blockchainId: smartToken } : token)];
                case 5:
                    blockchainId = _b.sent();
                    converterBlockchainId = token.blockchainType == 'ethereum' ? blockchainId : Object.values(blockchainId)[0];
                    return [4 /*yield*/, exports.getReserves(converterBlockchainId, token.blockchainType, token.symbol, isMulti)];
                case 6:
                    reserves = (_b.sent()).reserves;
                    return [4 /*yield*/, exports.getReserveCount(reserves, token.blockchainType)];
                case 7:
                    reservesCount = _b.sent();
                    i = 0;
                    _b.label = 8;
                case 8:
                    if (!(i < reservesCount)) return [3 /*break*/, 12];
                    return [4 /*yield*/, exports.getReserveToken(reserves, i, token.blockchainType)];
                case 9:
                    reserveToken = _b.sent();
                    if (!!isReserveToken(reserveToken, token)) return [3 /*break*/, 11];
                    return [4 /*yield*/, getPathToAnchorByBlockchainId(reserveToken, anchorToken)];
                case 10:
                    path = _b.sent();
                    if (path.length > 0)
                        return [2 /*return*/, __spreadArrays([getTokenBlockchainId(token), token.blockchainType == 'eos' ? blockchainId : smartToken], path)];
                    _b.label = 11;
                case 11:
                    i++;
                    return [3 /*break*/, 8];
                case 12:
                    _i++;
                    return [3 /*break*/, 4];
                case 13: return [2 /*return*/, response];
            }
        });
    });
}
exports.getPathToAnchorByBlockchainId = getPathToAnchorByBlockchainId;
function getShortestPath(sourcePath, targetPath) {
    if (sourcePath.length > 0 && targetPath.length > 0) {
        var i = sourcePath.length - 1;
        var j = targetPath.length - 1;
        while (i >= 0 && j >= 0 && JSON.stringify(sourcePath[i]) == JSON.stringify(targetPath[j])) {
            i--;
            j--;
        }
        var path = [];
        for (var m = 0; m <= i + 1; m++)
            path.push(sourcePath[m]);
        for (var n = j; n >= 0; n--)
            path.push(targetPath[n]);
        var length_1 = 0;
        for (var p = 0; p < path.length; p += 1) {
            for (var q = p + 2; q < path.length - p % 2; q += 2) {
                if (path[p] == path[q])
                    p = q;
            }
            path[length_1++] = path[p];
        }
        return path.slice(0, length_1);
    }
    return [];
}
