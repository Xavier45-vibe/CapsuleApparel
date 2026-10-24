import { Injectable } from '@nestjs/common';

export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  bio: string;
}

@Injectable()
export class TeamService {
  // Placeholder team — replace with the client's real team details.
  private readonly members: TeamMember[] = [
    { name: 'Alex Moreau', initials: 'AM', role: 'Founder & Creative Director', bio: 'Started Capsule after one too many wardrobe clear-outs.' },
    { name: 'Sam Okafor', initials: 'SO', role: 'Head of Design', bio: 'Sketches in cafés and swears by a good pocket.' },
    { name: 'Jordan Lee', initials: 'JL', role: 'Sourcing & Sustainability', bio: 'Knows every mill, field and flock by name.' },
    { name: 'Riley Costa', initials: 'RC', role: 'Customer Happiness', bio: 'Your first hello, and the reason you keep coming back.' },
  ];

  findAll(): TeamMember[] {
    return this.members;
  }
}
