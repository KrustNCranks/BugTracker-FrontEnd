import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {s} from "@angular/core/src/render3";

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  /**
   * This sets the connection string to our created backend
   */
  uri = 'http://localhost:4000';


  /**
   * Used to make an instance of the HttpClient
   * @param http
   */
  constructor(private http: HttpClient) { }

  getIssues(){
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id){
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title, responsible, description, severity){
    const issue = {
      title: title,
      responsible : responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`,issue);
  }

  updateIssue(id, title, responsible, description, severity, status){
    const issue = {
      title: title,
      responsible : responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`,issue);
  }

  deleteIssue(id){
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
