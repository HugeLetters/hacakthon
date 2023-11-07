import { index, integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createUuidColumn, uuidPkColumn } from '..';
import { User, createUserIdColumn } from './auth';

export const Case = sqliteTable(
	'case',
	{
		id: uuidPkColumn,
		name: text('name', { length: 63 }).notNull(),
		summary: text('summary', { length: 65535 }),
		status: text('status').$type<CaseStatus>().notNull().default('active'),
		assignedAdmindId: createUserIdColumn('assigned_admin_id').references(() => User.id)
	},
	(table) => ({
		statusIndex: index('case_status_index').on(table.status),
		assignedAdmindIdIndex: index('case_assigned_admin_id_index').on(table.assignedAdmindId)
	})
);

export const CaseTodo = sqliteTable(
	'case_todo',
	{
		id: uuidPkColumn,
		description: text('description', { length: 255 }).notNull(),
		done: integer('done', { mode: 'boolean' }).notNull().default(false),
		caseId: createUuidColumn('case_id')
			.references(() => Case.id)
			.notNull()
	},
	(table) => ({
		caseIdIndex: index('case_todo_case_id_index').on(table.caseId)
	})
);

export const Thread = sqliteTable(
	'thread',
	{
		threadId: text('thread_id', { length: 63 }).notNull(),
		caseId: createUuidColumn('case_id')
			.references(() => Case.id)
			.notNull()
	},
	(table) => ({ primaryKey: primaryKey(table.caseId, table.threadId) })
);

type CaseStatus = 'active' | 'closed';
