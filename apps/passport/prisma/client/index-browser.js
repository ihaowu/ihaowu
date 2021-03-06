
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.14.0
 * Query Engine version: 5d491261d382a2a5ffdc71de17072b0e409f1cc1
 */
Prisma.prismaVersion = {
  client: "2.14.0",
  engine: "5d491261d382a2a5ffdc71de17072b0e409f1cc1"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.SysUserScalarFieldEnum = makeEnum({
  id: 'id',
  uid: 'uid',
  avatar: 'avatar',
  nickname: 'nickname',
  gender: 'gender',
  birthday: 'birthday',
  username: 'username',
  password: 'password',
  verified: 'verified',
  mobile: 'mobile',
  email: 'email',
  isDeleted: 'isDeleted',
  isLocked: 'isLocked',
  isAdmin: 'isAdmin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.SysUserLogScalarFieldEnum = makeEnum({
  id: 'id',
  category: 'category',
  level: 'level',
  action: 'action',
  message: 'message',
  details: 'details',
  userAgent: 'userAgent',
  clientIp: 'clientIp',
  createdBy: 'createdBy',
  createdAt: 'createdAt',
  sysUserId: 'sysUserId'
});

exports.Prisma.SysUserIdentityCertificationScalarFieldEnum = makeEnum({
  id: 'id',
  realName: 'realName',
  idCardType: 'idCardType',
  idCardNo: 'idCardNo',
  idCardFrontImage: 'idCardFrontImage',
  idCardBackImage: 'idCardBackImage',
  holdIDCardImage: 'holdIDCardImage',
  checkStatus: 'checkStatus',
  reason: 'reason',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  sysUserId: 'sysUserId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});


exports.Prisma.ModelName = makeEnum({
  SysUser: 'SysUser',
  SysUserLog: 'SysUserLog',
  SysUserIdentityCertification: 'SysUserIdentityCertification'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma-client-js/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
