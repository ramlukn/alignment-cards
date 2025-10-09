 export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
];


 export const cards = [
    { 
      "category": "AP", 
      "name": "Fairness", 
      "definition": "The equitable treatment of everyone", 
      "human": "Humans try to avoid bias and discrimination", 
      "organizational": "Organization ensure the hiring, promoation, compensation, and other internal processes are merit-based", 
      "professional": "Experts give the same quality of work/advice to everyone and avoid conflicts on intrest", 
      "machine": "AI systems avoid discriminatroy outcomes", 
      "failureModes": { 
        "human": "Fvoring friends and family in treatment", 
        "organizational": "Discriminatory hiring and performance evaluations", 
        "professional": "Using selective evidence to supoort a client' intrests", 
        "machine": "Facial Recognition perofmring worse on darker skin tones"
      }
    },
    { 
      "category": "AP", 
      "name": "Transparency", 
      "definition": "The principles of actions, motivations, and reasonings are open and understood", 
      "human": "Being honest about your goals and methods", 
      "organizational": "Clear communication of policies, metrics and impact to the public", 
      "professional": "Experts disclose methods, data sources, and limitations", 
      "machine": "AI models provide outputs with no explanation or understanding of their process", 
      "failureModes": { 
        "human": "Humans without information to manipulate others", 
        "organizational": "Organizations lie to the public about their environental impact", 
        "professional": "Professionals give information without any explaination, research or data", 
        "machine": "AI models make decisions in healthcare or finance without any given reasoning"
      }
    },
    { 
      "category": "AP", 
      "name": "Accountability", 
      "definition": "The principle that agents are answerable for their actions and must take responsibility for consequences.", 
      "human": "Accepting when you are wrong and learning from it", 
      "organizational": "Establishing clear methods of holding people accountable", 
      "professional": "Maintaining ethical codes and peer review to uphold integrity.", 
      "machine": "Ensuring audit trails and human oversight for automated decisions.", 
      "failureModes": { 
        "human": "Blaming others when things go wrong", 
        "organizational": "Passing responsibilty to contractors", 
        "professional": "Evading responsibilty to for flawed data", 
        "machine": "No clear accountability when AI causes harm (self driving car accidents)"
      }
    },
    { 
      "category": "AP", 
      "name": "Beneficence", 
      "definition": "Acting for the good of others", 
      "human": "Acting with empathy towards others", 
      "organizational": "Prioritzing safety and societal good", 
      "professional": "Experts designing systems that improve human lives", 
      "machine": "AI prioritizes the good of society and environment", 
      "failureModes": { 
        "human": "Humans commit crime and act selfishly", 
        "organizational": "Organizations don't care about the environment or their workers", 
        "professional": "Lawyers prioritize getting through as many cases without caring about how well they do", 
        "machine": "AI optimizes metrics that have negative side effects"
      }
    },
    { 
      "category": "AP", 
      "name": "Autonomy", 
      "definition": "The principle of letting other agents make their own decisions", 
      "human": "Letting other people make their own choices", 
      "organizational": "Creating an environment where employees feel safe to voice their opinions", 
      "professional": "Allow clients to make their own informed decisions", 
      "machine": "AI models give users multiple options instead and gives multiple sides of the story", 
      "failureModes": { 
        "human": "Humans manipulate others into making decisions", 
        "organizational": "Micromanaging workers", 
        "professional": "Doctors telling clients that surgery is the only option", 
        "machine": "Autonomous systems giving users limited information"
      }
    },
  { 
      "category": "AP", 
      "name": "Honesty", 
      "definition": "Commitment to truthfulness", 
      "human": "People don't lie to each other", 
      "organizational": "Companies are truthful to public about their impact", 
      "professional": "Experts correctly portray their knowledge and fully", 
      "machine": "AI systems accurately report their confidence, limitations, etc", 
      "failureModes": { 
        "human": "Lying for one's own purposes", 
        "organizational": "Lying about pollution reports", 
        "professional": "Falsifying data", 
        "machine": "AI 'hallucinations'"
      }
    },
  
]
