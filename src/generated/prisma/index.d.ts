
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>
/**
 * Model Schedule_ScheduleTag
 * 
 */
export type Schedule_ScheduleTag = $Result.DefaultSelection<Prisma.$Schedule_ScheduleTagPayload>
/**
 * Model ScheduleTag
 * 
 */
export type ScheduleTag = $Result.DefaultSelection<Prisma.$ScheduleTagPayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model Schedule_Image
 * 
 */
export type Schedule_Image = $Result.DefaultSelection<Prisma.$Schedule_ImagePayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Schedule_User
 * 
 */
export type Schedule_User = $Result.DefaultSelection<Prisma.$Schedule_UserPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schedules
 * const schedules = await prisma.schedule.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Schedules
   * const schedules = await prisma.schedule.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule_ScheduleTag`: Exposes CRUD operations for the **Schedule_ScheduleTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedule_ScheduleTags
    * const schedule_ScheduleTags = await prisma.schedule_ScheduleTag.findMany()
    * ```
    */
  get schedule_ScheduleTag(): Prisma.Schedule_ScheduleTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleTag`: Exposes CRUD operations for the **ScheduleTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleTags
    * const scheduleTags = await prisma.scheduleTag.findMany()
    * ```
    */
  get scheduleTag(): Prisma.ScheduleTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule_Image`: Exposes CRUD operations for the **Schedule_Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedule_Images
    * const schedule_Images = await prisma.schedule_Image.findMany()
    * ```
    */
  get schedule_Image(): Prisma.Schedule_ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule_User`: Exposes CRUD operations for the **Schedule_User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedule_Users
    * const schedule_Users = await prisma.schedule_User.findMany()
    * ```
    */
  get schedule_User(): Prisma.Schedule_UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Schedule: 'Schedule',
    Event: 'Event',
    Reminder: 'Reminder',
    Schedule_ScheduleTag: 'Schedule_ScheduleTag',
    ScheduleTag: 'ScheduleTag',
    Link: 'Link',
    Schedule_Image: 'Schedule_Image',
    Image: 'Image',
    Schedule_User: 'Schedule_User',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "schedule" | "event" | "reminder" | "schedule_ScheduleTag" | "scheduleTag" | "link" | "schedule_Image" | "image" | "schedule_User" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReminderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
      Schedule_ScheduleTag: {
        payload: Prisma.$Schedule_ScheduleTagPayload<ExtArgs>
        fields: Prisma.Schedule_ScheduleTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Schedule_ScheduleTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Schedule_ScheduleTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload>
          }
          findFirst: {
            args: Prisma.Schedule_ScheduleTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Schedule_ScheduleTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload>
          }
          findMany: {
            args: Prisma.Schedule_ScheduleTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload>[]
          }
          create: {
            args: Prisma.Schedule_ScheduleTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload>
          }
          createMany: {
            args: Prisma.Schedule_ScheduleTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Schedule_ScheduleTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload>[]
          }
          delete: {
            args: Prisma.Schedule_ScheduleTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload>
          }
          update: {
            args: Prisma.Schedule_ScheduleTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload>
          }
          deleteMany: {
            args: Prisma.Schedule_ScheduleTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Schedule_ScheduleTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Schedule_ScheduleTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload>[]
          }
          upsert: {
            args: Prisma.Schedule_ScheduleTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ScheduleTagPayload>
          }
          aggregate: {
            args: Prisma.Schedule_ScheduleTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule_ScheduleTag>
          }
          groupBy: {
            args: Prisma.Schedule_ScheduleTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Schedule_ScheduleTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.Schedule_ScheduleTagCountArgs<ExtArgs>
            result: $Utils.Optional<Schedule_ScheduleTagCountAggregateOutputType> | number
          }
        }
      }
      ScheduleTag: {
        payload: Prisma.$ScheduleTagPayload<ExtArgs>
        fields: Prisma.ScheduleTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload>
          }
          findFirst: {
            args: Prisma.ScheduleTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload>
          }
          findMany: {
            args: Prisma.ScheduleTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload>[]
          }
          create: {
            args: Prisma.ScheduleTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload>
          }
          createMany: {
            args: Prisma.ScheduleTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload>[]
          }
          delete: {
            args: Prisma.ScheduleTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload>
          }
          update: {
            args: Prisma.ScheduleTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload>[]
          }
          upsert: {
            args: Prisma.ScheduleTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleTagPayload>
          }
          aggregate: {
            args: Prisma.ScheduleTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleTag>
          }
          groupBy: {
            args: Prisma.ScheduleTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleTagCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleTagCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      Schedule_Image: {
        payload: Prisma.$Schedule_ImagePayload<ExtArgs>
        fields: Prisma.Schedule_ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Schedule_ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Schedule_ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload>
          }
          findFirst: {
            args: Prisma.Schedule_ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Schedule_ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload>
          }
          findMany: {
            args: Prisma.Schedule_ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload>[]
          }
          create: {
            args: Prisma.Schedule_ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload>
          }
          createMany: {
            args: Prisma.Schedule_ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Schedule_ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload>[]
          }
          delete: {
            args: Prisma.Schedule_ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload>
          }
          update: {
            args: Prisma.Schedule_ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload>
          }
          deleteMany: {
            args: Prisma.Schedule_ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Schedule_ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Schedule_ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload>[]
          }
          upsert: {
            args: Prisma.Schedule_ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_ImagePayload>
          }
          aggregate: {
            args: Prisma.Schedule_ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule_Image>
          }
          groupBy: {
            args: Prisma.Schedule_ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Schedule_ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.Schedule_ImageCountArgs<ExtArgs>
            result: $Utils.Optional<Schedule_ImageCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Schedule_User: {
        payload: Prisma.$Schedule_UserPayload<ExtArgs>
        fields: Prisma.Schedule_UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Schedule_UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Schedule_UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload>
          }
          findFirst: {
            args: Prisma.Schedule_UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Schedule_UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload>
          }
          findMany: {
            args: Prisma.Schedule_UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload>[]
          }
          create: {
            args: Prisma.Schedule_UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload>
          }
          createMany: {
            args: Prisma.Schedule_UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Schedule_UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload>[]
          }
          delete: {
            args: Prisma.Schedule_UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload>
          }
          update: {
            args: Prisma.Schedule_UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload>
          }
          deleteMany: {
            args: Prisma.Schedule_UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Schedule_UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Schedule_UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload>[]
          }
          upsert: {
            args: Prisma.Schedule_UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Schedule_UserPayload>
          }
          aggregate: {
            args: Prisma.Schedule_UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule_User>
          }
          groupBy: {
            args: Prisma.Schedule_UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<Schedule_UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.Schedule_UserCountArgs<ExtArgs>
            result: $Utils.Optional<Schedule_UserCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    schedule?: ScheduleOmit
    event?: EventOmit
    reminder?: ReminderOmit
    schedule_ScheduleTag?: Schedule_ScheduleTagOmit
    scheduleTag?: ScheduleTagOmit
    link?: LinkOmit
    schedule_Image?: Schedule_ImageOmit
    image?: ImageOmit
    schedule_User?: Schedule_UserOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    reminder: number
    schedule_scheduleTag: number
    link: number
    schedule_image: number
    schedule_user: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminder?: boolean | ScheduleCountOutputTypeCountReminderArgs
    schedule_scheduleTag?: boolean | ScheduleCountOutputTypeCountSchedule_scheduleTagArgs
    link?: boolean | ScheduleCountOutputTypeCountLinkArgs
    schedule_image?: boolean | ScheduleCountOutputTypeCountSchedule_imageArgs
    schedule_user?: boolean | ScheduleCountOutputTypeCountSchedule_userArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountSchedule_scheduleTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schedule_ScheduleTagWhereInput
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountSchedule_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schedule_ImageWhereInput
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountSchedule_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schedule_UserWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    schedule: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | EventCountOutputTypeCountScheduleArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type ScheduleTagCountOutputType
   */

  export type ScheduleTagCountOutputType = {
    schedule_scheduleTag: number
  }

  export type ScheduleTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule_scheduleTag?: boolean | ScheduleTagCountOutputTypeCountSchedule_scheduleTagArgs
  }

  // Custom InputTypes
  /**
   * ScheduleTagCountOutputType without action
   */
  export type ScheduleTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTagCountOutputType
     */
    select?: ScheduleTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleTagCountOutputType without action
   */
  export type ScheduleTagCountOutputTypeCountSchedule_scheduleTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schedule_ScheduleTagWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    schedule_image: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule_image?: boolean | ImageCountOutputTypeCountSchedule_imageArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountSchedule_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schedule_ImageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    schedule_user: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule_user?: boolean | UserCountOutputTypeCountSchedule_userArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchedule_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schedule_UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    name: string | null
    startAt: Date | null
    endAt: Date | null
    gatherAt: Date | null
    gatherPlace: string | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startAt: Date | null
    endAt: Date | null
    gatherAt: Date | null
    gatherPlace: string | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    name: number
    startAt: number
    endAt: number
    gatherAt: number
    gatherPlace: number
    eventId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    name?: true
    startAt?: true
    endAt?: true
    gatherAt?: true
    gatherPlace?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    name?: true
    startAt?: true
    endAt?: true
    gatherAt?: true
    gatherPlace?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    name?: true
    startAt?: true
    endAt?: true
    gatherAt?: true
    gatherPlace?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    name: string
    startAt: Date
    endAt: Date
    gatherAt: Date | null
    gatherPlace: string | null
    eventId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startAt?: boolean
    endAt?: boolean
    gatherAt?: boolean
    gatherPlace?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | Schedule$eventArgs<ExtArgs>
    reminder?: boolean | Schedule$reminderArgs<ExtArgs>
    schedule_scheduleTag?: boolean | Schedule$schedule_scheduleTagArgs<ExtArgs>
    link?: boolean | Schedule$linkArgs<ExtArgs>
    schedule_image?: boolean | Schedule$schedule_imageArgs<ExtArgs>
    schedule_user?: boolean | Schedule$schedule_userArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startAt?: boolean
    endAt?: boolean
    gatherAt?: boolean
    gatherPlace?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | Schedule$eventArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startAt?: boolean
    endAt?: boolean
    gatherAt?: boolean
    gatherPlace?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | Schedule$eventArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    name?: boolean
    startAt?: boolean
    endAt?: boolean
    gatherAt?: boolean
    gatherPlace?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startAt" | "endAt" | "gatherAt" | "gatherPlace" | "eventId" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Schedule$eventArgs<ExtArgs>
    reminder?: boolean | Schedule$reminderArgs<ExtArgs>
    schedule_scheduleTag?: boolean | Schedule$schedule_scheduleTagArgs<ExtArgs>
    link?: boolean | Schedule$linkArgs<ExtArgs>
    schedule_image?: boolean | Schedule$schedule_imageArgs<ExtArgs>
    schedule_user?: boolean | Schedule$schedule_userArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Schedule$eventArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Schedule$eventArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      event: Prisma.$EventPayload<ExtArgs> | null
      reminder: Prisma.$ReminderPayload<ExtArgs>[]
      schedule_scheduleTag: Prisma.$Schedule_ScheduleTagPayload<ExtArgs>[]
      link: Prisma.$LinkPayload<ExtArgs>[]
      schedule_image: Prisma.$Schedule_ImagePayload<ExtArgs>[]
      schedule_user: Prisma.$Schedule_UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startAt: Date
      endAt: Date
      gatherAt: Date | null
      gatherPlace: string | null
      eventId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends Schedule$eventArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reminder<T extends Schedule$reminderArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$reminderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule_scheduleTag<T extends Schedule$schedule_scheduleTagArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$schedule_scheduleTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    link<T extends Schedule$linkArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$linkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule_image<T extends Schedule$schedule_imageArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$schedule_imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule_user<T extends Schedule$schedule_userArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$schedule_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly name: FieldRef<"Schedule", 'String'>
    readonly startAt: FieldRef<"Schedule", 'DateTime'>
    readonly endAt: FieldRef<"Schedule", 'DateTime'>
    readonly gatherAt: FieldRef<"Schedule", 'DateTime'>
    readonly gatherPlace: FieldRef<"Schedule", 'String'>
    readonly eventId: FieldRef<"Schedule", 'String'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.event
   */
  export type Schedule$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Schedule.reminder
   */
  export type Schedule$reminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Schedule.schedule_scheduleTag
   */
  export type Schedule$schedule_scheduleTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    where?: Schedule_ScheduleTagWhereInput
    orderBy?: Schedule_ScheduleTagOrderByWithRelationInput | Schedule_ScheduleTagOrderByWithRelationInput[]
    cursor?: Schedule_ScheduleTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Schedule_ScheduleTagScalarFieldEnum | Schedule_ScheduleTagScalarFieldEnum[]
  }

  /**
   * Schedule.link
   */
  export type Schedule$linkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Schedule.schedule_image
   */
  export type Schedule$schedule_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    where?: Schedule_ImageWhereInput
    orderBy?: Schedule_ImageOrderByWithRelationInput | Schedule_ImageOrderByWithRelationInput[]
    cursor?: Schedule_ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Schedule_ImageScalarFieldEnum | Schedule_ImageScalarFieldEnum[]
  }

  /**
   * Schedule.schedule_user
   */
  export type Schedule$schedule_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    where?: Schedule_UserWhereInput
    orderBy?: Schedule_UserOrderByWithRelationInput | Schedule_UserOrderByWithRelationInput[]
    cursor?: Schedule_UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Schedule_UserScalarFieldEnum | Schedule_UserScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    start_at: Date | null
    end_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    start_at: Date | null
    end_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    description: number
    start_at: number
    end_at: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start_at?: true
    end_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start_at?: true
    end_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start_at?: true
    end_at?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    name: string
    description: string | null
    start_at: Date
    end_at: Date
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    start_at?: boolean
    end_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | Event$scheduleArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    start_at?: boolean
    end_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    start_at?: boolean
    end_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    start_at?: boolean
    end_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "start_at" | "end_at" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | Event$scheduleArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      start_at: Date
      end_at: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends Event$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, Event$scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly start_at: FieldRef<"Event", 'DateTime'>
    readonly end_at: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.schedule
   */
  export type Event$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderMinAggregateOutputType = {
    id: string | null
    message: string | null
    remind_at: Date | null
    scheduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: string | null
    message: string | null
    remind_at: Date | null
    scheduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    message: number
    remind_at: number
    scheduleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReminderMinAggregateInputType = {
    id?: true
    message?: true
    remind_at?: true
    scheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    message?: true
    remind_at?: true
    scheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    message?: true
    remind_at?: true
    scheduleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: string
    message: string
    remind_at: Date
    scheduleId: string
    createdAt: Date
    updatedAt: Date
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    remind_at?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    remind_at?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    remind_at?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    message?: boolean
    remind_at?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReminderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "remind_at" | "scheduleId" | "createdAt" | "updatedAt", ExtArgs["result"]["reminder"]>
  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      remind_at: Date
      scheduleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders and returns the data updated in the database.
     * @param {ReminderUpdateManyAndReturnArgs} args - Arguments to update many Reminders.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReminderUpdateManyAndReturnArgs>(args: SelectSubset<T, ReminderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reminder model
   */
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'String'>
    readonly message: FieldRef<"Reminder", 'String'>
    readonly remind_at: FieldRef<"Reminder", 'DateTime'>
    readonly scheduleId: FieldRef<"Reminder", 'String'>
    readonly createdAt: FieldRef<"Reminder", 'DateTime'>
    readonly updatedAt: FieldRef<"Reminder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
  }

  /**
   * Reminder updateManyAndReturn
   */
  export type ReminderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to delete.
     */
    limit?: number
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Model Schedule_ScheduleTag
   */

  export type AggregateSchedule_ScheduleTag = {
    _count: Schedule_ScheduleTagCountAggregateOutputType | null
    _min: Schedule_ScheduleTagMinAggregateOutputType | null
    _max: Schedule_ScheduleTagMaxAggregateOutputType | null
  }

  export type Schedule_ScheduleTagMinAggregateOutputType = {
    scheduleId: string | null
    scheduleTagId: string | null
  }

  export type Schedule_ScheduleTagMaxAggregateOutputType = {
    scheduleId: string | null
    scheduleTagId: string | null
  }

  export type Schedule_ScheduleTagCountAggregateOutputType = {
    scheduleId: number
    scheduleTagId: number
    _all: number
  }


  export type Schedule_ScheduleTagMinAggregateInputType = {
    scheduleId?: true
    scheduleTagId?: true
  }

  export type Schedule_ScheduleTagMaxAggregateInputType = {
    scheduleId?: true
    scheduleTagId?: true
  }

  export type Schedule_ScheduleTagCountAggregateInputType = {
    scheduleId?: true
    scheduleTagId?: true
    _all?: true
  }

  export type Schedule_ScheduleTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule_ScheduleTag to aggregate.
     */
    where?: Schedule_ScheduleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_ScheduleTags to fetch.
     */
    orderBy?: Schedule_ScheduleTagOrderByWithRelationInput | Schedule_ScheduleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Schedule_ScheduleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_ScheduleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_ScheduleTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedule_ScheduleTags
    **/
    _count?: true | Schedule_ScheduleTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Schedule_ScheduleTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Schedule_ScheduleTagMaxAggregateInputType
  }

  export type GetSchedule_ScheduleTagAggregateType<T extends Schedule_ScheduleTagAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule_ScheduleTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule_ScheduleTag[P]>
      : GetScalarType<T[P], AggregateSchedule_ScheduleTag[P]>
  }




  export type Schedule_ScheduleTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schedule_ScheduleTagWhereInput
    orderBy?: Schedule_ScheduleTagOrderByWithAggregationInput | Schedule_ScheduleTagOrderByWithAggregationInput[]
    by: Schedule_ScheduleTagScalarFieldEnum[] | Schedule_ScheduleTagScalarFieldEnum
    having?: Schedule_ScheduleTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Schedule_ScheduleTagCountAggregateInputType | true
    _min?: Schedule_ScheduleTagMinAggregateInputType
    _max?: Schedule_ScheduleTagMaxAggregateInputType
  }

  export type Schedule_ScheduleTagGroupByOutputType = {
    scheduleId: string
    scheduleTagId: string
    _count: Schedule_ScheduleTagCountAggregateOutputType | null
    _min: Schedule_ScheduleTagMinAggregateOutputType | null
    _max: Schedule_ScheduleTagMaxAggregateOutputType | null
  }

  type GetSchedule_ScheduleTagGroupByPayload<T extends Schedule_ScheduleTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Schedule_ScheduleTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Schedule_ScheduleTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Schedule_ScheduleTagGroupByOutputType[P]>
            : GetScalarType<T[P], Schedule_ScheduleTagGroupByOutputType[P]>
        }
      >
    >


  export type Schedule_ScheduleTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    scheduleTagId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    scheduleTag?: boolean | ScheduleTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule_ScheduleTag"]>

  export type Schedule_ScheduleTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    scheduleTagId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    scheduleTag?: boolean | ScheduleTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule_ScheduleTag"]>

  export type Schedule_ScheduleTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    scheduleTagId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    scheduleTag?: boolean | ScheduleTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule_ScheduleTag"]>

  export type Schedule_ScheduleTagSelectScalar = {
    scheduleId?: boolean
    scheduleTagId?: boolean
  }

  export type Schedule_ScheduleTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scheduleId" | "scheduleTagId", ExtArgs["result"]["schedule_ScheduleTag"]>
  export type Schedule_ScheduleTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    scheduleTag?: boolean | ScheduleTagDefaultArgs<ExtArgs>
  }
  export type Schedule_ScheduleTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    scheduleTag?: boolean | ScheduleTagDefaultArgs<ExtArgs>
  }
  export type Schedule_ScheduleTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    scheduleTag?: boolean | ScheduleTagDefaultArgs<ExtArgs>
  }

  export type $Schedule_ScheduleTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule_ScheduleTag"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
      scheduleTag: Prisma.$ScheduleTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scheduleId: string
      scheduleTagId: string
    }, ExtArgs["result"]["schedule_ScheduleTag"]>
    composites: {}
  }

  type Schedule_ScheduleTagGetPayload<S extends boolean | null | undefined | Schedule_ScheduleTagDefaultArgs> = $Result.GetResult<Prisma.$Schedule_ScheduleTagPayload, S>

  type Schedule_ScheduleTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Schedule_ScheduleTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Schedule_ScheduleTagCountAggregateInputType | true
    }

  export interface Schedule_ScheduleTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule_ScheduleTag'], meta: { name: 'Schedule_ScheduleTag' } }
    /**
     * Find zero or one Schedule_ScheduleTag that matches the filter.
     * @param {Schedule_ScheduleTagFindUniqueArgs} args - Arguments to find a Schedule_ScheduleTag
     * @example
     * // Get one Schedule_ScheduleTag
     * const schedule_ScheduleTag = await prisma.schedule_ScheduleTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Schedule_ScheduleTagFindUniqueArgs>(args: SelectSubset<T, Schedule_ScheduleTagFindUniqueArgs<ExtArgs>>): Prisma__Schedule_ScheduleTagClient<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule_ScheduleTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Schedule_ScheduleTagFindUniqueOrThrowArgs} args - Arguments to find a Schedule_ScheduleTag
     * @example
     * // Get one Schedule_ScheduleTag
     * const schedule_ScheduleTag = await prisma.schedule_ScheduleTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Schedule_ScheduleTagFindUniqueOrThrowArgs>(args: SelectSubset<T, Schedule_ScheduleTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Schedule_ScheduleTagClient<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule_ScheduleTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ScheduleTagFindFirstArgs} args - Arguments to find a Schedule_ScheduleTag
     * @example
     * // Get one Schedule_ScheduleTag
     * const schedule_ScheduleTag = await prisma.schedule_ScheduleTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Schedule_ScheduleTagFindFirstArgs>(args?: SelectSubset<T, Schedule_ScheduleTagFindFirstArgs<ExtArgs>>): Prisma__Schedule_ScheduleTagClient<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule_ScheduleTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ScheduleTagFindFirstOrThrowArgs} args - Arguments to find a Schedule_ScheduleTag
     * @example
     * // Get one Schedule_ScheduleTag
     * const schedule_ScheduleTag = await prisma.schedule_ScheduleTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Schedule_ScheduleTagFindFirstOrThrowArgs>(args?: SelectSubset<T, Schedule_ScheduleTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__Schedule_ScheduleTagClient<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedule_ScheduleTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ScheduleTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedule_ScheduleTags
     * const schedule_ScheduleTags = await prisma.schedule_ScheduleTag.findMany()
     * 
     * // Get first 10 Schedule_ScheduleTags
     * const schedule_ScheduleTags = await prisma.schedule_ScheduleTag.findMany({ take: 10 })
     * 
     * // Only select the `scheduleId`
     * const schedule_ScheduleTagWithScheduleIdOnly = await prisma.schedule_ScheduleTag.findMany({ select: { scheduleId: true } })
     * 
     */
    findMany<T extends Schedule_ScheduleTagFindManyArgs>(args?: SelectSubset<T, Schedule_ScheduleTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule_ScheduleTag.
     * @param {Schedule_ScheduleTagCreateArgs} args - Arguments to create a Schedule_ScheduleTag.
     * @example
     * // Create one Schedule_ScheduleTag
     * const Schedule_ScheduleTag = await prisma.schedule_ScheduleTag.create({
     *   data: {
     *     // ... data to create a Schedule_ScheduleTag
     *   }
     * })
     * 
     */
    create<T extends Schedule_ScheduleTagCreateArgs>(args: SelectSubset<T, Schedule_ScheduleTagCreateArgs<ExtArgs>>): Prisma__Schedule_ScheduleTagClient<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedule_ScheduleTags.
     * @param {Schedule_ScheduleTagCreateManyArgs} args - Arguments to create many Schedule_ScheduleTags.
     * @example
     * // Create many Schedule_ScheduleTags
     * const schedule_ScheduleTag = await prisma.schedule_ScheduleTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Schedule_ScheduleTagCreateManyArgs>(args?: SelectSubset<T, Schedule_ScheduleTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedule_ScheduleTags and returns the data saved in the database.
     * @param {Schedule_ScheduleTagCreateManyAndReturnArgs} args - Arguments to create many Schedule_ScheduleTags.
     * @example
     * // Create many Schedule_ScheduleTags
     * const schedule_ScheduleTag = await prisma.schedule_ScheduleTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedule_ScheduleTags and only return the `scheduleId`
     * const schedule_ScheduleTagWithScheduleIdOnly = await prisma.schedule_ScheduleTag.createManyAndReturn({
     *   select: { scheduleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Schedule_ScheduleTagCreateManyAndReturnArgs>(args?: SelectSubset<T, Schedule_ScheduleTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule_ScheduleTag.
     * @param {Schedule_ScheduleTagDeleteArgs} args - Arguments to delete one Schedule_ScheduleTag.
     * @example
     * // Delete one Schedule_ScheduleTag
     * const Schedule_ScheduleTag = await prisma.schedule_ScheduleTag.delete({
     *   where: {
     *     // ... filter to delete one Schedule_ScheduleTag
     *   }
     * })
     * 
     */
    delete<T extends Schedule_ScheduleTagDeleteArgs>(args: SelectSubset<T, Schedule_ScheduleTagDeleteArgs<ExtArgs>>): Prisma__Schedule_ScheduleTagClient<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule_ScheduleTag.
     * @param {Schedule_ScheduleTagUpdateArgs} args - Arguments to update one Schedule_ScheduleTag.
     * @example
     * // Update one Schedule_ScheduleTag
     * const schedule_ScheduleTag = await prisma.schedule_ScheduleTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Schedule_ScheduleTagUpdateArgs>(args: SelectSubset<T, Schedule_ScheduleTagUpdateArgs<ExtArgs>>): Prisma__Schedule_ScheduleTagClient<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedule_ScheduleTags.
     * @param {Schedule_ScheduleTagDeleteManyArgs} args - Arguments to filter Schedule_ScheduleTags to delete.
     * @example
     * // Delete a few Schedule_ScheduleTags
     * const { count } = await prisma.schedule_ScheduleTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Schedule_ScheduleTagDeleteManyArgs>(args?: SelectSubset<T, Schedule_ScheduleTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedule_ScheduleTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ScheduleTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedule_ScheduleTags
     * const schedule_ScheduleTag = await prisma.schedule_ScheduleTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Schedule_ScheduleTagUpdateManyArgs>(args: SelectSubset<T, Schedule_ScheduleTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedule_ScheduleTags and returns the data updated in the database.
     * @param {Schedule_ScheduleTagUpdateManyAndReturnArgs} args - Arguments to update many Schedule_ScheduleTags.
     * @example
     * // Update many Schedule_ScheduleTags
     * const schedule_ScheduleTag = await prisma.schedule_ScheduleTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedule_ScheduleTags and only return the `scheduleId`
     * const schedule_ScheduleTagWithScheduleIdOnly = await prisma.schedule_ScheduleTag.updateManyAndReturn({
     *   select: { scheduleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Schedule_ScheduleTagUpdateManyAndReturnArgs>(args: SelectSubset<T, Schedule_ScheduleTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule_ScheduleTag.
     * @param {Schedule_ScheduleTagUpsertArgs} args - Arguments to update or create a Schedule_ScheduleTag.
     * @example
     * // Update or create a Schedule_ScheduleTag
     * const schedule_ScheduleTag = await prisma.schedule_ScheduleTag.upsert({
     *   create: {
     *     // ... data to create a Schedule_ScheduleTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule_ScheduleTag we want to update
     *   }
     * })
     */
    upsert<T extends Schedule_ScheduleTagUpsertArgs>(args: SelectSubset<T, Schedule_ScheduleTagUpsertArgs<ExtArgs>>): Prisma__Schedule_ScheduleTagClient<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedule_ScheduleTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ScheduleTagCountArgs} args - Arguments to filter Schedule_ScheduleTags to count.
     * @example
     * // Count the number of Schedule_ScheduleTags
     * const count = await prisma.schedule_ScheduleTag.count({
     *   where: {
     *     // ... the filter for the Schedule_ScheduleTags we want to count
     *   }
     * })
    **/
    count<T extends Schedule_ScheduleTagCountArgs>(
      args?: Subset<T, Schedule_ScheduleTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Schedule_ScheduleTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule_ScheduleTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ScheduleTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Schedule_ScheduleTagAggregateArgs>(args: Subset<T, Schedule_ScheduleTagAggregateArgs>): Prisma.PrismaPromise<GetSchedule_ScheduleTagAggregateType<T>>

    /**
     * Group by Schedule_ScheduleTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ScheduleTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Schedule_ScheduleTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Schedule_ScheduleTagGroupByArgs['orderBy'] }
        : { orderBy?: Schedule_ScheduleTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Schedule_ScheduleTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedule_ScheduleTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule_ScheduleTag model
   */
  readonly fields: Schedule_ScheduleTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule_ScheduleTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Schedule_ScheduleTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scheduleTag<T extends ScheduleTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleTagDefaultArgs<ExtArgs>>): Prisma__ScheduleTagClient<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule_ScheduleTag model
   */
  interface Schedule_ScheduleTagFieldRefs {
    readonly scheduleId: FieldRef<"Schedule_ScheduleTag", 'String'>
    readonly scheduleTagId: FieldRef<"Schedule_ScheduleTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Schedule_ScheduleTag findUnique
   */
  export type Schedule_ScheduleTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_ScheduleTag to fetch.
     */
    where: Schedule_ScheduleTagWhereUniqueInput
  }

  /**
   * Schedule_ScheduleTag findUniqueOrThrow
   */
  export type Schedule_ScheduleTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_ScheduleTag to fetch.
     */
    where: Schedule_ScheduleTagWhereUniqueInput
  }

  /**
   * Schedule_ScheduleTag findFirst
   */
  export type Schedule_ScheduleTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_ScheduleTag to fetch.
     */
    where?: Schedule_ScheduleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_ScheduleTags to fetch.
     */
    orderBy?: Schedule_ScheduleTagOrderByWithRelationInput | Schedule_ScheduleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedule_ScheduleTags.
     */
    cursor?: Schedule_ScheduleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_ScheduleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_ScheduleTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedule_ScheduleTags.
     */
    distinct?: Schedule_ScheduleTagScalarFieldEnum | Schedule_ScheduleTagScalarFieldEnum[]
  }

  /**
   * Schedule_ScheduleTag findFirstOrThrow
   */
  export type Schedule_ScheduleTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_ScheduleTag to fetch.
     */
    where?: Schedule_ScheduleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_ScheduleTags to fetch.
     */
    orderBy?: Schedule_ScheduleTagOrderByWithRelationInput | Schedule_ScheduleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedule_ScheduleTags.
     */
    cursor?: Schedule_ScheduleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_ScheduleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_ScheduleTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedule_ScheduleTags.
     */
    distinct?: Schedule_ScheduleTagScalarFieldEnum | Schedule_ScheduleTagScalarFieldEnum[]
  }

  /**
   * Schedule_ScheduleTag findMany
   */
  export type Schedule_ScheduleTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_ScheduleTags to fetch.
     */
    where?: Schedule_ScheduleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_ScheduleTags to fetch.
     */
    orderBy?: Schedule_ScheduleTagOrderByWithRelationInput | Schedule_ScheduleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedule_ScheduleTags.
     */
    cursor?: Schedule_ScheduleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_ScheduleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_ScheduleTags.
     */
    skip?: number
    distinct?: Schedule_ScheduleTagScalarFieldEnum | Schedule_ScheduleTagScalarFieldEnum[]
  }

  /**
   * Schedule_ScheduleTag create
   */
  export type Schedule_ScheduleTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule_ScheduleTag.
     */
    data: XOR<Schedule_ScheduleTagCreateInput, Schedule_ScheduleTagUncheckedCreateInput>
  }

  /**
   * Schedule_ScheduleTag createMany
   */
  export type Schedule_ScheduleTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedule_ScheduleTags.
     */
    data: Schedule_ScheduleTagCreateManyInput | Schedule_ScheduleTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule_ScheduleTag createManyAndReturn
   */
  export type Schedule_ScheduleTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * The data used to create many Schedule_ScheduleTags.
     */
    data: Schedule_ScheduleTagCreateManyInput | Schedule_ScheduleTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule_ScheduleTag update
   */
  export type Schedule_ScheduleTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule_ScheduleTag.
     */
    data: XOR<Schedule_ScheduleTagUpdateInput, Schedule_ScheduleTagUncheckedUpdateInput>
    /**
     * Choose, which Schedule_ScheduleTag to update.
     */
    where: Schedule_ScheduleTagWhereUniqueInput
  }

  /**
   * Schedule_ScheduleTag updateMany
   */
  export type Schedule_ScheduleTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedule_ScheduleTags.
     */
    data: XOR<Schedule_ScheduleTagUpdateManyMutationInput, Schedule_ScheduleTagUncheckedUpdateManyInput>
    /**
     * Filter which Schedule_ScheduleTags to update
     */
    where?: Schedule_ScheduleTagWhereInput
    /**
     * Limit how many Schedule_ScheduleTags to update.
     */
    limit?: number
  }

  /**
   * Schedule_ScheduleTag updateManyAndReturn
   */
  export type Schedule_ScheduleTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * The data used to update Schedule_ScheduleTags.
     */
    data: XOR<Schedule_ScheduleTagUpdateManyMutationInput, Schedule_ScheduleTagUncheckedUpdateManyInput>
    /**
     * Filter which Schedule_ScheduleTags to update
     */
    where?: Schedule_ScheduleTagWhereInput
    /**
     * Limit how many Schedule_ScheduleTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule_ScheduleTag upsert
   */
  export type Schedule_ScheduleTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule_ScheduleTag to update in case it exists.
     */
    where: Schedule_ScheduleTagWhereUniqueInput
    /**
     * In case the Schedule_ScheduleTag found by the `where` argument doesn't exist, create a new Schedule_ScheduleTag with this data.
     */
    create: XOR<Schedule_ScheduleTagCreateInput, Schedule_ScheduleTagUncheckedCreateInput>
    /**
     * In case the Schedule_ScheduleTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Schedule_ScheduleTagUpdateInput, Schedule_ScheduleTagUncheckedUpdateInput>
  }

  /**
   * Schedule_ScheduleTag delete
   */
  export type Schedule_ScheduleTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter which Schedule_ScheduleTag to delete.
     */
    where: Schedule_ScheduleTagWhereUniqueInput
  }

  /**
   * Schedule_ScheduleTag deleteMany
   */
  export type Schedule_ScheduleTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule_ScheduleTags to delete
     */
    where?: Schedule_ScheduleTagWhereInput
    /**
     * Limit how many Schedule_ScheduleTags to delete.
     */
    limit?: number
  }

  /**
   * Schedule_ScheduleTag without action
   */
  export type Schedule_ScheduleTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleTag
   */

  export type AggregateScheduleTag = {
    _count: ScheduleTagCountAggregateOutputType | null
    _min: ScheduleTagMinAggregateOutputType | null
    _max: ScheduleTagMaxAggregateOutputType | null
  }

  export type ScheduleTagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleTagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleTagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleTagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleTagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleTag to aggregate.
     */
    where?: ScheduleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleTags to fetch.
     */
    orderBy?: ScheduleTagOrderByWithRelationInput | ScheduleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleTags
    **/
    _count?: true | ScheduleTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleTagMaxAggregateInputType
  }

  export type GetScheduleTagAggregateType<T extends ScheduleTagAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleTag[P]>
      : GetScalarType<T[P], AggregateScheduleTag[P]>
  }




  export type ScheduleTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleTagWhereInput
    orderBy?: ScheduleTagOrderByWithAggregationInput | ScheduleTagOrderByWithAggregationInput[]
    by: ScheduleTagScalarFieldEnum[] | ScheduleTagScalarFieldEnum
    having?: ScheduleTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleTagCountAggregateInputType | true
    _min?: ScheduleTagMinAggregateInputType
    _max?: ScheduleTagMaxAggregateInputType
  }

  export type ScheduleTagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ScheduleTagCountAggregateOutputType | null
    _min: ScheduleTagMinAggregateOutputType | null
    _max: ScheduleTagMaxAggregateOutputType | null
  }

  type GetScheduleTagGroupByPayload<T extends ScheduleTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleTagGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleTagGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule_scheduleTag?: boolean | ScheduleTag$schedule_scheduleTagArgs<ExtArgs>
    _count?: boolean | ScheduleTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleTag"]>

  export type ScheduleTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scheduleTag"]>

  export type ScheduleTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scheduleTag"]>

  export type ScheduleTagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["scheduleTag"]>
  export type ScheduleTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule_scheduleTag?: boolean | ScheduleTag$schedule_scheduleTagArgs<ExtArgs>
    _count?: boolean | ScheduleTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScheduleTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScheduleTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleTag"
    objects: {
      schedule_scheduleTag: Prisma.$Schedule_ScheduleTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scheduleTag"]>
    composites: {}
  }

  type ScheduleTagGetPayload<S extends boolean | null | undefined | ScheduleTagDefaultArgs> = $Result.GetResult<Prisma.$ScheduleTagPayload, S>

  type ScheduleTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleTagCountAggregateInputType | true
    }

  export interface ScheduleTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleTag'], meta: { name: 'ScheduleTag' } }
    /**
     * Find zero or one ScheduleTag that matches the filter.
     * @param {ScheduleTagFindUniqueArgs} args - Arguments to find a ScheduleTag
     * @example
     * // Get one ScheduleTag
     * const scheduleTag = await prisma.scheduleTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleTagFindUniqueArgs>(args: SelectSubset<T, ScheduleTagFindUniqueArgs<ExtArgs>>): Prisma__ScheduleTagClient<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleTagFindUniqueOrThrowArgs} args - Arguments to find a ScheduleTag
     * @example
     * // Get one ScheduleTag
     * const scheduleTag = await prisma.scheduleTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleTagClient<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTagFindFirstArgs} args - Arguments to find a ScheduleTag
     * @example
     * // Get one ScheduleTag
     * const scheduleTag = await prisma.scheduleTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleTagFindFirstArgs>(args?: SelectSubset<T, ScheduleTagFindFirstArgs<ExtArgs>>): Prisma__ScheduleTagClient<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTagFindFirstOrThrowArgs} args - Arguments to find a ScheduleTag
     * @example
     * // Get one ScheduleTag
     * const scheduleTag = await prisma.scheduleTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleTagClient<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleTags
     * const scheduleTags = await prisma.scheduleTag.findMany()
     * 
     * // Get first 10 ScheduleTags
     * const scheduleTags = await prisma.scheduleTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleTagWithIdOnly = await prisma.scheduleTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleTagFindManyArgs>(args?: SelectSubset<T, ScheduleTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleTag.
     * @param {ScheduleTagCreateArgs} args - Arguments to create a ScheduleTag.
     * @example
     * // Create one ScheduleTag
     * const ScheduleTag = await prisma.scheduleTag.create({
     *   data: {
     *     // ... data to create a ScheduleTag
     *   }
     * })
     * 
     */
    create<T extends ScheduleTagCreateArgs>(args: SelectSubset<T, ScheduleTagCreateArgs<ExtArgs>>): Prisma__ScheduleTagClient<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleTags.
     * @param {ScheduleTagCreateManyArgs} args - Arguments to create many ScheduleTags.
     * @example
     * // Create many ScheduleTags
     * const scheduleTag = await prisma.scheduleTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleTagCreateManyArgs>(args?: SelectSubset<T, ScheduleTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleTags and returns the data saved in the database.
     * @param {ScheduleTagCreateManyAndReturnArgs} args - Arguments to create many ScheduleTags.
     * @example
     * // Create many ScheduleTags
     * const scheduleTag = await prisma.scheduleTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleTags and only return the `id`
     * const scheduleTagWithIdOnly = await prisma.scheduleTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduleTag.
     * @param {ScheduleTagDeleteArgs} args - Arguments to delete one ScheduleTag.
     * @example
     * // Delete one ScheduleTag
     * const ScheduleTag = await prisma.scheduleTag.delete({
     *   where: {
     *     // ... filter to delete one ScheduleTag
     *   }
     * })
     * 
     */
    delete<T extends ScheduleTagDeleteArgs>(args: SelectSubset<T, ScheduleTagDeleteArgs<ExtArgs>>): Prisma__ScheduleTagClient<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleTag.
     * @param {ScheduleTagUpdateArgs} args - Arguments to update one ScheduleTag.
     * @example
     * // Update one ScheduleTag
     * const scheduleTag = await prisma.scheduleTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleTagUpdateArgs>(args: SelectSubset<T, ScheduleTagUpdateArgs<ExtArgs>>): Prisma__ScheduleTagClient<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleTags.
     * @param {ScheduleTagDeleteManyArgs} args - Arguments to filter ScheduleTags to delete.
     * @example
     * // Delete a few ScheduleTags
     * const { count } = await prisma.scheduleTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleTagDeleteManyArgs>(args?: SelectSubset<T, ScheduleTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleTags
     * const scheduleTag = await prisma.scheduleTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleTagUpdateManyArgs>(args: SelectSubset<T, ScheduleTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleTags and returns the data updated in the database.
     * @param {ScheduleTagUpdateManyAndReturnArgs} args - Arguments to update many ScheduleTags.
     * @example
     * // Update many ScheduleTags
     * const scheduleTag = await prisma.scheduleTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduleTags and only return the `id`
     * const scheduleTagWithIdOnly = await prisma.scheduleTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduleTag.
     * @param {ScheduleTagUpsertArgs} args - Arguments to update or create a ScheduleTag.
     * @example
     * // Update or create a ScheduleTag
     * const scheduleTag = await prisma.scheduleTag.upsert({
     *   create: {
     *     // ... data to create a ScheduleTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleTag we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleTagUpsertArgs>(args: SelectSubset<T, ScheduleTagUpsertArgs<ExtArgs>>): Prisma__ScheduleTagClient<$Result.GetResult<Prisma.$ScheduleTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTagCountArgs} args - Arguments to filter ScheduleTags to count.
     * @example
     * // Count the number of ScheduleTags
     * const count = await prisma.scheduleTag.count({
     *   where: {
     *     // ... the filter for the ScheduleTags we want to count
     *   }
     * })
    **/
    count<T extends ScheduleTagCountArgs>(
      args?: Subset<T, ScheduleTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleTagAggregateArgs>(args: Subset<T, ScheduleTagAggregateArgs>): Prisma.PrismaPromise<GetScheduleTagAggregateType<T>>

    /**
     * Group by ScheduleTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleTagGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleTag model
   */
  readonly fields: ScheduleTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule_scheduleTag<T extends ScheduleTag$schedule_scheduleTagArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleTag$schedule_scheduleTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_ScheduleTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduleTag model
   */
  interface ScheduleTagFieldRefs {
    readonly id: FieldRef<"ScheduleTag", 'String'>
    readonly name: FieldRef<"ScheduleTag", 'String'>
    readonly createdAt: FieldRef<"ScheduleTag", 'DateTime'>
    readonly updatedAt: FieldRef<"ScheduleTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleTag findUnique
   */
  export type ScheduleTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleTag to fetch.
     */
    where: ScheduleTagWhereUniqueInput
  }

  /**
   * ScheduleTag findUniqueOrThrow
   */
  export type ScheduleTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleTag to fetch.
     */
    where: ScheduleTagWhereUniqueInput
  }

  /**
   * ScheduleTag findFirst
   */
  export type ScheduleTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleTag to fetch.
     */
    where?: ScheduleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleTags to fetch.
     */
    orderBy?: ScheduleTagOrderByWithRelationInput | ScheduleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleTags.
     */
    cursor?: ScheduleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleTags.
     */
    distinct?: ScheduleTagScalarFieldEnum | ScheduleTagScalarFieldEnum[]
  }

  /**
   * ScheduleTag findFirstOrThrow
   */
  export type ScheduleTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleTag to fetch.
     */
    where?: ScheduleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleTags to fetch.
     */
    orderBy?: ScheduleTagOrderByWithRelationInput | ScheduleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleTags.
     */
    cursor?: ScheduleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleTags.
     */
    distinct?: ScheduleTagScalarFieldEnum | ScheduleTagScalarFieldEnum[]
  }

  /**
   * ScheduleTag findMany
   */
  export type ScheduleTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleTags to fetch.
     */
    where?: ScheduleTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleTags to fetch.
     */
    orderBy?: ScheduleTagOrderByWithRelationInput | ScheduleTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleTags.
     */
    cursor?: ScheduleTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleTags.
     */
    skip?: number
    distinct?: ScheduleTagScalarFieldEnum | ScheduleTagScalarFieldEnum[]
  }

  /**
   * ScheduleTag create
   */
  export type ScheduleTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleTag.
     */
    data: XOR<ScheduleTagCreateInput, ScheduleTagUncheckedCreateInput>
  }

  /**
   * ScheduleTag createMany
   */
  export type ScheduleTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleTags.
     */
    data: ScheduleTagCreateManyInput | ScheduleTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleTag createManyAndReturn
   */
  export type ScheduleTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduleTags.
     */
    data: ScheduleTagCreateManyInput | ScheduleTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleTag update
   */
  export type ScheduleTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleTag.
     */
    data: XOR<ScheduleTagUpdateInput, ScheduleTagUncheckedUpdateInput>
    /**
     * Choose, which ScheduleTag to update.
     */
    where: ScheduleTagWhereUniqueInput
  }

  /**
   * ScheduleTag updateMany
   */
  export type ScheduleTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleTags.
     */
    data: XOR<ScheduleTagUpdateManyMutationInput, ScheduleTagUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleTags to update
     */
    where?: ScheduleTagWhereInput
    /**
     * Limit how many ScheduleTags to update.
     */
    limit?: number
  }

  /**
   * ScheduleTag updateManyAndReturn
   */
  export type ScheduleTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * The data used to update ScheduleTags.
     */
    data: XOR<ScheduleTagUpdateManyMutationInput, ScheduleTagUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleTags to update
     */
    where?: ScheduleTagWhereInput
    /**
     * Limit how many ScheduleTags to update.
     */
    limit?: number
  }

  /**
   * ScheduleTag upsert
   */
  export type ScheduleTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleTag to update in case it exists.
     */
    where: ScheduleTagWhereUniqueInput
    /**
     * In case the ScheduleTag found by the `where` argument doesn't exist, create a new ScheduleTag with this data.
     */
    create: XOR<ScheduleTagCreateInput, ScheduleTagUncheckedCreateInput>
    /**
     * In case the ScheduleTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleTagUpdateInput, ScheduleTagUncheckedUpdateInput>
  }

  /**
   * ScheduleTag delete
   */
  export type ScheduleTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTagInclude<ExtArgs> | null
    /**
     * Filter which ScheduleTag to delete.
     */
    where: ScheduleTagWhereUniqueInput
  }

  /**
   * ScheduleTag deleteMany
   */
  export type ScheduleTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleTags to delete
     */
    where?: ScheduleTagWhereInput
    /**
     * Limit how many ScheduleTags to delete.
     */
    limit?: number
  }

  /**
   * ScheduleTag.schedule_scheduleTag
   */
  export type ScheduleTag$schedule_scheduleTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_ScheduleTag
     */
    select?: Schedule_ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_ScheduleTag
     */
    omit?: Schedule_ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ScheduleTagInclude<ExtArgs> | null
    where?: Schedule_ScheduleTagWhereInput
    orderBy?: Schedule_ScheduleTagOrderByWithRelationInput | Schedule_ScheduleTagOrderByWithRelationInput[]
    cursor?: Schedule_ScheduleTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Schedule_ScheduleTagScalarFieldEnum | Schedule_ScheduleTagScalarFieldEnum[]
  }

  /**
   * ScheduleTag without action
   */
  export type ScheduleTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleTag
     */
    select?: ScheduleTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleTag
     */
    omit?: ScheduleTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleTagInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkMinAggregateOutputType = {
    id: string | null
    url: string | null
    scheduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkMaxAggregateOutputType = {
    id: string | null
    url: string | null
    scheduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    url: number
    scheduleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LinkMinAggregateInputType = {
    id?: true
    url?: true
    scheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    url?: true
    scheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    url?: true
    scheduleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: string
    url: string
    scheduleId: string
    createdAt: Date
    updatedAt: Date
    _count: LinkCountAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    url?: boolean
    scheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "scheduleId" | "createdAt" | "updatedAt", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type LinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type LinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      scheduleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'String'>
    readonly url: FieldRef<"Link", 'String'>
    readonly scheduleId: FieldRef<"Link", 'String'>
    readonly createdAt: FieldRef<"Link", 'DateTime'>
    readonly updatedAt: FieldRef<"Link", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model Schedule_Image
   */

  export type AggregateSchedule_Image = {
    _count: Schedule_ImageCountAggregateOutputType | null
    _min: Schedule_ImageMinAggregateOutputType | null
    _max: Schedule_ImageMaxAggregateOutputType | null
  }

  export type Schedule_ImageMinAggregateOutputType = {
    scheduleId: string | null
    imageId: string | null
  }

  export type Schedule_ImageMaxAggregateOutputType = {
    scheduleId: string | null
    imageId: string | null
  }

  export type Schedule_ImageCountAggregateOutputType = {
    scheduleId: number
    imageId: number
    _all: number
  }


  export type Schedule_ImageMinAggregateInputType = {
    scheduleId?: true
    imageId?: true
  }

  export type Schedule_ImageMaxAggregateInputType = {
    scheduleId?: true
    imageId?: true
  }

  export type Schedule_ImageCountAggregateInputType = {
    scheduleId?: true
    imageId?: true
    _all?: true
  }

  export type Schedule_ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule_Image to aggregate.
     */
    where?: Schedule_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Images to fetch.
     */
    orderBy?: Schedule_ImageOrderByWithRelationInput | Schedule_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Schedule_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedule_Images
    **/
    _count?: true | Schedule_ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Schedule_ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Schedule_ImageMaxAggregateInputType
  }

  export type GetSchedule_ImageAggregateType<T extends Schedule_ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule_Image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule_Image[P]>
      : GetScalarType<T[P], AggregateSchedule_Image[P]>
  }




  export type Schedule_ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schedule_ImageWhereInput
    orderBy?: Schedule_ImageOrderByWithAggregationInput | Schedule_ImageOrderByWithAggregationInput[]
    by: Schedule_ImageScalarFieldEnum[] | Schedule_ImageScalarFieldEnum
    having?: Schedule_ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Schedule_ImageCountAggregateInputType | true
    _min?: Schedule_ImageMinAggregateInputType
    _max?: Schedule_ImageMaxAggregateInputType
  }

  export type Schedule_ImageGroupByOutputType = {
    scheduleId: string
    imageId: string
    _count: Schedule_ImageCountAggregateOutputType | null
    _min: Schedule_ImageMinAggregateOutputType | null
    _max: Schedule_ImageMaxAggregateOutputType | null
  }

  type GetSchedule_ImageGroupByPayload<T extends Schedule_ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Schedule_ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Schedule_ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Schedule_ImageGroupByOutputType[P]>
            : GetScalarType<T[P], Schedule_ImageGroupByOutputType[P]>
        }
      >
    >


  export type Schedule_ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    imageId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule_Image"]>

  export type Schedule_ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    imageId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule_Image"]>

  export type Schedule_ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    imageId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule_Image"]>

  export type Schedule_ImageSelectScalar = {
    scheduleId?: boolean
    imageId?: boolean
  }

  export type Schedule_ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scheduleId" | "imageId", ExtArgs["result"]["schedule_Image"]>
  export type Schedule_ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type Schedule_ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type Schedule_ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $Schedule_ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule_Image"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scheduleId: string
      imageId: string
    }, ExtArgs["result"]["schedule_Image"]>
    composites: {}
  }

  type Schedule_ImageGetPayload<S extends boolean | null | undefined | Schedule_ImageDefaultArgs> = $Result.GetResult<Prisma.$Schedule_ImagePayload, S>

  type Schedule_ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Schedule_ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Schedule_ImageCountAggregateInputType | true
    }

  export interface Schedule_ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule_Image'], meta: { name: 'Schedule_Image' } }
    /**
     * Find zero or one Schedule_Image that matches the filter.
     * @param {Schedule_ImageFindUniqueArgs} args - Arguments to find a Schedule_Image
     * @example
     * // Get one Schedule_Image
     * const schedule_Image = await prisma.schedule_Image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Schedule_ImageFindUniqueArgs>(args: SelectSubset<T, Schedule_ImageFindUniqueArgs<ExtArgs>>): Prisma__Schedule_ImageClient<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule_Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Schedule_ImageFindUniqueOrThrowArgs} args - Arguments to find a Schedule_Image
     * @example
     * // Get one Schedule_Image
     * const schedule_Image = await prisma.schedule_Image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Schedule_ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, Schedule_ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Schedule_ImageClient<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule_Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ImageFindFirstArgs} args - Arguments to find a Schedule_Image
     * @example
     * // Get one Schedule_Image
     * const schedule_Image = await prisma.schedule_Image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Schedule_ImageFindFirstArgs>(args?: SelectSubset<T, Schedule_ImageFindFirstArgs<ExtArgs>>): Prisma__Schedule_ImageClient<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule_Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ImageFindFirstOrThrowArgs} args - Arguments to find a Schedule_Image
     * @example
     * // Get one Schedule_Image
     * const schedule_Image = await prisma.schedule_Image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Schedule_ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, Schedule_ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__Schedule_ImageClient<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedule_Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedule_Images
     * const schedule_Images = await prisma.schedule_Image.findMany()
     * 
     * // Get first 10 Schedule_Images
     * const schedule_Images = await prisma.schedule_Image.findMany({ take: 10 })
     * 
     * // Only select the `scheduleId`
     * const schedule_ImageWithScheduleIdOnly = await prisma.schedule_Image.findMany({ select: { scheduleId: true } })
     * 
     */
    findMany<T extends Schedule_ImageFindManyArgs>(args?: SelectSubset<T, Schedule_ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule_Image.
     * @param {Schedule_ImageCreateArgs} args - Arguments to create a Schedule_Image.
     * @example
     * // Create one Schedule_Image
     * const Schedule_Image = await prisma.schedule_Image.create({
     *   data: {
     *     // ... data to create a Schedule_Image
     *   }
     * })
     * 
     */
    create<T extends Schedule_ImageCreateArgs>(args: SelectSubset<T, Schedule_ImageCreateArgs<ExtArgs>>): Prisma__Schedule_ImageClient<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedule_Images.
     * @param {Schedule_ImageCreateManyArgs} args - Arguments to create many Schedule_Images.
     * @example
     * // Create many Schedule_Images
     * const schedule_Image = await prisma.schedule_Image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Schedule_ImageCreateManyArgs>(args?: SelectSubset<T, Schedule_ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedule_Images and returns the data saved in the database.
     * @param {Schedule_ImageCreateManyAndReturnArgs} args - Arguments to create many Schedule_Images.
     * @example
     * // Create many Schedule_Images
     * const schedule_Image = await prisma.schedule_Image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedule_Images and only return the `scheduleId`
     * const schedule_ImageWithScheduleIdOnly = await prisma.schedule_Image.createManyAndReturn({
     *   select: { scheduleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Schedule_ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, Schedule_ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule_Image.
     * @param {Schedule_ImageDeleteArgs} args - Arguments to delete one Schedule_Image.
     * @example
     * // Delete one Schedule_Image
     * const Schedule_Image = await prisma.schedule_Image.delete({
     *   where: {
     *     // ... filter to delete one Schedule_Image
     *   }
     * })
     * 
     */
    delete<T extends Schedule_ImageDeleteArgs>(args: SelectSubset<T, Schedule_ImageDeleteArgs<ExtArgs>>): Prisma__Schedule_ImageClient<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule_Image.
     * @param {Schedule_ImageUpdateArgs} args - Arguments to update one Schedule_Image.
     * @example
     * // Update one Schedule_Image
     * const schedule_Image = await prisma.schedule_Image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Schedule_ImageUpdateArgs>(args: SelectSubset<T, Schedule_ImageUpdateArgs<ExtArgs>>): Prisma__Schedule_ImageClient<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedule_Images.
     * @param {Schedule_ImageDeleteManyArgs} args - Arguments to filter Schedule_Images to delete.
     * @example
     * // Delete a few Schedule_Images
     * const { count } = await prisma.schedule_Image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Schedule_ImageDeleteManyArgs>(args?: SelectSubset<T, Schedule_ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedule_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedule_Images
     * const schedule_Image = await prisma.schedule_Image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Schedule_ImageUpdateManyArgs>(args: SelectSubset<T, Schedule_ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedule_Images and returns the data updated in the database.
     * @param {Schedule_ImageUpdateManyAndReturnArgs} args - Arguments to update many Schedule_Images.
     * @example
     * // Update many Schedule_Images
     * const schedule_Image = await prisma.schedule_Image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedule_Images and only return the `scheduleId`
     * const schedule_ImageWithScheduleIdOnly = await prisma.schedule_Image.updateManyAndReturn({
     *   select: { scheduleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Schedule_ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, Schedule_ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule_Image.
     * @param {Schedule_ImageUpsertArgs} args - Arguments to update or create a Schedule_Image.
     * @example
     * // Update or create a Schedule_Image
     * const schedule_Image = await prisma.schedule_Image.upsert({
     *   create: {
     *     // ... data to create a Schedule_Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule_Image we want to update
     *   }
     * })
     */
    upsert<T extends Schedule_ImageUpsertArgs>(args: SelectSubset<T, Schedule_ImageUpsertArgs<ExtArgs>>): Prisma__Schedule_ImageClient<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedule_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ImageCountArgs} args - Arguments to filter Schedule_Images to count.
     * @example
     * // Count the number of Schedule_Images
     * const count = await prisma.schedule_Image.count({
     *   where: {
     *     // ... the filter for the Schedule_Images we want to count
     *   }
     * })
    **/
    count<T extends Schedule_ImageCountArgs>(
      args?: Subset<T, Schedule_ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Schedule_ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule_Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Schedule_ImageAggregateArgs>(args: Subset<T, Schedule_ImageAggregateArgs>): Prisma.PrismaPromise<GetSchedule_ImageAggregateType<T>>

    /**
     * Group by Schedule_Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Schedule_ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Schedule_ImageGroupByArgs['orderBy'] }
        : { orderBy?: Schedule_ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Schedule_ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedule_ImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule_Image model
   */
  readonly fields: Schedule_ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule_Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Schedule_ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule_Image model
   */
  interface Schedule_ImageFieldRefs {
    readonly scheduleId: FieldRef<"Schedule_Image", 'String'>
    readonly imageId: FieldRef<"Schedule_Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Schedule_Image findUnique
   */
  export type Schedule_ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_Image to fetch.
     */
    where: Schedule_ImageWhereUniqueInput
  }

  /**
   * Schedule_Image findUniqueOrThrow
   */
  export type Schedule_ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_Image to fetch.
     */
    where: Schedule_ImageWhereUniqueInput
  }

  /**
   * Schedule_Image findFirst
   */
  export type Schedule_ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_Image to fetch.
     */
    where?: Schedule_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Images to fetch.
     */
    orderBy?: Schedule_ImageOrderByWithRelationInput | Schedule_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedule_Images.
     */
    cursor?: Schedule_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedule_Images.
     */
    distinct?: Schedule_ImageScalarFieldEnum | Schedule_ImageScalarFieldEnum[]
  }

  /**
   * Schedule_Image findFirstOrThrow
   */
  export type Schedule_ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_Image to fetch.
     */
    where?: Schedule_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Images to fetch.
     */
    orderBy?: Schedule_ImageOrderByWithRelationInput | Schedule_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedule_Images.
     */
    cursor?: Schedule_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedule_Images.
     */
    distinct?: Schedule_ImageScalarFieldEnum | Schedule_ImageScalarFieldEnum[]
  }

  /**
   * Schedule_Image findMany
   */
  export type Schedule_ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_Images to fetch.
     */
    where?: Schedule_ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Images to fetch.
     */
    orderBy?: Schedule_ImageOrderByWithRelationInput | Schedule_ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedule_Images.
     */
    cursor?: Schedule_ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Images.
     */
    skip?: number
    distinct?: Schedule_ImageScalarFieldEnum | Schedule_ImageScalarFieldEnum[]
  }

  /**
   * Schedule_Image create
   */
  export type Schedule_ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule_Image.
     */
    data: XOR<Schedule_ImageCreateInput, Schedule_ImageUncheckedCreateInput>
  }

  /**
   * Schedule_Image createMany
   */
  export type Schedule_ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedule_Images.
     */
    data: Schedule_ImageCreateManyInput | Schedule_ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule_Image createManyAndReturn
   */
  export type Schedule_ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Schedule_Images.
     */
    data: Schedule_ImageCreateManyInput | Schedule_ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule_Image update
   */
  export type Schedule_ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule_Image.
     */
    data: XOR<Schedule_ImageUpdateInput, Schedule_ImageUncheckedUpdateInput>
    /**
     * Choose, which Schedule_Image to update.
     */
    where: Schedule_ImageWhereUniqueInput
  }

  /**
   * Schedule_Image updateMany
   */
  export type Schedule_ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedule_Images.
     */
    data: XOR<Schedule_ImageUpdateManyMutationInput, Schedule_ImageUncheckedUpdateManyInput>
    /**
     * Filter which Schedule_Images to update
     */
    where?: Schedule_ImageWhereInput
    /**
     * Limit how many Schedule_Images to update.
     */
    limit?: number
  }

  /**
   * Schedule_Image updateManyAndReturn
   */
  export type Schedule_ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * The data used to update Schedule_Images.
     */
    data: XOR<Schedule_ImageUpdateManyMutationInput, Schedule_ImageUncheckedUpdateManyInput>
    /**
     * Filter which Schedule_Images to update
     */
    where?: Schedule_ImageWhereInput
    /**
     * Limit how many Schedule_Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule_Image upsert
   */
  export type Schedule_ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule_Image to update in case it exists.
     */
    where: Schedule_ImageWhereUniqueInput
    /**
     * In case the Schedule_Image found by the `where` argument doesn't exist, create a new Schedule_Image with this data.
     */
    create: XOR<Schedule_ImageCreateInput, Schedule_ImageUncheckedCreateInput>
    /**
     * In case the Schedule_Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Schedule_ImageUpdateInput, Schedule_ImageUncheckedUpdateInput>
  }

  /**
   * Schedule_Image delete
   */
  export type Schedule_ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    /**
     * Filter which Schedule_Image to delete.
     */
    where: Schedule_ImageWhereUniqueInput
  }

  /**
   * Schedule_Image deleteMany
   */
  export type Schedule_ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule_Images to delete
     */
    where?: Schedule_ImageWhereInput
    /**
     * Limit how many Schedule_Images to delete.
     */
    limit?: number
  }

  /**
   * Schedule_Image without action
   */
  export type Schedule_ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule_image?: boolean | Image$schedule_imageArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule_image?: boolean | Image$schedule_imageArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      schedule_image: Prisma.$Schedule_ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule_image<T extends Image$schedule_imageArgs<ExtArgs> = {}>(args?: Subset<T, Image$schedule_imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.schedule_image
   */
  export type Image$schedule_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_Image
     */
    select?: Schedule_ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_Image
     */
    omit?: Schedule_ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_ImageInclude<ExtArgs> | null
    where?: Schedule_ImageWhereInput
    orderBy?: Schedule_ImageOrderByWithRelationInput | Schedule_ImageOrderByWithRelationInput[]
    cursor?: Schedule_ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Schedule_ImageScalarFieldEnum | Schedule_ImageScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Schedule_User
   */

  export type AggregateSchedule_User = {
    _count: Schedule_UserCountAggregateOutputType | null
    _min: Schedule_UserMinAggregateOutputType | null
    _max: Schedule_UserMaxAggregateOutputType | null
  }

  export type Schedule_UserMinAggregateOutputType = {
    scheduleId: string | null
    userId: string | null
  }

  export type Schedule_UserMaxAggregateOutputType = {
    scheduleId: string | null
    userId: string | null
  }

  export type Schedule_UserCountAggregateOutputType = {
    scheduleId: number
    userId: number
    _all: number
  }


  export type Schedule_UserMinAggregateInputType = {
    scheduleId?: true
    userId?: true
  }

  export type Schedule_UserMaxAggregateInputType = {
    scheduleId?: true
    userId?: true
  }

  export type Schedule_UserCountAggregateInputType = {
    scheduleId?: true
    userId?: true
    _all?: true
  }

  export type Schedule_UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule_User to aggregate.
     */
    where?: Schedule_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Users to fetch.
     */
    orderBy?: Schedule_UserOrderByWithRelationInput | Schedule_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Schedule_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedule_Users
    **/
    _count?: true | Schedule_UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Schedule_UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Schedule_UserMaxAggregateInputType
  }

  export type GetSchedule_UserAggregateType<T extends Schedule_UserAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule_User]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule_User[P]>
      : GetScalarType<T[P], AggregateSchedule_User[P]>
  }




  export type Schedule_UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Schedule_UserWhereInput
    orderBy?: Schedule_UserOrderByWithAggregationInput | Schedule_UserOrderByWithAggregationInput[]
    by: Schedule_UserScalarFieldEnum[] | Schedule_UserScalarFieldEnum
    having?: Schedule_UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Schedule_UserCountAggregateInputType | true
    _min?: Schedule_UserMinAggregateInputType
    _max?: Schedule_UserMaxAggregateInputType
  }

  export type Schedule_UserGroupByOutputType = {
    scheduleId: string
    userId: string
    _count: Schedule_UserCountAggregateOutputType | null
    _min: Schedule_UserMinAggregateOutputType | null
    _max: Schedule_UserMaxAggregateOutputType | null
  }

  type GetSchedule_UserGroupByPayload<T extends Schedule_UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Schedule_UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Schedule_UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Schedule_UserGroupByOutputType[P]>
            : GetScalarType<T[P], Schedule_UserGroupByOutputType[P]>
        }
      >
    >


  export type Schedule_UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    userId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule_User"]>

  export type Schedule_UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    userId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule_User"]>

  export type Schedule_UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleId?: boolean
    userId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule_User"]>

  export type Schedule_UserSelectScalar = {
    scheduleId?: boolean
    userId?: boolean
  }

  export type Schedule_UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scheduleId" | "userId", ExtArgs["result"]["schedule_User"]>
  export type Schedule_UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Schedule_UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Schedule_UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Schedule_UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule_User"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scheduleId: string
      userId: string
    }, ExtArgs["result"]["schedule_User"]>
    composites: {}
  }

  type Schedule_UserGetPayload<S extends boolean | null | undefined | Schedule_UserDefaultArgs> = $Result.GetResult<Prisma.$Schedule_UserPayload, S>

  type Schedule_UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Schedule_UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Schedule_UserCountAggregateInputType | true
    }

  export interface Schedule_UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule_User'], meta: { name: 'Schedule_User' } }
    /**
     * Find zero or one Schedule_User that matches the filter.
     * @param {Schedule_UserFindUniqueArgs} args - Arguments to find a Schedule_User
     * @example
     * // Get one Schedule_User
     * const schedule_User = await prisma.schedule_User.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Schedule_UserFindUniqueArgs>(args: SelectSubset<T, Schedule_UserFindUniqueArgs<ExtArgs>>): Prisma__Schedule_UserClient<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule_User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Schedule_UserFindUniqueOrThrowArgs} args - Arguments to find a Schedule_User
     * @example
     * // Get one Schedule_User
     * const schedule_User = await prisma.schedule_User.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Schedule_UserFindUniqueOrThrowArgs>(args: SelectSubset<T, Schedule_UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Schedule_UserClient<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule_User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_UserFindFirstArgs} args - Arguments to find a Schedule_User
     * @example
     * // Get one Schedule_User
     * const schedule_User = await prisma.schedule_User.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Schedule_UserFindFirstArgs>(args?: SelectSubset<T, Schedule_UserFindFirstArgs<ExtArgs>>): Prisma__Schedule_UserClient<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule_User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_UserFindFirstOrThrowArgs} args - Arguments to find a Schedule_User
     * @example
     * // Get one Schedule_User
     * const schedule_User = await prisma.schedule_User.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Schedule_UserFindFirstOrThrowArgs>(args?: SelectSubset<T, Schedule_UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__Schedule_UserClient<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedule_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedule_Users
     * const schedule_Users = await prisma.schedule_User.findMany()
     * 
     * // Get first 10 Schedule_Users
     * const schedule_Users = await prisma.schedule_User.findMany({ take: 10 })
     * 
     * // Only select the `scheduleId`
     * const schedule_UserWithScheduleIdOnly = await prisma.schedule_User.findMany({ select: { scheduleId: true } })
     * 
     */
    findMany<T extends Schedule_UserFindManyArgs>(args?: SelectSubset<T, Schedule_UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule_User.
     * @param {Schedule_UserCreateArgs} args - Arguments to create a Schedule_User.
     * @example
     * // Create one Schedule_User
     * const Schedule_User = await prisma.schedule_User.create({
     *   data: {
     *     // ... data to create a Schedule_User
     *   }
     * })
     * 
     */
    create<T extends Schedule_UserCreateArgs>(args: SelectSubset<T, Schedule_UserCreateArgs<ExtArgs>>): Prisma__Schedule_UserClient<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedule_Users.
     * @param {Schedule_UserCreateManyArgs} args - Arguments to create many Schedule_Users.
     * @example
     * // Create many Schedule_Users
     * const schedule_User = await prisma.schedule_User.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Schedule_UserCreateManyArgs>(args?: SelectSubset<T, Schedule_UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedule_Users and returns the data saved in the database.
     * @param {Schedule_UserCreateManyAndReturnArgs} args - Arguments to create many Schedule_Users.
     * @example
     * // Create many Schedule_Users
     * const schedule_User = await prisma.schedule_User.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedule_Users and only return the `scheduleId`
     * const schedule_UserWithScheduleIdOnly = await prisma.schedule_User.createManyAndReturn({
     *   select: { scheduleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Schedule_UserCreateManyAndReturnArgs>(args?: SelectSubset<T, Schedule_UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule_User.
     * @param {Schedule_UserDeleteArgs} args - Arguments to delete one Schedule_User.
     * @example
     * // Delete one Schedule_User
     * const Schedule_User = await prisma.schedule_User.delete({
     *   where: {
     *     // ... filter to delete one Schedule_User
     *   }
     * })
     * 
     */
    delete<T extends Schedule_UserDeleteArgs>(args: SelectSubset<T, Schedule_UserDeleteArgs<ExtArgs>>): Prisma__Schedule_UserClient<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule_User.
     * @param {Schedule_UserUpdateArgs} args - Arguments to update one Schedule_User.
     * @example
     * // Update one Schedule_User
     * const schedule_User = await prisma.schedule_User.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Schedule_UserUpdateArgs>(args: SelectSubset<T, Schedule_UserUpdateArgs<ExtArgs>>): Prisma__Schedule_UserClient<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedule_Users.
     * @param {Schedule_UserDeleteManyArgs} args - Arguments to filter Schedule_Users to delete.
     * @example
     * // Delete a few Schedule_Users
     * const { count } = await prisma.schedule_User.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Schedule_UserDeleteManyArgs>(args?: SelectSubset<T, Schedule_UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedule_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedule_Users
     * const schedule_User = await prisma.schedule_User.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Schedule_UserUpdateManyArgs>(args: SelectSubset<T, Schedule_UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedule_Users and returns the data updated in the database.
     * @param {Schedule_UserUpdateManyAndReturnArgs} args - Arguments to update many Schedule_Users.
     * @example
     * // Update many Schedule_Users
     * const schedule_User = await prisma.schedule_User.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedule_Users and only return the `scheduleId`
     * const schedule_UserWithScheduleIdOnly = await prisma.schedule_User.updateManyAndReturn({
     *   select: { scheduleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Schedule_UserUpdateManyAndReturnArgs>(args: SelectSubset<T, Schedule_UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule_User.
     * @param {Schedule_UserUpsertArgs} args - Arguments to update or create a Schedule_User.
     * @example
     * // Update or create a Schedule_User
     * const schedule_User = await prisma.schedule_User.upsert({
     *   create: {
     *     // ... data to create a Schedule_User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule_User we want to update
     *   }
     * })
     */
    upsert<T extends Schedule_UserUpsertArgs>(args: SelectSubset<T, Schedule_UserUpsertArgs<ExtArgs>>): Prisma__Schedule_UserClient<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedule_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_UserCountArgs} args - Arguments to filter Schedule_Users to count.
     * @example
     * // Count the number of Schedule_Users
     * const count = await prisma.schedule_User.count({
     *   where: {
     *     // ... the filter for the Schedule_Users we want to count
     *   }
     * })
    **/
    count<T extends Schedule_UserCountArgs>(
      args?: Subset<T, Schedule_UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Schedule_UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule_User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Schedule_UserAggregateArgs>(args: Subset<T, Schedule_UserAggregateArgs>): Prisma.PrismaPromise<GetSchedule_UserAggregateType<T>>

    /**
     * Group by Schedule_User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Schedule_UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Schedule_UserGroupByArgs['orderBy'] }
        : { orderBy?: Schedule_UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Schedule_UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedule_UserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule_User model
   */
  readonly fields: Schedule_UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule_User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Schedule_UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule_User model
   */
  interface Schedule_UserFieldRefs {
    readonly scheduleId: FieldRef<"Schedule_User", 'String'>
    readonly userId: FieldRef<"Schedule_User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Schedule_User findUnique
   */
  export type Schedule_UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_User to fetch.
     */
    where: Schedule_UserWhereUniqueInput
  }

  /**
   * Schedule_User findUniqueOrThrow
   */
  export type Schedule_UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_User to fetch.
     */
    where: Schedule_UserWhereUniqueInput
  }

  /**
   * Schedule_User findFirst
   */
  export type Schedule_UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_User to fetch.
     */
    where?: Schedule_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Users to fetch.
     */
    orderBy?: Schedule_UserOrderByWithRelationInput | Schedule_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedule_Users.
     */
    cursor?: Schedule_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedule_Users.
     */
    distinct?: Schedule_UserScalarFieldEnum | Schedule_UserScalarFieldEnum[]
  }

  /**
   * Schedule_User findFirstOrThrow
   */
  export type Schedule_UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_User to fetch.
     */
    where?: Schedule_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Users to fetch.
     */
    orderBy?: Schedule_UserOrderByWithRelationInput | Schedule_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedule_Users.
     */
    cursor?: Schedule_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedule_Users.
     */
    distinct?: Schedule_UserScalarFieldEnum | Schedule_UserScalarFieldEnum[]
  }

  /**
   * Schedule_User findMany
   */
  export type Schedule_UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    /**
     * Filter, which Schedule_Users to fetch.
     */
    where?: Schedule_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedule_Users to fetch.
     */
    orderBy?: Schedule_UserOrderByWithRelationInput | Schedule_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedule_Users.
     */
    cursor?: Schedule_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedule_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedule_Users.
     */
    skip?: number
    distinct?: Schedule_UserScalarFieldEnum | Schedule_UserScalarFieldEnum[]
  }

  /**
   * Schedule_User create
   */
  export type Schedule_UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule_User.
     */
    data: XOR<Schedule_UserCreateInput, Schedule_UserUncheckedCreateInput>
  }

  /**
   * Schedule_User createMany
   */
  export type Schedule_UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedule_Users.
     */
    data: Schedule_UserCreateManyInput | Schedule_UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule_User createManyAndReturn
   */
  export type Schedule_UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * The data used to create many Schedule_Users.
     */
    data: Schedule_UserCreateManyInput | Schedule_UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule_User update
   */
  export type Schedule_UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule_User.
     */
    data: XOR<Schedule_UserUpdateInput, Schedule_UserUncheckedUpdateInput>
    /**
     * Choose, which Schedule_User to update.
     */
    where: Schedule_UserWhereUniqueInput
  }

  /**
   * Schedule_User updateMany
   */
  export type Schedule_UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedule_Users.
     */
    data: XOR<Schedule_UserUpdateManyMutationInput, Schedule_UserUncheckedUpdateManyInput>
    /**
     * Filter which Schedule_Users to update
     */
    where?: Schedule_UserWhereInput
    /**
     * Limit how many Schedule_Users to update.
     */
    limit?: number
  }

  /**
   * Schedule_User updateManyAndReturn
   */
  export type Schedule_UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * The data used to update Schedule_Users.
     */
    data: XOR<Schedule_UserUpdateManyMutationInput, Schedule_UserUncheckedUpdateManyInput>
    /**
     * Filter which Schedule_Users to update
     */
    where?: Schedule_UserWhereInput
    /**
     * Limit how many Schedule_Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule_User upsert
   */
  export type Schedule_UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule_User to update in case it exists.
     */
    where: Schedule_UserWhereUniqueInput
    /**
     * In case the Schedule_User found by the `where` argument doesn't exist, create a new Schedule_User with this data.
     */
    create: XOR<Schedule_UserCreateInput, Schedule_UserUncheckedCreateInput>
    /**
     * In case the Schedule_User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Schedule_UserUpdateInput, Schedule_UserUncheckedUpdateInput>
  }

  /**
   * Schedule_User delete
   */
  export type Schedule_UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    /**
     * Filter which Schedule_User to delete.
     */
    where: Schedule_UserWhereUniqueInput
  }

  /**
   * Schedule_User deleteMany
   */
  export type Schedule_UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule_Users to delete
     */
    where?: Schedule_UserWhereInput
    /**
     * Limit how many Schedule_Users to delete.
     */
    limit?: number
  }

  /**
   * Schedule_User without action
   */
  export type Schedule_UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule_user?: boolean | User$schedule_userArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule_user?: boolean | User$schedule_userArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      schedule_user: Prisma.$Schedule_UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule_user<T extends User$schedule_userArgs<ExtArgs> = {}>(args?: Subset<T, User$schedule_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Schedule_UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.schedule_user
   */
  export type User$schedule_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule_User
     */
    select?: Schedule_UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule_User
     */
    omit?: Schedule_UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Schedule_UserInclude<ExtArgs> | null
    where?: Schedule_UserWhereInput
    orderBy?: Schedule_UserOrderByWithRelationInput | Schedule_UserOrderByWithRelationInput[]
    cursor?: Schedule_UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Schedule_UserScalarFieldEnum | Schedule_UserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startAt: 'startAt',
    endAt: 'endAt',
    gatherAt: 'gatherAt',
    gatherPlace: 'gatherPlace',
    eventId: 'eventId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    start_at: 'start_at',
    end_at: 'end_at',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    message: 'message',
    remind_at: 'remind_at',
    scheduleId: 'scheduleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const Schedule_ScheduleTagScalarFieldEnum: {
    scheduleId: 'scheduleId',
    scheduleTagId: 'scheduleTagId'
  };

  export type Schedule_ScheduleTagScalarFieldEnum = (typeof Schedule_ScheduleTagScalarFieldEnum)[keyof typeof Schedule_ScheduleTagScalarFieldEnum]


  export const ScheduleTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleTagScalarFieldEnum = (typeof ScheduleTagScalarFieldEnum)[keyof typeof ScheduleTagScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    url: 'url',
    scheduleId: 'scheduleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const Schedule_ImageScalarFieldEnum: {
    scheduleId: 'scheduleId',
    imageId: 'imageId'
  };

  export type Schedule_ImageScalarFieldEnum = (typeof Schedule_ImageScalarFieldEnum)[keyof typeof Schedule_ImageScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const Schedule_UserScalarFieldEnum: {
    scheduleId: 'scheduleId',
    userId: 'userId'
  };

  export type Schedule_UserScalarFieldEnum = (typeof Schedule_UserScalarFieldEnum)[keyof typeof Schedule_UserScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    name?: StringFilter<"Schedule"> | string
    startAt?: DateTimeFilter<"Schedule"> | Date | string
    endAt?: DateTimeFilter<"Schedule"> | Date | string
    gatherAt?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    gatherPlace?: StringNullableFilter<"Schedule"> | string | null
    eventId?: StringNullableFilter<"Schedule"> | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    reminder?: ReminderListRelationFilter
    schedule_scheduleTag?: Schedule_ScheduleTagListRelationFilter
    link?: LinkListRelationFilter
    schedule_image?: Schedule_ImageListRelationFilter
    schedule_user?: Schedule_UserListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    gatherAt?: SortOrderInput | SortOrder
    gatherPlace?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    reminder?: ReminderOrderByRelationAggregateInput
    schedule_scheduleTag?: Schedule_ScheduleTagOrderByRelationAggregateInput
    link?: LinkOrderByRelationAggregateInput
    schedule_image?: Schedule_ImageOrderByRelationAggregateInput
    schedule_user?: Schedule_UserOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    name?: StringFilter<"Schedule"> | string
    startAt?: DateTimeFilter<"Schedule"> | Date | string
    endAt?: DateTimeFilter<"Schedule"> | Date | string
    gatherAt?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    gatherPlace?: StringNullableFilter<"Schedule"> | string | null
    eventId?: StringNullableFilter<"Schedule"> | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    reminder?: ReminderListRelationFilter
    schedule_scheduleTag?: Schedule_ScheduleTagListRelationFilter
    link?: LinkListRelationFilter
    schedule_image?: Schedule_ImageListRelationFilter
    schedule_user?: Schedule_UserListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    gatherAt?: SortOrderInput | SortOrder
    gatherPlace?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    name?: StringWithAggregatesFilter<"Schedule"> | string
    startAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    gatherAt?: DateTimeNullableWithAggregatesFilter<"Schedule"> | Date | string | null
    gatherPlace?: StringNullableWithAggregatesFilter<"Schedule"> | string | null
    eventId?: StringNullableWithAggregatesFilter<"Schedule"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    start_at?: DateTimeFilter<"Event"> | Date | string
    end_at?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    schedule?: ScheduleListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedule?: ScheduleOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    start_at?: DateTimeFilter<"Event"> | Date | string
    end_at?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    schedule?: ScheduleListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    start_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    end_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: StringFilter<"Reminder"> | string
    message?: StringFilter<"Reminder"> | string
    remind_at?: DateTimeFilter<"Reminder"> | Date | string
    scheduleId?: StringFilter<"Reminder"> | string
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeFilter<"Reminder"> | Date | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    remind_at?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    message?: StringFilter<"Reminder"> | string
    remind_at?: DateTimeFilter<"Reminder"> | Date | string
    scheduleId?: StringFilter<"Reminder"> | string
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeFilter<"Reminder"> | Date | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    remind_at?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reminder"> | string
    message?: StringWithAggregatesFilter<"Reminder"> | string
    remind_at?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    scheduleId?: StringWithAggregatesFilter<"Reminder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
  }

  export type Schedule_ScheduleTagWhereInput = {
    AND?: Schedule_ScheduleTagWhereInput | Schedule_ScheduleTagWhereInput[]
    OR?: Schedule_ScheduleTagWhereInput[]
    NOT?: Schedule_ScheduleTagWhereInput | Schedule_ScheduleTagWhereInput[]
    scheduleId?: StringFilter<"Schedule_ScheduleTag"> | string
    scheduleTagId?: StringFilter<"Schedule_ScheduleTag"> | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    scheduleTag?: XOR<ScheduleTagScalarRelationFilter, ScheduleTagWhereInput>
  }

  export type Schedule_ScheduleTagOrderByWithRelationInput = {
    scheduleId?: SortOrder
    scheduleTagId?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
    scheduleTag?: ScheduleTagOrderByWithRelationInput
  }

  export type Schedule_ScheduleTagWhereUniqueInput = Prisma.AtLeast<{
    scheduleId_scheduleTagId?: Schedule_ScheduleTagScheduleIdScheduleTagIdCompoundUniqueInput
    AND?: Schedule_ScheduleTagWhereInput | Schedule_ScheduleTagWhereInput[]
    OR?: Schedule_ScheduleTagWhereInput[]
    NOT?: Schedule_ScheduleTagWhereInput | Schedule_ScheduleTagWhereInput[]
    scheduleId?: StringFilter<"Schedule_ScheduleTag"> | string
    scheduleTagId?: StringFilter<"Schedule_ScheduleTag"> | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    scheduleTag?: XOR<ScheduleTagScalarRelationFilter, ScheduleTagWhereInput>
  }, "scheduleId_scheduleTagId">

  export type Schedule_ScheduleTagOrderByWithAggregationInput = {
    scheduleId?: SortOrder
    scheduleTagId?: SortOrder
    _count?: Schedule_ScheduleTagCountOrderByAggregateInput
    _max?: Schedule_ScheduleTagMaxOrderByAggregateInput
    _min?: Schedule_ScheduleTagMinOrderByAggregateInput
  }

  export type Schedule_ScheduleTagScalarWhereWithAggregatesInput = {
    AND?: Schedule_ScheduleTagScalarWhereWithAggregatesInput | Schedule_ScheduleTagScalarWhereWithAggregatesInput[]
    OR?: Schedule_ScheduleTagScalarWhereWithAggregatesInput[]
    NOT?: Schedule_ScheduleTagScalarWhereWithAggregatesInput | Schedule_ScheduleTagScalarWhereWithAggregatesInput[]
    scheduleId?: StringWithAggregatesFilter<"Schedule_ScheduleTag"> | string
    scheduleTagId?: StringWithAggregatesFilter<"Schedule_ScheduleTag"> | string
  }

  export type ScheduleTagWhereInput = {
    AND?: ScheduleTagWhereInput | ScheduleTagWhereInput[]
    OR?: ScheduleTagWhereInput[]
    NOT?: ScheduleTagWhereInput | ScheduleTagWhereInput[]
    id?: StringFilter<"ScheduleTag"> | string
    name?: StringFilter<"ScheduleTag"> | string
    createdAt?: DateTimeFilter<"ScheduleTag"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleTag"> | Date | string
    schedule_scheduleTag?: Schedule_ScheduleTagListRelationFilter
  }

  export type ScheduleTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedule_scheduleTag?: Schedule_ScheduleTagOrderByRelationAggregateInput
  }

  export type ScheduleTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleTagWhereInput | ScheduleTagWhereInput[]
    OR?: ScheduleTagWhereInput[]
    NOT?: ScheduleTagWhereInput | ScheduleTagWhereInput[]
    name?: StringFilter<"ScheduleTag"> | string
    createdAt?: DateTimeFilter<"ScheduleTag"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleTag"> | Date | string
    schedule_scheduleTag?: Schedule_ScheduleTagListRelationFilter
  }, "id">

  export type ScheduleTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleTagCountOrderByAggregateInput
    _max?: ScheduleTagMaxOrderByAggregateInput
    _min?: ScheduleTagMinOrderByAggregateInput
  }

  export type ScheduleTagScalarWhereWithAggregatesInput = {
    AND?: ScheduleTagScalarWhereWithAggregatesInput | ScheduleTagScalarWhereWithAggregatesInput[]
    OR?: ScheduleTagScalarWhereWithAggregatesInput[]
    NOT?: ScheduleTagScalarWhereWithAggregatesInput | ScheduleTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleTag"> | string
    name?: StringWithAggregatesFilter<"ScheduleTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScheduleTag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduleTag"> | Date | string
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    scheduleId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    url?: StringFilter<"Link"> | string
    scheduleId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Link"> | string
    url?: StringWithAggregatesFilter<"Link"> | string
    scheduleId?: StringWithAggregatesFilter<"Link"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
  }

  export type Schedule_ImageWhereInput = {
    AND?: Schedule_ImageWhereInput | Schedule_ImageWhereInput[]
    OR?: Schedule_ImageWhereInput[]
    NOT?: Schedule_ImageWhereInput | Schedule_ImageWhereInput[]
    scheduleId?: StringFilter<"Schedule_Image"> | string
    imageId?: StringFilter<"Schedule_Image"> | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type Schedule_ImageOrderByWithRelationInput = {
    scheduleId?: SortOrder
    imageId?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type Schedule_ImageWhereUniqueInput = Prisma.AtLeast<{
    scheduleId_imageId?: Schedule_ImageScheduleIdImageIdCompoundUniqueInput
    AND?: Schedule_ImageWhereInput | Schedule_ImageWhereInput[]
    OR?: Schedule_ImageWhereInput[]
    NOT?: Schedule_ImageWhereInput | Schedule_ImageWhereInput[]
    scheduleId?: StringFilter<"Schedule_Image"> | string
    imageId?: StringFilter<"Schedule_Image"> | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "scheduleId_imageId">

  export type Schedule_ImageOrderByWithAggregationInput = {
    scheduleId?: SortOrder
    imageId?: SortOrder
    _count?: Schedule_ImageCountOrderByAggregateInput
    _max?: Schedule_ImageMaxOrderByAggregateInput
    _min?: Schedule_ImageMinOrderByAggregateInput
  }

  export type Schedule_ImageScalarWhereWithAggregatesInput = {
    AND?: Schedule_ImageScalarWhereWithAggregatesInput | Schedule_ImageScalarWhereWithAggregatesInput[]
    OR?: Schedule_ImageScalarWhereWithAggregatesInput[]
    NOT?: Schedule_ImageScalarWhereWithAggregatesInput | Schedule_ImageScalarWhereWithAggregatesInput[]
    scheduleId?: StringWithAggregatesFilter<"Schedule_Image"> | string
    imageId?: StringWithAggregatesFilter<"Schedule_Image"> | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    schedule_image?: Schedule_ImageListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedule_image?: Schedule_ImageOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    schedule_image?: Schedule_ImageListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type Schedule_UserWhereInput = {
    AND?: Schedule_UserWhereInput | Schedule_UserWhereInput[]
    OR?: Schedule_UserWhereInput[]
    NOT?: Schedule_UserWhereInput | Schedule_UserWhereInput[]
    scheduleId?: StringFilter<"Schedule_User"> | string
    userId?: StringFilter<"Schedule_User"> | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Schedule_UserOrderByWithRelationInput = {
    scheduleId?: SortOrder
    userId?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type Schedule_UserWhereUniqueInput = Prisma.AtLeast<{
    scheduleId_userId?: Schedule_UserScheduleIdUserIdCompoundUniqueInput
    AND?: Schedule_UserWhereInput | Schedule_UserWhereInput[]
    OR?: Schedule_UserWhereInput[]
    NOT?: Schedule_UserWhereInput | Schedule_UserWhereInput[]
    scheduleId?: StringFilter<"Schedule_User"> | string
    userId?: StringFilter<"Schedule_User"> | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "scheduleId_userId">

  export type Schedule_UserOrderByWithAggregationInput = {
    scheduleId?: SortOrder
    userId?: SortOrder
    _count?: Schedule_UserCountOrderByAggregateInput
    _max?: Schedule_UserMaxOrderByAggregateInput
    _min?: Schedule_UserMinOrderByAggregateInput
  }

  export type Schedule_UserScalarWhereWithAggregatesInput = {
    AND?: Schedule_UserScalarWhereWithAggregatesInput | Schedule_UserScalarWhereWithAggregatesInput[]
    OR?: Schedule_UserScalarWhereWithAggregatesInput[]
    NOT?: Schedule_UserScalarWhereWithAggregatesInput | Schedule_UserScalarWhereWithAggregatesInput[]
    scheduleId?: StringWithAggregatesFilter<"Schedule_User"> | string
    userId?: StringWithAggregatesFilter<"Schedule_User"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    schedule_user?: Schedule_UserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedule_user?: Schedule_UserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    schedule_user?: Schedule_UserListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutScheduleInput
    reminder?: ReminderCreateNestedManyWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagCreateNestedManyWithoutScheduleInput
    link?: LinkCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    eventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminder?: ReminderUncheckedCreateNestedManyWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedCreateNestedManyWithoutScheduleInput
    link?: LinkUncheckedCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageUncheckedCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutScheduleNestedInput
    reminder?: ReminderUpdateManyWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUpdateManyWithoutScheduleNestedInput
    link?: LinkUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminder?: ReminderUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleNestedInput
    link?: LinkUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    eventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    name: string
    description?: string | null
    start_at: Date | string
    end_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule?: ScheduleCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    start_at: Date | string
    end_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule?: ScheduleUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    start_at: Date | string
    end_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateInput = {
    id?: string
    message: string
    remind_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule: ScheduleCreateNestedOneWithoutReminderInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: string
    message: string
    remind_at: Date | string
    scheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutReminderNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateManyInput = {
    id?: string
    message: string
    remind_at: Date | string
    scheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Schedule_ScheduleTagCreateInput = {
    schedule: ScheduleCreateNestedOneWithoutSchedule_scheduleTagInput
    scheduleTag: ScheduleTagCreateNestedOneWithoutSchedule_scheduleTagInput
  }

  export type Schedule_ScheduleTagUncheckedCreateInput = {
    scheduleId: string
    scheduleTagId: string
  }

  export type Schedule_ScheduleTagUpdateInput = {
    schedule?: ScheduleUpdateOneRequiredWithoutSchedule_scheduleTagNestedInput
    scheduleTag?: ScheduleTagUpdateOneRequiredWithoutSchedule_scheduleTagNestedInput
  }

  export type Schedule_ScheduleTagUncheckedUpdateInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    scheduleTagId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_ScheduleTagCreateManyInput = {
    scheduleId: string
    scheduleTagId: string
  }

  export type Schedule_ScheduleTagUpdateManyMutationInput = {

  }

  export type Schedule_ScheduleTagUncheckedUpdateManyInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    scheduleTagId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleTagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule_scheduleTag?: Schedule_ScheduleTagCreateNestedManyWithoutScheduleTagInput
  }

  export type ScheduleTagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedCreateNestedManyWithoutScheduleTagInput
  }

  export type ScheduleTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_scheduleTag?: Schedule_ScheduleTagUpdateManyWithoutScheduleTagNestedInput
  }

  export type ScheduleTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleTagNestedInput
  }

  export type ScheduleTagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule: ScheduleCreateNestedOneWithoutLinkInput
  }

  export type LinkUncheckedCreateInput = {
    id?: string
    url: string
    scheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateManyInput = {
    id?: string
    url: string
    scheduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Schedule_ImageCreateInput = {
    schedule: ScheduleCreateNestedOneWithoutSchedule_imageInput
    image: ImageCreateNestedOneWithoutSchedule_imageInput
  }

  export type Schedule_ImageUncheckedCreateInput = {
    scheduleId: string
    imageId: string
  }

  export type Schedule_ImageUpdateInput = {
    schedule?: ScheduleUpdateOneRequiredWithoutSchedule_imageNestedInput
    image?: ImageUpdateOneRequiredWithoutSchedule_imageNestedInput
  }

  export type Schedule_ImageUncheckedUpdateInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_ImageCreateManyInput = {
    scheduleId: string
    imageId: string
  }

  export type Schedule_ImageUpdateManyMutationInput = {

  }

  export type Schedule_ImageUncheckedUpdateManyInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule_image?: Schedule_ImageCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule_image?: Schedule_ImageUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_image?: Schedule_ImageUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_image?: Schedule_ImageUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Schedule_UserCreateInput = {
    schedule: ScheduleCreateNestedOneWithoutSchedule_userInput
    user: UserCreateNestedOneWithoutSchedule_userInput
  }

  export type Schedule_UserUncheckedCreateInput = {
    scheduleId: string
    userId: string
  }

  export type Schedule_UserUpdateInput = {
    schedule?: ScheduleUpdateOneRequiredWithoutSchedule_userNestedInput
    user?: UserUpdateOneRequiredWithoutSchedule_userNestedInput
  }

  export type Schedule_UserUncheckedUpdateInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_UserCreateManyInput = {
    scheduleId: string
    userId: string
  }

  export type Schedule_UserUpdateManyMutationInput = {

  }

  export type Schedule_UserUncheckedUpdateManyInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule_user?: Schedule_UserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule_user?: Schedule_UserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_user?: Schedule_UserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_user?: Schedule_UserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type Schedule_ScheduleTagListRelationFilter = {
    every?: Schedule_ScheduleTagWhereInput
    some?: Schedule_ScheduleTagWhereInput
    none?: Schedule_ScheduleTagWhereInput
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type Schedule_ImageListRelationFilter = {
    every?: Schedule_ImageWhereInput
    some?: Schedule_ImageWhereInput
    none?: Schedule_ImageWhereInput
  }

  export type Schedule_UserListRelationFilter = {
    every?: Schedule_UserWhereInput
    some?: Schedule_UserWhereInput
    none?: Schedule_UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Schedule_ScheduleTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Schedule_ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Schedule_UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    gatherAt?: SortOrder
    gatherPlace?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    gatherAt?: SortOrder
    gatherPlace?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    gatherAt?: SortOrder
    gatherPlace?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    remind_at?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    remind_at?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    remind_at?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleTagScalarRelationFilter = {
    is?: ScheduleTagWhereInput
    isNot?: ScheduleTagWhereInput
  }

  export type Schedule_ScheduleTagScheduleIdScheduleTagIdCompoundUniqueInput = {
    scheduleId: string
    scheduleTagId: string
  }

  export type Schedule_ScheduleTagCountOrderByAggregateInput = {
    scheduleId?: SortOrder
    scheduleTagId?: SortOrder
  }

  export type Schedule_ScheduleTagMaxOrderByAggregateInput = {
    scheduleId?: SortOrder
    scheduleTagId?: SortOrder
  }

  export type Schedule_ScheduleTagMinOrderByAggregateInput = {
    scheduleId?: SortOrder
    scheduleTagId?: SortOrder
  }

  export type ScheduleTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    scheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type Schedule_ImageScheduleIdImageIdCompoundUniqueInput = {
    scheduleId: string
    imageId: string
  }

  export type Schedule_ImageCountOrderByAggregateInput = {
    scheduleId?: SortOrder
    imageId?: SortOrder
  }

  export type Schedule_ImageMaxOrderByAggregateInput = {
    scheduleId?: SortOrder
    imageId?: SortOrder
  }

  export type Schedule_ImageMinOrderByAggregateInput = {
    scheduleId?: SortOrder
    imageId?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Schedule_UserScheduleIdUserIdCompoundUniqueInput = {
    scheduleId: string
    userId: string
  }

  export type Schedule_UserCountOrderByAggregateInput = {
    scheduleId?: SortOrder
    userId?: SortOrder
  }

  export type Schedule_UserMaxOrderByAggregateInput = {
    scheduleId?: SortOrder
    userId?: SortOrder
  }

  export type Schedule_UserMinOrderByAggregateInput = {
    scheduleId?: SortOrder
    userId?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventCreateNestedOneWithoutScheduleInput = {
    create?: XOR<EventCreateWithoutScheduleInput, EventUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: EventCreateOrConnectWithoutScheduleInput
    connect?: EventWhereUniqueInput
  }

  export type ReminderCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ReminderCreateWithoutScheduleInput, ReminderUncheckedCreateWithoutScheduleInput> | ReminderCreateWithoutScheduleInput[] | ReminderUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutScheduleInput | ReminderCreateOrConnectWithoutScheduleInput[]
    createMany?: ReminderCreateManyScheduleInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type Schedule_ScheduleTagCreateNestedManyWithoutScheduleInput = {
    create?: XOR<Schedule_ScheduleTagCreateWithoutScheduleInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput> | Schedule_ScheduleTagCreateWithoutScheduleInput[] | Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_ScheduleTagCreateOrConnectWithoutScheduleInput | Schedule_ScheduleTagCreateOrConnectWithoutScheduleInput[]
    createMany?: Schedule_ScheduleTagCreateManyScheduleInputEnvelope
    connect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
  }

  export type LinkCreateNestedManyWithoutScheduleInput = {
    create?: XOR<LinkCreateWithoutScheduleInput, LinkUncheckedCreateWithoutScheduleInput> | LinkCreateWithoutScheduleInput[] | LinkUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutScheduleInput | LinkCreateOrConnectWithoutScheduleInput[]
    createMany?: LinkCreateManyScheduleInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type Schedule_ImageCreateNestedManyWithoutScheduleInput = {
    create?: XOR<Schedule_ImageCreateWithoutScheduleInput, Schedule_ImageUncheckedCreateWithoutScheduleInput> | Schedule_ImageCreateWithoutScheduleInput[] | Schedule_ImageUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_ImageCreateOrConnectWithoutScheduleInput | Schedule_ImageCreateOrConnectWithoutScheduleInput[]
    createMany?: Schedule_ImageCreateManyScheduleInputEnvelope
    connect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
  }

  export type Schedule_UserCreateNestedManyWithoutScheduleInput = {
    create?: XOR<Schedule_UserCreateWithoutScheduleInput, Schedule_UserUncheckedCreateWithoutScheduleInput> | Schedule_UserCreateWithoutScheduleInput[] | Schedule_UserUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_UserCreateOrConnectWithoutScheduleInput | Schedule_UserCreateOrConnectWithoutScheduleInput[]
    createMany?: Schedule_UserCreateManyScheduleInputEnvelope
    connect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ReminderCreateWithoutScheduleInput, ReminderUncheckedCreateWithoutScheduleInput> | ReminderCreateWithoutScheduleInput[] | ReminderUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutScheduleInput | ReminderCreateOrConnectWithoutScheduleInput[]
    createMany?: ReminderCreateManyScheduleInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type Schedule_ScheduleTagUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<Schedule_ScheduleTagCreateWithoutScheduleInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput> | Schedule_ScheduleTagCreateWithoutScheduleInput[] | Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_ScheduleTagCreateOrConnectWithoutScheduleInput | Schedule_ScheduleTagCreateOrConnectWithoutScheduleInput[]
    createMany?: Schedule_ScheduleTagCreateManyScheduleInputEnvelope
    connect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<LinkCreateWithoutScheduleInput, LinkUncheckedCreateWithoutScheduleInput> | LinkCreateWithoutScheduleInput[] | LinkUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutScheduleInput | LinkCreateOrConnectWithoutScheduleInput[]
    createMany?: LinkCreateManyScheduleInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type Schedule_ImageUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<Schedule_ImageCreateWithoutScheduleInput, Schedule_ImageUncheckedCreateWithoutScheduleInput> | Schedule_ImageCreateWithoutScheduleInput[] | Schedule_ImageUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_ImageCreateOrConnectWithoutScheduleInput | Schedule_ImageCreateOrConnectWithoutScheduleInput[]
    createMany?: Schedule_ImageCreateManyScheduleInputEnvelope
    connect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
  }

  export type Schedule_UserUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<Schedule_UserCreateWithoutScheduleInput, Schedule_UserUncheckedCreateWithoutScheduleInput> | Schedule_UserCreateWithoutScheduleInput[] | Schedule_UserUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_UserCreateOrConnectWithoutScheduleInput | Schedule_UserCreateOrConnectWithoutScheduleInput[]
    createMany?: Schedule_UserCreateManyScheduleInputEnvelope
    connect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<EventCreateWithoutScheduleInput, EventUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: EventCreateOrConnectWithoutScheduleInput
    upsert?: EventUpsertWithoutScheduleInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutScheduleInput, EventUpdateWithoutScheduleInput>, EventUncheckedUpdateWithoutScheduleInput>
  }

  export type ReminderUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ReminderCreateWithoutScheduleInput, ReminderUncheckedCreateWithoutScheduleInput> | ReminderCreateWithoutScheduleInput[] | ReminderUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutScheduleInput | ReminderCreateOrConnectWithoutScheduleInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutScheduleInput | ReminderUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ReminderCreateManyScheduleInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutScheduleInput | ReminderUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutScheduleInput | ReminderUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type Schedule_ScheduleTagUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<Schedule_ScheduleTagCreateWithoutScheduleInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput> | Schedule_ScheduleTagCreateWithoutScheduleInput[] | Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_ScheduleTagCreateOrConnectWithoutScheduleInput | Schedule_ScheduleTagCreateOrConnectWithoutScheduleInput[]
    upsert?: Schedule_ScheduleTagUpsertWithWhereUniqueWithoutScheduleInput | Schedule_ScheduleTagUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: Schedule_ScheduleTagCreateManyScheduleInputEnvelope
    set?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    disconnect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    delete?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    connect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    update?: Schedule_ScheduleTagUpdateWithWhereUniqueWithoutScheduleInput | Schedule_ScheduleTagUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: Schedule_ScheduleTagUpdateManyWithWhereWithoutScheduleInput | Schedule_ScheduleTagUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: Schedule_ScheduleTagScalarWhereInput | Schedule_ScheduleTagScalarWhereInput[]
  }

  export type LinkUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<LinkCreateWithoutScheduleInput, LinkUncheckedCreateWithoutScheduleInput> | LinkCreateWithoutScheduleInput[] | LinkUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutScheduleInput | LinkCreateOrConnectWithoutScheduleInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutScheduleInput | LinkUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: LinkCreateManyScheduleInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutScheduleInput | LinkUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutScheduleInput | LinkUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type Schedule_ImageUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<Schedule_ImageCreateWithoutScheduleInput, Schedule_ImageUncheckedCreateWithoutScheduleInput> | Schedule_ImageCreateWithoutScheduleInput[] | Schedule_ImageUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_ImageCreateOrConnectWithoutScheduleInput | Schedule_ImageCreateOrConnectWithoutScheduleInput[]
    upsert?: Schedule_ImageUpsertWithWhereUniqueWithoutScheduleInput | Schedule_ImageUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: Schedule_ImageCreateManyScheduleInputEnvelope
    set?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    disconnect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    delete?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    connect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    update?: Schedule_ImageUpdateWithWhereUniqueWithoutScheduleInput | Schedule_ImageUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: Schedule_ImageUpdateManyWithWhereWithoutScheduleInput | Schedule_ImageUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: Schedule_ImageScalarWhereInput | Schedule_ImageScalarWhereInput[]
  }

  export type Schedule_UserUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<Schedule_UserCreateWithoutScheduleInput, Schedule_UserUncheckedCreateWithoutScheduleInput> | Schedule_UserCreateWithoutScheduleInput[] | Schedule_UserUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_UserCreateOrConnectWithoutScheduleInput | Schedule_UserCreateOrConnectWithoutScheduleInput[]
    upsert?: Schedule_UserUpsertWithWhereUniqueWithoutScheduleInput | Schedule_UserUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: Schedule_UserCreateManyScheduleInputEnvelope
    set?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    disconnect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    delete?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    connect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    update?: Schedule_UserUpdateWithWhereUniqueWithoutScheduleInput | Schedule_UserUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: Schedule_UserUpdateManyWithWhereWithoutScheduleInput | Schedule_UserUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: Schedule_UserScalarWhereInput | Schedule_UserScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ReminderCreateWithoutScheduleInput, ReminderUncheckedCreateWithoutScheduleInput> | ReminderCreateWithoutScheduleInput[] | ReminderUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutScheduleInput | ReminderCreateOrConnectWithoutScheduleInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutScheduleInput | ReminderUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ReminderCreateManyScheduleInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutScheduleInput | ReminderUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutScheduleInput | ReminderUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<Schedule_ScheduleTagCreateWithoutScheduleInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput> | Schedule_ScheduleTagCreateWithoutScheduleInput[] | Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_ScheduleTagCreateOrConnectWithoutScheduleInput | Schedule_ScheduleTagCreateOrConnectWithoutScheduleInput[]
    upsert?: Schedule_ScheduleTagUpsertWithWhereUniqueWithoutScheduleInput | Schedule_ScheduleTagUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: Schedule_ScheduleTagCreateManyScheduleInputEnvelope
    set?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    disconnect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    delete?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    connect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    update?: Schedule_ScheduleTagUpdateWithWhereUniqueWithoutScheduleInput | Schedule_ScheduleTagUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: Schedule_ScheduleTagUpdateManyWithWhereWithoutScheduleInput | Schedule_ScheduleTagUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: Schedule_ScheduleTagScalarWhereInput | Schedule_ScheduleTagScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<LinkCreateWithoutScheduleInput, LinkUncheckedCreateWithoutScheduleInput> | LinkCreateWithoutScheduleInput[] | LinkUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutScheduleInput | LinkCreateOrConnectWithoutScheduleInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutScheduleInput | LinkUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: LinkCreateManyScheduleInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutScheduleInput | LinkUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutScheduleInput | LinkUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type Schedule_ImageUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<Schedule_ImageCreateWithoutScheduleInput, Schedule_ImageUncheckedCreateWithoutScheduleInput> | Schedule_ImageCreateWithoutScheduleInput[] | Schedule_ImageUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_ImageCreateOrConnectWithoutScheduleInput | Schedule_ImageCreateOrConnectWithoutScheduleInput[]
    upsert?: Schedule_ImageUpsertWithWhereUniqueWithoutScheduleInput | Schedule_ImageUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: Schedule_ImageCreateManyScheduleInputEnvelope
    set?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    disconnect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    delete?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    connect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    update?: Schedule_ImageUpdateWithWhereUniqueWithoutScheduleInput | Schedule_ImageUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: Schedule_ImageUpdateManyWithWhereWithoutScheduleInput | Schedule_ImageUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: Schedule_ImageScalarWhereInput | Schedule_ImageScalarWhereInput[]
  }

  export type Schedule_UserUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<Schedule_UserCreateWithoutScheduleInput, Schedule_UserUncheckedCreateWithoutScheduleInput> | Schedule_UserCreateWithoutScheduleInput[] | Schedule_UserUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: Schedule_UserCreateOrConnectWithoutScheduleInput | Schedule_UserCreateOrConnectWithoutScheduleInput[]
    upsert?: Schedule_UserUpsertWithWhereUniqueWithoutScheduleInput | Schedule_UserUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: Schedule_UserCreateManyScheduleInputEnvelope
    set?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    disconnect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    delete?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    connect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    update?: Schedule_UserUpdateWithWhereUniqueWithoutScheduleInput | Schedule_UserUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: Schedule_UserUpdateManyWithWhereWithoutScheduleInput | Schedule_UserUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: Schedule_UserScalarWhereInput | Schedule_UserScalarWhereInput[]
  }

  export type ScheduleCreateNestedManyWithoutEventInput = {
    create?: XOR<ScheduleCreateWithoutEventInput, ScheduleUncheckedCreateWithoutEventInput> | ScheduleCreateWithoutEventInput[] | ScheduleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEventInput | ScheduleCreateOrConnectWithoutEventInput[]
    createMany?: ScheduleCreateManyEventInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ScheduleCreateWithoutEventInput, ScheduleUncheckedCreateWithoutEventInput> | ScheduleCreateWithoutEventInput[] | ScheduleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEventInput | ScheduleCreateOrConnectWithoutEventInput[]
    createMany?: ScheduleCreateManyEventInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type ScheduleUpdateManyWithoutEventNestedInput = {
    create?: XOR<ScheduleCreateWithoutEventInput, ScheduleUncheckedCreateWithoutEventInput> | ScheduleCreateWithoutEventInput[] | ScheduleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEventInput | ScheduleCreateOrConnectWithoutEventInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutEventInput | ScheduleUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ScheduleCreateManyEventInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutEventInput | ScheduleUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutEventInput | ScheduleUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ScheduleCreateWithoutEventInput, ScheduleUncheckedCreateWithoutEventInput> | ScheduleCreateWithoutEventInput[] | ScheduleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEventInput | ScheduleCreateOrConnectWithoutEventInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutEventInput | ScheduleUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ScheduleCreateManyEventInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutEventInput | ScheduleUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutEventInput | ScheduleUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ScheduleCreateNestedOneWithoutReminderInput = {
    create?: XOR<ScheduleCreateWithoutReminderInput, ScheduleUncheckedCreateWithoutReminderInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutReminderInput
    connect?: ScheduleWhereUniqueInput
  }

  export type ScheduleUpdateOneRequiredWithoutReminderNestedInput = {
    create?: XOR<ScheduleCreateWithoutReminderInput, ScheduleUncheckedCreateWithoutReminderInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutReminderInput
    upsert?: ScheduleUpsertWithoutReminderInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutReminderInput, ScheduleUpdateWithoutReminderInput>, ScheduleUncheckedUpdateWithoutReminderInput>
  }

  export type ScheduleCreateNestedOneWithoutSchedule_scheduleTagInput = {
    create?: XOR<ScheduleCreateWithoutSchedule_scheduleTagInput, ScheduleUncheckedCreateWithoutSchedule_scheduleTagInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutSchedule_scheduleTagInput
    connect?: ScheduleWhereUniqueInput
  }

  export type ScheduleTagCreateNestedOneWithoutSchedule_scheduleTagInput = {
    create?: XOR<ScheduleTagCreateWithoutSchedule_scheduleTagInput, ScheduleTagUncheckedCreateWithoutSchedule_scheduleTagInput>
    connectOrCreate?: ScheduleTagCreateOrConnectWithoutSchedule_scheduleTagInput
    connect?: ScheduleTagWhereUniqueInput
  }

  export type ScheduleUpdateOneRequiredWithoutSchedule_scheduleTagNestedInput = {
    create?: XOR<ScheduleCreateWithoutSchedule_scheduleTagInput, ScheduleUncheckedCreateWithoutSchedule_scheduleTagInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutSchedule_scheduleTagInput
    upsert?: ScheduleUpsertWithoutSchedule_scheduleTagInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutSchedule_scheduleTagInput, ScheduleUpdateWithoutSchedule_scheduleTagInput>, ScheduleUncheckedUpdateWithoutSchedule_scheduleTagInput>
  }

  export type ScheduleTagUpdateOneRequiredWithoutSchedule_scheduleTagNestedInput = {
    create?: XOR<ScheduleTagCreateWithoutSchedule_scheduleTagInput, ScheduleTagUncheckedCreateWithoutSchedule_scheduleTagInput>
    connectOrCreate?: ScheduleTagCreateOrConnectWithoutSchedule_scheduleTagInput
    upsert?: ScheduleTagUpsertWithoutSchedule_scheduleTagInput
    connect?: ScheduleTagWhereUniqueInput
    update?: XOR<XOR<ScheduleTagUpdateToOneWithWhereWithoutSchedule_scheduleTagInput, ScheduleTagUpdateWithoutSchedule_scheduleTagInput>, ScheduleTagUncheckedUpdateWithoutSchedule_scheduleTagInput>
  }

  export type Schedule_ScheduleTagCreateNestedManyWithoutScheduleTagInput = {
    create?: XOR<Schedule_ScheduleTagCreateWithoutScheduleTagInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput> | Schedule_ScheduleTagCreateWithoutScheduleTagInput[] | Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput[]
    connectOrCreate?: Schedule_ScheduleTagCreateOrConnectWithoutScheduleTagInput | Schedule_ScheduleTagCreateOrConnectWithoutScheduleTagInput[]
    createMany?: Schedule_ScheduleTagCreateManyScheduleTagInputEnvelope
    connect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
  }

  export type Schedule_ScheduleTagUncheckedCreateNestedManyWithoutScheduleTagInput = {
    create?: XOR<Schedule_ScheduleTagCreateWithoutScheduleTagInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput> | Schedule_ScheduleTagCreateWithoutScheduleTagInput[] | Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput[]
    connectOrCreate?: Schedule_ScheduleTagCreateOrConnectWithoutScheduleTagInput | Schedule_ScheduleTagCreateOrConnectWithoutScheduleTagInput[]
    createMany?: Schedule_ScheduleTagCreateManyScheduleTagInputEnvelope
    connect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
  }

  export type Schedule_ScheduleTagUpdateManyWithoutScheduleTagNestedInput = {
    create?: XOR<Schedule_ScheduleTagCreateWithoutScheduleTagInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput> | Schedule_ScheduleTagCreateWithoutScheduleTagInput[] | Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput[]
    connectOrCreate?: Schedule_ScheduleTagCreateOrConnectWithoutScheduleTagInput | Schedule_ScheduleTagCreateOrConnectWithoutScheduleTagInput[]
    upsert?: Schedule_ScheduleTagUpsertWithWhereUniqueWithoutScheduleTagInput | Schedule_ScheduleTagUpsertWithWhereUniqueWithoutScheduleTagInput[]
    createMany?: Schedule_ScheduleTagCreateManyScheduleTagInputEnvelope
    set?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    disconnect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    delete?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    connect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    update?: Schedule_ScheduleTagUpdateWithWhereUniqueWithoutScheduleTagInput | Schedule_ScheduleTagUpdateWithWhereUniqueWithoutScheduleTagInput[]
    updateMany?: Schedule_ScheduleTagUpdateManyWithWhereWithoutScheduleTagInput | Schedule_ScheduleTagUpdateManyWithWhereWithoutScheduleTagInput[]
    deleteMany?: Schedule_ScheduleTagScalarWhereInput | Schedule_ScheduleTagScalarWhereInput[]
  }

  export type Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleTagNestedInput = {
    create?: XOR<Schedule_ScheduleTagCreateWithoutScheduleTagInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput> | Schedule_ScheduleTagCreateWithoutScheduleTagInput[] | Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput[]
    connectOrCreate?: Schedule_ScheduleTagCreateOrConnectWithoutScheduleTagInput | Schedule_ScheduleTagCreateOrConnectWithoutScheduleTagInput[]
    upsert?: Schedule_ScheduleTagUpsertWithWhereUniqueWithoutScheduleTagInput | Schedule_ScheduleTagUpsertWithWhereUniqueWithoutScheduleTagInput[]
    createMany?: Schedule_ScheduleTagCreateManyScheduleTagInputEnvelope
    set?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    disconnect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    delete?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    connect?: Schedule_ScheduleTagWhereUniqueInput | Schedule_ScheduleTagWhereUniqueInput[]
    update?: Schedule_ScheduleTagUpdateWithWhereUniqueWithoutScheduleTagInput | Schedule_ScheduleTagUpdateWithWhereUniqueWithoutScheduleTagInput[]
    updateMany?: Schedule_ScheduleTagUpdateManyWithWhereWithoutScheduleTagInput | Schedule_ScheduleTagUpdateManyWithWhereWithoutScheduleTagInput[]
    deleteMany?: Schedule_ScheduleTagScalarWhereInput | Schedule_ScheduleTagScalarWhereInput[]
  }

  export type ScheduleCreateNestedOneWithoutLinkInput = {
    create?: XOR<ScheduleCreateWithoutLinkInput, ScheduleUncheckedCreateWithoutLinkInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutLinkInput
    connect?: ScheduleWhereUniqueInput
  }

  export type ScheduleUpdateOneRequiredWithoutLinkNestedInput = {
    create?: XOR<ScheduleCreateWithoutLinkInput, ScheduleUncheckedCreateWithoutLinkInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutLinkInput
    upsert?: ScheduleUpsertWithoutLinkInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutLinkInput, ScheduleUpdateWithoutLinkInput>, ScheduleUncheckedUpdateWithoutLinkInput>
  }

  export type ScheduleCreateNestedOneWithoutSchedule_imageInput = {
    create?: XOR<ScheduleCreateWithoutSchedule_imageInput, ScheduleUncheckedCreateWithoutSchedule_imageInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutSchedule_imageInput
    connect?: ScheduleWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutSchedule_imageInput = {
    create?: XOR<ImageCreateWithoutSchedule_imageInput, ImageUncheckedCreateWithoutSchedule_imageInput>
    connectOrCreate?: ImageCreateOrConnectWithoutSchedule_imageInput
    connect?: ImageWhereUniqueInput
  }

  export type ScheduleUpdateOneRequiredWithoutSchedule_imageNestedInput = {
    create?: XOR<ScheduleCreateWithoutSchedule_imageInput, ScheduleUncheckedCreateWithoutSchedule_imageInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutSchedule_imageInput
    upsert?: ScheduleUpsertWithoutSchedule_imageInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutSchedule_imageInput, ScheduleUpdateWithoutSchedule_imageInput>, ScheduleUncheckedUpdateWithoutSchedule_imageInput>
  }

  export type ImageUpdateOneRequiredWithoutSchedule_imageNestedInput = {
    create?: XOR<ImageCreateWithoutSchedule_imageInput, ImageUncheckedCreateWithoutSchedule_imageInput>
    connectOrCreate?: ImageCreateOrConnectWithoutSchedule_imageInput
    upsert?: ImageUpsertWithoutSchedule_imageInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutSchedule_imageInput, ImageUpdateWithoutSchedule_imageInput>, ImageUncheckedUpdateWithoutSchedule_imageInput>
  }

  export type Schedule_ImageCreateNestedManyWithoutImageInput = {
    create?: XOR<Schedule_ImageCreateWithoutImageInput, Schedule_ImageUncheckedCreateWithoutImageInput> | Schedule_ImageCreateWithoutImageInput[] | Schedule_ImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: Schedule_ImageCreateOrConnectWithoutImageInput | Schedule_ImageCreateOrConnectWithoutImageInput[]
    createMany?: Schedule_ImageCreateManyImageInputEnvelope
    connect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
  }

  export type Schedule_ImageUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<Schedule_ImageCreateWithoutImageInput, Schedule_ImageUncheckedCreateWithoutImageInput> | Schedule_ImageCreateWithoutImageInput[] | Schedule_ImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: Schedule_ImageCreateOrConnectWithoutImageInput | Schedule_ImageCreateOrConnectWithoutImageInput[]
    createMany?: Schedule_ImageCreateManyImageInputEnvelope
    connect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
  }

  export type Schedule_ImageUpdateManyWithoutImageNestedInput = {
    create?: XOR<Schedule_ImageCreateWithoutImageInput, Schedule_ImageUncheckedCreateWithoutImageInput> | Schedule_ImageCreateWithoutImageInput[] | Schedule_ImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: Schedule_ImageCreateOrConnectWithoutImageInput | Schedule_ImageCreateOrConnectWithoutImageInput[]
    upsert?: Schedule_ImageUpsertWithWhereUniqueWithoutImageInput | Schedule_ImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: Schedule_ImageCreateManyImageInputEnvelope
    set?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    disconnect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    delete?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    connect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    update?: Schedule_ImageUpdateWithWhereUniqueWithoutImageInput | Schedule_ImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: Schedule_ImageUpdateManyWithWhereWithoutImageInput | Schedule_ImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: Schedule_ImageScalarWhereInput | Schedule_ImageScalarWhereInput[]
  }

  export type Schedule_ImageUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<Schedule_ImageCreateWithoutImageInput, Schedule_ImageUncheckedCreateWithoutImageInput> | Schedule_ImageCreateWithoutImageInput[] | Schedule_ImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: Schedule_ImageCreateOrConnectWithoutImageInput | Schedule_ImageCreateOrConnectWithoutImageInput[]
    upsert?: Schedule_ImageUpsertWithWhereUniqueWithoutImageInput | Schedule_ImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: Schedule_ImageCreateManyImageInputEnvelope
    set?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    disconnect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    delete?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    connect?: Schedule_ImageWhereUniqueInput | Schedule_ImageWhereUniqueInput[]
    update?: Schedule_ImageUpdateWithWhereUniqueWithoutImageInput | Schedule_ImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: Schedule_ImageUpdateManyWithWhereWithoutImageInput | Schedule_ImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: Schedule_ImageScalarWhereInput | Schedule_ImageScalarWhereInput[]
  }

  export type ScheduleCreateNestedOneWithoutSchedule_userInput = {
    create?: XOR<ScheduleCreateWithoutSchedule_userInput, ScheduleUncheckedCreateWithoutSchedule_userInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutSchedule_userInput
    connect?: ScheduleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSchedule_userInput = {
    create?: XOR<UserCreateWithoutSchedule_userInput, UserUncheckedCreateWithoutSchedule_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedule_userInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduleUpdateOneRequiredWithoutSchedule_userNestedInput = {
    create?: XOR<ScheduleCreateWithoutSchedule_userInput, ScheduleUncheckedCreateWithoutSchedule_userInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutSchedule_userInput
    upsert?: ScheduleUpsertWithoutSchedule_userInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutSchedule_userInput, ScheduleUpdateWithoutSchedule_userInput>, ScheduleUncheckedUpdateWithoutSchedule_userInput>
  }

  export type UserUpdateOneRequiredWithoutSchedule_userNestedInput = {
    create?: XOR<UserCreateWithoutSchedule_userInput, UserUncheckedCreateWithoutSchedule_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedule_userInput
    upsert?: UserUpsertWithoutSchedule_userInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchedule_userInput, UserUpdateWithoutSchedule_userInput>, UserUncheckedUpdateWithoutSchedule_userInput>
  }

  export type Schedule_UserCreateNestedManyWithoutUserInput = {
    create?: XOR<Schedule_UserCreateWithoutUserInput, Schedule_UserUncheckedCreateWithoutUserInput> | Schedule_UserCreateWithoutUserInput[] | Schedule_UserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Schedule_UserCreateOrConnectWithoutUserInput | Schedule_UserCreateOrConnectWithoutUserInput[]
    createMany?: Schedule_UserCreateManyUserInputEnvelope
    connect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
  }

  export type Schedule_UserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Schedule_UserCreateWithoutUserInput, Schedule_UserUncheckedCreateWithoutUserInput> | Schedule_UserCreateWithoutUserInput[] | Schedule_UserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Schedule_UserCreateOrConnectWithoutUserInput | Schedule_UserCreateOrConnectWithoutUserInput[]
    createMany?: Schedule_UserCreateManyUserInputEnvelope
    connect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
  }

  export type Schedule_UserUpdateManyWithoutUserNestedInput = {
    create?: XOR<Schedule_UserCreateWithoutUserInput, Schedule_UserUncheckedCreateWithoutUserInput> | Schedule_UserCreateWithoutUserInput[] | Schedule_UserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Schedule_UserCreateOrConnectWithoutUserInput | Schedule_UserCreateOrConnectWithoutUserInput[]
    upsert?: Schedule_UserUpsertWithWhereUniqueWithoutUserInput | Schedule_UserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Schedule_UserCreateManyUserInputEnvelope
    set?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    disconnect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    delete?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    connect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    update?: Schedule_UserUpdateWithWhereUniqueWithoutUserInput | Schedule_UserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Schedule_UserUpdateManyWithWhereWithoutUserInput | Schedule_UserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Schedule_UserScalarWhereInput | Schedule_UserScalarWhereInput[]
  }

  export type Schedule_UserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Schedule_UserCreateWithoutUserInput, Schedule_UserUncheckedCreateWithoutUserInput> | Schedule_UserCreateWithoutUserInput[] | Schedule_UserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Schedule_UserCreateOrConnectWithoutUserInput | Schedule_UserCreateOrConnectWithoutUserInput[]
    upsert?: Schedule_UserUpsertWithWhereUniqueWithoutUserInput | Schedule_UserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Schedule_UserCreateManyUserInputEnvelope
    set?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    disconnect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    delete?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    connect?: Schedule_UserWhereUniqueInput | Schedule_UserWhereUniqueInput[]
    update?: Schedule_UserUpdateWithWhereUniqueWithoutUserInput | Schedule_UserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Schedule_UserUpdateManyWithWhereWithoutUserInput | Schedule_UserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Schedule_UserScalarWhereInput | Schedule_UserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EventCreateWithoutScheduleInput = {
    id?: string
    name: string
    description?: string | null
    start_at: Date | string
    end_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateWithoutScheduleInput = {
    id?: string
    name: string
    description?: string | null
    start_at: Date | string
    end_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutScheduleInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutScheduleInput, EventUncheckedCreateWithoutScheduleInput>
  }

  export type ReminderCreateWithoutScheduleInput = {
    id?: string
    message: string
    remind_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderUncheckedCreateWithoutScheduleInput = {
    id?: string
    message: string
    remind_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReminderCreateOrConnectWithoutScheduleInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutScheduleInput, ReminderUncheckedCreateWithoutScheduleInput>
  }

  export type ReminderCreateManyScheduleInputEnvelope = {
    data: ReminderCreateManyScheduleInput | ReminderCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type Schedule_ScheduleTagCreateWithoutScheduleInput = {
    scheduleTag: ScheduleTagCreateNestedOneWithoutSchedule_scheduleTagInput
  }

  export type Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput = {
    scheduleTagId: string
  }

  export type Schedule_ScheduleTagCreateOrConnectWithoutScheduleInput = {
    where: Schedule_ScheduleTagWhereUniqueInput
    create: XOR<Schedule_ScheduleTagCreateWithoutScheduleInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput>
  }

  export type Schedule_ScheduleTagCreateManyScheduleInputEnvelope = {
    data: Schedule_ScheduleTagCreateManyScheduleInput | Schedule_ScheduleTagCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type LinkCreateWithoutScheduleInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUncheckedCreateWithoutScheduleInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkCreateOrConnectWithoutScheduleInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutScheduleInput, LinkUncheckedCreateWithoutScheduleInput>
  }

  export type LinkCreateManyScheduleInputEnvelope = {
    data: LinkCreateManyScheduleInput | LinkCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type Schedule_ImageCreateWithoutScheduleInput = {
    image: ImageCreateNestedOneWithoutSchedule_imageInput
  }

  export type Schedule_ImageUncheckedCreateWithoutScheduleInput = {
    imageId: string
  }

  export type Schedule_ImageCreateOrConnectWithoutScheduleInput = {
    where: Schedule_ImageWhereUniqueInput
    create: XOR<Schedule_ImageCreateWithoutScheduleInput, Schedule_ImageUncheckedCreateWithoutScheduleInput>
  }

  export type Schedule_ImageCreateManyScheduleInputEnvelope = {
    data: Schedule_ImageCreateManyScheduleInput | Schedule_ImageCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type Schedule_UserCreateWithoutScheduleInput = {
    user: UserCreateNestedOneWithoutSchedule_userInput
  }

  export type Schedule_UserUncheckedCreateWithoutScheduleInput = {
    userId: string
  }

  export type Schedule_UserCreateOrConnectWithoutScheduleInput = {
    where: Schedule_UserWhereUniqueInput
    create: XOR<Schedule_UserCreateWithoutScheduleInput, Schedule_UserUncheckedCreateWithoutScheduleInput>
  }

  export type Schedule_UserCreateManyScheduleInputEnvelope = {
    data: Schedule_UserCreateManyScheduleInput | Schedule_UserCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutScheduleInput = {
    update: XOR<EventUpdateWithoutScheduleInput, EventUncheckedUpdateWithoutScheduleInput>
    create: XOR<EventCreateWithoutScheduleInput, EventUncheckedCreateWithoutScheduleInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutScheduleInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutScheduleInput, EventUncheckedUpdateWithoutScheduleInput>
  }

  export type EventUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUpsertWithWhereUniqueWithoutScheduleInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutScheduleInput, ReminderUncheckedUpdateWithoutScheduleInput>
    create: XOR<ReminderCreateWithoutScheduleInput, ReminderUncheckedCreateWithoutScheduleInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutScheduleInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutScheduleInput, ReminderUncheckedUpdateWithoutScheduleInput>
  }

  export type ReminderUpdateManyWithWhereWithoutScheduleInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutScheduleInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: StringFilter<"Reminder"> | string
    message?: StringFilter<"Reminder"> | string
    remind_at?: DateTimeFilter<"Reminder"> | Date | string
    scheduleId?: StringFilter<"Reminder"> | string
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    updatedAt?: DateTimeFilter<"Reminder"> | Date | string
  }

  export type Schedule_ScheduleTagUpsertWithWhereUniqueWithoutScheduleInput = {
    where: Schedule_ScheduleTagWhereUniqueInput
    update: XOR<Schedule_ScheduleTagUpdateWithoutScheduleInput, Schedule_ScheduleTagUncheckedUpdateWithoutScheduleInput>
    create: XOR<Schedule_ScheduleTagCreateWithoutScheduleInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleInput>
  }

  export type Schedule_ScheduleTagUpdateWithWhereUniqueWithoutScheduleInput = {
    where: Schedule_ScheduleTagWhereUniqueInput
    data: XOR<Schedule_ScheduleTagUpdateWithoutScheduleInput, Schedule_ScheduleTagUncheckedUpdateWithoutScheduleInput>
  }

  export type Schedule_ScheduleTagUpdateManyWithWhereWithoutScheduleInput = {
    where: Schedule_ScheduleTagScalarWhereInput
    data: XOR<Schedule_ScheduleTagUpdateManyMutationInput, Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleInput>
  }

  export type Schedule_ScheduleTagScalarWhereInput = {
    AND?: Schedule_ScheduleTagScalarWhereInput | Schedule_ScheduleTagScalarWhereInput[]
    OR?: Schedule_ScheduleTagScalarWhereInput[]
    NOT?: Schedule_ScheduleTagScalarWhereInput | Schedule_ScheduleTagScalarWhereInput[]
    scheduleId?: StringFilter<"Schedule_ScheduleTag"> | string
    scheduleTagId?: StringFilter<"Schedule_ScheduleTag"> | string
  }

  export type LinkUpsertWithWhereUniqueWithoutScheduleInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutScheduleInput, LinkUncheckedUpdateWithoutScheduleInput>
    create: XOR<LinkCreateWithoutScheduleInput, LinkUncheckedCreateWithoutScheduleInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutScheduleInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutScheduleInput, LinkUncheckedUpdateWithoutScheduleInput>
  }

  export type LinkUpdateManyWithWhereWithoutScheduleInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutScheduleInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    id?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    scheduleId?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
  }

  export type Schedule_ImageUpsertWithWhereUniqueWithoutScheduleInput = {
    where: Schedule_ImageWhereUniqueInput
    update: XOR<Schedule_ImageUpdateWithoutScheduleInput, Schedule_ImageUncheckedUpdateWithoutScheduleInput>
    create: XOR<Schedule_ImageCreateWithoutScheduleInput, Schedule_ImageUncheckedCreateWithoutScheduleInput>
  }

  export type Schedule_ImageUpdateWithWhereUniqueWithoutScheduleInput = {
    where: Schedule_ImageWhereUniqueInput
    data: XOR<Schedule_ImageUpdateWithoutScheduleInput, Schedule_ImageUncheckedUpdateWithoutScheduleInput>
  }

  export type Schedule_ImageUpdateManyWithWhereWithoutScheduleInput = {
    where: Schedule_ImageScalarWhereInput
    data: XOR<Schedule_ImageUpdateManyMutationInput, Schedule_ImageUncheckedUpdateManyWithoutScheduleInput>
  }

  export type Schedule_ImageScalarWhereInput = {
    AND?: Schedule_ImageScalarWhereInput | Schedule_ImageScalarWhereInput[]
    OR?: Schedule_ImageScalarWhereInput[]
    NOT?: Schedule_ImageScalarWhereInput | Schedule_ImageScalarWhereInput[]
    scheduleId?: StringFilter<"Schedule_Image"> | string
    imageId?: StringFilter<"Schedule_Image"> | string
  }

  export type Schedule_UserUpsertWithWhereUniqueWithoutScheduleInput = {
    where: Schedule_UserWhereUniqueInput
    update: XOR<Schedule_UserUpdateWithoutScheduleInput, Schedule_UserUncheckedUpdateWithoutScheduleInput>
    create: XOR<Schedule_UserCreateWithoutScheduleInput, Schedule_UserUncheckedCreateWithoutScheduleInput>
  }

  export type Schedule_UserUpdateWithWhereUniqueWithoutScheduleInput = {
    where: Schedule_UserWhereUniqueInput
    data: XOR<Schedule_UserUpdateWithoutScheduleInput, Schedule_UserUncheckedUpdateWithoutScheduleInput>
  }

  export type Schedule_UserUpdateManyWithWhereWithoutScheduleInput = {
    where: Schedule_UserScalarWhereInput
    data: XOR<Schedule_UserUpdateManyMutationInput, Schedule_UserUncheckedUpdateManyWithoutScheduleInput>
  }

  export type Schedule_UserScalarWhereInput = {
    AND?: Schedule_UserScalarWhereInput | Schedule_UserScalarWhereInput[]
    OR?: Schedule_UserScalarWhereInput[]
    NOT?: Schedule_UserScalarWhereInput | Schedule_UserScalarWhereInput[]
    scheduleId?: StringFilter<"Schedule_User"> | string
    userId?: StringFilter<"Schedule_User"> | string
  }

  export type ScheduleCreateWithoutEventInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminder?: ReminderCreateNestedManyWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagCreateNestedManyWithoutScheduleInput
    link?: LinkCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminder?: ReminderUncheckedCreateNestedManyWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedCreateNestedManyWithoutScheduleInput
    link?: LinkUncheckedCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageUncheckedCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutEventInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutEventInput, ScheduleUncheckedCreateWithoutEventInput>
  }

  export type ScheduleCreateManyEventInputEnvelope = {
    data: ScheduleCreateManyEventInput | ScheduleCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleUpsertWithWhereUniqueWithoutEventInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutEventInput, ScheduleUncheckedUpdateWithoutEventInput>
    create: XOR<ScheduleCreateWithoutEventInput, ScheduleUncheckedCreateWithoutEventInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutEventInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutEventInput, ScheduleUncheckedUpdateWithoutEventInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutEventInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutEventInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: StringFilter<"Schedule"> | string
    name?: StringFilter<"Schedule"> | string
    startAt?: DateTimeFilter<"Schedule"> | Date | string
    endAt?: DateTimeFilter<"Schedule"> | Date | string
    gatherAt?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    gatherPlace?: StringNullableFilter<"Schedule"> | string | null
    eventId?: StringNullableFilter<"Schedule"> | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type ScheduleCreateWithoutReminderInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagCreateNestedManyWithoutScheduleInput
    link?: LinkCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutReminderInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    eventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedCreateNestedManyWithoutScheduleInput
    link?: LinkUncheckedCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageUncheckedCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutReminderInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutReminderInput, ScheduleUncheckedCreateWithoutReminderInput>
  }

  export type ScheduleUpsertWithoutReminderInput = {
    update: XOR<ScheduleUpdateWithoutReminderInput, ScheduleUncheckedUpdateWithoutReminderInput>
    create: XOR<ScheduleCreateWithoutReminderInput, ScheduleUncheckedCreateWithoutReminderInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutReminderInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutReminderInput, ScheduleUncheckedUpdateWithoutReminderInput>
  }

  export type ScheduleUpdateWithoutReminderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUpdateManyWithoutScheduleNestedInput
    link?: LinkUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutReminderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleNestedInput
    link?: LinkUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateWithoutSchedule_scheduleTagInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutScheduleInput
    reminder?: ReminderCreateNestedManyWithoutScheduleInput
    link?: LinkCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutSchedule_scheduleTagInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    eventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminder?: ReminderUncheckedCreateNestedManyWithoutScheduleInput
    link?: LinkUncheckedCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageUncheckedCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutSchedule_scheduleTagInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutSchedule_scheduleTagInput, ScheduleUncheckedCreateWithoutSchedule_scheduleTagInput>
  }

  export type ScheduleTagCreateWithoutSchedule_scheduleTagInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleTagUncheckedCreateWithoutSchedule_scheduleTagInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleTagCreateOrConnectWithoutSchedule_scheduleTagInput = {
    where: ScheduleTagWhereUniqueInput
    create: XOR<ScheduleTagCreateWithoutSchedule_scheduleTagInput, ScheduleTagUncheckedCreateWithoutSchedule_scheduleTagInput>
  }

  export type ScheduleUpsertWithoutSchedule_scheduleTagInput = {
    update: XOR<ScheduleUpdateWithoutSchedule_scheduleTagInput, ScheduleUncheckedUpdateWithoutSchedule_scheduleTagInput>
    create: XOR<ScheduleCreateWithoutSchedule_scheduleTagInput, ScheduleUncheckedCreateWithoutSchedule_scheduleTagInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutSchedule_scheduleTagInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutSchedule_scheduleTagInput, ScheduleUncheckedUpdateWithoutSchedule_scheduleTagInput>
  }

  export type ScheduleUpdateWithoutSchedule_scheduleTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutScheduleNestedInput
    reminder?: ReminderUpdateManyWithoutScheduleNestedInput
    link?: LinkUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutSchedule_scheduleTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminder?: ReminderUncheckedUpdateManyWithoutScheduleNestedInput
    link?: LinkUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleTagUpsertWithoutSchedule_scheduleTagInput = {
    update: XOR<ScheduleTagUpdateWithoutSchedule_scheduleTagInput, ScheduleTagUncheckedUpdateWithoutSchedule_scheduleTagInput>
    create: XOR<ScheduleTagCreateWithoutSchedule_scheduleTagInput, ScheduleTagUncheckedCreateWithoutSchedule_scheduleTagInput>
    where?: ScheduleTagWhereInput
  }

  export type ScheduleTagUpdateToOneWithWhereWithoutSchedule_scheduleTagInput = {
    where?: ScheduleTagWhereInput
    data: XOR<ScheduleTagUpdateWithoutSchedule_scheduleTagInput, ScheduleTagUncheckedUpdateWithoutSchedule_scheduleTagInput>
  }

  export type ScheduleTagUpdateWithoutSchedule_scheduleTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleTagUncheckedUpdateWithoutSchedule_scheduleTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Schedule_ScheduleTagCreateWithoutScheduleTagInput = {
    schedule: ScheduleCreateNestedOneWithoutSchedule_scheduleTagInput
  }

  export type Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput = {
    scheduleId: string
  }

  export type Schedule_ScheduleTagCreateOrConnectWithoutScheduleTagInput = {
    where: Schedule_ScheduleTagWhereUniqueInput
    create: XOR<Schedule_ScheduleTagCreateWithoutScheduleTagInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput>
  }

  export type Schedule_ScheduleTagCreateManyScheduleTagInputEnvelope = {
    data: Schedule_ScheduleTagCreateManyScheduleTagInput | Schedule_ScheduleTagCreateManyScheduleTagInput[]
    skipDuplicates?: boolean
  }

  export type Schedule_ScheduleTagUpsertWithWhereUniqueWithoutScheduleTagInput = {
    where: Schedule_ScheduleTagWhereUniqueInput
    update: XOR<Schedule_ScheduleTagUpdateWithoutScheduleTagInput, Schedule_ScheduleTagUncheckedUpdateWithoutScheduleTagInput>
    create: XOR<Schedule_ScheduleTagCreateWithoutScheduleTagInput, Schedule_ScheduleTagUncheckedCreateWithoutScheduleTagInput>
  }

  export type Schedule_ScheduleTagUpdateWithWhereUniqueWithoutScheduleTagInput = {
    where: Schedule_ScheduleTagWhereUniqueInput
    data: XOR<Schedule_ScheduleTagUpdateWithoutScheduleTagInput, Schedule_ScheduleTagUncheckedUpdateWithoutScheduleTagInput>
  }

  export type Schedule_ScheduleTagUpdateManyWithWhereWithoutScheduleTagInput = {
    where: Schedule_ScheduleTagScalarWhereInput
    data: XOR<Schedule_ScheduleTagUpdateManyMutationInput, Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleTagInput>
  }

  export type ScheduleCreateWithoutLinkInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutScheduleInput
    reminder?: ReminderCreateNestedManyWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutLinkInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    eventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminder?: ReminderUncheckedCreateNestedManyWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageUncheckedCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutLinkInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutLinkInput, ScheduleUncheckedCreateWithoutLinkInput>
  }

  export type ScheduleUpsertWithoutLinkInput = {
    update: XOR<ScheduleUpdateWithoutLinkInput, ScheduleUncheckedUpdateWithoutLinkInput>
    create: XOR<ScheduleCreateWithoutLinkInput, ScheduleUncheckedCreateWithoutLinkInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutLinkInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutLinkInput, ScheduleUncheckedUpdateWithoutLinkInput>
  }

  export type ScheduleUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutScheduleNestedInput
    reminder?: ReminderUpdateManyWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminder?: ReminderUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateWithoutSchedule_imageInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutScheduleInput
    reminder?: ReminderCreateNestedManyWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagCreateNestedManyWithoutScheduleInput
    link?: LinkCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutSchedule_imageInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    eventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminder?: ReminderUncheckedCreateNestedManyWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedCreateNestedManyWithoutScheduleInput
    link?: LinkUncheckedCreateNestedManyWithoutScheduleInput
    schedule_user?: Schedule_UserUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutSchedule_imageInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutSchedule_imageInput, ScheduleUncheckedCreateWithoutSchedule_imageInput>
  }

  export type ImageCreateWithoutSchedule_imageInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutSchedule_imageInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutSchedule_imageInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutSchedule_imageInput, ImageUncheckedCreateWithoutSchedule_imageInput>
  }

  export type ScheduleUpsertWithoutSchedule_imageInput = {
    update: XOR<ScheduleUpdateWithoutSchedule_imageInput, ScheduleUncheckedUpdateWithoutSchedule_imageInput>
    create: XOR<ScheduleCreateWithoutSchedule_imageInput, ScheduleUncheckedCreateWithoutSchedule_imageInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutSchedule_imageInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutSchedule_imageInput, ScheduleUncheckedUpdateWithoutSchedule_imageInput>
  }

  export type ScheduleUpdateWithoutSchedule_imageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutScheduleNestedInput
    reminder?: ReminderUpdateManyWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUpdateManyWithoutScheduleNestedInput
    link?: LinkUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutSchedule_imageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminder?: ReminderUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleNestedInput
    link?: LinkUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ImageUpsertWithoutSchedule_imageInput = {
    update: XOR<ImageUpdateWithoutSchedule_imageInput, ImageUncheckedUpdateWithoutSchedule_imageInput>
    create: XOR<ImageCreateWithoutSchedule_imageInput, ImageUncheckedCreateWithoutSchedule_imageInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutSchedule_imageInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutSchedule_imageInput, ImageUncheckedUpdateWithoutSchedule_imageInput>
  }

  export type ImageUpdateWithoutSchedule_imageInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutSchedule_imageInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Schedule_ImageCreateWithoutImageInput = {
    schedule: ScheduleCreateNestedOneWithoutSchedule_imageInput
  }

  export type Schedule_ImageUncheckedCreateWithoutImageInput = {
    scheduleId: string
  }

  export type Schedule_ImageCreateOrConnectWithoutImageInput = {
    where: Schedule_ImageWhereUniqueInput
    create: XOR<Schedule_ImageCreateWithoutImageInput, Schedule_ImageUncheckedCreateWithoutImageInput>
  }

  export type Schedule_ImageCreateManyImageInputEnvelope = {
    data: Schedule_ImageCreateManyImageInput | Schedule_ImageCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type Schedule_ImageUpsertWithWhereUniqueWithoutImageInput = {
    where: Schedule_ImageWhereUniqueInput
    update: XOR<Schedule_ImageUpdateWithoutImageInput, Schedule_ImageUncheckedUpdateWithoutImageInput>
    create: XOR<Schedule_ImageCreateWithoutImageInput, Schedule_ImageUncheckedCreateWithoutImageInput>
  }

  export type Schedule_ImageUpdateWithWhereUniqueWithoutImageInput = {
    where: Schedule_ImageWhereUniqueInput
    data: XOR<Schedule_ImageUpdateWithoutImageInput, Schedule_ImageUncheckedUpdateWithoutImageInput>
  }

  export type Schedule_ImageUpdateManyWithWhereWithoutImageInput = {
    where: Schedule_ImageScalarWhereInput
    data: XOR<Schedule_ImageUpdateManyMutationInput, Schedule_ImageUncheckedUpdateManyWithoutImageInput>
  }

  export type ScheduleCreateWithoutSchedule_userInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutScheduleInput
    reminder?: ReminderCreateNestedManyWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagCreateNestedManyWithoutScheduleInput
    link?: LinkCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutSchedule_userInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    eventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reminder?: ReminderUncheckedCreateNestedManyWithoutScheduleInput
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedCreateNestedManyWithoutScheduleInput
    link?: LinkUncheckedCreateNestedManyWithoutScheduleInput
    schedule_image?: Schedule_ImageUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutSchedule_userInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutSchedule_userInput, ScheduleUncheckedCreateWithoutSchedule_userInput>
  }

  export type UserCreateWithoutSchedule_userInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSchedule_userInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSchedule_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchedule_userInput, UserUncheckedCreateWithoutSchedule_userInput>
  }

  export type ScheduleUpsertWithoutSchedule_userInput = {
    update: XOR<ScheduleUpdateWithoutSchedule_userInput, ScheduleUncheckedUpdateWithoutSchedule_userInput>
    create: XOR<ScheduleCreateWithoutSchedule_userInput, ScheduleUncheckedCreateWithoutSchedule_userInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutSchedule_userInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutSchedule_userInput, ScheduleUncheckedUpdateWithoutSchedule_userInput>
  }

  export type ScheduleUpdateWithoutSchedule_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutScheduleNestedInput
    reminder?: ReminderUpdateManyWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUpdateManyWithoutScheduleNestedInput
    link?: LinkUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutSchedule_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminder?: ReminderUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleNestedInput
    link?: LinkUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type UserUpsertWithoutSchedule_userInput = {
    update: XOR<UserUpdateWithoutSchedule_userInput, UserUncheckedUpdateWithoutSchedule_userInput>
    create: XOR<UserCreateWithoutSchedule_userInput, UserUncheckedCreateWithoutSchedule_userInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchedule_userInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchedule_userInput, UserUncheckedUpdateWithoutSchedule_userInput>
  }

  export type UserUpdateWithoutSchedule_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSchedule_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Schedule_UserCreateWithoutUserInput = {
    schedule: ScheduleCreateNestedOneWithoutSchedule_userInput
  }

  export type Schedule_UserUncheckedCreateWithoutUserInput = {
    scheduleId: string
  }

  export type Schedule_UserCreateOrConnectWithoutUserInput = {
    where: Schedule_UserWhereUniqueInput
    create: XOR<Schedule_UserCreateWithoutUserInput, Schedule_UserUncheckedCreateWithoutUserInput>
  }

  export type Schedule_UserCreateManyUserInputEnvelope = {
    data: Schedule_UserCreateManyUserInput | Schedule_UserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Schedule_UserUpsertWithWhereUniqueWithoutUserInput = {
    where: Schedule_UserWhereUniqueInput
    update: XOR<Schedule_UserUpdateWithoutUserInput, Schedule_UserUncheckedUpdateWithoutUserInput>
    create: XOR<Schedule_UserCreateWithoutUserInput, Schedule_UserUncheckedCreateWithoutUserInput>
  }

  export type Schedule_UserUpdateWithWhereUniqueWithoutUserInput = {
    where: Schedule_UserWhereUniqueInput
    data: XOR<Schedule_UserUpdateWithoutUserInput, Schedule_UserUncheckedUpdateWithoutUserInput>
  }

  export type Schedule_UserUpdateManyWithWhereWithoutUserInput = {
    where: Schedule_UserScalarWhereInput
    data: XOR<Schedule_UserUpdateManyMutationInput, Schedule_UserUncheckedUpdateManyWithoutUserInput>
  }

  export type ReminderCreateManyScheduleInput = {
    id?: string
    message: string
    remind_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Schedule_ScheduleTagCreateManyScheduleInput = {
    scheduleTagId: string
  }

  export type LinkCreateManyScheduleInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Schedule_ImageCreateManyScheduleInput = {
    imageId: string
  }

  export type Schedule_UserCreateManyScheduleInput = {
    userId: string
  }

  export type ReminderUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Schedule_ScheduleTagUpdateWithoutScheduleInput = {
    scheduleTag?: ScheduleTagUpdateOneRequiredWithoutSchedule_scheduleTagNestedInput
  }

  export type Schedule_ScheduleTagUncheckedUpdateWithoutScheduleInput = {
    scheduleTagId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleInput = {
    scheduleTagId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Schedule_ImageUpdateWithoutScheduleInput = {
    image?: ImageUpdateOneRequiredWithoutSchedule_imageNestedInput
  }

  export type Schedule_ImageUncheckedUpdateWithoutScheduleInput = {
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_ImageUncheckedUpdateManyWithoutScheduleInput = {
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_UserUpdateWithoutScheduleInput = {
    user?: UserUpdateOneRequiredWithoutSchedule_userNestedInput
  }

  export type Schedule_UserUncheckedUpdateWithoutScheduleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_UserUncheckedUpdateManyWithoutScheduleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateManyEventInput = {
    id?: string
    name: string
    startAt: Date | string
    endAt: Date | string
    gatherAt?: Date | string | null
    gatherPlace?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminder?: ReminderUpdateManyWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUpdateManyWithoutScheduleNestedInput
    link?: LinkUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reminder?: ReminderUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_scheduleTag?: Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleNestedInput
    link?: LinkUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_image?: Schedule_ImageUncheckedUpdateManyWithoutScheduleNestedInput
    schedule_user?: Schedule_UserUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gatherAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatherPlace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Schedule_ScheduleTagCreateManyScheduleTagInput = {
    scheduleId: string
  }

  export type Schedule_ScheduleTagUpdateWithoutScheduleTagInput = {
    schedule?: ScheduleUpdateOneRequiredWithoutSchedule_scheduleTagNestedInput
  }

  export type Schedule_ScheduleTagUncheckedUpdateWithoutScheduleTagInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_ScheduleTagUncheckedUpdateManyWithoutScheduleTagInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_ImageCreateManyImageInput = {
    scheduleId: string
  }

  export type Schedule_ImageUpdateWithoutImageInput = {
    schedule?: ScheduleUpdateOneRequiredWithoutSchedule_imageNestedInput
  }

  export type Schedule_ImageUncheckedUpdateWithoutImageInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_ImageUncheckedUpdateManyWithoutImageInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_UserCreateManyUserInput = {
    scheduleId: string
  }

  export type Schedule_UserUpdateWithoutUserInput = {
    schedule?: ScheduleUpdateOneRequiredWithoutSchedule_userNestedInput
  }

  export type Schedule_UserUncheckedUpdateWithoutUserInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
  }

  export type Schedule_UserUncheckedUpdateManyWithoutUserInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}