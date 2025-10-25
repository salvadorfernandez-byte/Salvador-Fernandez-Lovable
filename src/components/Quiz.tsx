import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizQuestions, Question } from "@/data/quizData";
import { CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowFeedback(true);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setAnswers(Array(quizQuestions.length).fill(null));
    setQuizCompleted(false);
  };

  const getScorePercentage = () => {
    return Math.round((score / quizQuestions.length) * 100);
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return "Excel·lent! Domines el tema! 🎉";
    if (percentage >= 75) return "Molt bé! Bon coneixement! 👏";
    if (percentage >= 60) return "Aprovat! Continua estudiant! 📚";
    return "Has de repassar més el material 💪";
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <Card className="w-full max-w-2xl p-10 shadow-2xl border-2 relative animate-scale-in overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          
          <div className="text-center space-y-8 relative">
            <div className="flex justify-center animate-bounce-subtle">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary via-primary-glow to-secondary flex items-center justify-center shadow-lg shadow-primary/30 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-50 blur-xl animate-pulse-glow" />
                <Trophy className="w-14 h-14 text-primary-foreground relative z-10" />
              </div>
            </div>
            
            <div className="space-y-2 animate-fade-in-up">
              <h2 className="text-4xl font-display font-bold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Test Completat!
              </h2>
              <p className="text-muted-foreground">Has finalitzat totes les preguntes</p>
            </div>
            
            <div className="space-y-3 py-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-block">
                <p className="text-7xl font-display font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                  {score}/{quizQuestions.length}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                <p className="text-2xl font-semibold text-muted-foreground">
                  {getScorePercentage()}%
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
              </div>
              <p className="text-xl font-semibold text-foreground pt-2">{getScoreMessage()}</p>
            </div>

            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Resum de respostes</p>
              <div className="grid grid-cols-10 gap-2">
                {answers.map((answer, index) => {
                  const isCorrect = answer === quizQuestions[index].correctAnswer;
                  return (
                    <div
                      key={index}
                      className={`aspect-square rounded-lg flex items-center justify-center font-semibold text-sm transition-all hover:scale-110 ${
                        isCorrect
                          ? "bg-gradient-to-br from-success to-success/80 text-success-foreground shadow-md shadow-success/20"
                          : "bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground shadow-md shadow-destructive/20"
                      }`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {index + 1}
                    </div>
                  );
                })}
              </div>
            </div>

            <Button
              onClick={handleRestart}
              size="lg"
              className="w-full bg-gradient-to-r from-primary via-primary-glow to-secondary hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/30 font-semibold text-lg h-14 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Tornar a fer el test
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="w-full max-w-3xl space-y-8 relative animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Test de Fonaments
          </h1>
          <p className="text-lg text-muted-foreground font-medium">
            Pregunta <span className="text-primary font-bold">{currentQuestion + 1}</span> de {quizQuestions.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <Progress value={progress} className="h-3 shadow-md" />
          <div className="flex justify-between text-sm font-medium">
            <span className="text-foreground/80">
              Progrés: <span className="text-primary font-semibold">{Math.round(progress)}%</span>
            </span>
            <span className="text-foreground/80">
              Encerts: <span className="text-success font-semibold">{score}</span>/{currentQuestion + (showFeedback ? 1 : 0)}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 md:p-10 shadow-2xl border-2 hover:shadow-primary/10 transition-shadow duration-500 relative overflow-hidden animate-scale-in" style={{ animationDelay: "0.2s" }}>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 pointer-events-none" />
          
          <div className="space-y-7 relative">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary via-accent to-secondary text-secondary-foreground text-sm font-bold shadow-lg shadow-secondary/20 animate-slide-in">
              <div className="w-2 h-2 rounded-full bg-secondary-foreground animate-pulse" />
              {question.category}
            </div>

            {/* Question */}
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrect = showFeedback && isCorrect;
                const showIncorrect = showFeedback && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    className={`group w-full p-5 rounded-2xl text-left transition-all duration-300 border-2 relative overflow-hidden ${
                      showCorrect
                        ? "border-success bg-gradient-to-r from-success/15 to-success/5 shadow-lg shadow-success/20"
                        : showIncorrect
                        ? "border-destructive bg-gradient-to-r from-destructive/15 to-destructive/5 shadow-lg shadow-destructive/20"
                        : isSelected
                        ? "border-primary bg-gradient-to-r from-primary/10 to-primary/5 shadow-xl shadow-primary/20 scale-[1.02]"
                        : "border-border bg-card hover:border-primary/60 hover:bg-gradient-to-r hover:from-muted/70 hover:to-muted/30 hover:shadow-lg hover:scale-[1.01]"
                    } ${showFeedback ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {/* Hover effect overlay */}
                    {!showFeedback && !isSelected && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                    
                    <div className="flex items-start gap-4 relative">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-base transition-all duration-300 shadow-md ${
                          showCorrect
                            ? "bg-gradient-to-br from-success to-success/80 text-success-foreground shadow-success/30"
                            : showIncorrect
                            ? "bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground shadow-destructive/30"
                            : isSelected
                            ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-primary/30"
                            : "bg-muted/80 text-muted-foreground group-hover:bg-muted group-hover:text-foreground"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className={`flex-1 pt-2 leading-relaxed transition-colors ${
                        showFeedback ? "font-semibold" : "group-hover:text-foreground"
                      }`}>
                        {option}
                      </span>
                      {showCorrect && (
                        <CheckCircle2 className="w-7 h-7 text-success flex-shrink-0 mt-2 animate-scale-in" />
                      )}
                      {showIncorrect && (
                        <XCircle className="w-7 h-7 text-destructive flex-shrink-0 mt-2 animate-scale-in" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div
                className={`p-6 rounded-2xl border-2 shadow-lg animate-fade-in-up ${
                  selectedAnswer === question.correctAnswer
                    ? "border-success bg-gradient-to-r from-success/15 to-success/5 shadow-success/20"
                    : "border-destructive bg-gradient-to-r from-destructive/15 to-destructive/5 shadow-destructive/20"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {selectedAnswer === question.correctAnswer ? (
                    <>
                      <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-success-foreground" />
                      </div>
                      <span className="text-xl font-display font-bold text-success">Excel·lent!</span>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
                        <XCircle className="w-6 h-6 text-destructive-foreground" />
                      </div>
                      <span className="text-xl font-display font-bold text-destructive">Incorrecte</span>
                    </>
                  )}
                </div>
                <p className="text-base text-foreground/90 leading-relaxed pl-13">{question.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              {!showFeedback ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="w-full bg-gradient-to-r from-primary via-primary-glow to-secondary hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/30 font-bold text-lg h-14 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  size="lg"
                >
                  Comprovar resposta
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  className="w-full bg-gradient-to-r from-secondary via-accent to-secondary hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-secondary/30 font-bold text-lg h-14 animate-fade-in"
                  size="lg"
                >
                  {currentQuestion < quizQuestions.length - 1
                    ? "Següent pregunta →"
                    : "Veure resultats 🎉"}
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
