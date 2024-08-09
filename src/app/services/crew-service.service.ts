import { Injectable } from '@angular/core';
import { Crew } from '../models/crew.model';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  private crewList: Crew[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      nationality: 'American',
      title: 'Captain',
      daysOnBoard: 120,
      dailyRate: 300,
      currency: 'USD',
      totalIncome: 36000,
      certificates: ['Safety', 'Navigation', 'First Aid'],
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      nationality: 'British',
      title: 'Engineer',
      daysOnBoard: 150,
      dailyRate: 250,
      currency: 'USD',
      totalIncome: 37500,
      certificates: ['Engineering', 'Safety', 'Communication'],
    },
    {
      firstName: 'Carlos',
      lastName: 'Mendez',
      nationality: 'Spanish',
      title: 'Cooker',
      daysOnBoard: 200,
      dailyRate: 150,
      currency: 'EUR',
      totalIncome: 30000,
      certificates: ['Cooking', 'Safety', 'Hygiene'],
    },
    {
      firstName: 'Marie',
      lastName: 'Dupont',
      nationality: 'French',
      title: 'Mechanicer',
      daysOnBoard: 180,
      dailyRate: 220,
      currency: 'EUR',
      totalIncome: 39600,
      certificates: ['Mechanics', 'Safety', 'Engineering'],
    },
    {
      firstName: 'Lars',
      lastName: 'Hansen',
      nationality: 'Danish',
      title: 'Captain',
      daysOnBoard: 130,
      dailyRate: 320,
      currency: 'USD',
      totalIncome: 41600,
      certificates: ['Safety', 'Navigation', 'Leadership'],
    },
  ];

  getCrewList(): Crew[] {
    return this.crewList;
  }

  addCrew(crew: Crew) {
    this.crewList.push(crew);
  }
  updateCrew(index: number, updatedCrew: Crew): void {
    if (index > -1 && index < this.crewList.length) {
      this.crewList[index] = updatedCrew;
    } else {
      console.error('Invalid index for update:', index);
    }
  }

  deleteCrew(index: number) {
    if (index > -1 && index < this.crewList.length) {
      console.log('Deleting crew at index:', index); // Debug: Hangi index siliniyor
      this.crewList.splice(index, 1);
      console.log('Updated crew list:', this.crewList); // Debug: Güncellenmiş liste
    } else {
      console.error('Invalid index for deletion:', index); // Debug: Geçersiz indeks
    }
  }
}
