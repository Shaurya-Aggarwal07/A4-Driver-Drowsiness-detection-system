import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function StatusCard({ title, value, description, icon, className }) {
  return (
    <Card className={className}>

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
      </CardContent>
      
    </Card>
  )
}
