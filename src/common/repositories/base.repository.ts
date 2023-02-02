import {
  FilterQuery,
  HydratedDocument,
  Model,
  UpdateQuery,
  UpdateWithAggregationPipeline
} from 'mongoose'

import { DeleteResult, FindAllResult, FindResult, UpdateResult } from './interfaces'

export class BaseRepository<T> {
  constructor(private readonly model: Model<T>) {}

  public async create(object: T): Promise<HydratedDocument<T, unknown>> {
    return this.model.create(object)
  }

  public async find(query: FilterQuery<T>): Promise<FindAllResult<T>> {
    return this.model.find(query)
  }

  public async findById(id: string): Promise<FindResult<T>> {
    return this.model.findById(id)
  }

  public async findByIdAndDelete(id: string): Promise<FindResult<T>> {
    return this.model.findByIdAndRemove(id)
  }

  public async findByIdAndUpdate(
    id: string,
    update: UpdateWithAggregationPipeline | UpdateQuery<T>
  ): Promise<FindResult<T>> {
    return this.model.findByIdAndUpdate(id, update, { new: true })
  }

  public async findOne(filter: FilterQuery<T>): Promise<FindResult<T>> {
    return this.model.findOne(filter)
  }

  public async findOneAndDelete(filter: FilterQuery<T>): Promise<FindResult<T>> {
    return this.model.findOneAndDelete(filter)
  }

  public async findOneAndUpdate(
    filter: FilterQuery<T>,
    update: UpdateWithAggregationPipeline | UpdateQuery<T>
  ): Promise<FindResult<T>> {
    return this.model.findOneAndUpdate(filter, update, { new: true })
  }

  public async updateMany(
    filter: FilterQuery<T>,
    update: UpdateWithAggregationPipeline | UpdateQuery<T>
  ): Promise<UpdateResult<T>> {
    return this.model.updateMany(filter, update, { new: true })
  }

  public async updateOne(
    filter: FilterQuery<T>,
    update: UpdateWithAggregationPipeline | UpdateQuery<T>
  ): Promise<UpdateResult<T>> {
    return this.model.updateOne(filter, update)
  }

  public async deleteMany(filter: FilterQuery<T>): Promise<DeleteResult<T>> {
    return this.model.deleteMany(filter)
  }

  public async deleteOne(filter: FilterQuery<T>): Promise<DeleteResult<T>> {
    return this.model.deleteOne(filter)
  }
}
