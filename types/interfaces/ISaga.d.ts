declare interface ISaga {
	/** List of event types that trigger new saga start */
	static readonly startsWith: string[];

	/** List of events being handled by Saga */
	static readonly handles?: string[];

	/** List of commands emitted by Saga */
	readonly uncommittedMessages: ICommand[];

	/** Main entry point for Saga events */
	apply(event: IEvent): void | Promise<void>;

	/** Reset emitted commands when they are not longer needed */
	resetUncommittedMessages(): void;
}

declare type TSagaConstructorParams = {
	id: Identifier,
	events?: IEventStream
};

declare type ISagaFactory = (options: TSagaConstructorParams) => ISaga;

declare interface ISagaConstructor {
	new(options: TSagaConstructorParams): ISaga;
	readonly startsWith: string[];
	readonly handles: string[];
}
