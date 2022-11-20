export class CreateUserEvent {
  constructor(public readonly liquidName: string, public readonly profilePictureIdentifier: string) {}
}
