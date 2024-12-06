import { Hash, Schema, U32, U64 } from "@truenetworkio/sdk"

export const auraPointsSchema = Schema.create({
  auraPoints: U32,
  timeStamp: U64,
  userAddress: string
})