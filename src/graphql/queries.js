import gql from 'graphql-tag';

export const SUMMONER = gql`
  query getSummoner($name: String!) {
    summoner(name: $name) {
      id
      name
      summonerLevel
      revisionDate
      profileIconId
      puuid
      accountId
      # matchList {
      #gameId
      #champion
      #seasonId
      #role
      #lane
      #}
    }
  }
`;

export const COINDETAIL = gql`
  query GetCoinDetail($coinSymbol: String!) {
    qCoins(query: $coinSymbol) {
      symbol
      name
      algo
      port
      price_sats
      height
      difficulty
      reward
      shares
      workers
      hashrate
      network_hashrate
      ttf
      network_ttf
      pool_ttf
      block_time
      notes
      exchange_volume
      link_site
      link_exchange
      link_bitcointalk
      link_github
      link_explorer
      mature_blocks
      # blocks_24h
      block_data {
        timesincelast
        lastblockheight
        blocks_1h
        blocks_1d
        blocks_7d
        blocks_30d
      }
      hashrate_24h {
        t
        h
        sc
      }
      blocks {
        height
        difficulty
        time
        category
        confirmations
        amount
        finder
        blockhash
      }
    }
  }
`;

export const WORKER_HISTORY = gql`
  query GetWorkers($walletId: Int, $workerId: Int, $workerName: String) {
    qWorkers(wallet_id: $walletId, worker_id: $workerId, worker_name: $workerName) {
      id
      worker
      hashrate_24h {
        t
        h
      }
    }
  }
`;

export const WALLET = gql`
  query GetWallet($wallet: String!) {
    qAccount(wallet: $wallet) {
      id
      address
      balances {
        total_unpaid
        total_unsold
        total_earned
        total_paid
        balance
      }

      hashrate_24h {
        t
        h
        sc
      }
      workers {
        id
        userid
        difficulty
        version
        password
        worker
        algo
        extra
        es
        hashrate
        reject
        # hashrate_24h {
        #   h
        #   t
        # }
      }
      earnings {
        id
        userid
        coinid
        blockid
        create_time
        amount
        price
        status
        mature_time
      }
      # coin {
      #   foundCoins {
      #     id
      #     symbol
      #   }
      # }
    }
  }
`;
