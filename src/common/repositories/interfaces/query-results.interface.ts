import { EnforceDocument, Query, UpdateWriteOpResult } from 'mongoose'

export type FindAllResult<T> = Query<EnforceDocument<T, unknown>[], EnforceDocument<T, unknown>>

export type FindResult<T> = Query<
  EnforceDocument<T, unknown> | null,
  EnforceDocument<T, unknown>,
  unknown,
  T
>

export type UpdateResult<T> = Query<UpdateWriteOpResult, EnforceDocument<T, unknown>, unknown, T>

export type DeleteResult<T> = Query<
  { ok?: number | undefined; n?: number | undefined } & { deletedCount?: number | undefined },
  EnforceDocument<T, unknown>,
  unknown,
  T
>
