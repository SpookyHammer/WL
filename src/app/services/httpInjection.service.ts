import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class httpInjectionService{

    private http: HttpClient;

    public getToken(): string {
        return localStorage.getItem('token');
    }
    
}