module.exports = {
  typeDefs: /* GraphQL */ `
    type AggregateKnex_migrations {
      count: Int!
    }

    type AggregateKnex_migrations_lock {
      count: Int!
    }

    type AggregateUsers {
      count: Int!
    }

    type BatchPayload {
      count: Long!
    }

    scalar DateTime

    type Knex_migrations {
      id: Int!
      batch: Int
      migration_time: DateTime
      name: String
    }

    type Knex_migrations_lock {
      id: Int!
      is_locked: Int
    }

    type Knex_migrations_lockConnection {
      pageInfo: PageInfo!
      edges: [Knex_migrations_lockEdge]!
      aggregate: AggregateKnex_migrations_lock!
    }

    input Knex_migrations_lockCreateInput {
      is_locked: Int
    }

    type Knex_migrations_lockEdge {
      node: Knex_migrations_lock!
      cursor: String!
    }

    enum Knex_migrations_lockOrderByInput {
      id_ASC
      id_DESC
      is_locked_ASC
      is_locked_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type Knex_migrations_lockPreviousValues {
      id: Int!
      is_locked: Int
    }

    type Knex_migrations_lockSubscriptionPayload {
      mutation: MutationType!
      node: Knex_migrations_lock
      updatedFields: [String!]
      previousValues: Knex_migrations_lockPreviousValues
    }

    input Knex_migrations_lockSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: Knex_migrations_lockWhereInput
      AND: [Knex_migrations_lockSubscriptionWhereInput!]
      OR: [Knex_migrations_lockSubscriptionWhereInput!]
      NOT: [Knex_migrations_lockSubscriptionWhereInput!]
    }

    input Knex_migrations_lockUpdateInput {
      is_locked: Int
    }

    input Knex_migrations_lockWhereInput {
      id: Int
      id_not: Int
      id_in: [Int!]
      id_not_in: [Int!]
      id_lt: Int
      id_lte: Int
      id_gt: Int
      id_gte: Int
      is_locked: Int
      is_locked_not: Int
      is_locked_in: [Int!]
      is_locked_not_in: [Int!]
      is_locked_lt: Int
      is_locked_lte: Int
      is_locked_gt: Int
      is_locked_gte: Int
      AND: [Knex_migrations_lockWhereInput!]
      OR: [Knex_migrations_lockWhereInput!]
      NOT: [Knex_migrations_lockWhereInput!]
    }

    input Knex_migrations_lockWhereUniqueInput {
      id: Int
    }

    type Knex_migrationsConnection {
      pageInfo: PageInfo!
      edges: [Knex_migrationsEdge]!
      aggregate: AggregateKnex_migrations!
    }

    input Knex_migrationsCreateInput {
      batch: Int
      migration_time: DateTime
      name: String
    }

    type Knex_migrationsEdge {
      node: Knex_migrations!
      cursor: String!
    }

    enum Knex_migrationsOrderByInput {
      id_ASC
      id_DESC
      batch_ASC
      batch_DESC
      migration_time_ASC
      migration_time_DESC
      name_ASC
      name_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type Knex_migrationsPreviousValues {
      id: Int!
      batch: Int
      migration_time: DateTime
      name: String
    }

    type Knex_migrationsSubscriptionPayload {
      mutation: MutationType!
      node: Knex_migrations
      updatedFields: [String!]
      previousValues: Knex_migrationsPreviousValues
    }

    input Knex_migrationsSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: Knex_migrationsWhereInput
      AND: [Knex_migrationsSubscriptionWhereInput!]
      OR: [Knex_migrationsSubscriptionWhereInput!]
      NOT: [Knex_migrationsSubscriptionWhereInput!]
    }

    input Knex_migrationsUpdateInput {
      batch: Int
      migration_time: DateTime
      name: String
    }

    input Knex_migrationsWhereInput {
      id: Int
      id_not: Int
      id_in: [Int!]
      id_not_in: [Int!]
      id_lt: Int
      id_lte: Int
      id_gt: Int
      id_gte: Int
      batch: Int
      batch_not: Int
      batch_in: [Int!]
      batch_not_in: [Int!]
      batch_lt: Int
      batch_lte: Int
      batch_gt: Int
      batch_gte: Int
      migration_time: DateTime
      migration_time_not: DateTime
      migration_time_in: [DateTime!]
      migration_time_not_in: [DateTime!]
      migration_time_lt: DateTime
      migration_time_lte: DateTime
      migration_time_gt: DateTime
      migration_time_gte: DateTime
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      AND: [Knex_migrationsWhereInput!]
      OR: [Knex_migrationsWhereInput!]
      NOT: [Knex_migrationsWhereInput!]
    }

    input Knex_migrationsWhereUniqueInput {
      id: Int
    }

    scalar Long

    type Mutation {
      createKnex_migrations(data: Knex_migrationsCreateInput!): Knex_migrations!
      updateKnex_migrations(
        data: Knex_migrationsUpdateInput!
        where: Knex_migrationsWhereUniqueInput!
      ): Knex_migrations
      updateManyKnex_migrationses(
        data: Knex_migrationsUpdateInput!
        where: Knex_migrationsWhereInput
      ): BatchPayload!
      upsertKnex_migrations(
        where: Knex_migrationsWhereUniqueInput!
        create: Knex_migrationsCreateInput!
        update: Knex_migrationsUpdateInput!
      ): Knex_migrations!
      deleteKnex_migrations(
        where: Knex_migrationsWhereUniqueInput!
      ): Knex_migrations
      deleteManyKnex_migrationses(
        where: Knex_migrationsWhereInput
      ): BatchPayload!
      createKnex_migrations_lock(
        data: Knex_migrations_lockCreateInput!
      ): Knex_migrations_lock!
      updateKnex_migrations_lock(
        data: Knex_migrations_lockUpdateInput!
        where: Knex_migrations_lockWhereUniqueInput!
      ): Knex_migrations_lock
      updateManyKnex_migrations_locks(
        data: Knex_migrations_lockUpdateInput!
        where: Knex_migrations_lockWhereInput
      ): BatchPayload!
      upsertKnex_migrations_lock(
        where: Knex_migrations_lockWhereUniqueInput!
        create: Knex_migrations_lockCreateInput!
        update: Knex_migrations_lockUpdateInput!
      ): Knex_migrations_lock!
      deleteKnex_migrations_lock(
        where: Knex_migrations_lockWhereUniqueInput!
      ): Knex_migrations_lock
      deleteManyKnex_migrations_locks(
        where: Knex_migrations_lockWhereInput
      ): BatchPayload!
      createUsers(data: UsersCreateInput!): Users!
      updateUsers(data: UsersUpdateInput!, where: UsersWhereUniqueInput!): Users
      updateManyUserses(
        data: UsersUpdateInput!
        where: UsersWhereInput
      ): BatchPayload!
      upsertUsers(
        where: UsersWhereUniqueInput!
        create: UsersCreateInput!
        update: UsersUpdateInput!
      ): Users!
      deleteUsers(where: UsersWhereUniqueInput!): Users
      deleteManyUserses(where: UsersWhereInput): BatchPayload!
    }

    enum MutationType {
      CREATED
      UPDATED
      DELETED
    }

    interface Node {
      id: ID!
    }

    type PageInfo {
      hasNextPage: Boolean!
      hasPreviousPage: Boolean!
      startCursor: String
      endCursor: String
    }

    type Query {
      knex_migrations(where: Knex_migrationsWhereUniqueInput!): Knex_migrations
      knex_migrationses(
        where: Knex_migrationsWhereInput
        orderBy: Knex_migrationsOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Knex_migrations]!
      knex_migrationsesConnection(
        where: Knex_migrationsWhereInput
        orderBy: Knex_migrationsOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): Knex_migrationsConnection!
      knex_migrations_lock(
        where: Knex_migrations_lockWhereUniqueInput!
      ): Knex_migrations_lock
      knex_migrations_locks(
        where: Knex_migrations_lockWhereInput
        orderBy: Knex_migrations_lockOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Knex_migrations_lock]!
      knex_migrations_locksConnection(
        where: Knex_migrations_lockWhereInput
        orderBy: Knex_migrations_lockOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): Knex_migrations_lockConnection!
      users(where: UsersWhereUniqueInput!): Users
      userses(
        where: UsersWhereInput
        orderBy: UsersOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Users]!
      usersesConnection(
        where: UsersWhereInput
        orderBy: UsersOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): UsersConnection!
      node(id: ID!): Node
    }

    type Subscription {
      knex_migrations(
        where: Knex_migrationsSubscriptionWhereInput
      ): Knex_migrationsSubscriptionPayload
      knex_migrations_lock(
        where: Knex_migrations_lockSubscriptionWhereInput
      ): Knex_migrations_lockSubscriptionPayload
      users(where: UsersSubscriptionWhereInput): UsersSubscriptionPayload
    }

    type Users {
      id: Int!
      created_at: DateTime!
      email: String
      first_name: String
      last_name: String
      updated_at: DateTime!
      username: String
    }

    type UsersConnection {
      pageInfo: PageInfo!
      edges: [UsersEdge]!
      aggregate: AggregateUsers!
    }

    input UsersCreateInput {
      created_at: DateTime!
      email: String
      first_name: String
      last_name: String
      updated_at: DateTime!
      username: String
    }

    type UsersEdge {
      node: Users!
      cursor: String!
    }

    enum UsersOrderByInput {
      id_ASC
      id_DESC
      created_at_ASC
      created_at_DESC
      email_ASC
      email_DESC
      first_name_ASC
      first_name_DESC
      last_name_ASC
      last_name_DESC
      updated_at_ASC
      updated_at_DESC
      username_ASC
      username_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type UsersPreviousValues {
      id: Int!
      created_at: DateTime!
      email: String
      first_name: String
      last_name: String
      updated_at: DateTime!
      username: String
    }

    type UsersSubscriptionPayload {
      mutation: MutationType!
      node: Users
      updatedFields: [String!]
      previousValues: UsersPreviousValues
    }

    input UsersSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: UsersWhereInput
      AND: [UsersSubscriptionWhereInput!]
      OR: [UsersSubscriptionWhereInput!]
      NOT: [UsersSubscriptionWhereInput!]
    }

    input UsersUpdateInput {
      created_at: DateTime
      email: String
      first_name: String
      last_name: String
      updated_at: DateTime
      username: String
    }

    input UsersWhereInput {
      id: Int
      id_not: Int
      id_in: [Int!]
      id_not_in: [Int!]
      id_lt: Int
      id_lte: Int
      id_gt: Int
      id_gte: Int
      created_at: DateTime
      created_at_not: DateTime
      created_at_in: [DateTime!]
      created_at_not_in: [DateTime!]
      created_at_lt: DateTime
      created_at_lte: DateTime
      created_at_gt: DateTime
      created_at_gte: DateTime
      email: String
      email_not: String
      email_in: [String!]
      email_not_in: [String!]
      email_lt: String
      email_lte: String
      email_gt: String
      email_gte: String
      email_contains: String
      email_not_contains: String
      email_starts_with: String
      email_not_starts_with: String
      email_ends_with: String
      email_not_ends_with: String
      first_name: String
      first_name_not: String
      first_name_in: [String!]
      first_name_not_in: [String!]
      first_name_lt: String
      first_name_lte: String
      first_name_gt: String
      first_name_gte: String
      first_name_contains: String
      first_name_not_contains: String
      first_name_starts_with: String
      first_name_not_starts_with: String
      first_name_ends_with: String
      first_name_not_ends_with: String
      last_name: String
      last_name_not: String
      last_name_in: [String!]
      last_name_not_in: [String!]
      last_name_lt: String
      last_name_lte: String
      last_name_gt: String
      last_name_gte: String
      last_name_contains: String
      last_name_not_contains: String
      last_name_starts_with: String
      last_name_not_starts_with: String
      last_name_ends_with: String
      last_name_not_ends_with: String
      updated_at: DateTime
      updated_at_not: DateTime
      updated_at_in: [DateTime!]
      updated_at_not_in: [DateTime!]
      updated_at_lt: DateTime
      updated_at_lte: DateTime
      updated_at_gt: DateTime
      updated_at_gte: DateTime
      username: String
      username_not: String
      username_in: [String!]
      username_not_in: [String!]
      username_lt: String
      username_lte: String
      username_gt: String
      username_gte: String
      username_contains: String
      username_not_contains: String
      username_starts_with: String
      username_not_starts_with: String
      username_ends_with: String
      username_not_ends_with: String
      AND: [UsersWhereInput!]
      OR: [UsersWhereInput!]
      NOT: [UsersWhereInput!]
    }

    input UsersWhereUniqueInput {
      id: Int
      email: String
      username: String
    }
  `,
};
