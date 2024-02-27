
import { Transaction as BTCTransaction } from "bitcoinjs-lib"
import {
  GetSpendablesOptions,
  GetTransactionOptions,
  GetUnspentsOptions,
  GetUnspentsResponse,
  RelayOptions
} from "../api/types"
import { Transaction, UTXOLimited } from "../transactions/types"

export interface IDatasource {
  getTransaction({
    txId,
    ordinals,
    hex,
    witness,
    decodeMetadata
  }: GetTransactionOptions): Promise<{ tx: Transaction; rawTx?: BTCTransaction }>

  getSpendables({ address, value, type, rarity, filter, limit }: GetSpendablesOptions): Promise<UTXOLimited[]>

  getUnspents({ address, type, rarity, sort, limit, next }: GetUnspentsOptions): Promise<GetUnspentsResponse>

  relay({ hex, maxFeeRate, validate }: RelayOptions): Promise<string>
}
